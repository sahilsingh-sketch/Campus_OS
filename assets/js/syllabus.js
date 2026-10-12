/**
 * CAMPUS OS — Syllabus Module Controller
 * Handles subject selection, unit accordion expand/collapse, topic completion persistence, and search filtering.
 */

document.addEventListener("DOMContentLoaded", function () {
  CampusAuth.requireAuth();
  initSyllabusModule();
});

let currentSubjectId = "CS501";
let searchQuery = "";

function initSyllabusModule() {
  renderSubjectTabs();
  renderActiveSubjectSyllabus();

  // Search input binding
  const searchInput = document.getElementById("syllabus-search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      renderActiveSubjectSyllabus();
    });
  }

  // Reset filters button
  const resetBtn = document.getElementById("reset-syllabus-filters-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      currentSubjectId = "CS501";
      renderSubjectTabs();
      renderActiveSubjectSyllabus();
      CampusUtils.showToast("Syllabus filters reset to Java Programming.", "info");
    });
  }

  // Semester dropdown
  const semSelect = document.getElementById("semester-select");
  if (semSelect) {
    semSelect.addEventListener("change", (e) => {
      const sem = e.target.value;
      if (sem !== "5") {
        CampusUtils.showToast(`Semester ${sem} archives are in read-only mode for this academic session. Showing Semester 5 active courses.`, "warning");
        e.target.value = "5";
      }
    });
  }
}

function renderSubjectTabs() {
  const tabsContainer = document.getElementById("syllabus-subject-tabs");
  if (!tabsContainer) return;

  tabsContainer.innerHTML = CAMPUS_DATA.subjects
    .map((subj) => {
      const isActive = subj.id === currentSubjectId;
      return `
        <button 
          type="button" 
          class="filter-tab ${isActive ? 'is-active' : ''}" 
          data-subject-id="${subj.id}"
          title="${subj.name}"
        >
          <span style="font-family: var(--font-mono);">${subj.code}</span>
          <span style="margin-left: 0.35rem;">${subj.shortName}</span>
        </button>
      `;
    })
    .join("");

  // Attach click events
  tabsContainer.querySelectorAll("[data-subject-id]").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentSubjectId = btn.getAttribute("data-subject-id");
      renderSubjectTabs();
      renderActiveSubjectSyllabus();
    });
  });
}

