export const profile = {
  name: "Pratyaksh Danidharia",
  title: "Full-Stack & Machine Learning Developer",
  education: "Computer Science undergraduate, Intellipaat School of Technology · Class of 2029",
  location: "Bengaluru, India",
  email: "pratyakshdanidharia07@gmail.com",
  github: "https://github.com/Praxx-07",
  linkedin: "https://www.linkedin.com/in/pratyaksh-danidhria-5b17b4398",
} as const;

export const skills = [
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "TypeScript",
  "Tailwind CSS",
  "WebSockets",
  "TensorFlow.js",
  "Gemini API",
] as const;

export type Project = {
  name: string;
  summary: string;
  contribution: string;
  collaboration: string;
  technologies: string[];
  repository?: string;
};

export const projects: Project[] = [
  {
    name: "RoadGuard AI",
    summary:
      "A browser-based road safety assistant that uses real-time object detection to surface what is happening on the road.",
    contribution: "Frontend",
    collaboration: "Team project; individual credits omitted.",
    technologies: ["TensorFlow.js", "COCO-SSD", "Browser APIs"],
  },
  {
    name: "Phishing-Forensic",
    summary:
      "A phishing-detection Chrome extension for forensic analysis, paired with a Next.js security operations dashboard.",
    contribution: "Backend",
    collaboration: "Team project; individual credits omitted.",
    technologies: ["Gemini 2.0 Flash", "Chrome Extension", "Next.js"],
    repository: "https://github.com/Shashank163007/Phishing-forensic",
  },
  {
    name: "Winter Arc Tracker",
    summary:
      "A 90-day habit tracker with browser-based storage and JSON backup and restore.",
    contribution: "Redesigned the UI",
    collaboration: "Team project; individual credits omitted.",
    technologies: ["React 19", "TypeScript", "Vite"],
    repository: "https://github.com/Shashank163007/Winter_Arc_tracker",
  },
  {
    name: "Fire-Monitor",
    summary:
      "A local fire-data pipeline that profiles and normalizes NOAA-20 VIIRS observations, then builds persistence and industrial-context features.",
    contribution: "Created the project",
    collaboration: "Project created by me.",
    technologies: ["Python", "Pandas", "NumPy", "Overpass API"],
    repository: "https://github.com/Shashank163007/Fire-Monitor",
  },
  {
    name: "Team-Bug-Busters",
    summary:
      "An Android driving-safety prototype combining camera and motion-sensor logic to detect driving states and present safety warnings.",
    contribution: "Created the backend",
    collaboration: "Team project; individual credits not supplied.",
    technologies: ["Kotlin", "Android", "Camera and motion sensors"],
    repository: "https://github.com/Shashank163007/Team-Bug-Busters",
  },
  {
    name: "ZypherDemo",
    summary:
      "A traffic-monitoring demo that processes road video and presents vehicle-detection results.",
    contribution: "Frontend",
    collaboration: "Team project; individual credits not supplied.",
    technologies: ["Python", "Streamlit", "OpenCV", "YOLOv8"],
    repository: "https://github.com/haritvishu4/ZypherDemo",
  },
  {
    name: "Aayam Bugbash",
    summary:
      "An AI-assisted browser extension that scans Gmail messages for phishing threats.",
    contribution: "Frontend",
    collaboration: "Team project; individual credits omitted.",
    technologies: ["Chrome Extension", "Gmail", "JavaScript"],
    repository: "https://github.com/Shashank163007/Aayam-Bugbash-bugbusters",
  },
  {
    name: "Event-Vista",
    summary:
      "An event-planning frontend for exploring planners, venues, and services for different occasions.",
    contribution: "Frontend",
    collaboration: "Team project; individual credits omitted.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repository: "https://github.com/Abhinavlara/Event-Vista",
  },
];
