"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  
  useEffect(() => {
    setIsReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1] as const } }
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end border-b border-structural bg-primary overflow-hidden py-16 md:py-24 px-4 md:px-8 lg:px-12 z-0">
      {/* Background Technical Schematic */}
      <motion.div 
        initial={isReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-[0.15] mix-blend-difference"
      >
        <svg suppressHydrationWarning className="w-full h-full text-cobalt" viewBox="0 0 1000 500" preserveAspectRatio="none" stroke="currentColor" fill="none" strokeWidth="0.5">
          <path d="M 0 350 L 150 350 L 250 200 L 400 200 L 550 400 L 700 400 L 850 150 L 1000 150" />
          <circle cx="150" cy="350" r="2" fill="currentColor" />
          <circle cx="250" cy="200" r="2" fill="currentColor" />
          <circle cx="550" cy="400" r="2" fill="currentColor" />
          <circle cx="850" cy="150" r="2" fill="currentColor" />
          <path d="M 250 200 L 250 500 M 550 400 L 550 500 M 850 150 L 850 500" strokeDasharray="4 4" opacity="0.3" />
          
          {/* Subtle grid and annotations */}
          <line x1="0" y1="100" x2="1000" y2="100" strokeDasharray="1 10" opacity="0.2" />
          <line x1="0" y1="200" x2="1000" y2="200" strokeDasharray="1 10" opacity="0.2" />
          <line x1="0" y1="300" x2="1000" y2="300" strokeDasharray="1 10" opacity="0.2" />
          <line x1="0" y1="400" x2="1000" y2="400" strokeDasharray="1 10" opacity="0.2" />
          <text x="20" y="90" fontSize="8" fill="currentColor" opacity="0.5" fontFamily="monospace">SYS.01</text>
          <text x="20" y="190" fontSize="8" fill="currentColor" opacity="0.5" fontFamily="monospace">SYS.02</text>
        </svg>
      </motion.div>

      {/* Solid Editorial Color Block */}
      <motion.div 
        initial={isReducedMotion ? false : { opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] as const, delay: 0.1 }}
        style={{ originY: 1 }}
        className="absolute right-0 md:right-[10%] top-[20%] w-[50vw] md:w-[35vw] h-[60vh] bg-cyan/90 mix-blend-multiply dark:mix-blend-color-burn -z-10"
      />
      
      <motion.div 
        initial={isReducedMotion ? false : { opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute right-[40vw] md:right-[30vw] top-[30%] w-16 h-16 bg-orange -z-10 mix-blend-multiply dark:mix-blend-color-burn"
      />

      <motion.div 
        variants={container}
        initial={isReducedMotion ? "visible" : "hidden"}
        animate="visible"
        className="relative z-10 w-full max-w-screen-2xl mx-auto"
      >
        <motion.div variants={variants} className="mb-4">
          <p className="font-mono text-sm uppercase tracking-widest text-secondary">Hi, I'm Ansh.</p>
        </motion.div>

        <motion.h1 
          variants={variants}
          className="text-[16vw] sm:text-[14vw] lg:text-[180px] font-bold leading-[0.75] tracking-tighter uppercase mb-16 text-primary flex flex-col"
        >
          <span className="block ml-0">ANSH</span>
          <span className="block ml-[10vw] md:ml-[15vw] text-primary dark:text-invert dark:mix-blend-difference relative z-20">ZAMDE</span>
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-end">
          <motion.div variants={variants} className="md:col-span-7">
            <p className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] max-w-2xl">
              FULL STACK
              <br />
              DEVELOPER
            </p>
          </motion.div>
          <motion.div variants={variants} className="md:col-span-5 flex flex-col font-mono text-xs md:text-sm uppercase tracking-widest text-secondary space-y-2 border-l border-structural pl-4">
            <p>Backend-focused full-stack developer building reliable software systems with Java, Spring Boot, React and modern AI technologies.</p>
            <p className="pt-2">Indore, India</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