function renderActiveSubjectSyllabus() {
  const subject = CAMPUS_DATA.subjects.find((s) => s.id === currentSubjectId);
  const syllabusData = CAMPUS_DATA.syllabus[currentSubjectId];
  const container = document.getElementById("syllabus-units-container");
  const subjectHeader = document.getElementById("syllabus-subject-header");

  if (!subject || !syllabusData || !container) return;

  // Retrieve user custom checked topics from localStorage
  const completedMap = CampusUtils.getStorage("syllabus_topic_completed", {});

  // 1. Render Subject Header Overview
  if (subjectHeader) {
    // Calculate live subject completion percentage
    let totalTopics = 0;
    let completedTopics = 0;
    syllabusData.units.forEach((u) => {
      u.topics.forEach((t) => {
        totalTopics++;
        const isDone = completedMap[t.id] !== undefined ? completedMap[t.id] : t.completed;
        if (isDone) completedTopics++;
      });
    });
    const percent = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

    subjectHeader.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1.5rem; flex-wrap: wrap;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.4rem;">
            <span class="code-pill" style="font-size: 0.85rem; padding: 0.25rem 0.6rem;">${subject.code}</span>
            <span class="badge badge-neutral">${subject.type}</span>
            <span class="badge badge-purple">${subject.credits} Credits</span>
          </div>
          <h2 style="font-size: 1.6rem; font-weight: 800; color: var(--text-primary);">${subject.name}</h2>
          <p style="margin-top: 0.4rem; max-width: 720px; font-size: 0.92rem;">${syllabusData.objective}</p>
          <div style="display: flex; gap: 1.5rem; margin-top: 0.75rem; font-size: 0.82rem; color: var(--text-secondary); flex-wrap: wrap;">
            <span>Faculty: <strong>${subject.faculty}</strong></span>
            <span>Classroom: <code class="code-pill">${subject.classroom}</code></span>
            <span>Total Contact Hours: <strong>${syllabusData.totalHours} hrs</strong></span>
          </div>
        </div>
        <div style="min-width: 170px; background-color: var(--bg-surface-elevated); padding: 1rem 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-default);">
          <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase;">Curriculum Progress</div>
          <div style="font-family: var(--font-mono); font-size: 1.8rem; font-weight: 800; color: var(--brand-blue); margin-top: 0.2rem;">${percent}%</div>
          <div class="progress-container" style="margin-top: 0.4rem;">
            <div class="progress-bar-fill" style="width: ${percent}%;"></div>
          </div>
          <div style="font-size: 0.74rem; color: var(--text-muted); margin-top: 0.35rem;">${completedTopics} of ${totalTopics} topics studied</div>
        </div>
      </div>
      <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-hairline); font-size: 0.82rem;">
        <span style="font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase; font-size: 0.72rem;">Prescribed Textbooks:</span>
        <span style="color: var(--text-secondary); margin-left: 0.45rem;">${syllabusData.textbooks.join(" • ")}</span>
      </div>
    `;
  }

  // 2. Filter units and topics if search query is active
  let matchingUnits = [];
  if (!searchQuery) {
    matchingUnits = syllabusData.units;
  } else {
    matchingUnits = syllabusData.units
      .map((u) => {
        const titleMatches = u.title.toLowerCase().includes(searchQuery);
        const matchingTopics = u.topics.filter((t) => t.title.toLowerCase().includes(searchQuery));
        if (titleMatches || matchingTopics.length > 0) {
          return {
            ...u,
            // If title matched show all topics, else show matching topics
            topics: titleMatches ? u.topics : matchingTopics,
            forceOpen: true
          };
        }
        return null;
      })
      .filter(Boolean);
  }

  // Empty Search State
  if (matchingUnits.length === 0) {
    container.innerHTML = `
      <div class="empty-state-notice">
        <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <h3 class="empty-state-title">No syllabus topics match "${searchQuery}"</h3>
        <p class="empty-state-desc">Try searching for keywords like "JVM", "B+ Tree", "Paging", "TCP", "Agile", or "Recurrence".</p>
        <button type="button" class="btn btn-sm btn-outline" style="margin-top: 1rem;" id="clear-search-link">Clear Search</button>
      </div>
    `;
    const clearLink = document.getElementById("clear-search-link");
    if (clearLink) {
      clearLink.addEventListener("click", () => {
        searchQuery = "";
        const searchInput = document.getElementById("syllabus-search-input");
        if (searchInput) searchInput.value = "";
        renderActiveSubjectSyllabus();
      });
    }
    return;
  }

  // 3. Render Units Accordion
  container.innerHTML = `
    <div class="accordion-group">
      ${matchingUnits
        .map((unit, index) => {
          const isOpen = unit.forceOpen || index === 0;
          return `
            <div class="accordion-item ${isOpen ? 'is-open' : ''}" id="unit-${unit.unitNumber}">
              <button type="button" class="accordion-header" aria-expanded="${isOpen}">
                <div class="accordion-header-left">
                  <span class="unit-number-tag">Unit ${unit.unitNumber}</span>
                  <div>
                    <span class="accordion-title">${unit.title}</span>
                    <span class="accordion-hours" style="margin-left: 0.75rem;">(${unit.hours} Hours)</span>
                  </div>
                </div>
                <svg class="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              <div class="accordion-body">
                <ul class="topic-list">
                  ${unit.topics
                    .map((topic) => {
                      const isDone = completedMap[topic.id] !== undefined ? completedMap[topic.id] : topic.completed;
                      return `
                        <li class="topic-item ${isDone ? 'is-completed' : ''}">
                          <input 
                            type="checkbox" 
                            class="topic-checkbox" 
                            id="check-${topic.id}" 
                            data-topic-id="${topic.id}"
                            ${isDone ? 'checked' : ''}
                            title="Mark as studied"
                          >
                          <label for="check-${topic.id}" style="cursor: pointer; flex: 1;">
                            ${topic.title}
                          </label>
                          <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-faint);">
                            ${isDone ? 'Completed' : 'Pending'}
                          </span>
                        </li>
                      `;
                    })
                    .join("")}
                </ul>
              </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;

  // Attach accordion toggle behavior
  container.querySelectorAll(".accordion-header").forEach((hdr) => {
    hdr.addEventListener("click", () => {
      const item = hdr.closest(".accordion-item");
      const wasOpen = item.classList.contains("is-open");
      item.classList.toggle("is-open");
      hdr.setAttribute("aria-expanded", !wasOpen);
    });
  });

  // Attach topic checkbox persistence
  container.querySelectorAll(".topic-checkbox").forEach((cb) => {
    cb.addEventListener("change", (e) => {
      const topicId = e.target.getAttribute("data-topic-id");
      const isChecked = e.target.checked;
      const currentMap = CampusUtils.getStorage("syllabus_topic_completed", {});
      currentMap[topicId] = isChecked;
      CampusUtils.setStorage("syllabus_topic_completed", currentMap);

      const parentLi = e.target.closest(".topic-item");
      if (parentLi) {
        parentLi.classList.toggle("is-completed", isChecked);
        const label = parentLi.querySelector("span");
        if (label) label.textContent = isChecked ? "Completed" : "Pending";
      }

      CampusUtils.showToast(isChecked ? "Topic marked as studied." : "Topic marked as pending.", "info");
      // Re-render header percentage
      renderActiveSubjectSyllabus();
    });
  });
}
