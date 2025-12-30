"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate scroll progress (0 to 100)
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
      
      // Hide arrow after scrolling past first section
      setIsVisible(scrollY < windowHeight * 0.3);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Scroll Down Arrow */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 flex flex-col items-center gap-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-muted text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center p-1"
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="w-1.5 h-3 bg-primary rounded-full"
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
            <motion.svg
              className="w-5 h-5 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{
                y: [0, 8, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
