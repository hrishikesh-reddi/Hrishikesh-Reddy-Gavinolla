
import React from 'react';
import { Mail, Linkedin, Github, Phone } from 'lucide-react';
import { Hackathon, Certification, Education } from './types';

export const PERSONAL_INFO = {
  name: "Hrishikesh Reddy",
  fullName: "Gavinolla Hrishikesh Reddy",
  role: "CS Junior & AI Researcher",
  university: "Mahindra Ecole Centrale",
  location: "Hyderabad, IN",
  email: "hrishikeshreddyg@gmail.com",
  phone: "+91-7799889259",
  linkedin: "https://linkedin.com/in/gavinolla-hrishikesh-reddy-b3b800277/",
  github: "https://github.com/hrishikesh-redi",
  objective: "I am a Computer Science student exploring emerging technologies and building practical, real-world projects. I’m currently learning across AI/ML, cybersecurity, blockchain, and LLM- and agent-based systems to understand their real applications. I’m seeking opportunities to grow as a developer."
};

export const CONTACT_LINKS = [
  { icon: <Mail size={18} />, label: "Email", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
  { icon: <Linkedin size={18} />, label: "LinkedIn", value: "Connect", href: PERSONAL_INFO.linkedin },
  { icon: <Github size={18} />, label: "GitHub", value: "Source", href: PERSONAL_INFO.github },
  { icon: <Phone size={18} />, label: "Phone", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
];

export const EDUCATION: Education[] = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Mahindra École Centrale",
    score: "CGPA: 7.0",
    period: "2021–2027"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College",
    score: "CGPA: 9.36",
    period: "2023"
  },
  {
    degree: "SSC",
    institution: "Narayana School",
    score: "GPA: 10.0",
    period: "2021"
  }
];

export const WORKSHOPS = [
  {
    title: "AI/ML Workshop, IIIT Hyderabad",
    desc: "Completed 5-month hands-on training in applied machine learning."
  }
];

export const HACKATHONS: (Hackathon & { image: string, stack: string[] })[] = [
  {
    id: 1,
    title: "AI Hackathon, Mahindra University",
    organization: "Mahindra University",
    achievement: "Winner",
    year: "2025",
    stack: ["Google Gemini API", "Multimodal AI", "React"],
    description: "Built a multimodal AI web tool using Google Gemini API with support for text, images, audio, and custom features like dashboards and history.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Quantum Computing Hackathon",
    organization: "Quantum Hub",
    achievement: "3rd Prize",
    year: "2025",
    stack: ["Python", "Qiskit", "Google Colab"],
    description: "Solved quantum logic and circuit problems in Python/Qiskit through Google Colab.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "IIT Hyderabad Hackathon",
    organization: "IIT Hyderabad",
    achievement: "Bicopter UAV Concept",
    year: "2024",
    stack: ["3D Modeling", "Virtual Prototyping"],
    description: "Designed a 3D bicopter UAV and simulation model using virtual prototyping tools like MATLAB and Simulink.",
    image: "https://images.unsplash.com/photo-1527336355836-53842109961f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "CBIT Hackathon",
    organization: "CBIT",
    achievement: "Advanced to Round 3",
    year: "2024",
    stack: ["NLP", "Speech-to-Text", "AI"],
    description: "Built an AI-driven sign language translation system using NLP + speech-to-text models.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Road Safety India Hackathon",
    organization: "Road Safety India",
    achievement: "Smart Pedestrian System",
    year: "2023",
    stack: ["Automation", "Sensors", "IoT"],
    description: "Prototyped an automated barrier system to improve traffic discipline in high-density zones.",
    image: "https://images.unsplash.com/photo-1545147986-a9d6f210df73?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "ShellShock Hackathon",
    organization: "Cyber Security Hub",
    achievement: "Cleared Round 1",
    year: "2023",
    stack: ["SQL Injection", "IDOR", "Exploitation"],
    description: "Identified web application vulnerabilities using SQL Injection, IDOR, and basic exploitation techniques to capture flags.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "ISRO Pollution Analysis Hackathon",
    organization: "ISRO",
    achievement: "Project Submission",
    year: "2025",
    stack: ["ML", "ISRO Datasets", "Canvas"],
    description: "Developed an ML model to estimate particulate pollution using real ISRO-sourced datasets and visualized predictions.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
  }
];

export const RESEARCH_CONTENT = {
  focus: "The future of AI agents beyond the dominance of Nvidia and OpenAI.",
  vision: "We are entering an era of decentralized agency where the monopoly shifts toward localized, high-bandwidth intelligence embedded in autonomous logic.",
  topics: [
    { title: "Agentic Logic", desc: "The transition from simple predictive models to autonomous systems that possess persistent memory and verify intent." },
    { title: "Hardware Paradigm", desc: "Exploring the next wave of compute beyond the current GPU dominance, and how new architectures will power the AI revolution." },
    { title: "Valley Dynamics", desc: "Analyzing how the convergence of talent in San Francisco and Silicon Valley is shaping the next 10 years of tech." }
  ]
};

export const BLOG_POSTS = [
  {
    id: 1,
    title: "The Linux Superpower",
    date: "March 2025",
    category: "OS",
    excerpt: "Why my love for learning Linux is the foundation of my technical growth and how terminal mastery accelerates AI research.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "GPU Geopolitics: Nvidia's Realm",
    date: "Feb 2025",
    category: "Hardware",
    excerpt: "Infographics and deep dives into the GPU shortage, the strategic dominance of Nvidia, and the rise of custom AI silicon.",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Silicon Valley Decoded",
    date: "Jan 2025",
    category: "Industry",
    excerpt: "What is actually happening in the SF tech scene? Insights into how OpenAI and Nvidia are shaping the future of human-AI collaboration.",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Career Essentials in AI",
    issuer: "Microsoft & LinkedIn",
    details: ["Verified foundational knowledge in AI", "Key AI concepts", "Ethical considerations"],
    link: "https://drive.google.com/file/d/1Czvpz5ZMXHl-HNn9Qj_4oh9aJs7svsFF/view"
  },
  {
    title: "MATLAB Certification",
    issuer: "MathWorks",
    details: ["Data processing", "Visualization", "Algorithmic thinking"],
    link: "https://shorturl.at/Zehtt",
    date: "March 2025"
  }
];

export const SKILLS = [
  "AI & ML", "LLM Agents", "NLP", "Cybersecurity", "Blockchain", "Python", "C++", "React",
  "Google Gemini API", "Qiskit", "MATLAB", "Simulink", "Data Structures", "Algorithms (DSA)",
  "Linux Mastery", "Optimization AI", "Git & GitHub", "SQL Injection Protection"
];
