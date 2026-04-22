
export const profile = {
  name: "Jeeva G",
  role: "Computer Science Student | Aspiring Full Stack Developer",
  college: "SSN College of Engineering",
  location: "Chennai, India",
  email: process.env.NEXT_PUBLIC_EMAIL || "priyagovinth2019@gmail.com",
  github: "https://github.com/jeeva2470041",
  linkedin: "https://www.linkedin.com/in/jeevain/",
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID || "xjgvdopr",

};

export const aboutMe = {
  title: "About Me",
  description: `I am a Computer Science student at SSN College of Engineering, Chennai, with a strong interest in building scalable web applications and solving real-world problems through technology. As an aspiring Full Stack Developer, I enjoy learning new tools and frameworks and applying them to practical projects. I am driven by the goal of creating meaningful, user-focused software solutions while continuously improving my technical and problem-solving skills`,
  highlights: [
    "Passionate about Full Stack Development",
    "Love solving real-world problems through code",
    "Quick learner and team player",
    "Focused on building scalable applications",
  ],
};

export const education = [
  {
    id: 1,
    degree: "M.Tech Integrated in Computer Science and Engineering",
    institution: "SSN College of Engineering",
    location: "Chennai, India",
    period: "2024 - 2029",
    description:
      "Pursuing bachelor's degree with focus on software development, data structures, and web technologies.",
    gpa: "8.01",
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Aditya Vivekanandha Matric Higher Secondary School",
    location: "Villupuram, India",
    period: "2022 - 2024",
    description:
      "Completed higher secondary education with a strong foundation in Mathematics and Computer Science.",
    achievement: "Secured 568/600 in 12th Standard",
  },
];

export const skills = {
  languages: [
    { name: "Java", context: "OOP, data structures, CLI applications" },
    { name: "Python", context: "Scripting, ML pipelines, automation" },
    { name: "C", context: "Low-level programming, memory management" },
    { name: "JavaScript", context: "Web interactivity, async logic, APIs" },
  ],
  frontend: [
    { name: "HTML", context: "Semantic markup, accessibility-first" },
    { name: "CSS", context: "Responsive layouts, animations" },
    { name: "React.js", context: "Component-based UIs, state management" },
  ],
  backend: [
    { name: "Node.js", context: "REST APIs, server-side logic" },
    { name: "Firebase", context: "Auth, Firestore, real-time data" },
  ],
  databases: [
    { name: "SQL", context: "Queries, joins, relational data modeling", type: "Relational" },
    { name: "MongoDB", context: "Document-based storage, flexible schemas", type: "NoSQL" },
    { name: "Neo4j", context: "Graph relationships, node & edge modeling", type: "Graph DB" },
  ],
  tools: [
    { name: "Git", context: "Version control, branching, commits" },
    { name: "GitHub", context: "Collaboration, PRs, open-source" },
    { name: "GitLab", context: "CI/CD pipelines, repo management" },
    { name: "NetBeans", context: "Java IDE, project structuring" },
  ]

};

