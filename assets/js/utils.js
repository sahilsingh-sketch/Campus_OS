/**
 * CAMPUS OS — Core Utilities and Calculation Engine
 * Pure helper functions for calculations, date formatting, modal management, and UI toasts.
 */

const CampusUtils = (function () {
  const STORAGE_PREFIX = "campus_os_v1_";

  // --- LocalStorage Demo Persistence ---
  function getStorage(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(STORAGE_PREFIX + key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (e) {
      console.warn("Storage read fallback:", e);
      return defaultValue;
    }
  }

  function setStorage(key, value) {
    try {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
    } catch (e) {
      console.warn("Storage write error:", e);
    }
  }

  function removeStorage(key) {
    try {
      localStorage.removeItem(STORAGE_PREFIX + key);
    } catch (e) {
      console.warn("Storage remove error:", e);
    }
  }

  function clearAllDemoData() {
    try {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith(STORAGE_PREFIX)) {
          localStorage.removeItem(key);
        }
      });
      showToast("All temporary demo preferences and data have been reset.", "success");
      setTimeout(() => {
        window.location.reload();
      }, 600);
    } catch (e) {
      console.error("Error clearing demo storage:", e);
    }
  }

  // --- Attendance Threshold & Settings ---
  function getAttendanceThreshold() {
    const val = getStorage("attendance_threshold", 75);
    return typeof val === "number" ? val : 75;
  }

  function setAttendanceThreshold(val) {
    setStorage("attendance_threshold", Number(val));
  }

  // --- Attendance Calculation Engine ---
  function calculateSubjectAttendance(subjectId) {
    const sessions = CAMPUS_DATA.attendanceSessions.filter(
      (s) => s.subjectId === subjectId
    );
    const conducted = sessions.length;
    const attended = sessions.filter((s) => s.status === "present").length;
    const missed = conducted - attended;
    const percentage = conducted > 0 ? (attended / conducted) * 100 : 0;
    const threshold = getAttendanceThreshold();
    const isSafe = percentage >= threshold;

    // Calculate how many consecutive classes need to be attended to recover to threshold T:
    // (attended + x) / (conducted + x) >= T / 100
    // 100 * attended + 100x >= T * conducted + T * x
    // x * (100 - T) >= T * conducted - 100 * attended
    let classesNeeded = 0;
    if (!isSafe && threshold < 100) {
      const numerator = threshold * conducted - 100 * attended;
      const denominator = 100 - threshold;
      classesNeeded = Math.max(0, Math.ceil(numerator / denominator));
    }

    return {
      subjectId,
      conducted,
      attended,
      missed,
      percentage: Number(percentage.toFixed(1)),
      threshold,
      isSafe,
      classesNeeded
    };
  }

  function calculateOverallAttendance() {
    const subjects = CAMPUS_DATA.subjects;
    let totalConducted = 0;
    let totalAttended = 0;
    let totalMissed = 0;

    const subjectBreakdowns = subjects.map((subj) => {
      const stat = calculateSubjectAttendance(subj.id);
      totalConducted += stat.conducted;
      totalAttended += stat.attended;
      totalMissed += stat.missed;
      return {
        ...subj,
        ...stat
      };
    });

    const overallPercentage =
      totalConducted > 0 ? (totalAttended / totalConducted) * 100 : 0;
    const threshold = getAttendanceThreshold();
    const isSafe = overallPercentage >= threshold;

    let totalClassesNeeded = 0;
    if (!isSafe && threshold < 100) {
      const num = threshold * totalConducted - 100 * totalAttended;
      const den = 100 - threshold;
      totalClassesNeeded = Math.max(0, Math.ceil(num / den));
    }

    return {
      totalConducted,
      totalAttended,
      totalMissed,
      overallPercentage: Number(overallPercentage.toFixed(1)),
      threshold,
      isSafe,
      totalClassesNeeded,
      subjectBreakdowns
    };
  }

  // --- Assignments Status & Overdue Engine ---
  function getAssignmentsWithCurrentStatus() {
    const submittedOverrides = getStorage("submitted_assignments", {});
    const now = new Date("2026-10-12T20:15:00"); // Baseline academic calendar time

    return CAMPUS_DATA.assignments.map((asg) => {
      const override = submittedOverrides[asg.id];
      if (override) {
        return {
          ...asg,
          status: "Submitted",
          submittedDate: override.submittedDate || asg.submittedDate || new Date().toISOString(),
          submittedFileName: override.submittedFileName || asg.submittedFileName,
          facultyFeedback: override.facultyFeedback || asg.facultyFeedback
        };
      }

      if (asg.status === "Submitted") {
        return { ...asg };
      }

      const due = new Date(asg.dueDate + "T23:59:59");
      if (due < now) {
        return {
          ...asg,
          status: "Overdue"
        };
      }

      return {
        ...asg,
        status: "Pending"
      };
    });
  }

  function getTimeRemainingString(dueDateStr) {
    const due = new Date(dueDateStr + "T23:59:59");
    const now = new Date("2026-10-12T20:15:00");
    const diffMs = due - now;
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (diffMs < 0) {
      const overdueDays = Math.abs(diffDays);
      return overdueDays <= 1 ? "Overdue yesterday" : `Overdue by ${overdueDays} days`;
    }
    if (diffDays === 0) return "Due today by 11:59 PM";
    if (diffDays === 1) return "Due tomorrow";
    return `Due in ${diffDays} days`;
  }

  // --- Date Formatting ---
  function formatDate(dateStr) {
    if (!dateStr) return "N/A";
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, "0")}, ${d.getFullYear()}`;
  }

  function formatTime(timeStr) {
    return timeStr || "";
  }

  function getSubjectById(subjectId) {
    return CAMPUS_DATA.subjects.find((s) => s.id === subjectId) || null;
  }

  // --- Notifications Helper ---
  function getNotifications() {
    const readMap = getStorage("read_notifications", {});
    return CAMPUS_DATA.notifications.map((n) => ({
      ...n,
      read: readMap[n.id] !== undefined ? readMap[n.id] : n.read
    }));
  }

  function markNotificationRead(notifId) {
    const readMap = getStorage("read_notifications", {});
    readMap[notifId] = true;
    setStorage("read_notifications", readMap);
  }

  function markAllNotificationsRead() {
    const readMap = getStorage("read_notifications", {});
    CAMPUS_DATA.notifications.forEach((n) => {
      readMap[n.id] = true;
    });
    setStorage("read_notifications", readMap);
  }

  function getUnreadNotificationCount() {
    const list = getNotifications();
    return list.filter((n) => !n.read).length;
  }

  // --- Toast System ---
  function showToast(message, type = "info") {
    let container = document.getElementById("campus-toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "campus-toast-container";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    // Icon based on type
    let iconSvg = "";
    if (type === "success") {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>`;
    } else if (type === "error" || type === "danger") {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/></svg>`;
    } else if (type === "warning") {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/></svg>`;
    } else {
      iconSvg = `<svg class="toast-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>`;
    }

    toast.innerHTML = `
      <div class="toast-content">
        ${iconSvg}
        <span class="toast-message">${message}</span>
      </div>
      <button type="button" class="toast-close" aria-label="Dismiss">&times;</button>
    `;

    toast.querySelector(".toast-close").addEventListener("click", () => {
      toast.classList.add("toast-fade-out");
      setTimeout(() => toast.remove(), 250);
    });

    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentElement) {
        toast.classList.add("toast-fade-out");
        setTimeout(() => toast.remove(), 250);
      }
    }, 4000);
  }

  // --- Modal Utilities ---
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.add("is-active");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    // Close on backdrop click
    const backdrop = modal.querySelector(".modal-backdrop");
    if (backdrop && !backdrop._hasCloseListener) {
      backdrop.addEventListener("click", () => closeModal(modalId));
      backdrop._hasCloseListener = true;
    }

    // Close buttons inside modal
    modal.querySelectorAll("[data-close-modal]").forEach((btn) => {
      if (!btn._hasCloseListener) {
        btn.addEventListener("click", () => closeModal(modalId));
        btn._hasCloseListener = true;
      }
    });

    // Close on ESC key
    const onEsc = (e) => {
      if (e.key === "Escape") {
        closeModal(modalId);
        document.removeEventListener("keydown", onEsc);
      }
    };
    document.addEventListener("keydown", onEsc);
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.classList.remove("is-active");
    modal.setAttribute("aria-hidden", "true");
    if (!document.querySelector(".modal.is-active")) {
      document.body.classList.remove("modal-open");
    }
  }

  return {
    getStorage,
    setStorage,
    removeStorage,
    clearAllDemoData,
    getAttendanceThreshold,
    setAttendanceThreshold,
    calculateSubjectAttendance,
    calculateOverallAttendance,
    getAssignmentsWithCurrentStatus,
    getTimeRemainingString,
    formatDate,
    formatTime,
    getSubjectById,
    getNotifications,
    markNotificationRead,
    markAllNotificationsRead,
    getUnreadNotificationCount,
    showToast,
    openModal,
    closeModal
  };
})();

// Attach to global window
if (typeof window !== "undefined") {
  window.CampusUtils = CampusUtils;
}
