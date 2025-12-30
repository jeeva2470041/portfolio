
export const profile = {
  name: "Jeeva G",
  role: "Computer Science Student | Aspiring Full Stack Developer",
  college: "SSN College of Engineering",
  location: "Chennai, India",
  email: process.env.NEXT_PUBLIC_EMAIL || "priyagovinth2019@gmail.com",
  github: "https://github.com/jeeva2470041",
  linkedin: "https://linkedin.com/in/jeevag",
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
    { name: "Java", level: 85 },
    { name: "Python", level: 80 },
    { name: "C", level: 75 },
    { name: "JavaScript", level: 85 },
  ],
  frontend: [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "React.js", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 75 },
    { name: "Firebase", level: 70 },
  ],
  tools: [
    { name: "Git", level: 80 },
    { name: "GitHub", level: 85 },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Smart Hostel Management System",
    description:
      "A Java-based system to manage hostel operations like student records, room allocation, and complaints. Features include automated room assignment, complaint tracking, and administrative dashboard.",
    techStack: ["Java"],
    github: "https://github.com/jeeva2470041/sharingplatform",
    live: null,
    image: "/projects/hostel.svg", 
  },
  {
    id: 2,
    title: "Attendance Management System",
    description:
      "A Python-based system to record and manage student attendance efficiently. Includes features like automatic reporting, attendance analytics, and export functionality.",
    techStack: ["Python"],
    github: "https://github.com/jeeva2470041/attendence",
    live: null,
    image: "/projects/attendance.svg",
  },
  {
    id: 3,
    title: "EcoFeed",
    description:
      "A web platform that connects restaurant surplus food to NGOs and orphanage centers to reduce food waste. Features real-time notifications, location-based matching, and impact tracking.",
    techStack: ["React.jsx", "Node.js", "Mongodb"],
    github: "https://github.com/jeeva2470041/ecofeed",
    live: null,
    image: "/projects/ecofeed.svg",
  },
  {
    id: 4,
    title: "MediaEval 2025 – NewsImages Task",
    description:
      "Image recommendation system for news articles using dual approaches: CLIP + FAISS for retrieval of relevant images from dataset, and Stable Diffusion XL for generating synthetic editorial-style images. Successfully processed 8,500+ articles with 460×260 PNG outputs meeting MediaEval submission guidelines.",
    techStack: ["Python", "PyTorch", "CLIP", "FAISS", "Stable Diffusion XL", "Pandas"],
    github: "https://github.com/jeeva2470041/MediaEval",
    live: null,
    image: "/projects/mediaeval.svg",
  },
];

export const hackathons = [
  {
    id: 1,
    name: "IIT Kharagpur Hackathon",
    project: "Campus Share",
    description:
      "A campus-exclusive peer-to-peer sharing platform that enables seniors to share items with juniors and vice versa. Facilitates resource sharing within the college community, promoting sustainability and collaboration among students.",
    achievement: "Participated",
    year: "2025",
  },
  {
    id: 2,
    name: "Techspirit Hackathon (Google)",
    project: "Campus Share",
    description:
      "A campus-exclusive peer-to-peer sharing platform designed specifically for college students at SSN College of Engineering. Enables students to share resources, notes, and equipment seamlessly.",
    achievement: "Participated",
    year: "2025",
  },
  {
    id: 3,
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
