"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const journey = [
    { date: "'24-2025", event: "Learning and developing simple programs in python,solidity" },
    { date: "Jan 2025", event: "Started sharing tech ideas and exploring personal projects" },
    { date: "Jun 2025", event: "Built Siamese Network for fingerprint matching; began learning Solidity" },
    { date: "Jun-Jul 2025", event: "Developed OnChain Election System & ArdhiChain Land Registry NFT System" },
    { date: "Jul 2025", event: "Built UrbanScope smart city data platform" },
    { date: "Jul-Oct 2025", event: "Explored AI-powered systems: FaceGate, Gait Recognition, Border Monitoring" },
    { date: "Oct 2025", event: "Developed full-stack Aminika Health Services & Bible App" },
    { date: "Present", event: "Currently developing a wide range of systems from AI agents to decentralised systems" },
  ];

  const skills = [
    "Solidity", "Hardhat", "Web3.js",
    "Next.js", "React", "HTML", "CSS",
    "Python", "Flask", "Node.js",
    "OpenCV", "Keras-FaceNet",
    "Git", "GitHub", "Linux", "APIs"
  ];

  const projectCategories = [
    { title: "Blockchain", route: "/projects/blockchain" },
    { title: "AI", route: "/projects/ai" },
    { title: "Fullstack", route: "/projects/fullstack" },
    { title: "Research", route: "/projects/research" },
  ];

  return (
    <div className="dashboard-container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Zico's Dev Console</h1>
        <p className="subtitle">Exploring projects… activating modules… ✅</p>
      </section>

      {/* About / Journey */}
      <section className="journey">
        <h2>My Journey</h2>
        <div className="timeline">
          {journey.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.3 }}
            >
              <span className="date">{item.date}</span>
              <p className="event">{item.event}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills / Tech Stack */}
      <section className="skills">
        <h2>Skills & Tech Stack</h2>
        <div className="skills-grid">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="skill-chip"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Navigation */}
      <section className="projects-nav">
        <h2>Project Categories</h2>
        <div className="projects-grid">
          {projectCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              onClick={() => router.push(cat.route)}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px #00ffff" }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.title}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Shortcut */}
      <section className="contact-shortcut">
        <motion.button
          className="contact-btn"
          onClick={() => router.push("/contact")}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          [Transmit Signal → Contact Me]
        </motion.button>
      </section>
    </div>
  );
}
