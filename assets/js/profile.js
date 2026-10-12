/**
 * CAMPUS OS — Profile & Settings Controller
 * Displays student records, faculty advisor info, and handles harmless demo preference edits.
 */

document.addEventListener("DOMContentLoaded", function () {
  CampusAuth.requireAuth();
  initProfileModule();
});

function initProfileModule() {
  renderProfileDetails();
  initSettingsForm();
}

function renderProfileDetails() {
  const student = CAMPUS_DATA.student;

  // Student Identity Fields
  const nameEl = document.getElementById("profile-student-name");
  const regEl = document.getElementById("profile-student-reg");
  const branchEl = document.getElementById("profile-student-branch");
  const semEl = document.getElementById("profile-student-sem");
  const emailEl = document.getElementById("profile-student-email");
  const phoneEl = document.getElementById("profile-student-phone");
  const cgpaEl = document.getElementById("profile-student-cgpa");
  const creditsEl = document.getElementById("profile-student-credits");
  const rankEl = document.getElementById("profile-student-rank");

  if (nameEl) nameEl.textContent = student.name;
  if (regEl) regEl.textContent = student.regId;
  if (branchEl) branchEl.textContent = `${student.program} in ${student.branch}`;
  if (semEl) semEl.textContent = `Semester ${student.semester} (${student.session})`;
  if (emailEl) emailEl.textContent = student.email;
  if (phoneEl) phoneEl.textContent = student.phone;
  if (cgpaEl) cgpaEl.textContent = student.academicMetrics.cgpa;
  if (creditsEl) creditsEl.textContent = `${student.academicMetrics.totalCreditsEarned} Credits`;
  if (rankEl) rankEl.textContent = student.academicMetrics.rank;

  // Faculty Advisor Card
  const advisorCard = document.getElementById("profile-advisor-card");
  if (advisorCard) {
    const adv = student.facultyAdvisor;
    advisorCard.innerHTML = `
      <div style="display: flex; gap: 1rem; align-items: flex-start;">
        <div style="width: 48px; height: 48px; border-radius: var(--radius-md); background: var(--bg-surface-elevated); border: 1px solid var(--border-default); display: flex; align-items: center; justify-content: center; font-weight: 700; color: var(--brand-blue); font-size: 1.1rem; flex-shrink: 0;">
          AS
        </div>
        <div style="flex: 1;">
          <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary);">${adv.name}</h4>
          <div style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 0.2rem;">${adv.designation}</div>
          <div style="margin-top: 0.75rem; font-size: 0.82rem; display: flex; flex-direction: column; gap: 0.35rem; color: var(--text-muted);">
            <div>Email: <strong style="color: var(--text-secondary);">${adv.email}</strong></div>
            <div>Cabin: <strong style="color: var(--text-secondary);">${adv.cabin}</strong></div>
            <div>Office Hours: <strong style="color: var(--text-secondary);">${adv.officeHours}</strong></div>
          </div>
        </div>
      </div>
    `;
  }
}

function initSettingsForm() {
  const settingsForm = document.getElementById("profile-settings-form");
  const landingSelect = document.getElementById("pref-landing-page");
  const thresholdInput = document.getElementById("pref-attendance-threshold");
  const themeSelect = document.getElementById("pref-theme-select");

  // Load existing preferences
  const currentLanding = CampusUtils.getStorage("pref_landing_page", "dashboard.html");
  const currentThreshold = CampusUtils.getAttendanceThreshold();
  const currentTheme = CampusUtils.getStorage("theme_preference", "dark");

  if (landingSelect) landingSelect.value = currentLanding;
  if (thresholdInput) thresholdInput.value = currentThreshold;
  if (themeSelect) themeSelect.value = currentTheme;

  if (settingsForm) {
    settingsForm.addEventListener("submit", (e) => {
      e.preventDefault();

      if (landingSelect) CampusUtils.setStorage("pref_landing_page", landingSelect.value);
      if (thresholdInput) CampusUtils.setAttendanceThreshold(thresholdInput.value);
      if (themeSelect) {
        CampusUtils.setStorage("theme_preference", themeSelect.value);
        if (typeof applyTheme === "function") {
          applyTheme(themeSelect.value);
        }
      }

      CampusUtils.showToast("Demo preferences successfully saved to local storage.", "success");
    });
  }
}
