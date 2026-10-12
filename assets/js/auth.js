/**
 * CAMPUS OS — Demo Authentication System
 * Client-side educational prototype authentication engine.
 * Credentials: DEMO2025 / Student@123
 */

const CampusAuth = (function () {
  const DEMO_USER = "DEMO2025";
  const DEMO_PASS = "Student@123";

  function isAuthenticated() {
    const session = CampusUtils.getStorage("auth_session", null);
    return session && session.loggedIn === true && session.regId === DEMO_USER;
  }

  function getSessionUser() {
    if (!isAuthenticated()) return null;
    return CAMPUS_DATA.student;
  }

  function login(regId, password) {
    return new Promise((resolve, reject) => {
      // Simulate minor network / hashing delay
      setTimeout(() => {
        const cleanReg = (regId || "").trim().toUpperCase();
        const cleanPass = (password || "").trim();

        if (!cleanReg) {
          return reject({ field: "regId", message: "Registration ID is required." });
        }
        if (!cleanPass) {
          return reject({ field: "password", message: "Password is required." });
        }

        if (cleanReg === DEMO_USER && cleanPass === DEMO_PASS) {
          const session = {
            loggedIn: true,
            regId: DEMO_USER,
            loginTimestamp: new Date().toISOString()
          };
          CampusUtils.setStorage("auth_session", session);
          resolve({ success: true, user: CAMPUS_DATA.student });
        } else {
          reject({
            field: "general",
            message: "Invalid Registration ID or Password. Use DEMO2025 / Student@123 for this demo."
          });
        }
      }, 450);
    });
  }

  function logout() {
    CampusUtils.removeStorage("auth_session");
    window.location.href = "login.html?logged_out=true";
  }

  function requireAuth() {
    if (!isAuthenticated()) {
      window.location.href = "login.html?redirect=" + encodeURIComponent(window.location.pathname);
    }
  }

  function redirectIfLoggedIn() {
    if (isAuthenticated()) {
      window.location.href = "dashboard.html";
    }
  }

  return {
    isAuthenticated,
    getSessionUser,
    login,
    logout,
    requireAuth,
    redirectIfLoggedIn,
    DEMO_USER,
    DEMO_PASS
  };
})();

if (typeof window !== "undefined") {
  window.CampusAuth = CampusAuth;
}