export const projects = [

  {
    id: 1,
    title: "Agri-Tech",
    tagline: "AI-powered farming assistant designed for India's rural heartland.",
    description:
      "Indian farmers often miss out on government schemes and lack access to modern agricultural tools. Agri-Tech bridges this gap with an accessible mobile app that delivers AI-driven crop recommendations, disease detection, and soil analysis — even in low-connectivity areas.",
    features: [
      "AI Disease Analyzer — snap a photo, get diagnosis",
      "Soil Analyzer — nutrient & health assessment",
      "Crop Recommendation Engine based on region & season",
      "Government scheme discovery & eligibility checker",
      "Offline-first design for rural connectivity",
    ],
    achievement: "Built for real-world farmer usability in rural India",
    techStack: ["Flutter", "Dart", "TensorFlow Lite", "Firebase", "REST APIs"],
    github: "https://github.com/jeeva2470041/agritech",
    live: null,
    image: "/projects/agritech.svg",
  },
  {
    id: 2,
    title: "Smart Placement Prep",
    tagline: "Daily interview questions, zero repeated content — stay sharp, stay ready.",
    description:
      "Traditional interview prep is broken — students rely on outdated PDFs and recycled question banks. Smart Placement Prep uses web scraping to curate fresh, role-specific questions daily, ensuring students never see the same question twice.",
    features: [
      "Role-based question feeds (e.g., Database Engineer, Frontend Dev)",
      "5–10 fresh questions delivered daily via web scraping",
      "No repeated questions — dynamic content engine",
      "Curated from real interview experiences",
      "Consistent practice without information overload",
    ],
    achievement: "Eliminates repetitive prep — always fresh, always relevant",
    techStack: ["Python", "BeautifulSoup", "React.js", "Node.js", "MongoDB"],
    github: "https://github.com/jeeva2470041/smartprep",
    live: null,
    image: "/projects/smartprep.svg",
  },
  {
    id: 3,
    title: "EcoFeed",
    tagline: "Connecting surplus food to those who need it most.",
    description:
      "Restaurants throw away tons of edible food daily while NGOs and orphanages struggle to feed people. EcoFeed is a real-time platform that bridges this gap — matching surplus food with nearby organizations through location-based alerts and impact tracking.",
    features: [
      "Real-time surplus food notifications",
      "Location-based NGO & restaurant matching",
      "Impact tracking dashboard",
      "Seamless donor-recipient coordination",
    ],
    achievement: "Addresses a critical social problem with scalable technology",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/jeeva2470041/ecofeed",
    live: null,
    image: "/projects/ecofeed.svg",
  },
  {
    id: 4,
    title: "MediaEval 2025 — NewsImages",
    tagline: "AI-driven image recommendation for 8,500+ news articles.",
    description:
      "News publishers need relevant visuals for every article, fast. This system uses a dual approach — CLIP + FAISS for retrieving the most relevant images from a dataset, and Stable Diffusion XL for generating editorial-quality synthetic images when no match exists.",
    features: [
      "CLIP-based semantic image retrieval",
      "FAISS vector search for high-speed matching",
      "Stable Diffusion XL for synthetic image generation",
      "Processed 8,500+ articles with standardized outputs",
    ],
    achievement: "Met MediaEval 2025 submission guidelines end-to-end",
    techStack: ["Python", "PyTorch", "CLIP", "FAISS", "Stable Diffusion XL", "Pandas"],
    github: "https://github.com/jeeva2470041/MediaEval",
    live: null,
    image: "/projects/mediaeval.svg",
  },
  {
    id: 5,
    title: "Smart Hostel Management",
    tagline: "Digitizing hostel operations — from room allocation to complaint tracking.",
    description:
      "Manual hostel management is error-prone and chaotic. This system automates room allocation, student record management, and complaint resolution through a clean administrative dashboard — making campus life smoother for students and wardens alike.",
    features: [
      "Automated room assignment engine",
      "Student records & complaint tracking",
      "Admin dashboard with analytics",
      "Streamlined warden workflows",
    ],
    achievement: "End-to-end campus management solution",
    techStack: ["Java"],
    github: "https://github.com/jeeva2470041/sharingplatform",
    live: null,
    image: "/projects/hostel.svg",
  },
  {
    id: 6,
    title: "Attendance Management System",
    tagline: "Automated attendance tracking with smart analytics and reporting.",
    description:
      "Tracking attendance manually wastes hours and is prone to errors. This Python-based system automates recording, generates analytics on attendance trends, and exports clean reports — giving educators more time to teach.",
    features: [
      "Automated attendance recording",
      "Trend analytics & visualizations",
      "One-click report export",
      "Multi-class support",
    ],
    achievement: "Saves hours of manual work for educators",
    techStack: ["Python"],
    github: "https://github.com/jeeva2470041/attendence",
    live: null,
    image: "/projects/attendance.svg",
  },
];

export const hackathons = [
  {
    id: 1,
    name: "St. Joseph College Hackathon",
    project: "PayTrace",
    description:
      "Built PayTrace — an automated UPI expense tracker that reads SMS and notifications from Google Pay, PhonePe, and other UPI apps to intelligently categorize and visualize spending patterns without any manual input.",
    achievement: "🏆 Winner",
    year: "2025",
  },
  {
    id: 2,
    name: "IIT Kharagpur Hackathon",
    project: "Campus Share",
    description:
      "A campus-exclusive peer-to-peer sharing platform that enables seniors to share items with juniors and vice versa. Facilitates resource sharing within the college community, promoting sustainability and collaboration among students.",
    achievement: "Participated",
    year: "2025",
  },
  {
    id: 3,
    name: "Techspirit Hackathon (Google)",
    project: "Campus Share",
    description:
      "A campus-exclusive peer-to-peer sharing platform designed specifically for college students at SSN College of Engineering. Enables students to share resources, notes, and equipment seamlessly.",
    achievement: "Participated",
    year: "2025",
  },
  {
    id: 4,
    name: "NATPAC Mobility App (SIH)",
    project: "Consent-based Travel Data App",
    description:
      "Consent-based mobile app automating travel data collection for NATPAC — automatic trip detection, mode identification, ML-based auto-labeling, robust authentication (mobile/email/optional Aadhaar), companion linking, and child travel capture. SIH submission.",
    achievement: "Participated",
    year: "2025",
  },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Hackathons", href: "#hackathons" },
  { name: "Contact", href: "#contact" },
];
