/**
 * CAMPUS OS — Labs and Practicals Controller
 * Renders laboratory courses, experiments matrix, search/filter, and interactive lab manual detail modal.
 */

document.addEventListener("DOMContentLoaded", function () {
  CampusAuth.requireAuth();
  initLabsModule();
});

let selectedLabId = "ALL";
let selectedStatus = "ALL";
let labSearchQuery = "";

function initLabsModule() {
  renderLabCourseCards();
  renderExperimentsList();

  // Search input
  const searchInput = document.getElementById("labs-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      labSearchQuery = e.target.value.trim().toLowerCase();
      renderExperimentsList();
    });
  }

  // Filter tabs for lab course
  const courseFilter = document.getElementById("lab-course-filter");
  if (courseFilter) {
    courseFilter.addEventListener("change", (e) => {
      selectedLabId = e.target.value;
      renderExperimentsList();
    });
  }

  // Status tabs
  const statusTabs = document.querySelectorAll("[data-lab-status]");
  statusTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      statusTabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      selectedStatus = tab.getAttribute("data-lab-status");
      renderExperimentsList();
    });
  });
}

function renderLabCourseCards() {
  const container = document.getElementById("lab-courses-summary");
  if (!container) return;

  container.innerHTML = CAMPUS_DATA.labs
    .map((lab) => {
      const isSelected = selectedLabId === lab.labId;
      const progressPercent = Math.round((lab.completedExperiments / lab.totalExperiments) * 100);
      return `
        <div class="academic-card ${isSelected ? 'is-selected' : ''}" style="cursor: pointer;" data-select-lab="${lab.labId}">
          <div class="card-header" style="padding: 1rem 1.25rem;">
            <div>
              <span class="code-pill">${lab.labCode}</span>
              <strong style="margin-left: 0.4rem; font-size: 0.95rem; color: var(--text-primary);">${lab.labName}</strong>
            </div>
            <span class="badge ${progressPercent === 100 ? 'badge-success' : 'badge-neutral'}">${lab.completedExperiments}/${lab.totalExperiments}</span>
          </div>
          <div class="card-body" style="padding: 1rem 1.25rem;">
            <div style="font-size: 0.82rem; color: var(--text-secondary); margin-bottom: 0.6rem;">
              Location: <strong>${lab.labLocation}</strong> • ${lab.timings}
            </div>
            <div class="progress-container">
              <div class="progress-bar-fill ${progressPercent >= 75 ? 'success' : ''}" style="width: ${progressPercent}%;"></div>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.74rem; color: var(--text-muted); margin-top: 0.4rem;">
              <span>Faculty: ${lab.facultyInCharge}</span>
              <span>${progressPercent}% Verified</span>
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  // Click card to filter
  container.querySelectorAll("[data-select-lab]").forEach((card) => {
    card.addEventListener("click", () => {
      const labId = card.getAttribute("data-select-lab");
      selectedLabId = selectedLabId === labId ? "ALL" : labId;
      const selectBox = document.getElementById("lab-course-filter");
      if (selectBox) selectBox.value = selectedLabId;
      renderLabCourseCards();
      renderExperimentsList();
    });
  });
}

function getAllExperiments() {
  const list = [];
  CAMPUS_DATA.labs.forEach((lab) => {
    lab.experiments.forEach((exp) => {
      list.push({
        ...exp,
        labCode: lab.labCode,
        labName: lab.labName,
        labId: lab.labId,
        facultyInCharge: lab.facultyInCharge,
        labLocation: lab.labLocation
      });
    });
  });
  return list;
}

function renderExperimentsList() {
  const container = document.getElementById("experiments-table-body");
  const countBadge = document.getElementById("experiment-count-badge");
  if (!container) return;

  let all = getAllExperiments();

  // Filter by lab
  if (selectedLabId !== "ALL") {
    all = all.filter((e) => e.labId === selectedLabId);
  }

  // Filter by status
  if (selectedStatus !== "ALL") {
    all = all.filter((e) => e.completionStatus.toLowerCase() === selectedStatus.toLowerCase());
  }

  // Filter by text search
  if (labSearchQuery) {
    all = all.filter(
      (e) =>
        e.title.toLowerCase().includes(labSearchQuery) ||
        e.objective.toLowerCase().includes(labSearchQuery) ||
        e.labCode.toLowerCase().includes(labSearchQuery) ||
        e.toolsRequired.some((t) => t.toLowerCase().includes(labSearchQuery))
    );
  }

  if (countBadge) {
    countBadge.textContent = `${all.length} Experiments`;
  }

  if (all.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 3rem 1rem;">
          <div class="empty-state-notice">
            <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31"></path><path d="M14 9.3V2"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path></svg>
            <h3 class="empty-state-title">No practical experiments found</h3>
            <p class="empty-state-desc">Try clearing the search query or switching the lab course filter.</p>
          </div>
        </td>
      </tr>
    `;
    return;
  }

  container.innerHTML = all
    .map((exp) => {
      let statusBadge = "";
      if (exp.completionStatus === "Completed") {
        statusBadge = `<span class="badge badge-success"><span class="badge-dot"></span>Completed</span>`;
      } else if (exp.completionStatus === "In Review") {
        statusBadge = `<span class="badge badge-warning"><span class="badge-dot"></span>In Review</span>`;
      } else {
        statusBadge = `<span class="badge badge-neutral"><span class="badge-dot"></span>Scheduled</span>`;
      }

      return `
        <tr data-exp-id="${exp.id}" style="cursor: pointer;">
          <td>
            <span class="code-pill">${exp.labCode}</span>
          </td>
          <td style="font-family: var(--font-mono); font-weight: 700; color: var(--text-primary);">
            #${exp.expNo}
          </td>
          <td>
            <div style="font-weight: 600; color: var(--text-primary); font-size: 0.94rem;">
              ${exp.title}
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.2rem; max-width: 480px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              ${exp.objective}
            </div>
          </td>
          <td style="font-size: 0.8rem; color: var(--text-secondary);">
            ${exp.toolsRequired.slice(0, 2).join(", ")}${exp.toolsRequired.length > 2 ? '...' : ''}
          </td>
          <td style="font-family: var(--font-mono); font-size: 0.8rem;">
            ${CampusUtils.formatDate(exp.scheduledDate)}
          </td>
          <td>
            ${statusBadge}
          </td>
          <td style="text-align: right;">
            <button type="button" class="btn btn-sm btn-outline open-exp-btn" data-exp-id="${exp.id}">
              Inspect Manual
            </button>
          </td>
        </tr>
      `;
    })
    .join("");

  // Attach modal click handlers
  container.querySelectorAll("[data-exp-id]").forEach((row) => {
    row.addEventListener("click", (e) => {
      const expId = row.getAttribute("data-exp-id");
      if (expId) openExperimentModal(expId);
    });
  });
}

function openExperimentModal(expId) {
  const all = getAllExperiments();
  const exp = all.find((e) => e.id === expId);
  if (!exp) return;

  const titleEl = document.getElementById("exp-modal-title");
  const bodyEl = document.getElementById("exp-modal-body");

  if (titleEl) {
    titleEl.textContent = `${exp.labCode} • Exp #${exp.expNo}: ${exp.title}`;
  }

  if (bodyEl) {
    bodyEl.innerHTML = `
      <div style="display: flex; gap: 0.8rem; flex-wrap: wrap; margin-bottom: 1.25rem;">
        <span class="code-pill">${exp.labName}</span>
        <span class="badge ${exp.completionStatus === 'Completed' ? 'badge-success' : 'badge-neutral'}">
          ${exp.completionStatus}
        </span>
        <span class="badge badge-purple">Max Marks: ${exp.maxMarks}</span>
        ${exp.marksAwarded !== null ? `<span class="badge badge-success">Awarded: ${exp.marksAwarded}/${exp.maxMarks}</span>` : ''}
      </div>

      <div class="form-group">
        <label class="form-label">Objective</label>
        <p style="color: var(--text-primary); font-size: 0.94rem; background-color: var(--bg-surface); padding: 0.85rem; border-radius: var(--radius-sm); border: 1px solid var(--border-hairline);">
          ${exp.objective}
        </p>
      </div>

      <div class="form-group">
        <label class="form-label">Required Tools & Hardware</label>
        <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
          ${exp.toolsRequired.map((t) => `<span class="code-pill">${t}</span>`).join("")}
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Lab Manual Summary</label>
        <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55;">
          ${exp.manualSummary}
        </p>
      </div>

      <div class="form-group">
        <label class="form-label">Step-by-Step Procedure</label>
        <ol style="padding-left: 1.25rem; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
          ${exp.instructions.map((step) => `<li style="margin-bottom: 0.35rem;">${step}</li>`).join("")}
        </ol>
      </div>

      <div class="form-group">
        <label class="form-label">Implementation Skeleton / Commands</label>
        <pre style="background-color: var(--bg-input); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-default); overflow-x: auto; color: #60A5FA; font-size: 0.82rem; line-height: 1.45;"><code>${escapeHtml(exp.sampleCode)}</code></pre>
      </div>

      <div style="margin-top: 1.25rem; padding: 0.85rem; background-color: var(--bg-surface-elevated); border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; font-size: 0.82rem;">
        <div>
          <span>Scheduled Date: <strong>${CampusUtils.formatDate(exp.scheduledDate)}</strong></span>
          <span style="margin: 0 0.5rem;">•</span>
          <span>Faculty: <strong>${exp.facultyInCharge}</strong></span>
        </div>
        <button type="button" class="btn btn-sm btn-primary" onclick="CampusUtils.showToast('Lab manual exported to PDF print queue.', 'success'); window.print();">
          Print / Export Manual
        </button>
      </div>
    `;
  }

  CampusUtils.openModal("experiment-detail-modal");
}

function escapeHtml(string) {
  const pre = document.createElement("pre");
  const text = document.createTextNode(string || "");
  pre.appendChild(text);
  return pre.innerHTML;
}
