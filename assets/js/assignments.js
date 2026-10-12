/**
 * CAMPUS OS — Assignments & Deliverables Controller
 * Handles assignment filters, search, deadline sorting, and local simulated file submission.
 */

document.addEventListener("DOMContentLoaded", function () {
  CampusAuth.requireAuth();
  initAssignmentsModule();
});

let currentAssignmentTab = "ALL";
let assignmentSearchQuery = "";
let currentSortOrder = "deadline_asc";
let selectedAssignmentForSubmission = null;

function initAssignmentsModule() {
  renderAssignmentsList();

  // Tab filters
  const tabs = document.querySelectorAll("[data-asg-tab]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
      currentAssignmentTab = tab.getAttribute("data-asg-tab");
      renderAssignmentsList();
    });
  });

  // Search input
  const searchInput = document.getElementById("assignment-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      assignmentSearchQuery = e.target.value.trim().toLowerCase();
      renderAssignmentsList();
    });
  }

  // Sort dropdown
  const sortSelect = document.getElementById("assignment-sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSortOrder = e.target.value;
      renderAssignmentsList();
    });
  }

  // Submission form handler
  initSubmissionModalHandlers();
}

function renderAssignmentsList() {
  const container = document.getElementById("assignments-list-container");
  const countBadge = document.getElementById("asg-count-badge");
  if (!container) return;

  let list = CampusUtils.getAssignmentsWithCurrentStatus();

  // Filter by tab
  if (currentAssignmentTab !== "ALL") {
    list = list.filter((a) => a.status.toLowerCase() === currentAssignmentTab.toLowerCase());
  }

  // Filter by search query
  if (assignmentSearchQuery) {
    list = list.filter(
      (a) =>
        a.title.toLowerCase().includes(assignmentSearchQuery) ||
        a.subjectName.toLowerCase().includes(assignmentSearchQuery) ||
        a.subjectCode.toLowerCase().includes(assignmentSearchQuery) ||
        a.description.toLowerCase().includes(assignmentSearchQuery)
    );
  }

  // Sort list
  if (currentSortOrder === "deadline_asc") {
    list.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
  } else if (currentSortOrder === "deadline_desc") {
    list.sort((a, b) => new Date(b.dueDate) - new Date(a.dueDate));
  } else if (currentSortOrder === "marks_desc") {
    list.sort((a, b) => b.maxMarks - a.maxMarks);
  }

  if (countBadge) {
    countBadge.textContent = `${list.length} Items`;
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="empty-state-notice">
        <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
        <h3 class="empty-state-title">No assignments found</h3>
        <p class="empty-state-desc">There are no assignments matching the selected filters or search terms.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list
    .map((asg) => {
      const isSubmitted = asg.status === "Submitted";
      const isOverdue = asg.status === "Overdue";
      const isPending = asg.status === "Pending";

      let statusBadge = "";
      if (isSubmitted) {
        statusBadge = `<span class="badge badge-success"><span class="badge-dot"></span>Submitted</span>`;
      } else if (isOverdue) {
        statusBadge = `<span class="badge badge-danger"><span class="badge-dot"></span>Overdue</span>`;
      } else {
        statusBadge = `<span class="badge badge-warning"><span class="badge-dot"></span>Pending</span>`;
      }

      const timeRemaining = CampusUtils.getTimeRemainingString(asg.dueDate);

      return `
        <div class="academic-card asg-card" id="card-${asg.id}" style="margin-bottom: 1.25rem;">
          <div class="card-header" style="padding: 1.15rem 1.4rem;">
            <div style="display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap;">
              <span class="code-pill">${asg.subjectCode}</span>
              <span style="font-size: 0.82rem; color: var(--text-secondary);">${asg.subjectName}</span>
              <span style="color: var(--text-faint);">•</span>
              <span style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--text-muted);">${asg.id}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.6rem;">
              <span class="badge ${isSubmitted ? 'badge-neutral' : isOverdue ? 'badge-danger' : 'badge-warning'}">
                ${isSubmitted ? 'Archived' : timeRemaining}
              </span>
              ${statusBadge}
            </div>
          </div>

          <div class="card-body" style="padding: 1.35rem 1.4rem;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap;">
              <div style="flex: 1; min-width: 280px;">
                <h3 style="font-size: 1.18rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.4rem;">
                  ${asg.title}
                </h3>
                <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55;">
                  ${asg.description}
                </p>
              </div>
              <div style="text-align: right; min-width: 130px;">
                <span class="badge badge-purple" style="font-size: 0.8rem; padding: 0.3rem 0.65rem;">Max Marks: ${asg.maxMarks}</span>
                ${asg.marksAwarded !== null && asg.marksAwarded !== undefined ? `<div style="font-size: 0.8rem; color: var(--color-success); font-family: var(--font-mono); margin-top: 0.35rem; font-weight: 700;">Score: ${asg.marksAwarded}/${asg.maxMarks}</div>` : ''}
              </div>
            </div>

            <!-- Metadata Pills Row -->
            <div style="display: flex; gap: 1.5rem; margin-top: 1.1rem; padding-top: 0.85rem; border-top: 1px solid var(--border-hairline); font-size: 0.8rem; color: var(--text-muted); flex-wrap: wrap; align-items: center;">
              <span>Issued: <strong>${CampusUtils.formatDate(asg.issueDate)}</strong></span>
              <span>Deadline: <strong style="color: ${isOverdue ? 'var(--color-danger)' : 'var(--text-primary)'};">${CampusUtils.formatDate(asg.dueDate)} (11:59 PM)</strong></span>
              <span>Faculty: <strong>${asg.faculty}</strong></span>
              ${
                asg.attachmentName
                  ? `<button type="button" class="btn btn-sm btn-ghost" style="padding: 0.15rem 0.45rem; font-size: 0.75rem; color: var(--brand-blue);" onclick="CampusUtils.showToast('Downloaded specification asset: ${asg.attachmentName}', 'info')">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                      <span>${asg.attachmentName} (${asg.attachmentSize})</span>
                    </button>`
                  : ""
              }
            </div>

            <!-- Submission Status Feedback Box -->
            ${
              isSubmitted
                ? `<div style="margin-top: 1rem; padding: 0.85rem 1rem; background-color: var(--color-success-bg); border: 1px solid var(--color-success-border); border-radius: var(--radius-md); font-size: 0.82rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; color: var(--color-success); font-weight: 600;">
                      <span>✓ Submission Recorded</span>
                      <span style="font-family: var(--font-mono); font-size: 0.74rem;">${asg.submittedDate ? CampusUtils.formatDate(asg.submittedDate) : ''}</span>
                    </div>
                    <div style="color: var(--text-secondary); margin-top: 0.25rem;">
                      Archived Archive File: <code class="code-pill">${asg.submittedFileName || 'student_submission.zip'}</code>
                    </div>
                    ${asg.facultyFeedback ? `<div style="margin-top: 0.35rem; color: var(--text-primary); font-style: italic;">“${asg.facultyFeedback}”</div>` : ''}
                  </div>`
                : ""
            }
          </div>

          <div class="card-footer" style="padding: 0.85rem 1.4rem;">
            <div style="font-size: 0.78rem; color: var(--text-muted);">
              ${isSubmitted ? 'Submission finalized • No further edits required' : isOverdue ? 'Late penalty policy applies to overdue deliverables' : 'Standard institutional grading criteria'}
            </div>
            <div style="display: flex; gap: 0.6rem;">
              <button type="button" class="btn btn-sm btn-outline open-asg-brief-btn" data-view-id="${asg.id}">
                Instructions & Rubric
              </button>
              ${
                !isSubmitted
                  ? `<button type="button" class="btn btn-sm btn-primary trigger-submit-btn" data-submit-id="${asg.id}">
                      ${isOverdue ? 'Submit Late' : 'Submit Assignment'}
                    </button>`
                  : `<button type="button" class="btn btn-sm btn-outline" onclick="CampusUtils.showToast('Submission confirmed. File archive verified.', 'info')">
                      View Receipt
                    </button>`
              }
            </div>
          </div>
        </div>
      `;
    })
    .join("");

  // Attach Instructions View buttons
  container.querySelectorAll(".open-asg-brief-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-view-id");
      openAssignmentBriefModal(id);
    });
  });

  // Attach Submit buttons
  container.querySelectorAll(".trigger-submit-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-submit-id");
      openSubmissionModal(id);
    });
  });
}

