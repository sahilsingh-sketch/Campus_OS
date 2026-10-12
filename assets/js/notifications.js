/**
 * CAMPUS OS — Notifications & Announcements Controller
 * Manages category filtering, read/unread states, and notification actions.
 */

document.addEventListener("DOMContentLoaded", function () {
  CampusAuth.requireAuth();
  initNotificationsModule();
});

let notifCategoryFilter = "ALL";
let notifSearchQuery = "";

function initNotificationsModule() {
  renderNotificationsList();

  // Category filter tabs
  const tabs = document.querySelectorAll("[data-notif-tab]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      notifCategoryFilter = tab.getAttribute("data-notif-tab");
      renderNotificationsList();
    });
  });

  // Mark all as read button
  const markAllBtn = document.getElementById("mark-all-read-btn");
  if (markAllBtn) {
    markAllBtn.addEventListener("click", () => {
      CampusUtils.markAllNotificationsRead();
      CampusUtils.showToast("All notifications marked as read.", "success");
      renderNotificationsList();
      // Update badge
      if (typeof initNotificationBadges === "function") {
        initNotificationBadges();
      }
    });
  }

  // Search input
  const searchInput = document.getElementById("notif-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      notifSearchQuery = e.target.value.trim().toLowerCase();
      renderNotificationsList();
    });
  }
}

function renderNotificationsList() {
  const container = document.getElementById("notifications-container");
  const countBadge = document.getElementById("notif-total-badge");
  if (!container) return;

  let list = CampusUtils.getNotifications();

  // Filter by category
  if (notifCategoryFilter === "unread") {
    list = list.filter((n) => !n.read);
  } else if (notifCategoryFilter !== "ALL") {
    list = list.filter((n) => n.category.toLowerCase() === notifCategoryFilter.toLowerCase());
  }

  // Search filter
  if (notifSearchQuery) {
    list = list.filter(
      (n) =>
        n.title.toLowerCase().includes(notifSearchQuery) ||
        n.message.toLowerCase().includes(notifSearchQuery) ||
        n.category.toLowerCase().includes(notifSearchQuery)
    );
  }

  if (countBadge) {
    countBadge.textContent = `${list.length} Circulars`;
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state-notice">
        <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
        <h3 class="empty-state-title">No notifications in this category</h3>
        <p class="empty-state-desc">You are up to date with all university announcements and academic circulars.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list
    .map((notif) => {
      let priorityBadge = "";
      if (notif.priority === "high") {
        priorityBadge = `<span class="badge badge-danger">High Priority</span>`;
      } else if (notif.priority === "medium") {
        priorityBadge = `<span class="badge badge-warning">Normal</span>`;
      } else {
        priorityBadge = `<span class="badge badge-neutral">Advisory</span>`;
      }

      let categoryBadge = `<span class="code-pill">${notif.category}</span>`;

      return `
        <div class="academic-card notif-card ${!notif.read ? 'is-unread' : ''}" style="margin-bottom: 1.15rem; ${!notif.read ? 'border-left: 4px solid var(--brand-blue);' : ''}">
          <div class="card-header" style="padding: 1rem 1.4rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
              ${categoryBadge}
              ${priorityBadge}
              <span style="font-family: var(--font-mono); font-size: 0.74rem; color: var(--text-muted);">
                ${CampusUtils.formatDate(notif.date)}
              </span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              ${
                !notif.read
                  ? `<span class="badge badge-warning" style="font-size: 0.68rem;">Unread</span>`
                  : `<span class="badge badge-neutral" style="font-size: 0.68rem;">Read</span>`
              }
              <button 
                type="button" 
                class="btn btn-sm btn-ghost mark-single-btn" 
                data-notif-id="${notif.id}" 
                style="font-size: 0.75rem; padding: 0.2rem 0.5rem;"
              >
                ${notif.read ? 'Mark Unread' : 'Mark as Read'}
              </button>
            </div>
          </div>
          <div class="card-body" style="padding: 1.25rem 1.4rem;">
            <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.4rem;">
              ${notif.title}
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
              ${notif.message}
            </p>
            ${
              notif.actionLink
                ? `<div style="margin-top: 0.85rem;">
                    <a href="${notif.actionLink}" class="btn btn-sm btn-outline">
                      Open Module &rarr;
                    </a>
                  </div>`
                : ""
            }
          </div>
        </div>
      `;
    })
    .join("");

  // Attach mark read/unread clicks
  container.querySelectorAll(".mark-single-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-notif-id");
      const readMap = CampusUtils.getStorage("read_notifications", {});
      const currentState = readMap[id] !== undefined ? readMap[id] : false;
      readMap[id] = !currentState;
      CampusUtils.setStorage("read_notifications", readMap);

      renderNotificationsList();
      if (typeof initNotificationBadges === "function") {
        initNotificationBadges();
      }
      CampusUtils.showToast(`Notification status updated.`, "info");
    });
  });
}
