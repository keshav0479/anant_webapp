interface Developer {
  id: number;
  name: string;
  role: string;
  image: string;
  github: string;
  linkedin: string;
  contributions: string[];
  commitHistory?: number[]; // Optional property for commit history
}

export const developers: Developer[] = [
  {
    id: 1,
    name: "Satyam",
    role: "Full Stack Developer",
    image: "/devs/satyam.png",
    github: "https://github.com/Satyam709",
    linkedin: "https://www.linkedin.com/in/satyam-chauhan-87ba282bb/",
    contributions: [
      "Core Architecture",
      "Authentication System",
      "API Integration",
      "UI/UX Design",
      "Deployment",
    ],
    // from dec 2204 to april 2025
    commitHistory: [32, 29, 22, 28, 24],
  },
  {
    id: 2,
    name: "Ayush Sur",
    role: "Full Stack Developer",
    image: "/anant_logo.png",
    github: "https://github.com/SurAyush",
    linkedin: "https://linkedin.com/in/alexj",
    contributions: [
      "Core Architecture",
      "Authentication System",
      "API Integration",
    ],
    // from dec 2204 to april 2025
    commitHistory: [12, 18, 18, 11, 10],
  },
  {
    id: 3,
    name: "Keshav",
    role: "Front End Developer",
    image: "/anant_logo.png",
    github: "https://github.com/keshav0479",
    linkedin: "https://linkedin.com/in/alexj",
    contributions: ["Core Architecture", "API Integration"],
    // from dec 2204 to april 2025
    commitHistory: [5, 0, 5, 0, 0],
  },
];
