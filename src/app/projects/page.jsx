"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "OnChain Election DApp",
      description: "Decentralized voting system with secure blockchain integration.",
      category: "Blockchain",
    },
    {
      title: "Campus Voting DApp",
      description: "A lightweight voting platform for university elections.",
      category: "Blockchain",
    },
    {
      title: "ArdhiChain",
      description: "Land registry NFT system for secure land ownership records.",
      category: "Blockchain",
    },
    {
      title: "UrbanScope",
      description: "Smart city platform for data-driven urban planning.",
      category: "AI / Fullstack",
    },
    {
      title: "BibleFinder",
      description: "Full-stack Bible app with search and reference features.",
      category: "Fullstack / App",
    },
    {
      title: "FaceGate",
      description: "AI-powered facial recognition system for attendance & access.",
      category: "AI",
    },
    {
      title: "Smart Surveillance",
      description: "Gait and face recognition system for security monitoring.",
      category: "AI",
    },
    {
      title: "Aminika Health Services",
      description: "Full-stack medical services platform for appointments and records.",
      category: "Fullstack",
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className="project-card"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #00ffff" }}
            whileTap={{ scale: 0.95 }}
          >
            <h3>{proj.title}</h3>
            <p className="category">{proj.category}</p>
            <p className="description">{proj.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
