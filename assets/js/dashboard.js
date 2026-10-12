/**
 * CAMPUS OS — Dashboard Controller
 * Calculates and dynamically renders overview metrics, attendance pulse, timetable, and assignments.
 */

document.addEventListener("DOMContentLoaded", function () {
  CampusAuth.requireAuth();
  renderDashboard();
});

function renderDashboard() {
  const student = CAMPUS_DATA.student;
  const overall = CampusUtils.calculateOverallAttendance();
  const assignments = CampusUtils.getAssignmentsWithCurrentStatus();
  const pendingAssignments = assignments.filter((a) => a.status === "Pending");
  const overdueAssignments = assignments.filter((a) => a.status === "Overdue");
  const notifications = CampusUtils.getNotifications();
  const unreadNotifs = notifications.filter((n) => !n.read);

  // 1. Render Hero Profile Banner
  const profileBanner = document.getElementById("dashboard-student-banner");
  if (profileBanner) {
    profileBanner.innerHTML = `
      <div class="dash-banner-content">
        <div class="dash-banner-text">
          <div class="page-header-context">
            <span>Session ${student.session}</span>
            <span>•</span>
            <span>Semester ${student.semester}</span>
            <span>•</span>
            <span>${student.branch}</span>
          </div>
          <h1 class="page-title">${student.name}</h1>
          <p class="page-subtitle">
            Registration ID: <code class="code-pill">${student.regId}</code> • Advisor: <strong>${student.facultyAdvisor.name}</strong> • CGPA: <strong>${student.academicMetrics.cgpa}</strong>
          </p>
        </div>
        <div class="dash-banner-stats">
          <div class="banner-stat-box">
            <span class="banner-stat-label">Overall Attendance</span>
            <span class="banner-stat-value ${overall.isSafe ? 'text-success' : 'text-danger'}">${overall.overallPercentage}%</span>
            <span class="banner-stat-sub">${overall.totalAttended}/${overall.totalConducted} Sessions</span>
          </div>
          <div class="banner-stat-box">
            <span class="banner-stat-label">Pending Tasks</span>
            <span class="banner-stat-value text-warning">${pendingAssignments.length + overdueAssignments.length}</span>
            <span class="banner-stat-sub">${overdueAssignments.length} Overdue</span>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Render Metric Cards Grid
  const metricGrid = document.getElementById("dashboard-metrics-grid");
  if (metricGrid) {
    metricGrid.innerHTML = `
      <div class="metric-card accent-emerald">
        <div class="metric-top">
          <span class="metric-label">Overall Attendance</span>
          <div class="metric-icon-wrap" style="color: var(--color-success);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
        </div>
        <div class="metric-number-row">
          <span class="metric-value">${overall.overallPercentage}%</span>
          <span class="badge ${overall.isSafe ? 'badge-success' : 'badge-danger'}">
            <span class="badge-dot"></span>
            ${overall.isSafe ? 'Compliant' : 'Shortage'}
          </span>
        </div>
        <span class="metric-subtext">${overall.totalAttended} attended of ${overall.totalConducted} total sessions</span>
      </div>

      <div class="metric-card accent-amber">
        <div class="metric-top">
          <span class="metric-label">Active Assignments</span>
          <div class="metric-icon-wrap" style="color: var(--color-warning);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
          </div>
        </div>
        <div class="metric-number-row">
          <span class="metric-value">${pendingAssignments.length}</span>
          <span class="badge badge-warning">
            <span class="badge-dot"></span>
            ${overdueAssignments.length} Overdue
          </span>
        </div>
        <span class="metric-subtext">Next deadline: ${pendingAssignments[0] ? CampusUtils.getTimeRemainingString(pendingAssignments[0].dueDate) : 'None'}</span>
      </div>

      <div class="metric-card accent-blue">
        <div class="metric-top">
          <span class="metric-label">Semester Progress</span>
          <div class="metric-icon-wrap" style="color: var(--brand-blue);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          </div>
        </div>
        <div class="metric-number-row">
          <span class="metric-value">73%</span>
          <span class="badge badge-neutral">Sem 5</span>
        </div>
        <span class="metric-subtext">Week 10 of 14 • Mid-terms approaching</span>
      </div>

      <div class="metric-card accent-purple">
        <div class="metric-top">
          <span class="metric-label">Lab Practicals</span>
          <div class="metric-icon-wrap" style="color: var(--color-purple);">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31"></path><path d="M14 9.3V2"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path></svg>
          </div>
        </div>
        <div class="metric-number-row">
          <span class="metric-value">10/16</span>
          <span class="badge badge-purple">Experiments</span>
        </div>
        <span class="metric-subtext">4 Labs active • All manuals signed</span>
      </div>
    `;
  }

  // 3. Render Subject-wise Attendance Quick Grid
  const attendanceContainer = document.getElementById("dash-subject-attendance");
  if (attendanceContainer) {
    attendanceContainer.innerHTML = overall.subjectBreakdowns
      .map((subj) => {
        const barColor = subj.isSafe ? "success" : "danger";
        return `
          <div class="dash-subject-row" style="padding: 0.85rem 0; border-bottom: 1px solid var(--border-hairline);">
            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.35rem;">
              <div>
                <span class="code-pill">${subj.code}</span>
                <strong style="margin-left: 0.45rem; font-size: 0.9rem; color: var(--text-primary);">${subj.name}</strong>
              </div>
              <div style="display: flex; align-items: center; gap: 0.6rem;">
                <span style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-muted);">
                  ${subj.attended}/${subj.conducted} classes
                </span>
                <span class="badge ${subj.isSafe ? 'badge-success' : 'badge-danger'}">
                  ${subj.percentage}%
                </span>
              </div>
            </div>
            <div class="progress-container">
              <div class="progress-bar-fill ${barColor}" style="width: ${subj.percentage}%;"></div>
            </div>
            ${
              !subj.isSafe
                ? `<div style="margin-top: 0.3rem; font-size: 0.76rem; color: var(--color-danger); font-family: var(--font-mono);">
                    ⚠ Critical: Attend next ${subj.classesNeeded} consecutive lectures to reach 75% minimum threshold
                  </div>`
                : ""
            }
          </div>
        `;
      })
      .join("");
  }

  // 4. Render Today's Classes & Practicals Schedule
  const scheduleContainer = document.getElementById("dash-today-schedule");
  if (scheduleContainer) {
    // Show Monday's timetable as current day demo schedule
    const todayClasses = CAMPUS_DATA.timetable.Monday || [];
    scheduleContainer.innerHTML = todayClasses
      .map((item) => `
        <div class="dash-schedule-item" style="display: flex; align-items: flex-start; gap: 1rem; padding: 0.8rem 0; border-bottom: 1px solid var(--border-hairline);">
          <div style="font-family: var(--font-mono); font-size: 0.78rem; font-weight: 600; color: var(--brand-blue); min-width: 95px;">
            ${item.time}
          </div>
          <div style="flex: 1;">
            <div style="font-size: 0.92rem; font-weight: 600; color: var(--text-primary);">
              ${item.subjectName}
            </div>
            <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.15rem;">
              ${item.faculty} • <span class="code-pill" style="font-size: 0.7rem;">${item.room}</span> • <span style="text-transform: uppercase;">${item.type}</span>
            </div>
          </div>
        </div>
      `)
      .join("");
  }

  // 5. Render Upcoming Assignments
  const assignmentsContainer = document.getElementById("dash-upcoming-assignments");
  if (assignmentsContainer) {
    const upcomingList = assignments
      .filter((a) => a.status === "Pending" || a.status === "Overdue")
      .slice(0, 4);

    if (upcomingList.length === 0) {
      assignmentsContainer.innerHTML = `
        <div class="empty-state-notice" style="padding: 1.5rem 0;">
          <p style="color: var(--text-muted);">No pending assignments. You are completely caught up!</p>
        </div>
      `;
    } else {
      assignmentsContainer.innerHTML = upcomingList
        .map((asg) => {
          const isOverdue = asg.status === "Overdue";
          const timeText = CampusUtils.getTimeRemainingString(asg.dueDate);
          return `
            <div class="dash-asg-item" style="padding: 0.85rem 0; border-bottom: 1px solid var(--border-hairline); display: flex; justify-content: space-between; align-items: flex-start; gap: 0.75rem;">
              <div>
                <div style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.2rem;">
                  <span class="code-pill" style="font-size: 0.7rem;">${asg.subjectCode}</span>
                  <span class="badge ${isOverdue ? 'badge-danger' : 'badge-warning'}">
                    ${timeText}
                  </span>
                </div>
                <div style="font-size: 0.92rem; font-weight: 600; color: var(--text-primary);">
                  ${asg.title}
                </div>
                <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.2rem;">
                  Due: ${CampusUtils.formatDate(asg.dueDate)} • Max Marks: ${asg.maxMarks}
                </div>
              </div>
              <a href="assignments.html" class="btn btn-sm btn-outline" style="align-self: center;">
                Submit
              </a>
            </div>
          `;
        })
        .join("");
    }
  }

  // 6. Render Recent Academic Activities Feed
  const activityContainer = document.getElementById("dash-activity-feed");
  if (activityContainer) {
    activityContainer.innerHTML = CAMPUS_DATA.activities
      .map(
        (act) => `
        <div style="display: flex; gap: 0.85rem; padding: 0.75rem 0; border-bottom: 1px solid var(--border-hairline);">
          <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--brand-blue); margin-top: 0.4rem; flex-shrink: 0;"></div>
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <strong style="font-size: 0.88rem; color: var(--text-primary);">${act.title}</strong>
              <span class="badge badge-neutral" style="font-size: 0.65rem;">${act.badge}</span>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.15rem;">${act.detail}</div>
            <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); margin-top: 0.25rem;">${act.timestamp}</div>
          </div>
        </div>
      `
      )
      .join("");
  }
}