function openAssignmentBriefModal(asgId) {
  const assignments = CampusUtils.getAssignmentsWithCurrentStatus();
  const asg = assignments.find((a) => a.id === asgId);
  if (!asg) return;

  const modalTitle = document.getElementById("asg-brief-modal-title");
  const modalBody = document.getElementById("asg-brief-modal-body");

  if (modalTitle) modalTitle.textContent = `${asg.subjectCode} • ${asg.title}`;

  if (modalBody) {
    modalBody.innerHTML = `
      <div style="margin-bottom: 1.25rem;">
        <span class="badge badge-purple">Max Marks: ${asg.maxMarks}</span>
        <span class="code-pill" style="margin-left: 0.4rem;">${asg.subjectName}</span>
      </div>
      <div class="form-group">
        <label class="form-label">Full Assignment Prompt</label>
        <p style="font-size: 0.94rem; color: var(--text-primary); line-height: 1.6;">${asg.description}</p>
      </div>
      <div class="form-group">
        <label class="form-label">Submission Instructions & Guidelines</label>
        <ul style="padding-left: 1.25rem; font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">
          ${asg.instructions.map((ins) => `<li style="margin-bottom: 0.35rem;">${ins}</li>`).join("")}
        </ul>
      </div>
      <div style="padding: 0.85rem; background-color: var(--bg-surface); border: 1px solid var(--border-hairline); border-radius: var(--radius-sm); font-size: 0.82rem; color: var(--text-muted);">
        Deadline: <strong>${CampusUtils.formatDate(asg.dueDate)}</strong> • Instructor: <strong>${asg.faculty}</strong>
      </div>
    `;
  }

  CampusUtils.openModal("assignment-brief-modal");
}

