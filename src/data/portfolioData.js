// Portfolio Data - Decouple content from views
export const personalInfo = {
  name: "Maximiliano Cadús",
  title: "Software Developer | Frontend Developer",
  tagline:
    "Transforming ideas into elegant, scalable web solutions with React and modern technologies",
  email: "maxicadus172@gmail.com",
  phone: "+54 341 123-4567", // Update with your actual phone number
  location: "Rosario, Argentina",
  linkedin: "https://www.linkedin.com/in/maximilianocadus/",
  github: "https://github.com/MaximilianoCadus",
  cvUrl: "/Maximiliano Cadús English.pdf",
};

export const about = {
  title: "About Me",
  description: [
    "I'm a passionate Software Developer with a strong academic background in data management and software development. Currently pursuing a Bachelor's Degree in IT Data Management at Universidad Abierta Interamericana, I hold an Associate Degree in Software Development from Instituto Superior Zona Oeste N° 9045.",
    "With hands-on experience as a Frontend Developer at Altimetrik, I've developed Single Page Applications using React and state management, worked with Git for version control, and actively participated in Scrum ceremonies. I'm proficient in the MERN stack and passionate about creating intuitive, user-centric web applications.",
    "My journey combines technical expertise with strong problem-solving capabilities and a commitment to continuous learning. I'm eager to contribute my analytical skills and development experience to innovative IT teams, creating impactful digital solutions.",
  ],
  image: "/profile.jpg",
  highlights: [
    {
      icon: "GraduationCap",
      title: "Education",
      description: "Associate Degree + Bachelor's (In Progress)",
    },
    {
      icon: "Code2",
      title: "Experience",
      description: "Frontend Developer at Altimetrik",
    },
    {
      icon: "Trophy",
      title: "Awards",
      description: "Academic Merit Award 2024",
    },
    {
      icon: "Users",
      title: "Methodologies",
      description: "Agile/Scrum certified",
    },
  ],
};

export const skills = {
  title: "Skills & Expertise",
  categories: [
    {
      name: "Frontend Development",
      icon: "Layout",
      skills: [
        { name: "React", level: 85 },
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "Responsive Design", level: 85 },
        { name: "SPA Development", level: 80 },
      ],
    },
    {
      name: "Backend Development",
      icon: "Server",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 80 },
        { name: "RESTful APIs", level: 75 },
        { name: "MERN Stack", level: 75 },
      ],
    },
    {
      name: "Tools & Technologies",
      icon: "Wrench",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Agile/Scrum", level: 85 },
        { name: "Pull Requests/Code Review", level: 80 },
        { name: "State Management", level: 80 },
        { name: "Version Control", level: 85 },
      ],
    },
    {
      name: "Soft Skills & Languages",
      icon: "Heart",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 90 },
        { name: "Analytical Thinking", level: 90 },
        { name: "Adaptability", level: 90 },
        { name: "English (B2)", level: 80 },
        { name: "Spanish (Native)", level: 100 },
      ],
    },
  ],
};

export const experience = {
  title: "Work Experience",
  jobs: [
    {
      id: 1,
      company: "Altimetrik",
      position: "Frontend Developer (Internship)",
      location: "Montevideo, Uruguay (Remote)",
      period: "October 2022 - December 2022",
      description:
        "Internship focused on modern web development practices and Agile methodologies.",
      responsibilities: [
        "Developed Single Page Applications (SPAs) using React and state management libraries",
        "Implemented version control workflows with Git, including Pull Requests and Code Reviews",
        "Actively participated in Scrum ceremonies including Daily Stand-ups, Retrospectives, and Sprint Demos",
        "Collaborated with cross-functional teams in an Agile environment",
      ],
      technologies: ["React", "JavaScript", "Git", "Scrum", "State Management"],
    },
  ],
};

export const education = {
  title: "Education",
  degrees: [
    {
      id: 1,
      degree: "Bachelor's Degree in IT Data Management",
      institution: "Universidad Abierta Interamericana",
      location: "Rosario, Argentina",
      period: "December 2025 - Present",
      status: "In Progress",
      description:
        "Advanced studies in data management, database systems, and IT infrastructure.",
    },
    {
      id: 2,
      degree: "Associate Degree in Software Development",
      institution: "Instituto Superior Zona Oeste N° 9045",
      location: "Rosario, Argentina",
      period: "March 2023 - December 2025",
      status: "Completed",
      description:
        "Comprehensive program covering software development, programming fundamentals, and web technologies.",
      achievements: [
        "Academic Merit Award - National Flag First Escort (December 2024)",
        "Awarded for outstanding GPA",
        "Completed capstone project: Sports Facility Management System",
      ],
    },
  ],
  certifications: [
    {
      name: "B2 First Certificate (English)",
      issuer: "Cambridge Assessment English",
      date: "2024",
      description: "Upper-intermediate level English proficiency certification",
    },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Sports Facility Management System",
    description:
      "Full Stack capstone project for managing sports facility bookings. Complete booking management system with user authentication, real-time availability checking, and administrative dashboard. Developed using the MERN stack.",
    image: "/projects/sports-facility.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
    github: "https://github.com/MaximilianoCadus/sports-facility-management",
    live: "", // Add live demo link if available
    featured: true,
    status: "completed",
  },
  // Add more projects as you complete them
];

export const socialLinks = [
  {
    name: "GitHub",
    icon: "Github",
    url: "https://github.com/MaximilianoCadus",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: "Linkedin",
    url: "https://www.linkedin.com/in/maximilianocadus/",
    color: "hover:text-blue-600",
  },
  {
    name: "Email",
    icon: "Mail",
    url: "mailto:maxicadus172@gmail.com",
    color: "hover:text-red-500",
  },
];

export const contactInfo = {
  title: "Let's Connect",
  subtitle:
    "I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!",
  email: "maxicadus172@gmail.com",
  // EmailJS configuration (sign up at https://www.emailjs.com/)
  emailJS: {
    serviceId: "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
    templateId: "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
    publicKey: "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
  },
};
