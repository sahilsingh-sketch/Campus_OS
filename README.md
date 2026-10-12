# CAMPUS OS — THE STUDENT ACADEMIC WORKSPACE
> **"KNOW YOUR SEMESTER."**

A comprehensive, production-grade frontend implementation of **CAMPUS OS Student ERP** built exclusively with standard **HTML5, CSS3, and Vanilla JavaScript (ES6+)**. Runs 100% locally in any browser with zero dependencies, zero build systems, zero external backend APIs, and zero database installation.

---

## ⚡ Quick Start

### 1. Run Locally
Open `index.html` directly in any web browser (Chrome, Edge, Firefox, Safari) or use VS Code Live Server / any local static server:
```bash
# Option A: Open directly in your browser
double-click index.html

# Option B: Or run with any local HTTP server (optional)
npx -y serve .
```

### 2. Demo Student Credentials
| Parameter | Value |
| :--- | :--- |
| **Registration ID** | `DEMO2025` |
| **Password** | `Student@123` |
| **Student Name** | Sahil Singh |
| **Academic Standing** | B.Tech CSE • Semester 5 (2026–27) |
| **Faculty Advisor** | Dr. Ananya Sharma |

*(A one-click **"Auto-Fill"** button is provided directly on the login screen for instant evaluation).*

---

## 🏛️ Application Architecture & Core Modules

The application is structured into modular, decoupled files sharing a single central source of truth (`data.js`) and a shared calculation engine (`utils.js`):

```
Student_ERP/
├── index.html                  # Smart auth router (redirects to dashboard or login)
├── login.html                  # Screen 1: Student Login & Credential Verification
├── dashboard.html              # Screen 2: Semester Overview Dashboard
├── syllabus.html               # Screen 3: Interactive Syllabus Explorer
├── labs.html                   # Screen 4: Laboratory Courses & Experiment Manuals
├── attendance.html             # Screen 5: Attendance Analytics & Session Calendar
├── assignments.html            # Screen 6: Coursework Deliverables & File Submission
├── notifications.html          # Module G: Official Academic Circulars & Notice Board
├── profile.html                # Module H: Student Dossier & Workspace Preferences
├── mcp_config.json             # Flowstep Model Context Protocol configuration
├── .mcp.json                   # Streamable HTTP MCP configuration
├── .cursor/
│   └── mcp.json                # Cursor editor MCP server configuration
├── assets/
│   ├── css/
│   │   ├── styles.css          # Design tokens, typography, CSS variables, app shell
│   │   ├── components.css      # Academic cards, badges, accordions, calendar, tables
│   │   └── responsive.css      # Tablet/mobile drawer, touch targets, reduced-motion
│   └── js/
│       ├── data.js             # Unified fictional academic data model
│       ├── utils.js            # Calculation engine (attendance, shortage, dates, toasts)
│       ├── auth.js             # Session management, route protection, login/logout
│       ├── navigation.js       # App shell controller, active links, theme toggle
│       ├── dashboard.js        # Overview metrics, attendance pulse, timetable
│       ├── syllabus.js         # Unit accordions, search, topic completion tracking
│       ├── labs.js             # Practical experiments, lab manual modal inspector
│       ├── attendance.js       # Threshold slider, shortage calculator, session ledger
│       ├── assignments.js      # Deadline sorting, filter tabs, simulated file submit
│       ├── notifications.js    # Unread counters, circular categories, mark as read
│       └── profile.js          # Academic records, advisor contact, local preferences
└── README.md
```

---

## 📚 Module Highlights

### A. Student Login (`login.html`)
- Pre-filled demo credentials with one-click **Auto-Fill**.
- Show / hide password visibility toggle.
- Client-side validation with instant visual feedback and error messaging.
- Smooth authentication transition into the academic workspace.

### B. Overview Dashboard (`dashboard.html`)
- **Hero Banner:** Displays Sahil Singh's verified identity, semester progress, and overall statistics.
- **Academic Metrics Grid:** Real-time calculated overall attendance percentage, active assignment count, semester completion, and lab progress.
- **Attendance Pulse:** Subject-by-subject progress bars with automatic shortage warnings.
- **Today's Timetable:** Live schedule of lectures and practical lab sessions for the current day.
- **Activity Ledger:** Chronological stream of recent lectures attended and coursework submitted.