function openSubmissionModal(asgId) {
  const assignments = CampusUtils.getAssignmentsWithCurrentStatus();
  const asg = assignments.find((a) => a.id === asgId);
  if (!asg) return;

  selectedAssignmentForSubmission = asg;

  const modalTitle = document.getElementById("submit-modal-title");
  const asgRefEl = document.getElementById("submit-modal-asg-ref");
  const fileInput = document.getElementById("asg-file-input");
  const fileSelectedDisplay = document.getElementById("file-selected-display");
  const fileNameDisplay = document.getElementById("file-name-display");
  const notesInput = document.getElementById("asg-notes-input");

  if (modalTitle) modalTitle.textContent = `Submit Deliverable: ${asg.id}`;
  if (asgRefEl) asgRefEl.textContent = `${asg.subjectCode}: ${asg.title} (Max Marks: ${asg.maxMarks})`;
  if (fileInput) fileInput.value = "";
  if (fileSelectedDisplay) fileSelectedDisplay.style.display = "none";
  if (fileNameDisplay) fileNameDisplay.textContent = "";
  if (notesInput) notesInput.value = "";

  CampusUtils.openModal("submission-modal");
}

function initSubmissionModalHandlers() {
  const fileInput = document.getElementById("asg-file-input");
  const dropzone = document.getElementById("submission-dropzone");
  const fileSelectedDisplay = document.getElementById("file-selected-display");
  const fileNameDisplay = document.getElementById("file-name-display");
  const clearFileBtn = document.getElementById("clear-selected-file-btn");
  const submitForm = document.getElementById("submission-form");

  if (dropzone && fileInput) {
    dropzone.addEventListener("click", () => fileInput.click());

    dropzone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropzone.classList.add("is-dragover");
    });

    dropzone.addEventListener("dragleave", () => {
      dropzone.classList.remove("is-dragover");
    });

    dropzone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropzone.classList.remove("is-dragover");
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        handleFileSelection(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener("change", (e) => {
      if (e.target.files && e.target.files.length > 0) {
        handleFileSelection(e.target.files[0]);
      }
    });
  }

  function handleFileSelection(file) {
    // Validate file size (< 10 MB)
    const maxBytes = 10 * 1024 * 1024;
    if (file.size > maxBytes) {
      CampusUtils.showToast("File exceeds the 10 MB maximum upload limit.", "error");
      return;
    }

    // Validate extension
    const allowedExtensions = [".pdf", ".zip", ".tar", ".gz", ".java", ".py", ".c", ".cpp", ".docx"];
    const ext = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      CampusUtils.showToast(`File type "${ext}" is not permitted. Please upload a PDF, ZIP, or source archive.`, "error");
      return;
    }

    if (fileNameDisplay) fileNameDisplay.textContent = `${file.name} (${(file.size / 1024).toFixed(1)} KB)`;
    if (fileSelectedDisplay) fileSelectedDisplay.style.display = "flex";
    CampusUtils.showToast(`Selected file: ${file.name}`, "info");
  }

  if (clearFileBtn && fileInput && fileSelectedDisplay) {
    clearFileBtn.addEventListener("click", () => {
      fileInput.value = "";
      fileSelectedDisplay.style.display = "none";
      if (fileNameDisplay) fileNameDisplay.textContent = "";
    });
  }

  if (submitForm) {
    submitForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!selectedAssignmentForSubmission) return;

      const fileInputEl = document.getElementById("asg-file-input");
      const hasFile = fileInputEl && fileInputEl.files && fileInputEl.files.length > 0;
      const fileName = hasFile ? fileInputEl.files[0].name : `DEMO2025_${selectedAssignmentForSubmission.id}_submission.zip`;

      const confirmSubmit = confirm(
        `Confirm simulated submission for ${selectedAssignmentForSubmission.title}?\n\nFile: ${fileName}\n\nNote: Changes are preserved in local browser session memory.`
      );

      if (!confirmSubmit) return;

      // Persist in localStorage
      const submittedMap = CampusUtils.getStorage("submitted_assignments", {});
      submittedMap[selectedAssignmentForSubmission.id] = {
        submittedDate: new Date().toISOString(),
        submittedFileName: fileName,
        facultyFeedback: "Simulated submission recorded in demo session. Pending evaluation."
      };
      CampusUtils.setStorage("submitted_assignments", submittedMap);

      CampusUtils.closeModal("submission-modal");
      CampusUtils.showToast(`Assignment ${selectedAssignmentForSubmission.id} submitted successfully!`, "success");

      // Re-render
      renderAssignmentsList();
    });
  }
}
