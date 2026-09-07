"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import clsx from "clsx";

export function BottomNav() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("az");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    let current = "az";
    if (scrollY > 500) current = "work";
    if (scrollY > 1500) current = "contact";
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "az", label: "AZ", href: "/" },
    { id: "blog", label: "Blog", href: "/blog" },
    { 
      id: "github", 
      label: "GitHub", 
      href: "https://github.com/ansh1024", 
      external: true, 
      icon: (
        <svg suppressHydrationWarning xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 transition-opacity duration-200">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
          <path d="M9 18c-4.51 2-5-2-7-2"></path>
        </svg>
      )
    },
    { 
      id: "linkedin", 
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/ansh-zamde-2499311b0", 
      external: true, 
      icon: (
        <svg suppressHydrationWarning xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 absolute left-1/2 -translate-x-1/2 transition-opacity duration-200">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-full max-w-lg px-4 flex justify-center">
      <nav className="pointer-events-auto bg-primary/90 backdrop-blur-md border border-structural shadow-2xl p-1.5 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-secondary">
        {navItems.map((item) => (
          item.external ? (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={clsx(
                "group relative px-4 py-2 hover:text-primary transition-all duration-200 ease-out hover:-translate-y-[1px]",
                activeTab === item.id ? "text-primary" : ""
              )}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-200">{item.label}</span>
              {item.icon}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan group-hover:w-4 transition-all duration-250 ease-out" />
            </a>
          ) : (
            <Link
              key={item.id}
              href={item.href}
              className={clsx(
                "group relative px-4 py-2 hover:text-primary transition-all duration-200 ease-out hover:-translate-y-[1px]",
                activeTab === item.id ? "text-primary" : ""
              )}
              onClick={() => setActiveTab(item.id)}
            >
              <span className="relative z-10">{item.label}</span>
              <div className={clsx(
                "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 transition-all duration-250 ease-out",
                activeTab === item.id ? "w-1 bg-primary" : "w-0 bg-cyan group-hover:w-4"
              )} />
            </Link>
          )
        ))}
        
        <div className="w-[1px] h-4 bg-structural mx-1 opacity-20" />

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="group relative px-3 py-2 hover:text-primary transition-all duration-200 ease-out hover:-translate-y-[1px]"
          aria-label="Toggle theme"
        >
          <div className="relative w-4 h-4 flex items-center justify-center">
            {mounted && (
              <>
                <svg suppressHydrationWarning xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={clsx("absolute transition-all duration-300 ease-out", theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100")}>
                  <circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
                <svg suppressHydrationWarning xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={clsx("absolute transition-all duration-300 ease-out", theme === "light" ? "-rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100")}>
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </>
            )}
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-yellow group-hover:w-4 transition-all duration-250 ease-out" />
        </button>
      </nav>
    </div>
  );
}
