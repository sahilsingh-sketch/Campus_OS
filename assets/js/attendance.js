/**
 * CAMPUS OS — Attendance Analytics Controller
 * Calculates live attendance, renders subject breakdowns, dynamic monthly calendar, and handles configurable threshold.
 */

document.addEventListener("DOMContentLoaded", function () {
  CampusAuth.requireAuth();
  initAttendanceModule();
});

let currentCalendarYear = 2026;
let currentCalendarMonth = 9; // 0-indexed: 9 = October
let selectedSubjectFilter = "ALL";

function initAttendanceModule() {
  renderAttendanceOverview();
  renderSubjectBreakdownTable();
  renderCalendar();
  renderRecentSessionLog();
  initThresholdControl();

  // Subject filter dropdown binding
  const filterSelect = document.getElementById("attendance-subject-filter");
  if (filterSelect) {
    // Populate subjects
    filterSelect.innerHTML = `<option value="ALL">All Subjects Combined</option>` +
      CAMPUS_DATA.subjects.map((s) => `<option value="${s.id}">${s.code}: ${s.name}</option>`).join("");

    filterSelect.addEventListener("change", (e) => {
      selectedSubjectFilter = e.target.value;
      renderCalendar();
      renderRecentSessionLog();
    });
  }

  // Calendar prev/next buttons
  const prevBtn = document.getElementById("cal-prev-month-btn");
  const nextBtn = document.getElementById("cal-next-month-btn");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentCalendarMonth--;
      if (currentCalendarMonth < 0) {
        currentCalendarMonth = 11;
        currentCalendarYear--;
      }
      renderCalendar();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentCalendarMonth++;
      if (currentCalendarMonth > 11) {
        currentCalendarMonth = 0;
        currentCalendarYear++;
      }
      renderCalendar();
    });
  }
}

function initThresholdControl() {
  const slider = document.getElementById("threshold-slider");
  const displayVal = document.getElementById("threshold-value-display");

  const currentThreshold = CampusUtils.getAttendanceThreshold();
  if (slider) slider.value = currentThreshold;
  if (displayVal) displayVal.textContent = `${currentThreshold}%`;

  if (slider) {
    slider.addEventListener("input", (e) => {
      const val = Number(e.target.value);
      if (displayVal) displayVal.textContent = `${val}%`;
      CampusUtils.setAttendanceThreshold(val);
      renderAttendanceOverview();
      renderSubjectBreakdownTable();
    });
  }
}

function renderAttendanceOverview() {
  const overall = CampusUtils.calculateOverallAttendance();
  const heroContainer = document.getElementById("attendance-hero-metrics");
  if (!heroContainer) return;

  const threshold = CampusUtils.getAttendanceThreshold();

  heroContainer.innerHTML = `
    <div class="metric-card ${overall.isSafe ? 'accent-emerald' : 'accent-amber'}">
      <div class="metric-top">
        <span class="metric-label">Overall Attendance Percentage</span>
        <div class="metric-icon-wrap" style="color: ${overall.isSafe ? 'var(--color-success)' : 'var(--color-warning)'};">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        </div>
      </div>
      <div class="metric-number-row">
        <span class="metric-value">${overall.overallPercentage}%</span>
        <span class="badge ${overall.isSafe ? 'badge-success' : 'badge-danger'}">
          ${overall.isSafe ? 'Compliant' : 'Warning'}
        </span>
      </div>
      <span class="metric-subtext">Configured Threshold: <strong>${threshold}%</strong> • Safe buffer: <strong>+${(overall.overallPercentage - threshold).toFixed(1)}%</strong></span>
    </div>

    <div class="metric-card accent-blue">
      <div class="metric-top">
        <span class="metric-label">Total Conducted Lectures</span>
        <div class="metric-icon-wrap" style="color: var(--brand-blue);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        </div>
      </div>
      <div class="metric-number-row">
        <span class="metric-value">${overall.totalConducted}</span>
        <span class="badge badge-neutral">Curriculum Hours</span>
      </div>
      <span class="metric-subtext">Across 6 core department subjects</span>
    </div>

    <div class="metric-card accent-emerald">
      <div class="metric-top">
        <span class="metric-label">Classes Attended (Present)</span>
        <div class="metric-icon-wrap" style="color: var(--color-success);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
      </div>
      <div class="metric-number-row">
        <span class="metric-value" style="color: var(--color-success);">${overall.totalAttended}</span>
        <span class="badge badge-success">Verified</span>
      </div>
      <span class="metric-subtext">${((overall.totalAttended / overall.totalConducted) * 100).toFixed(1)}% Presence Ratio</span>
    </div>

    <div class="metric-card accent-amber">
      <div class="metric-top">
        <span class="metric-label">Classes Missed (Absent)</span>
        <div class="metric-icon-wrap" style="color: var(--color-danger);">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
        </div>
      </div>
      <div class="metric-number-row">
        <span class="metric-value" style="color: var(--color-danger);">${overall.totalMissed}</span>
        <span class="badge badge-danger">Absences</span>
      </div>
      <span class="metric-subtext">${overall.totalMissed} periods unexcused</span>
    </div>
  `;
}