### C. Syllabus Explorer (`syllabus.html`)
- Covers all 6 core subjects:
  1. `CS501`: Java Programming (4 Credits)
  2. `CS502`: Database Management Systems (4 Credits)
  3. `CS503`: Operating Systems (4 Credits)
  4. `CS504`: Computer Networks (4 Credits)
  5. `CS505`: Software Engineering (3 Credits)
  6. `CS506`: Design and Analysis of Algorithms (4 Credits)
- Expandable / collapsible unit accordions (Units 1 to 5 per subject).
- Interactive topic checkboxes allowing students to tick off studied topics; progress is saved automatically.
- Real-time instant keyword search with reset capability.

### D. Labs & Practicals (`labs.html`)
- 4 Laboratory courses (`CS501L`, `CS502L`, `CS503L`, `CS504L`).
- 16 practical experiments with titles, objectives, required tools, and evaluation status.
- Interactive **Lab Manual Modal**: Inspect full procedure steps, code skeletons, and print or export manuals.

### E. Attendance Analytics (`attendance.html`)
- **Formula-Driven:** All percentages calculated dynamically from granular session records:
  $$\text{Attendance Percentage} = \left(\frac{\text{Classes Attended}}{\text{Classes Conducted}}\right) \times 100$$
- **Configurable Threshold Slider:** Adjust institutional minimum requirement (60% to 90%, default 75%).
- **Shortage Recovery Engine:** Automatically calculates the exact number of consecutive classes required to regain compliance if falling below threshold (e.g. Computer Networks CS504 alert).
- **Interactive Monthly Calendar:** Visual day cells distinguishing Present (green), Absent (red), and Weekend / No Class (gray), with month navigation and click-to-view daily session log.

### F. Assignments & Deliverables (`assignments.html`)
- Tabbed filters: **All**, **Pending**, **Submitted**, and **Overdue**.
- Sort deliverables by deadline (earliest / latest) or maximum marks.
- Working **Submission Modal**: Drag-and-drop file upload simulation with extension and size validation (max 10 MB).
- Submissions immediately move assignments to the "Submitted" tab and store filename and timestamp in session state.

### G. Notifications Center (`notifications.html`)
- Category-based circulars: Academic, Attendance, Assignments, Labs, General.
- Unread badge counters synchronized across the sidebar and header.
- "Mark as Read" / "Mark All as Read" actions.

### H. Student Profile & Settings (`profile.html`)
- Detailed academic identity, GPA (8.84), total credits (96), and rank.
- Assigned Faculty Advisor card for **Dr. Ananya Sharma**.
- Harmless preferences configuration: Default landing page, theme, and threshold alerts.
- **"Reset All Demo Data"** action to wipe local storage modifications and restore clean fixtures.

---

## 🎨 Visual Design Aesthetics

- **Brand:** `CAMPUS OS`
- **Design Philosophy:** Editorial academic workspace inspired by Swiss typographic layout, Linear, and modern academic journals.
- **Palette:** Rich Dark Academic mode (`#080B10`, `#111722`) with support for a Clean Light Academic mode (`#F8F9FA`, `#FFFFFF`).
- **Typography:** Google Fonts `Plus Jakarta Sans` for clean legibility and `JetBrains Mono` for codes, percentages, and IDs.
- **Fine Hairlines:** Precise 1px hairline borders (`rgba(255,255,255,0.06)`) and restrained semantic accents (emerald, amber, cobalt, rose).

---

## 🔄 State & Persistence Model

- Main data is seeded in `assets/js/data.js`.
- Modifiable preferences, topic checkmarks, submitted assignments, read notification IDs, and configured attendance thresholds persist in browser `localStorage` under the namespace `campus_os_v1_*`.
- To completely reset the application back to pristine demo state, click **"Reset Demo"** in the top banner or use the button on the Profile page.

---

## 🔒 Security & Educational Prototype Notice

This application is an educational frontend prototype. Client-side authentication is for demonstration purposes only. No actual student data or passwords are transmitted over external networks or saved to remote servers.
