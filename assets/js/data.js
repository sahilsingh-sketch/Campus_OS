/**
 * CAMPUS OS — Central Fictional Student Data Model
 * Source of truth for all modules: Sahil Singh (DEMO2025)
 * Academic Session: 2026–27 | Semester: 5 | B.Tech CSE
 */

const CAMPUS_DATA = {
  student: {
    name: "Sahil Singh",
    regId: "DEMO2025",
    program: "B.Tech",
    branch: "Computer Science and Engineering",
    semester: 5,
    session: "2026–27",
    email: "sahil.demo@example.com",
    phone: "+91 98765 43210",
    dob: "2004-08-15",
    bloodGroup: "O+",
    facultyAdvisor: {
      name: "Dr. Ananya Sharma",
      designation: "Associate Professor, Department of CSE",
      email: "ananya.sharma@campus.edu",
      cabin: "Block IV, Room 408",
      officeHours: "Mon & Wed, 3:00 PM – 5:00 PM"
    },
    institution: {
      name: "National Institute of Computing & Technology",
      campus: "Main Campus, South Wing",
      affiliation: "Autonomous Academic Council"
    },
    academicMetrics: {
      cgpa: 8.84,
      sgpaLast: 8.91,
      totalCreditsEarned: 96,
      currentCredits: 23,
      rank: "4th in Cohort (120 Students)"
    }
  },

  subjects: [
    {
      id: "CS501",
      code: "CS501",
      name: "Java Programming",
      shortName: "Java",
      credits: 4,
      faculty: "Prof. Rajesh Verma",
      facultyEmail: "rajesh.verma@campus.edu",
      department: "CSE",
      classroom: "Hall 302",
      type: "Theory + Lab",
      syllabusProgress: 78
    },
    {
      id: "CS502",
      code: "CS502",
      name: "Database Management Systems",
      shortName: "DBMS",
      credits: 4,
      faculty: "Dr. Meenakshi Sundaram",
      facultyEmail: "meenakshi.s@campus.edu",
      department: "CSE",
      classroom: "Hall 305",
      type: "Theory + Lab",
      syllabusProgress: 82
    },
    {
      id: "CS503",
      code: "CS503",
      name: "Operating Systems",
      shortName: "OS",
      credits: 4,
      faculty: "Prof. Arvind Swaminathan",
      facultyEmail: "arvind.s@campus.edu",
      department: "CSE",
      classroom: "Hall 301",
      type: "Theory + Lab",
      syllabusProgress: 65
    },
    {
      id: "CS504",
      code: "CS504",
      name: "Computer Networks",
      shortName: "Networks",
      credits: 4,
      faculty: "Dr. Preeti Deshmukh",
      facultyEmail: "preeti.d@campus.edu",
      department: "CSE",
      classroom: "Hall 308",
      type: "Theory + Lab",
      syllabusProgress: 70
    },
    {
      id: "CS505",
      code: "CS505",
      name: "Software Engineering",
      shortName: "SE",
      credits: 3,
      faculty: "Dr. Ananya Sharma",
      facultyEmail: "ananya.sharma@campus.edu",
      department: "CSE",
      classroom: "Seminar Hall B",
      type: "Theory",
      syllabusProgress: 85
    },
    {
      id: "CS506",
      code: "CS506",
      name: "Design and Analysis of Algorithms",
      shortName: "DAA",
      credits: 4,
      faculty: "Prof. Vikramaditya Sen",
      facultyEmail: "vikramaditya.sen@campus.edu",
      department: "CSE",
      classroom: "Hall 304",
      type: "Theory",
      syllabusProgress: 60
    }
  ],

  // Detailed lecture session attendance logs for October & September 2026
  attendanceSessions: [
    // Java Programming (CS501) - 28 conducted, 25 attended (89.3%)
    { date: "2026-10-12", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Concurrent Collections & BlockingQueue" },
    { date: "2026-10-09", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "ForkJoin Pool & Parallel Streams" },
    { date: "2026-10-07", subjectId: "CS501", status: "absent",  time: "09:00 - 10:00", topic: "ReentrantLock & Condition Variables" },
    { date: "2026-10-05", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Thread Synchronization & Deadlock" },
    { date: "2026-10-02", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Java Memory Model & Volatile" },
    { date: "2026-09-30", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Generics & Bounded Type Parameters" },
    { date: "2026-09-28", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Reflection API & Annotations" },
    { date: "2026-09-25", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "NIO.2 File Systems & Path Watcher" },
    { date: "2026-09-23", subjectId: "CS501", status: "absent",  time: "09:00 - 10:00", topic: "ByteStreams vs Character Streams" },
    { date: "2026-09-21", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Stream API Intermediate Operations" },
    { date: "2026-09-18", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Functional Interfaces & Lambdas" },
    { date: "2026-09-16", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "TreeSet, TreeMap & Red-Black trees" },
    { date: "2026-09-14", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "HashMap internal hashing & collisions" },
    { date: "2026-09-11", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Collection Framework Hierarchy" },
    { date: "2026-09-09", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Custom Exception Handlers" },
    { date: "2026-09-07", subjectId: "CS501", status: "absent",  time: "09:00 - 10:00", topic: "Checked vs Unchecked Exceptions" },
    { date: "2026-09-04", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Abstract Classes vs Interfaces" },
    { date: "2026-09-02", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Polymorphism & Dynamic Dispatch" },
    { date: "2026-08-31", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Inheritance & super constructor chaining" },
    { date: "2026-08-28", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Encapsulation & Access Modifiers" },
    { date: "2026-08-26", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "JVM Architecture & Classloader" },
    { date: "2026-08-24", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Garbage Collection Algorithms" },
    { date: "2026-08-21", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Memory Areas: Heap vs Stack" },
    { date: "2026-08-19", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Primitive data types & Wrappers" },
    { date: "2026-08-17", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Control statements & Switch expressions" },
    { date: "2026-08-14", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Object Oriented Principles Introduction" },
    { date: "2026-08-12", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "JDK vs JRE vs JVM Overview" },
    { date: "2026-08-10", subjectId: "CS501", status: "present", time: "09:00 - 10:00", topic: "Course Introduction & Setup" },

    // DBMS (CS502) - 26 conducted, 23 attended (88.5%)
    { date: "2026-10-12", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "ACID Properties & Two-Phase Locking" },
    { date: "2026-10-08", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Deadlock Detection in Transactions" },
    { date: "2026-10-06", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Serializability & Precedence Graphs" },
    { date: "2026-10-01", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "B+ Tree Index Insertion & Splitting" },
    { date: "2026-09-29", subjectId: "CS502", status: "absent",  time: "10:15 - 11:15", topic: "Clustered vs Unclustered Indexing" },
    { date: "2026-09-24", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Hashing Techniques & Extendible Hashing" },
    { date: "2026-09-22", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Boyce-Codd Normal Form (BCNF) Decomposition" },
    { date: "2026-09-17", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "3rd Normal Form & Lossless Join" },
    { date: "2026-09-15", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Functional Dependency Closure (Armstrong's Axioms)" },
    { date: "2026-09-10", subjectId: "CS502", status: "absent",  time: "10:15 - 11:15", topic: "Complex SQL Joins & Subqueries" },
    { date: "2026-09-08", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Aggregate Functions & GROUP BY" },
    { date: "2026-09-03", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Relational Algebra vs Tuple Relational Calculus" },
    { date: "2026-09-01", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Relational Model Constraints" },
    { date: "2026-08-27", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "ER Diagram to Relational Schema Mapping" },
    { date: "2026-08-25", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Enhanced ER (Specialization & Generalization)" },
    { date: "2026-08-20", subjectId: "CS502", status: "absent",  time: "10:15 - 11:15", topic: "Entity Relationship Modeling" },
    { date: "2026-08-18", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Three-Schema Database Architecture" },
    { date: "2026-08-13", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "DBMS File Systems Comparison" },
    { date: "2026-08-11", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Introduction to Relational Databases" },
    { date: "2026-08-06", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Database Administration & User Roles" },
    { date: "2026-08-04", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Data Independence & Data Models" },
    { date: "2026-07-30", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Storage Hierarchy & Buffer Pool" },
    { date: "2026-07-28", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Query Evaluation Engine" },
    { date: "2026-07-23", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Relational Query Optimization" },
    { date: "2026-07-21", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Crash Recovery & Write-Ahead Logging" },
    { date: "2026-07-16", subjectId: "CS502", status: "present", time: "10:15 - 11:15", topic: "Course Syllabus & Project Kickoff" },

    // Operating Systems (CS503) - 30 conducted, 24 attended (80.0%)
    { date: "2026-10-11", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Virtual Memory & Demand Paging" },
    { date: "2026-10-09", subjectId: "CS503", status: "absent",  time: "11:30 - 12:30", topic: "Page Replacement Algorithms (LRU, FIFO)" },
    { date: "2026-10-07", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Memory Segmentation & Paging Hardware" },
    { date: "2026-10-05", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Banker's Algorithm for Deadlock Avoidance" },
    { date: "2026-10-02", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Dining Philosophers & Classic Sync Problems" },
    { date: "2026-09-30", subjectId: "CS503", status: "absent",  time: "11:30 - 12:30", topic: "Semaphores and Mutex Locks" },
    { date: "2026-09-28", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Peterson's Solution & Critical Section" },
    { date: "2026-09-25", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Multi-level Feedback Queue Scheduling" },
    { date: "2026-09-23", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "CPU Scheduling: Round Robin & SJF" },
    { date: "2026-09-21", subjectId: "CS503", status: "absent",  time: "11:30 - 12:30", topic: "Thread Libraries: Pthreads API" },
    { date: "2026-09-18", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Multithreading Models & Kernel Threads" },
    { date: "2026-09-16", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Inter-Process Communication: Pipes & Shared Memory" },
    { date: "2026-09-14", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Process Creation: fork(), exec(), wait()" },
    { date: "2026-09-11", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Process Control Block & Context Switching" },
    { date: "2026-09-09", subjectId: "CS503", status: "absent",  time: "11:30 - 12:30", topic: "Process States & Lifecycle" },
    { date: "2026-09-07", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "System Calls & Dual-Mode Operation" },
    { date: "2026-09-04", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "OS Structures: Monolithic vs Microkernel" },
    { date: "2026-09-02", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Computer System Organization & Interrupts" },
    { date: "2026-08-31", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Role of Operating System" },
    { date: "2026-08-28", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "File Systems Architecture: Inodes" },
    { date: "2026-08-26", subjectId: "CS503", status: "absent",  time: "11:30 - 12:30", topic: "Disk Scheduling: SCAN & C-LOOK" },
    { date: "2026-08-24", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Mass Storage Structures & RAID Levels" },
    { date: "2026-08-21", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "I/O Hardware & Direct Memory Access (DMA)" },
    { date: "2026-08-19", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Protection & Security in OS" },
    { date: "2026-08-17", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Access Control Matrices & Capabilities" },
    { date: "2026-08-14", subjectId: "CS503", status: "absent",  time: "11:30 - 12:30", topic: "Virtual Machines & Hypervisors" },
    { date: "2026-08-12", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Linux Kernel Architecture Deep Dive" },
    { date: "2026-08-10", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "POSIX Standards & Shell Environment" },
    { date: "2026-08-07", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Operating System Historical Evolution" },
    { date: "2026-08-05", subjectId: "CS503", status: "present", time: "11:30 - 12:30", topic: "Introductory Lecture & Lab Guidelines" },

    // Computer Networks (CS504) - 25 conducted, 18 attended (72.0%) -> ATTENDANCE WARNING!
    { date: "2026-10-10", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "TCP Congestion Control (Tahoe vs Reno)" },
    { date: "2026-10-08", subjectId: "CS504", status: "absent",  time: "14:00 - 15:00", topic: "TCP Sliding Window & Flow Control" },
    { date: "2026-10-06", subjectId: "CS504", status: "absent",  time: "14:00 - 15:00", topic: "TCP 3-Way Handshake & Connection Teardown" },
    { date: "2026-10-01", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "UDP Protocol & Real-time Transport" },
    { date: "2026-09-29", subjectId: "CS504", status: "absent",  time: "14:00 - 15:00", topic: "Distance Vector Routing & Count-to-Infinity" },
    { date: "2026-09-24", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "Link State Routing (Dijkstra Algorithm & OSPF)" },
    { date: "2026-09-22", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "IPv4 Subnetting & CIDR Notation" },
    { date: "2026-09-17", subjectId: "CS504", status: "absent",  time: "14:00 - 15:00", topic: "NAT (Network Address Translation)" },
    { date: "2026-09-15", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "ICMP Protocol & Traceroute Diagnostics" },
    { date: "2026-09-10", subjectId: "CS504", status: "absent",  time: "14:00 - 15:00", topic: "Address Resolution Protocol (ARP)" },
    { date: "2026-09-08", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "Ethernet Frame Format & CSMA/CD" },
    { date: "2026-09-03", subjectId: "CS504", status: "absent",  time: "14:00 - 15:00", topic: "Data Link Layer Framing & Error Detection" },
    { date: "2026-09-01", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "Cyclic Redundancy Check (CRC)" },
    { date: "2026-08-27", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "Transmission Media & Fiber Optics" },
    { date: "2026-08-25", subjectId: "CS504", status: "absent",  time: "14:00 - 15:00", topic: "Bandwidth-Delay Product & Shannon's Law" },
    { date: "2026-08-20", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "OSI Reference Model vs TCP/IP Protocol Stack" },
    { date: "2026-08-18", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "Packet Switching vs Circuit Switching" },
    { date: "2026-08-13", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "Network Topologies: Mesh, Star, Hybrid" },
    { date: "2026-08-11", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "DNS Architecture & Hierarchy" },
    { date: "2026-08-06", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "HTTP/1.1 vs HTTP/2 vs HTTP/3" },
    { date: "2026-08-04", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "Socket Programming Introduction" },
    { date: "2026-07-30", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "Network Security: SSL/TLS Handshake" },
    { date: "2026-07-28", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "Firewalls & Packet Filtering" },
    { date: "2026-07-23", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "Wireless Networks: 802.11 Protocols" },
    { date: "2026-07-21", subjectId: "CS504", status: "present", time: "14:00 - 15:00", topic: "Orientation & Networking Lab Requirements" },

    // Software Engineering (CS505) - 22 conducted, 20 attended (90.9%)
    { date: "2026-10-12", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Agile Scrum & Sprint Retrospectives" },
    { date: "2026-10-09", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Test-Driven Development (TDD)" },
    { date: "2026-10-05", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "UML Sequence & Activity Diagrams" },
    { date: "2026-10-02", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Design Patterns: Factory, Singleton, Observer" },
    { date: "2026-09-28", subjectId: "CS505", status: "absent",  time: "15:15 - 16:15", topic: "Microservices vs Monolith Architecture" },
    { date: "2026-09-25", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Software Requirements Specification (SRS)" },
    { date: "2026-09-21", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Function Points & COCOMO Cost Estimation" },
    { date: "2026-09-18", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Risk Management & Mitigation Strategies" },
    { date: "2026-09-14", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Software Quality Metrics: Cyclomatic Complexity" },
    { date: "2026-09-11", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Black Box vs White Box Testing" },
    { date: "2026-09-07", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Continuous Integration & Deployment (CI/CD)" },
    { date: "2026-09-04", subjectId: "CS505", status: "absent",  time: "15:15 - 16:15", topic: "Software Configuration Management & Git" },
    { date: "2026-08-31", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Clean Code & Refactoring Techniques" },
    { date: "2026-08-28", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "User Story Mapping & Backlog Prioritization" },
    { date: "2026-08-24", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Software Life Cycle Models: Spiral vs Waterfall" },
    { date: "2026-08-21", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Agile Manifesto & Principles" },
    { date: "2026-08-17", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Stakeholder Identification & Elicitation" },
    { date: "2026-08-14", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Software Maintenance & Technical Debt" },
    { date: "2026-08-10", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Architectural Styles & System Decomposition" },
    { date: "2026-08-07", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Ethics in Software Engineering (ACM/IEEE)" },
    { date: "2026-08-03", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Software Engineering as an Engineering Discipline" },
    { date: "2026-07-31", subjectId: "CS505", status: "present", time: "15:15 - 16:15", topic: "Course Introduction & Semester Team Setup" },

    // Design and Analysis of Algorithms (CS506) - 29 conducted, 22 attended (75.9%)
    { date: "2026-10-11", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "NP-Completeness & Reduction: 3-SAT to CLIQUE" },
    { date: "2026-10-08", subjectId: "CS506", status: "absent",  time: "16:30 - 17:30", topic: "Classes P, NP, NP-Hard and NP-Complete" },
    { date: "2026-10-06", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Approximation Algorithms for Vertex Cover" },
    { date: "2026-10-01", subjectId: "CS506", status: "absent",  time: "16:30 - 17:30", topic: "Backtracking: N-Queens & Graph Coloring" },
    { date: "2026-09-29", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Branch and Bound: Traveling Salesperson Problem" },
    { date: "2026-09-24", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "String Matching: Knuth-Morris-Pratt (KMP)" },
    { date: "2026-09-22", subjectId: "CS506", status: "absent",  time: "16:30 - 17:30", topic: "Rabin-Karp String Matching & Rolling Hash" },
    { date: "2026-09-17", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "All-Pairs Shortest Path: Floyd-Warshall Algorithm" },
    { date: "2026-09-15", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Bellman-Ford Algorithm with Negative Cycles" },
    { date: "2026-09-10", subjectId: "CS506", status: "absent",  time: "16:30 - 17:30", topic: "Dijkstra's Algorithm with Min-Heap Optimization" },
    { date: "2026-09-08", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Minimum Spanning Tree: Prim's & Kruskal's" },
    { date: "2026-09-03", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Disjoint Set Union (DSU) & Path Compression" },
    { date: "2026-09-01", subjectId: "CS506", status: "absent",  time: "16:30 - 17:30", topic: "Greedy Strategy: Fractional Knapsack & Huffman Coding" },
    { date: "2026-08-27", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Dynamic Programming: Longest Common Subsequence (LCS)" },
    { date: "2026-08-25", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "0/1 Knapsack Problem with Memoization" },
    { date: "2026-08-20", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Matrix Chain Multiplication Optimal Parenthesization" },
    { date: "2026-08-18", subjectId: "CS506", status: "absent",  time: "16:30 - 17:30", topic: "Divide and Conquer: Strassen's Matrix Multiplication" },
    { date: "2026-08-13", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Median of Medians Linear Time Selection" },
    { date: "2026-08-11", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "QuickSort Partitioning & Randomized Analysis" },
    { date: "2026-08-06", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "MergeSort & Inversion Counting" },
    { date: "2026-08-04", subjectId: "CS506", status: "absent",  time: "16:30 - 17:30", topic: "Master Theorem & Solving Recurrence Relations" },
    { date: "2026-07-30", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Recursion Tree Method for Recurrences" },
    { date: "2026-07-28", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Substitution Method for Proofs" },
    { date: "2026-07-23", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Asymptotic Notations: Big-O, Omega, Theta" },
    { date: "2026-07-21", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Time Complexity & Space Complexity Bounds" },
    { date: "2026-07-16", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Algorithm Correctness & Loop Invariants" },
    { date: "2026-07-14", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Analyzing Insertion Sort & Selection Sort" },
    { date: "2026-07-09", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Pseudo-code Conventions & Model of Computation" },
    { date: "2026-07-07", subjectId: "CS506", status: "present", time: "16:30 - 17:30", topic: "Course Introduction & Diagnostic Assessment" }
  ],

  // Comprehensive Syllabus records for all 6 subjects
  syllabus: {
    CS501: {
      subjectCode: "CS501",
      subjectName: "Java Programming",
      credits: 4,
      totalHours: 48,
      objective: "To master core and advanced object-oriented paradigms, concurrency architectures, stream pipelines, and robust enterprise design patterns in modern Java.",
      textbooks: [
        "Core Java Volume I & II by Cay S. Horstmann",
        "Effective Java (3rd Edition) by Joshua Bloch",
        "Java Concurrency in Practice by Brian Goetz"
      ],
      units: [
        {
          unitNumber: 1,
          title: "Foundations & JVM Architecture",
          hours: 10,
          completed: true,
          topics: [
            { id: "cs501_u1_t1", title: "Evolution of Java and OpenJDK releases", completed: true },
            { id: "cs501_u1_t2", title: "JVM Architecture, Classloaders, and Bytecode verification", completed: true },
            { id: "cs501_u1_t3", title: "Memory Allocation: Stack frames vs Garbage-collected Heap", completed: true },
            { id: "cs501_u1_t4", title: "Garbage collection generations: ZGC and G1 collectors", completed: true },
            { id: "cs501_u1_t5", title: "Enhanced switch expressions, sealed classes, and records", completed: true }
          ]
        },
        {
          unitNumber: 2,
          title: "Object-Oriented Design & Generics",
          hours: 10,
          completed: true,
          topics: [
            { id: "cs501_u2_t1", title: "Polymorphism, virtual method tables, dynamic method lookup", completed: true },
            { id: "cs501_u2_t2", title: "Interfaces, default and private interface methods", completed: true },
            { id: "cs501_u2_t3", title: "Robust exception hierarchies and try-with-resources", completed: true },
            { id: "cs501_u2_t4", title: "Generic classes, type erasure, and PECS (Producer Extends)", completed: true },
            { id: "cs501_u2_t5", title: "Deep vs Shallow Cloning and serialization mechanisms", completed: true }
          ]
        },
        {
          unitNumber: 3,
          title: "Collections Framework & Functional Programming",
          hours: 10,
          completed: true,
          topics: [
            { id: "cs501_u3_t1", title: "List, Set, Queue, and Map internal implementations", completed: true },
            { id: "cs501_u3_t2", title: "HashMap collisions, hash trees, and ConcurrentHashMap", completed: true },
            { id: "cs501_u3_t3", title: "Functional interfaces, method references, and lambdas", completed: true },
            { id: "cs501_u3_t4", title: "Streams API: map, filter, flatMap, reduce, and Collectors", completed: true },
            { id: "cs501_u3_t5", title: "Infinite streams and parallel stream execution pitfalls", completed: false }
          ]
        },
        {
          unitNumber: 4,
          title: "Multithreading & Concurrency",
          hours: 10,
          completed: false,
          topics: [
            { id: "cs501_u4_t1", title: "Thread lifecycle and Java Memory Model (JMM)", completed: true },
            { id: "cs501_u4_t2", title: "Synchronization, intrinsic locks, and volatile visibility", completed: true },
            { id: "cs501_u4_t3", title: "java.util.concurrent: ReentrantLock, ReadWriteLock, StampedLock", completed: true },
            { id: "cs501_u4_t4", title: "ExecutorService, ThreadPoolExecutor, and CompletableFuture", completed: false },
            { id: "cs501_u4_t5", title: "Virtual Threads (Project Loom) and structured concurrency", completed: false }
          ]
        },
        {
          unitNumber: 5,
          title: "Modern I/O, Reflection & Networking",
          hours: 8,
          completed: false,
          topics: [
            { id: "cs501_u5_t1", title: "NIO.2 Channels, Buffers, and asynchronous file operations", completed: true },
            { id: "cs501_u5_t2", title: "Reflection API and dynamic runtime proxies", completed: false },
            { id: "cs501_u5_t3", title: "Custom Annotations and runtime metadata processing", completed: false },
            { id: "cs501_u5_t4", title: "HTTP Client API (HttpClient, HttpRequest, WebSocket)", completed: false }
          ]
        }
      ]
    },

    CS502: {
      subjectCode: "CS502",
      subjectName: "Database Management Systems",
      credits: 4,
      totalHours: 48,
      objective: "To design relational schemas using rigorous normalization, implement transactional guarantees via ACID, optimize indexing structures, and write performant SQL queries.",
      textbooks: [
        "Database System Concepts by Silberschatz, Korth, Sudarshan",
        "Fundamentals of Database Systems by Elmasri and Navathe"
      ],
      units: [
        {
          unitNumber: 1,
          title: "Data Modeling & Relational Algebra",
          hours: 10,
          completed: true,
          topics: [
            { id: "cs502_u1_t1", title: "Three-tier database architecture and physical independence", completed: true },
            { id: "cs502_u1_t2", title: "Conceptual ER & EER modeling: constraints, cardinalities", completed: true },
            { id: "cs502_u1_t3", title: "Relational model algebra: select, project, join, division", completed: true },
            { id: "cs502_u1_t4", title: "Tuple and Domain relational calculus", completed: true },
            { id: "cs502_u1_t5", title: "Integrity constraints: domain, entity, and referential", completed: true }
          ]
        },
        {
          unitNumber: 2,
          title: "Relational Schema Design & Normalization",
          hours: 10,
          completed: true,
          topics: [
            { id: "cs502_u2_t1", title: "Functional dependencies and Armstrong's inference axioms", completed: true },
            { id: "cs502_u2_t2", title: "Canonical cover and attribute closure algorithms", completed: true },
            { id: "cs502_u2_t3", title: "1NF, 2NF, 3NF synthesis and dependency preservation", completed: true },
            { id: "cs502_u2_t4", title: "Boyce-Codd Normal Form (BCNF) decomposition proofs", completed: true },
            { id: "cs502_u2_t5", title: "Multivalued dependencies and 4NF/5NF overview", completed: true }
          ]
        },
        {
          unitNumber: 3,
          title: "Indexing, Storage & Query Processing",
          hours: 10,
          completed: true,
          topics: [
            { id: "cs502_u3_t1", title: "Physical file organization: heap, sequential, hashed files", completed: true },
            { id: "cs502_u3_t2", title: "B-Tree and B+ Tree indexing: insertion, deletion, splitting", completed: true },
            { id: "cs502_u3_t3", title: "Static vs Dynamic hashing (Extendible and Linear Hashing)", completed: true },
            { id: "cs502_u3_t4", title: "Query execution plans: cost estimations and relational algebra trees", completed: true },
            { id: "cs502_u3_t5", title: "Hash joins vs Sort-merge joins algorithms", completed: false }
          ]
        },
        {
          unitNumber: 4,
          title: "Transaction Management & Concurrency Control",
          hours: 10,
          completed: false,
          topics: [
            { id: "cs502_u4_t1", title: "ACID properties and transaction state transition diagram", completed: true },
            { id: "cs502_u4_t2", title: "Conflict and View serializability with precedence graphs", completed: true },
            { id: "cs502_u4_t3", title: "Two-Phase Locking (2PL), Strict 2PL, Rigorous 2PL", completed: true },
            { id: "cs502_u4_t4", title: "Timestamp ordering protocol and Multi-Version Concurrency (MVCC)", completed: false },
            { id: "cs502_u4_t5", title: "Deadlock prevention, wait-die, wound-wait, and detection", completed: false }
          ]
        },
        {
          unitNumber: 5,
          title: "Crash Recovery & Distributed Databases",
          hours: 8,
          completed: false,
          topics: [
            { id: "cs502_u5_t1", title: "Failure classifications and Write-Ahead Logging (WAL)", completed: false },
            { id: "cs502_u5_t2", title: "ARIES recovery algorithm: Analysis, Redo, and Undo passes", completed: false },
            { id: "cs502_u5_t3", title: "Shadow paging and checkpointing protocols", completed: false },
            { id: "cs502_u5_t4", title: "Introduction to distributed data replication and CAP theorem", completed: false }
          ]
        }
      ]
    },

    CS503: {
      subjectCode: "CS503",
      subjectName: "Operating Systems",
      credits: 4,
      totalHours: 48,
      objective: "To investigate computer resource scheduling, memory hierarchies, synchronization primitives, concurrent kernel designs, and file systems.",
      textbooks: [
        "Operating System Concepts by Silberschatz, Galvin, Gagne",
        "Modern Operating Systems by Andrew S. Tanenbaum"
      ],
      units: [
        {
          unitNumber: 1,
          title: "OS Architecture & Process Management",
          hours: 10,
          completed: true,
          topics: [
            { id: "cs503_u1_t1", title: "Dual-mode hardware support and kernel/user mode transitions", completed: true },
            { id: "cs503_u1_t2", title: "Monolithic, Microkernel, and Hybrid kernel architectures", completed: true },
            { id: "cs503_u1_t3", title: "Process Control Block (PCB) and hardware context switching", completed: true },
            { id: "cs503_u1_t4", title: "Process creation hierarchy: fork(), exec(), wait() in POSIX", completed: true },
            { id: "cs503_u1_t5", title: "Inter-Process Communication: Pipes, Message Queues, Shared Memory", completed: true }
          ]
        },
        {
          unitNumber: 2,
          title: "Threads & CPU Scheduling",
          hours: 10,
          completed: true,
          topics: [
            { id: "cs503_u2_t1", title: "User-level vs Kernel-level thread mapping models", completed: true },
            { id: "cs503_u2_t2", title: "CPU scheduling criteria: Turnaround, Waiting, and Response times", completed: true },
            { id: "cs503_u2_t3", title: "Preemptive scheduling: Shortest Remaining Time First (SRTF), Round Robin", completed: true },
            { id: "cs503_u2_t4", title: "Multi-level feedback queues and Linux Completely Fair Scheduler (CFS)", completed: true },
            { id: "cs503_u2_t5", title: "Real-time scheduling: Rate-Monotonic and Earliest Deadline First", completed: false }
          ]
        },
        {
          unitNumber: 3,
          title: "Process Synchronization & Deadlocks",
          hours: 10,
          completed: false,
          topics: [
            { id: "cs503_u3_t1", title: "Critical Section problem and Peterson's software solution", completed: true },
            { id: "cs503_u3_t2", title: "Hardware primitives: TestAndSet and CompareAndSwap instructions", completed: true },
            { id: "cs503_u3_t3", title: "Counting and Binary Semaphores, Condition variables, Monitors", completed: true },
            { id: "cs503_u3_t4", title: "Classical synchronization: Producer-Consumer, Readers-Writers, Dining Philosophers", completed: false },
            { id: "cs503_u3_t5", title: "Coffman deadlock conditions and Banker's safety algorithm", completed: false }
          ]
        },
        {
          unitNumber: 4,
          title: "Memory Management & Virtual Memory",
          hours: 10,
          completed: false,
          topics: [
            { id: "cs503_u4_t1", title: "Contiguous allocation, internal vs external fragmentation, compaction", completed: true },
            { id: "cs503_u4_t2", title: "Paging architecture, Translation Lookaside Buffer (TLB) hit ratios", completed: true },
            { id: "cs503_u4_t3", title: "Multi-level page tables, inverted page tables, and segmentation", completed: false },
            { id: "cs503_u4_t4", title: "Demand paging, page fault service routines, and Thrashing", completed: false },
            { id: "cs503_u4_t5", title: "Page replacement: FIFO, Optimal (Belady's Anomaly), LRU, Clock", completed: false }
          ]
        },
        {
          unitNumber: 5,
          title: "Storage & File System Implementation",
          hours: 8,
          completed: false,
          topics: [
            { id: "cs503_u5_t1", title: "Disk hardware, sectors, cylinders, and seek time modeling", completed: false },
            { id: "cs503_u5_t2", title: "Disk scheduling algorithms: FCFS, SSTF, SCAN, C-SCAN, LOOK", completed: false },
            { id: "cs503_u5_t3", title: "File allocation: Contiguous, Linked, and Indexed (Unix Inode)", completed: false },
            { id: "cs503_u5_t4", title: "Directory structures and Free space management bitmaps", completed: false }
          ]
        }
      ]
    },

    CS504: {
      subjectCode: "CS504",
      subjectName: "Computer Networks",
      credits: 4,
      totalHours: 48,
      objective: "To understand communication layers, transmission protocols, routing algorithms, socket communication, and transport flow control in modern Internet infrastructures.",
      textbooks: [
        "Computer Networking: A Top-Down Approach by Kurose and Ross",
        "Computer Networks (5th Edition) by Andrew S. Tanenbaum"
      ],
      units: [
        {
          unitNumber: 1,
          title: "Physical & Data Link Layers",
          hours: 10,
          completed: true,
          topics: [
            { id: "cs504_u1_t1", title: "OSI 7-layer model vs TCP/IP architectural comparison", completed: true },
            { id: "cs504_u1_t2", title: "Nyquist bit rate and Shannon channel capacity limits", completed: true },
            { id: "cs504_u1_t3", title: "Framing: Bit stuffing, byte stuffing, and parity checks", completed: true },
            { id: "cs504_u1_t4", title: "Error detection: Cyclic Redundancy Check (CRC-32) calculations", completed: true },
            { id: "cs504_u1_t5", title: "Sliding window protocols: Stop-and-Wait, Go-Back-N, Selective Repeat", completed: true }
          ]
        },
        {
          unitNumber: 2,
          title: "Medium Access & Local Area Networks",
          hours: 10,
          completed: true,
          topics: [
            { id: "cs504_u2_t1", title: "ALOHA and Slotted ALOHA maximum channel throughput derivations", completed: true },
            { id: "cs504_u2_t2", title: "CSMA, CSMA/CD collision detection, and exponential backoff", completed: true },
            { id: "cs504_u2_t3", title: "IEEE 802.3 Ethernet frame format and minimum frame size constraints", completed: true },
            { id: "cs504_u2_t4", title: "Wireless LAN: IEEE 802.11 CSMA/CA, RTS/CTS handshake", completed: true },
            { id: "cs504_u2_t5", title: "Spanning Tree Protocol (STP) and Virtual LANs (VLANs)", completed: false }
          ]
        },
        {
          unitNumber: 3,
          title: "Network Layer & IP Addressing",
          hours: 10,
          completed: false,
          topics: [
            { id: "cs504_u3_t1", title: "IPv4 header fields, fragmentation, and reassembly offsets", completed: true },
            { id: "cs504_u3_t2", title: "Classless Inter-Domain Routing (CIDR) and VLSM subnet design", completed: true },
            { id: "cs504_u3_t3", title: "Address Resolution Protocol (ARP) and ICMP diagnostic messaging", completed: true },
            { id: "cs504_u3_t4", title: "Intra-domain routing: Distance Vector (RIP) vs Link State (OSPF)", completed: false },
            { id: "cs504_u3_t5", title: "Inter-domain routing: Border Gateway Protocol (BGP) path attributes", completed: false }
          ]
        },
        {
          unitNumber: 4,
          title: "Transport Layer & Congestion Control",
          hours: 10,
          completed: false,
          topics: [
            { id: "cs504_u4_t1", title: "UDP segment format, pseudo-header, and checksum validation", completed: true },
            { id: "cs504_u4_t2", title: "TCP segment format, sequence numbers, and cumulative ACKs", completed: true },
            { id: "cs504_u4_t3", title: "TCP connection establishment (3-way) and graceful termination (FIN/ACK)", completed: false },
            { id: "cs504_u4_t4", title: "TCP flow control: receiver advertised window and Silly Window Syndrome", completed: false },
            { id: "cs504_u4_t5", title: "Congestion control: Slow Start, Congestion Avoidance, Fast Retransmit (Tahoe vs Reno)", completed: false }
          ]
        },
        {
          unitNumber: 5,
          title: "Application Layer & Network Security",
          hours: 8,
          completed: false,
          topics: [
            { id: "cs504_u5_t1", title: "Domain Name System (DNS): recursive resolution, RR records", completed: false },
            { id: "cs504_u5_t2", title: "HTTP protocol evolution: persistent connections, HTTP/2 multiplexing", completed: false },
            { id: "cs504_u5_t3", title: "Email architecture: SMTP, POP3, IMAP protocol comparison", completed: false },
            { id: "cs504_u5_t4", title: "Cryptographic fundamentals: Public key cryptography, RSA, TLS 1.3 handshake", completed: false }
          ]
        }
      ]
    },

    CS505: {
      subjectCode: "CS505",
      subjectName: "Software Engineering",
      credits: 3,
      totalHours: 36,
      objective: "To apply agile project engineering, requirement modeling, software architecture patterns, test-driven validation, and CI/CD pipelines.",
      textbooks: [
        "Software Engineering: A Practitioner's Approach by Roger S. Pressman",
        "Clean Architecture by Robert C. Martin (Uncle Bob)"
      ],
      units: [
        {
          unitNumber: 1,
          title: "Process Models & Agile Methodologies",
          hours: 8,
          completed: true,
          topics: [
            { id: "cs505_u1_t1", title: "Waterfall, Incremental, RAD, and Spiral process lifecycles", completed: true },
            { id: "cs505_u1_t2", title: "Agile Manifesto, principles, and Scrum framework ceremonies", completed: true },
            { id: "cs505_u1_t3", title: "Extreme Programming (XP) practices: Pair Programming, Refactoring", completed: true },
            { id: "cs505_u1_t4", title: "Kanban boards and Work-In-Progress (WIP) limit constraints", completed: true }
          ]
        },
        {
          unitNumber: 2,
          title: "Requirements Engineering & Analysis",
          hours: 8,
          completed: true,
          topics: [
            { id: "cs505_u2_t1", title: "Requirements elicitation techniques and stakeholder analysis", completed: true },
            { id: "cs505_u2_t2", title: "Functional vs Non-functional requirements specification (IEEE 830 SRS)", completed: true },
            { id: "cs505_u2_t3", title: "User stories, INVEST criteria, and acceptance test definition", completed: true },
            { id: "cs505_u2_t4", title: "Use case modeling and scenario specification", completed: true }
          ]
        },
        {
          unitNumber: 3,
          title: "System Design & Architecture",
          hours: 8,
          completed: true,
          topics: [
            { id: "cs505_u3_t1", title: "Architectural styles: Layered, Event-Driven, Microservices", completed: true },
            { id: "cs505_u3_t2", title: "SOLID design principles in object-oriented software", completed: true },
            { id: "cs505_u3_t3", title: "UML structural diagrams: Class and Component diagrams", completed: true },
            { id: "cs505_u3_t4", title: "UML behavioral diagrams: Sequence, State Machine, Activity diagrams", completed: true }
          ]
        },
        {
          unitNumber: 4,
          title: "Testing, Verification & Quality Assurance",
          hours: 6,
          completed: false,
          topics: [
            { id: "cs505_u4_t1", title: "V-Model of software verification and validation", completed: true },
            { id: "cs505_u4_t2", title: "White box testing: Basis path testing and McCabe's cyclomatic complexity", completed: true },
            { id: "cs505_u4_t3", title: "Black box testing: Equivalence partitioning and Boundary value analysis", completed: false },
            { id: "cs505_u4_t4", title: "Unit, Integration, System, and Regression testing automation", completed: false }
          ]
        },
        {
          unitNumber: 5,
          title: "DevOps, Maintenance & Project Metrics",
          hours: 6,
          completed: false,
          topics: [
            { id: "cs505_u5_t1", title: "COCOMO II estimation models and Function Point Analysis (FPA)", completed: false },
            { id: "cs505_u5_t2", title: "Software configuration management and Git branching strategies", completed: false },
            { id: "cs505_u5_t3", title: "CI/CD pipelines with GitHub Actions / GitLab CI", completed: false },
            { id: "cs505_u5_t4", title: "Managing technical debt and code smell refactoring", completed: false }
          ]
        }
      ]
    },

    CS506: {
      subjectCode: "CS506",
      subjectName: "Design and Analysis of Algorithms",
      credits: 4,
      totalHours: 48,
      objective: "To master algorithmic paradigm formulation (Divide & Conquer, Dynamic Programming, Greedy), rigorous complexity analysis, graph traversals, and intractability proofs.",
      textbooks: [
        "Introduction to Algorithms (CLRS 3rd Edition) by Cormen, Leiserson, Rivest, Stein",
        "Algorithm Design by Kleinberg and Tardos"
      ],
      units: [
        {
          unitNumber: 1,
          title: "Algorithmic Analysis & Recurrences",
          hours: 10,
          completed: true,
          topics: [
            { id: "cs506_u1_t1", title: "Asymptotic notation definitions: Big-O, Omega, Theta, Little-o", completed: true },
            { id: "cs506_u1_t2", title: "Solving recurrences: Substitution and Recursion Tree methods", completed: true },
            { id: "cs506_u1_t3", title: "Master Theorem and Akra-Bazzi generalization theorem", completed: true },
            { id: "cs506_u1_t4", title: "Divide and Conquer: Strassen's Matrix Multiplication", completed: true },
            { id: "cs506_u1_t5", title: "Amortized analysis: Aggregate, Accounting, and Potential methods", completed: true }
          ]
        },
        {
          unitNumber: 2,
          title: "Dynamic Programming Paradigms",
          hours: 10,
          completed: true,
          topics: [
            { id: "cs506_u2_t1", title: "Principle of Optimality and overlapping subproblems characterization", completed: true },
            { id: "cs506_u2_t2", title: "Matrix Chain Multiplication optimal parenthesization formulation", completed: true },
            { id: "cs506_u2_t3", title: "Longest Common Subsequence (LCS) and Edit Distance", completed: true },
            { id: "cs506_u2_t4", title: "0/1 Knapsack dynamic programming table construction", completed: true },
            { id: "cs506_u2_t5", title: "Traveling Salesperson Problem with Held-Karp algorithm", completed: false }
          ]
        },
        {
          unitNumber: 3,
          title: "Greedy Strategy & Graph Algorithms",
          hours: 10,
          completed: false,
          topics: [
            { id: "cs506_u3_t1", title: "Greedy choice property: Fractional Knapsack & Activity Selection", completed: true },
            { id: "cs506_u3_t2", title: "Optimal prefix codes: Huffman Coding tree derivation", completed: true },
            { id: "cs506_u3_t3", title: "Minimum Spanning Trees: Kruskal's with DSU vs Prim's with Min-Heap", completed: true },
            { id: "cs506_u3_t4", title: "Single-source shortest paths: Dijkstra vs Bellman-Ford algorithms", completed: false },
            { id: "cs506_u3_t5", title: "All-pairs shortest paths: Floyd-Warshall and Johnson's algorithm", completed: false }
          ]
        },
        {
          unitNumber: 4,
          title: "Backtracking & Branch-and-Bound",
          hours: 10,
          completed: false,
          topics: [
            { id: "cs506_u4_t1", title: "State space trees and 8-Queens backtracking solution", completed: false },
            { id: "cs506_u4_t2", title: "Subset Sum and Graph Coloring m-colorability decision problems", completed: false },
            { id: "cs506_u4_t3", title: "Hamiltonian Cycle detection via backtracking", completed: false },
            { id: "cs506_u4_t4", title: "Branch and Bound: 15-Puzzle problem with Manhattan heuristic", completed: false },
            { id: "cs506_u4_t5", title: "0/1 Knapsack solution via FIFO/LIFO Branch and Bound", completed: false }
          ]
        },
        {
          unitNumber: 5,
          title: "NP-Completeness & Advanced Topics",
          hours: 8,
          completed: false,
          topics: [
            { id: "cs506_u5_t1", title: "Tractable vs Intractable problems: Complexity classes P and NP", completed: false },
            { id: "cs506_u5_t2", title: "Polynomial-time reductions and Cook-Levin Theorem", completed: false },
            { id: "cs506_u5_t3", title: "NP-Complete proofs: 3-SAT to Vertex Cover and Independent Set", completed: false },
            { id: "cs506_u5_t4", title: "Approximation algorithms: 2-Approximation for Vertex Cover", completed: false }
          ]
        }
      ]
    }
  },

  // Practical Lab courses and Experiments
  labs: [
    {
      labId: "LAB-CS501",
      labCode: "CS501L",
      labName: "Advanced Java Programming Laboratory",
      subjectId: "CS501",
      facultyInCharge: "Prof. Rajesh Verma",
      labAssistant: "Er. Sandeep Rawat",
      labLocation: "Software Lab 3, 2nd Floor",
      timings: "Tuesdays, 02:00 PM – 05:00 PM",
      totalExperiments: 4,
      completedExperiments: 3,
      experiments: [
        {
          id: "EXP-CS501-01",
          expNo: 1,
          title: "High-Throughput Thread Pool & Producer-Consumer Pipeline",
          objective: "Implement a thread-safe multi-worker queue using java.util.concurrent.BlockingQueue, ReentrantLock, and Condition variables with poison pill shutdown.",
          toolsRequired: ["JDK 21 LTS", "IntelliJ IDEA / Eclipse", "VisualVM Profiler"],
          scheduledDate: "2026-08-25",
          completionStatus: "Completed",
          marksAwarded: 19,
          maxMarks: 20,
          manualSummary: "Students configure producer threads pushing telemetry payloads into an ArrayBlockingQueue. Four consumer threads pull tasks, simulate mathematical processing, and log latency metrics. Deadlock prevention is verified under heavy load.",
          instructions: [
            "Create a CustomWorkerPool class managing 4 active threads.",
            "Use an explicit ReentrantLock with fair queuing policy.",
            "Test with 10,000 asynchronous messages and inspect thread states in VisualVM.",
            "Submit memory heap dump and CPU execution graph."
          ],
          sampleCode: `public class CustomWorkerPool {
    private final BlockingQueue<Runnable> taskQueue;
    private final List<Thread> workers;
    private volatile boolean isRunning = true;

    public CustomWorkerPool(int capacity, int threadCount) {
        this.taskQueue = new LinkedBlockingQueue<>(capacity);
        this.workers = new ArrayList<>();
        for (int i = 0; i < threadCount; i++) {
            Thread worker = new Thread(new WorkerRunner());
            workers.add(worker);
            worker.start();
        }
    }
}`
        },
        {
          id: "EXP-CS501-02",
          expNo: 2,
          title: "Parallel Stream Pipelines & Map-Reduce Benchmarking",
          objective: "Analyze large-scale text log files using Java Streams API (Collectors, groupingBy, parallelStream) and compare wall-clock throughput against sequential loops.",
          toolsRequired: ["JDK 21", "JMH (Java Microbenchmark Harness)", "Apache Maven"],
          scheduledDate: "2026-09-08",
          completionStatus: "Completed",
          marksAwarded: 20,
          maxMarks: 20,
          manualSummary: "Process an Apache HTTP access log dataset (1.2 GB). Calculate top IP addresses, 404 URL frequencies, and hourly traffic distribution using custom Collectors and parallel streams.",
          instructions: [
            "Stream lines lazily via Files.lines(Path.of('access.log')).",
            "Group records by HTTP status code using Collectors.groupingByConcurrent.",
            "Benchmark using JMH with @BenchmarkMode(Mode.AverageTime).",
            "Report thread contention bottlenecks when shared mutable state is inadvertently introduced."
          ],
          sampleCode: `Map<String, Long> ipFrequency = Files.lines(path)
    .parallel()
    .map(LogParser::extractIp)
    .collect(Collectors.groupingByConcurrent(Function.identity(), Collectors.counting()));`
        },
        {
          id: "EXP-CS501-03",
          expNo: 3,
          title: "Custom Dependency Injection Framework with Reflection",
          objective: "Build a miniature IoC container using custom runtime annotations (@Inject, @Service, @Singleton) and Java Reflection API to wire decoupled service dependencies.",
          toolsRequired: ["JDK 21", "Maven / Gradle", "JUnit 5"],
          scheduledDate: "2026-09-22",
          completionStatus: "Completed",
          marksAwarded: 18,
          maxMarks: 20,
          manualSummary: "Demonstrates bean registration, circular dependency detection via directed cycle inspection, and dynamic reflection instantiation via Constructor.newInstance().",
          instructions: [
            "Define @Component and @Autowired annotations with @Retention(RetentionPolicy.RUNTIME).",
            "Implement ApplicationContext.scanPackage(String basePackage).",
            "Instantiate beans in topological sort order to satisfy dependencies.",
            "Write unit tests with Mockito to assert correct injection."
          ],
          sampleCode: `@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.FIELD)
public @interface Autowired {}`
        },
        {
          id: "EXP-CS501-04",
          expNo: 4,
          title: "Asynchronous REST Client using Java 21 Virtual Threads & HttpClient",
          objective: "Fetch distributed weather sensor data concurrently across 50 endpoints using Java 21 Structured Concurrency and java.net.http.HttpClient.",
          toolsRequired: ["JDK 21", "Mockoon / WireMock HTTP server", "cURL"],
          scheduledDate: "2026-10-20",
          completionStatus: "Scheduled",
          marksAwarded: null,
          maxMarks: 20,
          manualSummary: "Use StructuredTaskScope.ShutdownOnFailure() to fire 50 virtual threads retrieving JSON responses simultaneously without blocking kernel OS threads.",
          instructions: [
            "Spawn tasks inside try-with-resources StructuredTaskScope.",
            "Enforce a 1500ms timeout using scope.joinUntil(Instant.now().plusMillis(1500)).",
            "Aggregate JSON payloads and handle graceful socket fallback.",
            "Document memory footprints compared to traditional fixed thread pools."
          ],
          sampleCode: `try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
    Supplier<String> task1 = scope.fork(() -> fetchApi("node-1"));
    scope.join();
    scope.throwIfFailed();
}`
        }
      ]
    },

    {
      labId: "LAB-CS502",
      labCode: "CS502L",
      labName: "Database Systems & SQL Optimization Laboratory",
      subjectId: "CS502",
      facultyInCharge: "Dr. Meenakshi Sundaram",
      labAssistant: "Er. Kavita Reddy",
      labLocation: "Database Lab 2, 1st Floor",
      timings: "Wednesdays, 02:00 PM – 05:00 PM",
      totalExperiments: 4,
      completedExperiments: 3,
      experiments: [
        {
          id: "EXP-CS502-01",
          expNo: 1,
          title: "Complex Relational Schema Construction & Referential Integrity",
          objective: "Formulate DDL commands for a university examination ERP with composite primary keys, check constraints, cascading foreign keys, and audit trigger sequences.",
          toolsRequired: ["PostgreSQL 16", "pgAdmin 4", "DBeaver"],
          scheduledDate: "2026-08-26",
          completionStatus: "Completed",
          marksAwarded: 20,
          maxMarks: 20,
          manualSummary: "Construct schema for Students, Departments, Courses, Enrollments, and Grades with on delete cascade/restrict semantics and timestamp audit triggers.",
          instructions: [
            "Create database schema erp_academic.",
            "Write PL/pgSQL function to prevent registering students for overlapping course slots.",
            "Test cascade deletions and foreign key integrity constraint violations.",
            "Export complete schema script as erp_schema.sql."
          ],
          sampleCode: `CREATE TABLE enrollments (
    enrollment_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    student_id VARCHAR(20) REFERENCES students(reg_id) ON DELETE CASCADE,
    course_id VARCHAR(10) REFERENCES courses(course_code),
    enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_enrollment UNIQUE(student_id, course_id)
);`
        },
        {
          id: "EXP-CS502-02",
          expNo: 2,
          title: "Advanced Query Formulation with CTEs & Window Functions",
          objective: "Author analytical queries computing moving average student grades, percentile ranks within cohorts, and cohort retention rates using Common Table Expressions.",
          toolsRequired: ["PostgreSQL 16", "psql CLI"],
          scheduledDate: "2026-09-09",
          completionStatus: "Completed",
          marksAwarded: 18,
          maxMarks: 20,
          manualSummary: "Query complex datasets with ROW_NUMBER(), DENSE_RANK(), LAG(), LEAD(), and recursive CTEs traversing hierarchical department reporting trees.",
          instructions: [
            "Calculate department-wise top 3 scoring students per semester using DENSE_RANK().",
            "Compute semester-over-semester GPA deltas using LAG().",
            "Generate hierarchical organization tree using WITH RECURSIVE.",
            "Verify query outputs against ground truth test fixtures."
          ],
          sampleCode: `WITH RankedStudents AS (
    SELECT student_id, department_id, gpa,
           DENSE_RANK() OVER (PARTITION BY department_id ORDER BY gpa DESC) as rank_in_dept
    FROM academic_records
)
SELECT * FROM RankedStudents WHERE rank_in_dept <= 3;`
        },
        {
          id: "EXP-CS502-03",
          expNo: 3,
          title: "B+ Tree Index Profiling & EXPLAIN ANALYZE Optimization",
          objective: "Profile query latency over 1,000,000 rows. Analyze cost metrics of sequential scan vs index scan, composite indexes, and index selectivity.",
          toolsRequired: ["PostgreSQL 16", "Python Faker script (Data generator)"],
          scheduledDate: "2026-09-23",
          completionStatus: "Completed",
          marksAwarded: 19,
          maxMarks: 20,
          manualSummary: "Seed a 1-million record student log table. Compare EXPLAIN (ANALYZE, BUFFERS) before and after creating B+ Tree and Partial indexes.",
          instructions: [
            "Execute query filtering on unindexed columns and record execution time (approx 120ms).",
            "Create composite index: CREATE INDEX idx_student_status ON student_logs (status, created_at).",
            "Re-run query and show Index Scan reduction to under 1.5ms.",
            "Attach query plan visualizer screenshots."
          ],
          sampleCode: `EXPLAIN (ANALYZE, BUFFERS, VERBOSE)
SELECT student_id, log_message, created_at
FROM student_logs
WHERE status = 'ACTIVE' AND created_at >= '2026-09-01';`
        },
        {
          id: "EXP-CS502-04",
          expNo: 4,
          title: "Transaction Concurrency Isolation & Deadlock Reproduction",
          objective: "Simulate concurrent terminal transactions under Read Committed, Repeatable Read, and Serializable isolation levels; intentionally trigger a 2-session deadlock.",
          toolsRequired: ["PostgreSQL 16", "Two concurrent psql shell terminals"],
          scheduledDate: "2026-10-21",
          completionStatus: "Scheduled",
          marksAwarded: null,
          maxMarks: 20,
          manualSummary: "Inspect phantom reads, non-repeatable reads, and deadlock detection logs (deadlock_timeout = 1s) when two sessions lock records in reverse order.",
          instructions: [
            "Open two terminals connecting to same database.",
            "Execute interleaving UPDATE statements on row A and row B.",
            "Observe server deadlock resolution: 'ERROR: deadlock detected'.",
            "Document rollback handling and how application-level retries mitigate errors."
          ],
          sampleCode: `-- Session 1:
BEGIN; UPDATE accounts SET balance = balance - 100 WHERE id = 1;
-- Session 2:
BEGIN; UPDATE accounts SET balance = balance + 100 WHERE id = 2;`
        }
      ]
    },

    {
      labId: "LAB-CS503",
      labCode: "CS503L",
      labName: "Operating Systems & Linux Systems Programming Lab",
      subjectId: "CS503",
      facultyInCharge: "Prof. Arvind Swaminathan",
      labAssistant: "Er. Manoj Tiwari",
      labLocation: "Systems Lab 1, Ground Floor",
      timings: "Thursdays, 02:00 PM – 05:00 PM",
      totalExperiments: 4,
      completedExperiments: 2,
      experiments: [
        {
          id: "EXP-CS503-01",
          expNo: 1,
          title: "Process Creation, Fork Trees, and Zombie Process Management in C",
          objective: "Understand POSIX system calls (fork, execvp, waitpid) in C. Generate process hierarchies and demonstrate the creation and reap of orphan and zombie processes.",
          toolsRequired: ["Ubuntu Linux 24.04 LTS", "GCC 13", "GDB Debugger", "Bash Shell"],
          scheduledDate: "2026-08-27",
          completionStatus: "Completed",
          marksAwarded: 19,
          maxMarks: 20,
          manualSummary: "Write C programs demonstrating fork() return value semantics. Use ps aux | grep 'Z' to inspect defunct processes before calling waitpid().",
          instructions: [
            "Create a binary fork_hierarchy that generates 3 child processes.",
            "Have one child terminate immediately while parent sleeps 10s to observe zombie status.",
            "Implement SIGCHLD signal handler to reap children asynchronously.",
            "Compile with gcc -Wall -Wextra -std=c11."
          ],
          sampleCode: `#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    pid_t pid = fork();
    if (pid == 0) {
        printf("Child process PID: %d\\n", getpid());
        _exit(0);
    } else {
        printf("Parent PID: %d spawned child: %d\\n", getpid(), pid);
        wait(NULL);
    }
    return 0;
}`
        },
        {
          id: "EXP-CS503-02",
          expNo: 2,
          title: "Inter-Process Communication via POSIX Shared Memory & Semaphores",
          objective: "Implement a bounded-buffer producer-consumer architecture communicating over shm_open, ftruncate, mmap, and POSIX named semaphores (sem_open).",
          toolsRequired: ["Linux GCC", "POSIX pthread library (-lrt -lpthread)"],
          scheduledDate: "2026-09-10",
          completionStatus: "Completed",
          marksAwarded: 20,
          maxMarks: 20,
          manualSummary: "Two separate C binaries (producer and consumer) synchronize access to a circular memory buffer allocated in /dev/shm without data races.",
          instructions: [
            "Allocate shared memory using shm_open('/shm_buffer', O_CREAT | O_RDWR, 0666).",
            "Synchronize using three semaphores: mutex (binary), empty (counting), full (counting).",
            "Simulate variable processing latency with usleep().",
            "Verify memory cleanliness by unlinking shared descriptors upon SIGINT."
          ],
          sampleCode: `sem_t *mutex = sem_open("/sem_mutex", O_CREAT, 0644, 1);
sem_t *empty = sem_open("/sem_empty", O_CREAT, 0644, BUFFER_SIZE);
sem_t *full  = sem_open("/sem_full",  O_CREAT, 0644, 0);`
        },
        {
          id: "EXP-CS503-03",
          expNo: 3,
          title: "Multi-threaded CPU Scheduling Simulator (Round Robin & Multi-Level Queue)",
          objective: "Develop a discrete-event scheduling simulator in C/C++ calculating average turnaround time, waiting time, and CPU utilization across preemptive algorithms.",
          toolsRequired: ["GCC / Clang", "Linux terminal", "Valgrind memory checker"],
          scheduledDate: "2026-10-08",
          completionStatus: "In Review",
          marksAwarded: null,
          maxMarks: 20,
          manualSummary: "Parse process arrival times and CPU burst lists. Simulate Round Robin with configurable time quantum Q=2ms and Q=4ms. Output Gantt chart ASCII representation.",
          instructions: [
            "Accept input CSV containing: ProcessID, ArrivalTime, BurstTime, Priority.",
            "Implement Ready Queue using linked lists.",
            "Handle context-switch overhead time penalty (cs_penalty = 1ms).",
            "Generate ASCII Gantt timeline and summary comparison tables."
          ],
          sampleCode: `struct Process {
    char id[8];
    int arrival;
    int burst;
    int remaining;
    int completion;
    int waiting;
};`
        },
        {
          id: "EXP-CS503-04",
          expNo: 4,
          title: "Custom User-Space Micro-Shell (mysh) with Piping & Redirection",
          objective: "Construct a command-line Unix shell supporting internal builtins (cd, exit, help), background execution (&), pipe chaining (|), and file redirection (<, >).",
          toolsRequired: ["Linux GCC", "Standard POSIX C Libraries"],
          scheduledDate: "2026-10-22",
          completionStatus: "Scheduled",
          marksAwarded: null,
          maxMarks: 20,
          manualSummary: "Tokenize input strings into argument vectors. Use pipe() and dup2() to connect stdout of process A to stdin of process B.",
          instructions: [
            "Implement command loop: print prompt, fgets(), parse tokens with strtok().",
            "Detect '|' and create pipe file descriptors fd[2].",
            "Handle redirection using open() with O_RDONLY / O_WRONLY | O_CREAT.",
            "Prevent memory leaks and handle terminal signals (SIGINT, SIGTSTP)."
          ],
          sampleCode: `int pfd[2];
pipe(pfd);
if (fork() == 0) {
    dup2(pfd[1], STDOUT_FILENO);
    close(pfd[0]);
    execvp(cmd1[0], cmd1);
}`
        }
      ]
    },

    {
      labId: "LAB-CS504",
      labCode: "CS504L",
      labName: "Computer Networks & Packet Inspection Laboratory",
      subjectId: "CS504",
      facultyInCharge: "Dr. Preeti Deshmukh",
      labAssistant: "Er. Sumit Jha",
      labLocation: "Networking Lab 4, 3rd Floor",
      timings: "Fridays, 02:00 PM – 05:00 PM",
      totalExperiments: 4,
      completedExperiments: 2,
      experiments: [
        {
          id: "EXP-CS504-01",
          expNo: 1,
          title: "Wireshark Packet Capture & Protocol Layer Analysis",
          objective: "Capture live campus LAN traffic using Wireshark; dissect Ethernet frames, IP packet headers, ARP discovery packets, and DNS resolution workflows.",
          toolsRequired: ["Wireshark 4.2", "tcpdump CLI", "Ethernet Hub / Switch"],
          scheduledDate: "2026-08-28",
          completionStatus: "Completed",
          marksAwarded: 19,
          maxMarks: 20,
          manualSummary: "Capture packets during ping and nslookup queries. Inspect MAC hardware addresses, IP TTL decrementing across hops, and ARP request broadcast vs unicast replies.",
          instructions: [
            "Start Wireshark capture on eth0 interface with capture filter 'arp or icmp'.",
            "Flush local ARP cache: sudo ip -s -s neigh flush all.",
            "Ping gateway router and analyze ARP Who-has broadcast frame (ff:ff:ff:ff:ff:ff).",
            "Export pcap capture file and annotate packet bytes in lab report."
          ],
          sampleCode: `# Capture terminal command
sudo tcpdump -i any -c 20 -nn -vv "icmp or port 53"`
        },
        {
          id: "EXP-CS504-02",
          expNo: 2,
          title: "TCP 3-Way Handshake & Flow Control Analysis in Wireshark",
          objective: "Inspect TCP connection setup (SYN, SYN-ACK, ACK), Sequence & Acknowledgment number incrementing, TCP Window scaling, and connection teardown (FIN/RST).",
          toolsRequired: ["Wireshark", "cURL", "Netcat (nc)"],
          scheduledDate: "2026-09-11",
          completionStatus: "Completed",
          marksAwarded: 18,
          maxMarks: 20,
          manualSummary: "Trace HTTP downloads over TCP. Track Sliding Window advertisement, packet retransmissions under induced loss, and round-trip time (RTT) estimations.",
          instructions: [
            "Filter capture with 'tcp.port == 80 || tcp.port == 443'.",
            "Trace relative vs absolute sequence numbers during handshake.",
            "Plot Wireshark 'TCP Stream Graphs' -> 'Time-Sequence Graph (Stevens)'.",
            "Identify Fast Retransmit occurrences upon receiving 3 duplicate ACKs."
          ],
          sampleCode: `# Initiate netcat stream
nc -v -l 9090 &
nc -v 127.0.0.1 9090`
        },
        {
          id: "EXP-CS504-03",
          expNo: 3,
          title: "Concurrent Multi-Client Chat Server using BSD Socket API in C",
          objective: "Build a non-blocking TCP chat server using C socket API (socket, bind, listen, accept) and I/O multiplexing via select() or epoll().",
          toolsRequired: ["Linux GCC", "BSD Socket headers (<sys/socket.h>, <netinet/in.h>)"],
          scheduledDate: "2026-10-09",
          completionStatus: "Completed",
          marksAwarded: 20,
          maxMarks: 20,
          manualSummary: "Server multiplexes multiple concurrent telnet clients over single process using select(). Broadcasts incoming messages to all active connected peer sockets.",
          instructions: [
            "Initialize socket(AF_INET, SOCK_STREAM, 0) with SO_REUSEADDR.",
            "Maintain fd_set master set of connected file descriptors.",
            "Detect new connections on listening socket vs incoming data on active clients.",
            "Clean up disconnected sockets upon read() returning 0."
          ],
          sampleCode: `fd_set read_fds;
FD_ZERO(&read_fds);
FD_SET(server_fd, &read_fds);
int activity = select(max_fd + 1, &read_fds, NULL, NULL, NULL);`
        },
        {
          id: "EXP-CS504-04",
          expNo: 4,
          title: "Distance Vector Routing Algorithm Simulator (Bellman-Ford in C)",
          objective: "Simulate a network graph of 6 routers exchanging routing tables; implement periodic updates and demonstrate split horizon solution to the Count-to-Infinity problem.",
          toolsRequired: ["GCC compiler", "Linux shell"],
          scheduledDate: "2026-10-23",
          completionStatus: "Scheduled",
          marksAwarded: null,
          maxMarks: 20,
          manualSummary: "Each router maintains a distance vector table. Nodes exchange tables with direct neighbors until routing convergence is reached.",
          instructions: [
            "Initialize cost adjacency matrix from input topology.",
            "Execute iterative Bellman-Ford equation: D_x(y) = min_v { c(x,v) + D_v(y) }.",
            "Simulate link failure between router A and B and observe convergence cycles.",
            "Implement poison reverse heuristic and measure cycle reduction."
          ],
          sampleCode: `for (int k = 0; k < num_nodes; k++) {
    for (int i = 0; i < num_nodes; i++) {
        for (int j = 0; j < num_nodes; j++) {
            if (dist[i][k] + dist[k][j] < dist[i][j])
                dist[i][j] = dist[i][k] + dist[k][j];
        }
    }
}`
        }
      ]
    }
  ],

  // Assignments & Project Deliverables
  assignments: [
    {
      id: "ASG-CS501-01",
      title: "Concurrent Thread Pool & Work-Stealing Simulator",
      subjectId: "CS501",
      subjectCode: "CS501",
      subjectName: "Java Programming",
      faculty: "Prof. Rajesh Verma",
      description: "Design a high-throughput Java work-stealing thread pool implementing the ForkJoin framework principles. Benchmark throughput against standard ThreadPoolExecutor under skewed load distributions.",
      issueDate: "2026-09-20",
      dueDate: "2026-10-05",
      maxMarks: 25,
      instructions: [
        "Use modern Java 21 LTS features.",
        "Include unit tests asserting zero deadlock across 50,000 tasks.",
        "Provide a markdown report with VisualVM graphs and latency distributions.",
        "Archive code into a clean ZIP or TAR file."
      ],
      attachmentName: "Java_ThreadPool_Specification_v2.pdf",
      attachmentSize: "1.4 MB",
      status: "Submitted",
      submittedDate: "2026-10-04T18:42:00",
      submittedFileName: "DEMO2025_Java_ThreadPool_Submission.zip",
      marksAwarded: 24,
      facultyFeedback: "Excellent work on Lock-free Deque implementation and benchmarking graphs."
    },
    {
      id: "ASG-CS502-02",
      title: "B+ Tree Index Engine & Query Planner Benchmark",
      subjectId: "CS502",
      subjectCode: "CS502",
      subjectName: "Database Management Systems",
      faculty: "Dr. Meenakshi Sundaram",
      description: "Implement a disk-backed B+ tree index in Java or Python. Support node splitting, leaf pointer chaining, and key lookups. Profile against 1,000,000 records.",
      issueDate: "2026-10-01",
      dueDate: "2026-10-15", // Due in ~3 days
      maxMarks: 30,
      instructions: [
        "Root node must split when order M exceeds configured threshold.",
        "Leaves must maintain bidirectional linked list pointers for range scans.",
        "Demonstrate point query (O(log N)) and range query performance.",
        "Include automated test suite verifying edge cases."
      ],
      attachmentName: "DBMS_BTree_Assignment_Brief.pdf",
      attachmentSize: "2.1 MB",
      status: "Pending",
      submittedDate: null,
      submittedFileName: null,
      marksAwarded: null,
      facultyFeedback: null
    },
    {
      id: "ASG-CS503-03",
      title: "Discrete Event CPU Scheduler Simulation with IO Bursts",
      subjectId: "CS503",
      subjectCode: "CS503",
      subjectName: "Operating Systems",
      faculty: "Prof. Arvind Swaminathan",
      description: "Construct a comprehensive simulator in C/C++ comparing FCFS, Shortest Job First, Round Robin, and Multi-Level Feedback Queue with I/O blocking queues.",
      issueDate: "2026-10-05",
      dueDate: "2026-10-18", // Due in 6 days
      maxMarks: 25,
      instructions: [
        "Model CPU burst and I/O burst phases per process.",
        "Calculate turnaround time, waiting time, and CPU utilization percentage.",
        "Export an interactive SVG or text-based Gantt chart.",
        "Compile with gcc -Wall -Wextra with no warnings."
      ],
      attachmentName: "OS_Scheduler_Assignment_Guidelines.pdf",
      attachmentSize: "890 KB",
      status: "Pending",
      submittedDate: null,
      submittedFileName: null,
      marksAwarded: null,
      facultyFeedback: null
    },
    {
      id: "ASG-CS504-01",
      title: "TCP Congestion Control & Packet Loss Analysis in Wireshark",
      subjectId: "CS504",
      subjectCode: "CS504",
      subjectName: "Computer Networks",
      faculty: "Dr. Preeti Deshmukh",
      description: "Analyze pcap traces of high-bandwidth video transfers. Trace TCP Tahoe and Reno recovery mechanisms under artificial packet drop conditions.",
      issueDate: "2026-09-15",
      dueDate: "2026-09-30",
      maxMarks: 20,
      instructions: [
        "Identify 3-duplicate ACK events and timeout events.",
        "Plot congestion window (cwnd) growth over time.",
        "Explain difference between Fast Retransmit and Fast Recovery.",
        "Submit technical PDF report."
      ],
      attachmentName: "Network_Wireshark_Assignment.pcap",
      attachmentSize: "8.4 MB",
      status: "Submitted",
      submittedDate: "2026-09-29T21:15:00",
      submittedFileName: "Sahil_Singh_DEMO2025_TCP_Analysis.pdf",
      marksAwarded: 19,
      facultyFeedback: "Clear identification of Fast Recovery phase."
    },
    {
      id: "ASG-CS505-02",
      title: "Agile Sprint Backlog & Architectural UML Model for Campus OS",
      subjectId: "CS505",
      subjectCode: "CS505",
      subjectName: "Software Engineering",
      faculty: "Dr. Ananya Sharma",
      description: "Author complete IEEE 830 compliant SRS section, User Story Backlog with story points, and UML 2.5 Class + Sequence Diagrams for a Student Information System.",
      issueDate: "2026-10-02",
      dueDate: "2026-10-14", // Due in 2 days!
      maxMarks: 25,
      instructions: [
        "Include minimum 12 user stories with INVEST evaluation.",
        "Produce architectural Class Diagram with design patterns identified.",
        "Produce Sequence Diagram illustrating student course enrollment flow.",
        "Format as clean academic PDF."
      ],
      attachmentName: "SE_Sprint_Backlog_Template.docx",
      attachmentSize: "650 KB",
      status: "Pending",
      submittedDate: null,
      submittedFileName: null,
      marksAwarded: null,
      facultyFeedback: null
    },
    {
      id: "ASG-CS506-03",
      title: "Dynamic Programming: Matrix Chain Multiplication & Optimal BST",
      subjectId: "CS506",
      subjectCode: "CS506",
      subjectName: "Design and Analysis of Algorithms",
      faculty: "Prof. Vikramaditya Sen",
      description: "Formulate recurrence relations and construct dynamic programming tables for Matrix Chain Multiplication and Optimal Binary Search Trees. Prove time complexity.",
      issueDate: "2026-09-22",
      dueDate: "2026-10-08", // Overdue by 4 days!
      maxMarks: 20,
      instructions: [
        "Derive subproblem recurrence relations step-by-step.",
        "Show optimal parenthesization table for matrices [10, 20, 30, 40, 30].",
        "Implement working program in C/C++ or Python.",
        "Late submissions incur standard penalty unless advisor-approved."
      ],
      attachmentName: "DAA_DP_Assignment_Questions.pdf",
      attachmentSize: "1.1 MB",
      status: "Overdue",
      submittedDate: null,
      submittedFileName: null,
      marksAwarded: null,
      facultyFeedback: null
    },
    {
      id: "ASG-CS501-02",
      title: "Java 21 Virtual Threads & Structured Concurrency Case Study",
      subjectId: "CS501",
      subjectCode: "CS501",
      subjectName: "Java Programming",
      faculty: "Prof. Rajesh Verma",
      description: "Conduct benchmark analysis comparing throughput of 100,000 platform threads vs 100,000 virtual threads handling simulated blocking socket requests.",
      issueDate: "2026-10-10",
      dueDate: "2026-10-25", // Due in 13 days
      maxMarks: 30,
      instructions: [
        "Measure JVM resident memory overhead (RSS) in both modes.",
        "Utilize StructuredTaskScope to coordinate concurrent child computations.",
        "Document carrier thread pinning situations when using synchronized blocks vs ReentrantLock.",
        "Submit GitHub repository link or archive."
      ],
      attachmentName: "Loom_Virtual_Threads_Guide.pdf",
      attachmentSize: "3.2 MB",
      status: "Pending",
      submittedDate: null,
      submittedFileName: null,
      marksAwarded: null,
      facultyFeedback: null
    }
  ],

  // Weekly Timetable Schedule
  timetable: {
    Monday: [
      { time: "09:00 - 10:00", subjectId: "CS501", subjectName: "Java Programming", type: "Lecture", room: "Hall 302", faculty: "Prof. Rajesh Verma" },
      { time: "10:15 - 11:15", subjectId: "CS502", subjectName: "Database Management Systems", type: "Lecture", room: "Hall 305", faculty: "Dr. Meenakshi Sundaram" },
      { time: "11:30 - 12:30", subjectId: "CS503", subjectName: "Operating Systems", type: "Lecture", room: "Hall 301", faculty: "Prof. Arvind Swaminathan" },
      { time: "13:30 - 14:30", subjectId: "CS504", subjectName: "Computer Networks", type: "Lecture", room: "Hall 308", faculty: "Dr. Preeti Deshmukh" },
      { time: "15:15 - 16:15", subjectId: "CS505", subjectName: "Software Engineering", type: "Lecture", room: "Seminar Hall B", faculty: "Dr. Ananya Sharma" }
    ],
    Tuesday: [
      { time: "09:00 - 10:00", subjectId: "CS501", subjectName: "Java Programming", type: "Lecture", room: "Hall 302", faculty: "Prof. Rajesh Verma" },
      { time: "10:15 - 11:15", subjectId: "CS506", subjectName: "Design and Analysis of Algorithms", type: "Lecture", room: "Hall 304", faculty: "Prof. Vikramaditya Sen" },
      { time: "14:00 - 17:00", subjectId: "CS501", subjectName: "Java Programming Lab (CS501L)", type: "Lab", room: "Software Lab 3", faculty: "Prof. Rajesh Verma" }
    ],
    Wednesday: [
      { time: "09:00 - 10:00", subjectId: "CS503", subjectName: "Operating Systems", type: "Lecture", room: "Hall 301", faculty: "Prof. Arvind Swaminathan" },
      { time: "10:15 - 11:15", subjectId: "CS502", subjectName: "Database Management Systems", type: "Lecture", room: "Hall 305", faculty: "Dr. Meenakshi Sundaram" },
      { time: "14:00 - 17:00", subjectId: "CS502", subjectName: "DBMS Lab (CS502L)", type: "Lab", room: "Database Lab 2", faculty: "Dr. Meenakshi Sundaram" }
    ],
    Thursday: [
      { time: "09:00 - 10:00", subjectId: "CS504", subjectName: "Computer Networks", type: "Lecture", room: "Hall 308", faculty: "Dr. Preeti Deshmukh" },
      { time: "10:15 - 11:15", subjectId: "CS506", subjectName: "Design and Analysis of Algorithms", type: "Lecture", room: "Hall 304", faculty: "Prof. Vikramaditya Sen" },
      { time: "11:30 - 12:30", subjectId: "CS505", subjectName: "Software Engineering", type: "Lecture", room: "Seminar Hall B", faculty: "Dr. Ananya Sharma" },
      { time: "14:00 - 17:00", subjectId: "CS503", subjectName: "Operating Systems Lab (CS503L)", type: "Lab", room: "Systems Lab 1", faculty: "Prof. Arvind Swaminathan" }
    ],
    Friday: [
      { time: "09:00 - 10:00", subjectId: "CS501", subjectName: "Java Programming", type: "Lecture", room: "Hall 302", faculty: "Prof. Rajesh Verma" },
      { time: "10:15 - 11:15", subjectId: "CS502", subjectName: "Database Management Systems", type: "Lecture", room: "Hall 305", faculty: "Dr. Meenakshi Sundaram" },
      { time: "11:30 - 12:30", subjectId: "CS506", subjectName: "Design and Analysis of Algorithms", type: "Lecture", room: "Hall 304", faculty: "Prof. Vikramaditya Sen" },
      { time: "14:00 - 17:00", subjectId: "CS504", subjectName: "Computer Networks Lab (CS504L)", type: "Lab", room: "Networking Lab 4", faculty: "Dr. Preeti Deshmukh" }
    ]
  },

  // Notifications and Announcements
  notifications: [
    {
      id: "NOTIF-01",
      title: "Attendance Alert: Shortage in Computer Networks (CS504)",
      category: "Attendance",
      priority: "high",
      date: "2026-10-12T08:30:00",
      read: false,
      message: "Your current attendance in Computer Networks is 72.0% (18/25 classes), which falls below the mandatory 75% institutional threshold. You must attend the next 3 consecutive classes without absence to regain eligibility.",
      actionLink: "attendance.html"
    },
    {
      id: "NOTIF-02",
      title: "Mid-Term Examination Schedule Announced — Sem 5",
      category: "Academic",
      priority: "medium",
      date: "2026-10-11T14:15:00",
      read: false,
      message: "The Mid-Semester Examinations for B.Tech Semester 5 will commence on November 02, 2026. Detailed seating blueprints and examination guidelines have been posted to the notice board.",
      actionLink: "syllabus.html"
    },
    {
      id: "NOTIF-03",
      title: "Assignment Deadline Reminder: Software Engineering UML",
      category: "Assignment",
      priority: "high",
      date: "2026-10-10T16:00:00",
      read: false,
      message: "Assignment ASG-CS505-02 (Agile Sprint Backlog & UML Architecture) is due on October 14, 2026 at 11:59 PM. Ensure your submission includes verified sequence and class diagrams.",
      actionLink: "assignments.html"
    },
    {
      id: "NOTIF-04",
      title: "Advanced Java Lab: Experiment 4 Virtual Threads Notice",
      category: "Lab",
      priority: "low",
      date: "2026-10-09T11:00:00",
      read: true,
      message: "Lab experiment 4 scheduled for October 20 will require JDK 21 LTS pre-installed on personal laptops. The sample test suite and mock endpoints are now available.",
      actionLink: "labs.html"
    },
    {
      id: "NOTIF-05",
      title: "Library Resource Update: IEEE & ACM Digital Library Access",
      category: "General",
      priority: "low",
      date: "2026-10-06T09:45:00",
      read: true,
      message: "Campus institutional IP subscriptions for IEEE Xplore and ACM Digital Library have been renewed for the 2026-27 academic session. Access is enabled across campus Wi-Fi and student VPN.",
      actionLink: "dashboard.html"
    },
    {
      id: "NOTIF-06",
      title: "Guest Lecture on Distributed Consensus & Raft Protocol",
      category: "Academic",
      priority: "medium",
      date: "2026-10-04T10:30:00",
      read: true,
      message: "Dr. K. Ramanathan, Principal Architect at CloudScale Systems, will deliver a special session on Distributed Consensus Protocols on Friday at 04:00 PM in the Main Auditorium.",
      actionLink: "dashboard.html"
    }
  ],

  // Recent Academic Activities Feed
  activities: [
    {
      id: "ACT-01",
      timestamp: "2026-10-12 10:00 AM",
      type: "attendance",
      title: "Attended CS501: Java Programming",
      detail: "Topic: Concurrent Collections & BlockingQueue",
      badge: "Present"
    },
    {
      id: "ACT-02",
      timestamp: "2026-10-11 04:30 PM",
      type: "attendance",
      title: "Attended CS506: Algorithms",
      detail: "Topic: NP-Completeness & 3-SAT to CLIQUE",
      badge: "Present"
    },
    {
      id: "ACT-03",
      timestamp: "2026-10-09 03:00 PM",
      type: "lab",
      title: "Completed Lab Experiment 3: BSD Sockets",
      detail: "Computer Networks Lab (CS504L) — Score: 20/20",
      badge: "Verified"
    },
    {
      id: "ACT-04",
      timestamp: "2026-10-04 06:42 PM",
      type: "assignment",
      title: "Submitted Assignment ASG-CS501-01",
      detail: "Java Concurrency & Thread Pool Implementation",
      badge: "Submitted"
    },
    {
      id: "ACT-05",
      timestamp: "2026-10-01 11:15 AM",
      type: "attendance",
      title: "Attended CS502: DBMS",
      detail: "Topic: B+ Tree Index Insertion & Splitting",
      badge: "Present"
    }
  ]
};

// Export to window for global browser availability
if (typeof window !== "undefined") {
  window.CAMPUS_DATA = CAMPUS_DATA;
}