function renderSubjectBreakdownTable() {
  const overall = CampusUtils.calculateOverallAttendance();
  const tableBody = document.getElementById("attendance-breakdown-body");
  if (!tableBody) return;

  const threshold = CampusUtils.getAttendanceThreshold();

  tableBody.innerHTML = overall.subjectBreakdowns
    .map((subj) => {
      const isCompliant = subj.isSafe;
      return `
        <tr>
          <td>
            <span class="code-pill">${subj.code}</span>
          </td>
          <td>
            <div style="font-weight: 600; color: var(--text-primary); font-size: 0.94rem;">
              ${subj.name}
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.15rem;">
              Faculty: ${subj.faculty} • Credits: ${subj.credits}
            </div>
          </td>
          <td style="font-family: var(--font-mono); font-size: 0.92rem; font-weight: 600;">
            ${subj.conducted}
          </td>
          <td style="font-family: var(--font-mono); font-size: 0.92rem; font-weight: 600; color: var(--color-success);">
            ${subj.attended}
          </td>
          <td style="font-family: var(--font-mono); font-size: 0.92rem; font-weight: 600; color: var(--color-danger);">
            ${subj.missed}
          </td>
          <td>
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span style="font-family: var(--font-mono); font-weight: 700; font-size: 0.95rem; min-width: 45px; color: ${isCompliant ? 'var(--color-success)' : 'var(--color-danger)'};">
                ${subj.percentage}%
              </span>
              <div class="progress-container" style="flex: 1; min-width: 80px;">
                <div class="progress-bar-fill ${isCompliant ? 'success' : 'danger'}" style="width: ${subj.percentage}%;"></div>
              </div>
            </div>
          </td>
          <td>
            ${
              isCompliant
                ? `<span class="badge badge-success"><span class="badge-dot"></span>Compliant</span>`
                : `<span class="badge badge-danger"><span class="badge-dot"></span>Shortage</span>`
            }
          </td>
          <td style="font-size: 0.8rem; font-family: var(--font-mono);">
            ${
              isCompliant
                ? `<span style="color: var(--text-muted);">Safe (${(subj.percentage - threshold).toFixed(1)}% above)</span>`
                : `<strong style="color: var(--color-danger);">Attend next ${subj.classesNeeded} classes</strong>`
            }
          </td>
        </tr>
      `;
    })
    .join("");
}

