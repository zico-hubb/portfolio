"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();
  const [lines, setLines] = useState([]);
  const fullLines = [
    "> Initializing Blockchain Dev Terminal...",
    "> Verifying developer identity...",
    "> Access granted ✅",
    "> Welcome, I’m Zico — Blockchain Developer & AI Engineer",
  ];

  useEffect(() => {
    let currentLine = 0;
    let currentText = "";
    let charIndex = 0;

    const typeChar = () => {
      if (charIndex < fullLines[currentLine].length) {
        currentText += fullLines[currentLine][charIndex];
        setLines((prev) => {
          const newLines = [...prev];
          newLines[currentLine] = currentText;
          return newLines;
        });
        charIndex++;
        setTimeout(typeChar, 50);
      } else {
        charIndex = 0;
        currentLine++;
        if (currentLine < fullLines.length) {
          setLines((prev) => [...prev, ""]);
          setTimeout(typeChar, 300);
        }
      }
    };

    setLines([""]);
    typeChar();
  }, []);

  return (
    <div className="home-container">
      <div className="terminal">
        {lines.map((line, idx) => (
          <p key={idx} className="terminal-line">
            {line}
            {idx === lines.length - 1 && <span className="cursor">|</span>}
          </p>
        ))}

        
        {/* Hologram Section */}
<motion.div
  className="hologram-container"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5 }}
>
  <motion.img
    src="/images/hologram.png"
    alt="Zico Hologram"
    className="hologram-image"
    animate={{ scale: [0.95, 1, 0.95], opacity: [0.8, 1, 0.8] }}
    transition={{ duration: 2, repeat: Infinity }}
  />
</motion.div>


        {/* Enter Button */}
        {lines.length === fullLines.length && (
          <motion.button
            className="enter-button"
            onClick={() => router.push("/dashboard")}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            [ Enter Terminal ]
          </motion.button>
        )}
      </div>
    </div>
  );
}
