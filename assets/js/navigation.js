/**
 * CAMPUS OS — Navigation & Shell Controller
 * Manages sidebar active links, notification badges, mobile drawer, theme toggling, and global controls.
 */

document.addEventListener("DOMContentLoaded", function () {
  initTheme();
  initNavigationHighlight();
  initNotificationBadges();
  initMobileDrawer();
  initGlobalUserMenu();
  initQuickModals();
});

function initTheme() {
  const savedTheme = CampusUtils.getStorage("theme_preference", "dark");
  applyTheme(savedTheme);

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      const nextTheme = current === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      CampusUtils.setStorage("theme_preference", nextTheme);
      CampusUtils.showToast(`Switched to ${nextTheme === "dark" ? "Dark Academic" : "Clean Light"} theme.`, "info");
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const iconSpan = document.querySelectorAll(".theme-toggle-icon");
  iconSpan.forEach((el) => {
    if (theme === "dark") {
      el.innerHTML = `
        <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"/>
        </svg>`;
    } else {
      el.innerHTML = `
        <svg viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
        </svg>`;
    }
  });
}

function initNavigationHighlight() {
  const currentPath = window.location.pathname.toLowerCase();
  const filename = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";

  const navLinks = document.querySelectorAll(".nav-link[data-page]");
  navLinks.forEach((link) => {
    const pageAttr = link.getAttribute("data-page");
    if (
      filename === pageAttr ||
      (filename === "" && pageAttr === "dashboard.html") ||
      (filename === "index.html" && pageAttr === "dashboard.html")
    ) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("is-active");
      link.removeAttribute("aria-current");
    }
  });
}

function initNotificationBadges() {
  const unreadCount = CampusUtils.getUnreadNotificationCount();
  const badges = document.querySelectorAll(".notif-badge-count");
  badges.forEach((b) => {
    if (unreadCount > 0) {
      b.textContent = unreadCount;
      b.style.display = "inline-flex";
    } else {
      b.style.display = "none";
    }
  });
}

function initMobileDrawer() {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const sidebar = document.querySelector(".app-sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  if (!menuBtn || !sidebar) return;

  function toggleSidebar(open) {
    if (open) {
      sidebar.classList.add("is-open");
      if (overlay) overlay.classList.add("is-active");
      document.body.classList.add("drawer-open");
    } else {
      sidebar.classList.remove("is-open");
      if (overlay) overlay.classList.remove("is-active");
      document.body.classList.remove("drawer-open");
    }
  }

  menuBtn.addEventListener("click", () => {
    const isOpen = sidebar.classList.contains("is-open");
    toggleSidebar(!isOpen);
  });

  if (overlay) {
    overlay.addEventListener("click", () => toggleSidebar(false));
  }

  // Close when clicking nav link on mobile
  document.querySelectorAll(".app-sidebar .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 1024) {
        toggleSidebar(false);
      }
    });
  });
}

function initGlobalUserMenu() {
  // Bind all logout triggers
  document.querySelectorAll("[data-action='logout']").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Sign out of CAMPUS OS session?")) {
        CampusAuth.logout();
      }
    });
  });

  // Bind demo reset triggers
  document.querySelectorAll("[data-action='reset-demo']").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (confirm("Reset all modified demo data (submissions, notifications, attendance thresholds)?")) {
        CampusUtils.clearAllDemoData();
      }
    });
  });

  // Populate student details in topbar if present
  const student = CAMPUS_DATA.student;
  document.querySelectorAll(".student-name-display").forEach((el) => {
    el.textContent = student.name;
  });
  document.querySelectorAll(".student-reg-display").forEach((el) => {
    el.textContent = student.regId;
  });
  document.querySelectorAll(".student-program-display").forEach((el) => {
    el.textContent = `${student.program} CSE • Sem ${student.semester}`;
  });
}

function initQuickModals() {
  // Global handler for [data-open-modal] buttons
  document.querySelectorAll("[data-open-modal]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute("data-open-modal");
      if (modalId) {
        CampusUtils.openModal(modalId);
      }
    });
  });
}