function renderCalendar() {
  const monthTitle = document.getElementById("calendar-month-name");
  const daysGrid = document.getElementById("calendar-days-container");
  if (!monthTitle || !daysGrid) return;

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  monthTitle.textContent = `${months[currentCalendarMonth]} ${currentCalendarYear}`;

  // Days in month
  const firstDayIndex = new Date(currentCalendarYear, currentCalendarMonth, 1).getDay();
  const totalDays = new Date(currentCalendarYear, currentCalendarMonth + 1, 0).getDate();

  // Filter attendance sessions for this month & subject filter
  let sessions = CAMPUS_DATA.attendanceSessions;
  if (selectedSubjectFilter !== "ALL") {
    sessions = sessions.filter((s) => s.subjectId === selectedSubjectFilter);
  }

  // Create date map for fast lookup
  const dateStatusMap = {};
  sessions.forEach((s) => {
    const sDate = new Date(s.date);
    if (sDate.getFullYear() === currentCalendarYear && sDate.getMonth() === currentCalendarMonth) {
      const dNum = sDate.getDate();
      if (!dateStatusMap[dNum]) {
        dateStatusMap[dNum] = { presents: 0, absents: 0, items: [] };
      }
      if (s.status === "present") dateStatusMap[dNum].presents++;
      if (s.status === "absent") dateStatusMap[dNum].absents++;
      dateStatusMap[dNum].items.push(s);
    }
  });

  let gridHtml = "";

  // Leading empty cells
  for (let i = 0; i < firstDayIndex; i++) {
    gridHtml += `<div class="cal-day-cell is-empty"></div>`;
  }

  // Days of month
  for (let day = 1; day <= totalDays; day++) {
    const dateObj = new Date(currentCalendarYear, currentCalendarMonth, day);
    const dayOfWeek = dateObj.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday

    const record = dateStatusMap[day];

    let cellClass = "cal-day-cell";
    let statusDot = "";

    if (record) {
      if (record.absents > 0) {
        cellClass += " status-absent";
        statusDot = `<span class="cal-status-dot"></span>`;
      } else if (record.presents > 0) {
        cellClass += " status-present";
        statusDot = `<span class="cal-status-dot"></span>`;
      }
    } else if (isWeekend) {
      cellClass += " status-noclass";
    }

    gridHtml += `
      <div class="${cellClass}" data-day="${day}" title="Day ${day}">
        <span class="cal-day-num">${day}</span>
        ${statusDot}
      </div>
    `;
  }

  daysGrid.innerHTML = gridHtml;

  // Day click inspector
  daysGrid.querySelectorAll(".cal-day-cell[data-day]").forEach((cell) => {
    cell.addEventListener("click", () => {
      const day = Number(cell.getAttribute("data-day"));
      const record = dateStatusMap[day];
      if (record && record.items.length > 0) {
        const dateStr = `${currentCalendarYear}-${String(currentCalendarMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        showDaySessionsModal(dateStr, record.items);
      } else {
        CampusUtils.showToast(`No academic lecture records logged for day ${day}.`, "info");
      }
    });
  });
}

function showDaySessionsModal(dateStr, sessionItems) {
  const modalTitle = document.getElementById("day-sessions-modal-title");
  const modalBody = document.getElementById("day-sessions-modal-body");

  if (modalTitle) {
    modalTitle.textContent = `Lecture Sessions on ${CampusUtils.formatDate(dateStr)}`;
  }

  if (modalBody) {
    modalBody.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        ${sessionItems
          .map((s) => {
            const subj = CampusUtils.getSubjectById(s.subjectId);
            const isPresent = s.status === "present";
            return `
              <div style="padding: 0.9rem; background-color: var(--bg-surface); border: 1px solid var(--border-hairline); border-radius: var(--radius-md); display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.2rem;">
                    <span class="code-pill">${subj ? subj.code : s.subjectId}</span>
                    <strong style="color: var(--text-primary); font-size: 0.92rem;">${subj ? subj.name : ''}</strong>
                  </div>
                  <div style="font-size: 0.8rem; color: var(--text-secondary);">${s.topic}</div>
                  <div style="font-family: var(--font-mono); font-size: 0.74rem; color: var(--text-muted); margin-top: 0.2rem;">${s.time}</div>
                </div>
                <div>
                  <span class="badge ${isPresent ? 'badge-success' : 'badge-danger'}">
                    ${isPresent ? 'Present' : 'Absent'}
                  </span>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  CampusUtils.openModal("day-sessions-modal");
}

function renderRecentSessionLog() {
  const logContainer = document.getElementById("attendance-recent-logs");
  if (!logContainer) return;

  let sessions = CAMPUS_DATA.attendanceSessions;
  if (selectedSubjectFilter !== "ALL") {
    sessions = sessions.filter((s) => s.subjectId === selectedSubjectFilter);
  }

  const recentList = sessions.slice(0, 10);

  logContainer.innerHTML = recentList
    .map((s) => {
      const subj = CampusUtils.getSubjectById(s.subjectId);
      const isPresent = s.status === "present";
      return `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.8rem 0; border-bottom: 1px solid var(--border-hairline);">
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="code-pill" style="font-size: 0.7rem;">${s.subjectId}</span>
              <strong style="font-size: 0.88rem; color: var(--text-primary);">${subj ? subj.shortName : ''}</strong>
              <span style="font-size: 0.78rem; color: var(--text-muted);">• ${s.topic}</span>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); margin-top: 0.2rem;">
              ${CampusUtils.formatDate(s.date)} • ${s.time}
            </div>
          </div>
          <span class="badge ${isPresent ? 'badge-success' : 'badge-danger'}">
            ${isPresent ? 'Present' : 'Absent'}
          </span>
        </div>
      `;
    })
    .join("");
}
