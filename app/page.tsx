import { Hero } from "@/components/Hero";
import { SlidingNumber } from "@/components/SlidingNumber";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col pb-32">
      <nav className="fixed top-0 left-0 w-full flex justify-between p-6 md:p-8 mix-blend-difference z-50 pointer-events-none">
        <div className="font-display font-bold text-2xl uppercase tracking-widest pointer-events-auto text-invert">AZ</div>
      </nav>

      <Hero />

      {/* About Section */}
      <section id="about" className="relative py-20 md:py-32 border-b border-structural px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <h2 className="font-mono text-xs md:text-sm uppercase tracking-widest text-secondary mb-8">About</h2>
            <div className="font-text text-base md:text-xl leading-relaxed space-y-6 font-medium">
              <p>
                I’m a third-year Computer Engineering student at IET DAVV with a strong foundation in backend system design and full-stack development.
              </p>
              <p>
                I’ve built applications using Spring Boot, Express.js, FastAPI and Next.js, with React on the frontend, and I enjoy working on the parts of a product that make everything else reliable — APIs, authentication, databases, system structure and backend logic.
              </p>
              <p>
                I’m currently expanding into Agentic AI engineering, working with technologies such as LangChain, LangGraph and Google ADK to build intelligent systems powered by large language models. I also have experience deploying applications and backend services using cloud platforms.
              </p>
              <p>
                I like building things end-to-end, understanding how systems work under the hood, and turning ideas into software that is actually useful.
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 flex flex-col justify-end">
          <p className="font-display text-3xl md:text-5xl lg:text-7xl uppercase tracking-tighter leading-[1.1] max-w-[15ch]">
            Indore, India
          </p>
        </div>
      </section>

      {/* Education & Stats */}
      <section className="relative py-16 md:py-24 border-b border-structural px-4 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <h2 className="font-mono text-xs md:text-sm uppercase tracking-widest text-secondary mb-8">Education</h2>
          <div className="border-l-2 border-cyan pl-6 py-2">
            <h3 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tighter">IET DAVV</h3>
            <p className="font-mono text-sm uppercase text-secondary mt-2">B.Tech Computer Engineering</p>
            <p className="font-mono text-sm uppercase text-secondary">2024–2028</p>
            <div className="mt-6 inline-block border border-structural px-3 py-1 bg-structural/5">
              <span className="font-mono text-[10px] uppercase tracking-widest">Currently: 3rd year / Semester 5</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-12">
          <div className="flex flex-col">
            <div className="font-mono text-5xl lg:text-6xl font-medium tracking-tight mb-2">
              <SlidingNumber value={8.55} decimals={2} />
            </div>
            <div className="dimension-line pt-2">
              <span className="font-mono text-xs uppercase text-secondary">CGPA</span>
              <p className="mt-1 text-[9px] italic text-secondary/50 leading-tight">*SGPA details apply. Terms & conditions.</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="font-mono text-5xl lg:text-6xl font-medium tracking-tight mb-2">
              <SlidingNumber value={200} suffix="+" />
            </div>
            <div className="dimension-line pt-2">
              <span className="font-mono text-xs uppercase text-secondary">DSA Problems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="relative py-20 md:py-32 border-b border-structural px-4 md:px-8 lg:px-12">
        <h2 className="font-mono text-xs md:text-sm uppercase tracking-widest text-secondary mb-16">Selected Work</h2>
        
        <div className="flex flex-col gap-24 md:gap-32">
          {/* PortfolioX */}
          <div className="group relative">
            <div className="absolute inset-0 bg-cyan mix-blend-multiply dark:mix-blend-color-burn translate-x-4 translate-y-4 -z-10 hidden md:block opacity-20" />
            <div className="border border-structural bg-primary brutalist-shadow p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 hover:bg-bg-secondary transition-colors duration-300">
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tighter text-cyan drop-shadow-sm">PortfolioX</h3>
                    <span className="font-mono text-[10px] uppercase border border-cyan text-cyan px-2 py-1 bg-cyan/10">In Progress</span>
                  </div>
                  <p className="text-lg md:text-xl leading-relaxed mb-6 font-medium">
                    Personal investment command center.
                  </p>
                  <ul className="text-sm md:text-base text-secondary mb-8 max-w-lg space-y-2 list-none">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyan" /> IPO tracker</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyan" /> Mutual fund SIP tracker</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyan" /> Risk-aware dashboard</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-cyan" /> IPO apply/skip scoring (using GMP%, subscription trend, historical allotment)</li>
                  </ul>
                </div>
                <div className="font-mono text-xs uppercase leading-loose text-secondary mt-8 pt-6 border-t border-structural">
                  Spring Boot · Spring Security · JWT · Spring Data JPA · MySQL · scheduled jobs · WebSockets/polling · React · Recharts
                </div>
              </div>
              <div className="bg-structural/5 border border-structural/20 min-h-[300px] flex items-center justify-center relative overflow-hidden group-hover:border-cyan/50 transition-colors">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,194,215,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]" />
                <span className="font-mono text-xs text-secondary/50">SYSTEM_UI_RENDER</span>
              </div>
            </div>
          </div>

          {/* Thryve */}
          <div className="group relative lg:w-4/5 lg:ml-auto">
            <div className="absolute inset-0 bg-coral mix-blend-multiply dark:mix-blend-color-burn -translate-x-4 translate-y-4 -z-10 hidden md:block opacity-20" />
            <div className="border border-structural bg-primary brutalist-shadow p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 hover:bg-bg-secondary transition-colors duration-300">
              <div className="flex flex-col justify-between order-2 md:order-1">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter text-coral drop-shadow-sm">Thryve</h3>
                    <div className="flex flex-col gap-2 items-end">
                      <span className="font-mono text-[10px] uppercase border border-coral text-coral px-2 py-1 bg-coral/10">SIH 2025</span>
                      <span className="font-mono text-[10px] uppercase bg-structural text-invert px-2 py-1">Team Project</span>
                    </div>
                  </div>
                  <p className="text-base md:text-lg leading-relaxed mb-4 font-medium">
                    Mental health platform built with a team.
                  </p>
                  <ul className="text-sm text-secondary mb-6 space-y-1">
                    <li>— PHQ/GHQ assessments</li>
                    <li>— Appointments</li>
                    <li>— Analytics dashboard</li>
                  </ul>
                </div>
                <div className="font-mono text-[11px] uppercase leading-relaxed text-secondary pt-4 border-t border-structural">
                  Node.js · Express · MongoDB · Next.js · TypeScript · Tailwind · Recharts · React Query · JWT
                </div>
              </div>
              <div className="bg-structural/5 border border-structural/20 min-h-[250px] order-1 md:order-2 flex items-center justify-center relative overflow-hidden group-hover:border-coral/50 transition-colors">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,59,48,0.05)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]" />
                <span className="font-mono text-xs text-secondary/50">SYSTEM_UI_RENDER</span>
              </div>
            </div>
          </div>

          {/* Finly */}
          <div className="group relative lg:w-2/3">
            <div className="absolute inset-0 bg-yellow mix-blend-multiply dark:mix-blend-color-burn translate-x-4 -translate-y-4 -z-10 hidden md:block opacity-20" />
            <div className="border border-structural bg-primary brutalist-shadow p-8 md:p-10 relative z-10 hover:bg-bg-secondary transition-colors duration-300">
              <div className="flex justify-between items-start mb-6">
                <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter text-yellow drop-shadow-sm">Finly</h3>
                <span className="font-mono text-[10px] uppercase border border-yellow text-yellow px-2 py-1 bg-yellow/10">Rebuilding</span>
              </div>
              <p className="text-base md:text-lg leading-relaxed mb-4 max-w-lg font-medium">
                Personal finance manager.
              </p>
              <ul className="text-sm text-secondary mb-6 space-y-1">
                <li>— Monthly spend summaries.</li>
                <li>— Budget warnings.</li>
              </ul>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-3 bg-structural/5 border border-structural/20">
                  <span className="block font-mono text-[10px] uppercase text-secondary mb-1">Original</span>
                  <span className="font-mono text-xs">Django · SQLite</span>
                </div>
                <div className="p-3 bg-cobalt/10 border border-cobalt/20">
                  <span className="block font-mono text-[10px] uppercase text-cobalt mb-1">Current</span>
                  <span className="font-mono text-xs">Spring Boot · MySQL · JWT · React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack & Activities */}
      <section className="relative py-20 md:py-32 border-b border-structural px-4 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          <h2 className="font-mono text-xs md:text-sm uppercase tracking-widest text-secondary mb-12">Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 font-mono text-sm uppercase leading-relaxed font-medium">
            <div>
              <h4 className="text-secondary/60 text-[10px] mb-4 tracking-widest border-b border-structural pb-2">Backend</h4>
              <ul className="space-y-3">
                <li>Java</li>
                <li>Spring Boot</li>
                <li>Spring Security</li>
                <li>REST APIs</li>
                <li>JPA</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div>
              <h4 className="text-secondary/60 text-[10px] mb-4 tracking-widest border-b border-structural pb-2">Full Stack</h4>
              <ul className="space-y-3">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>Node.js</li>
              </ul>
            </div>
            <div>
              <h4 className="text-secondary/60 text-[10px] mb-4 tracking-widest border-b border-structural pb-2">Data / Tools</h4>
              <ul className="space-y-3">
                <li>MongoDB</li>
                <li>Git</li>
                <li>Docker</li>
              </ul>
            </div>
            <div>
              <h4 className="text-secondary/60 text-[10px] mb-4 tracking-widest border-b border-structural pb-2">AI</h4>
              <ul className="space-y-3">
                <li>GenAI</li>
                <li>LLMs</li>
                <li>Agentic AI</li>
                <li>RAG</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-structural pt-16 lg:pt-0 lg:pl-16">
          <h2 className="font-mono text-xs md:text-sm uppercase tracking-widest text-secondary mb-12">Outside of Code</h2>
          <div className="flex flex-col gap-10">
            <div className="relative pl-4">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan" />
              <h4 className="font-display text-2xl font-bold uppercase tracking-wide">GSSoC 2026</h4>
              <p className="font-mono text-xs uppercase text-secondary mt-1">Contributor & Ambassador</p>
            </div>
            <div className="relative pl-4">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-cobalt" />
              <h4 className="font-display text-2xl font-bold uppercase tracking-wide">E-Cell DAVV</h4>
              <p className="font-mono text-xs uppercase text-secondary mt-1">Marketing Team</p>
            </div>
            <div className="relative pl-4">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange" />
              <h4 className="font-display text-2xl font-bold uppercase tracking-wide">NSS</h4>
              <p className="font-mono text-xs uppercase text-secondary mt-1">Technical Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 md:py-48 bg-orange text-[#080808] px-4 md:px-8 lg:px-12 flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.1)_100%)] pointer-events-none" />
        <h2 className="font-display text-6xl md:text-9xl lg:text-[140px] font-bold uppercase tracking-tighter leading-none mb-12 mix-blend-color-burn">
          Get in touch
        </h2>
        <p className="font-text text-xl md:text-3xl lg:text-4xl font-medium tracking-tight mb-16 mix-blend-color-burn">
          Always open to interesting conversations.
        </p>
        <div className="flex flex-col items-center">
          <a href="mailto:24bcs107@ietdavv.edu.in" className="font-mono text-lg md:text-xl uppercase font-bold tracking-tight hover:opacity-60 transition-opacity border-b-2 border-[#080808]/20 pb-2">
            Get in touch →
          </a>
        </div>
      </section>

      {/* Footer / Engineering Title Block */}
      <footer className="relative border-t border-structural flex flex-col md:flex-row text-[10px] md:text-xs font-mono uppercase bg-structural text-invert divide-y md:divide-y-0 md:divide-x divide-invert/10">
        <div className="p-6 md:p-8 flex-1">
          <span className="text-invert/40 block mb-2">Drawn By / Name</span>
          <span className="font-bold">ANSH ZAMDE</span>
        </div>
        <div className="p-6 md:p-8 flex-1">
          <span className="text-invert/40 block mb-2">Location</span>
          <span className="font-bold">Indore, India</span>
        </div>
      </footer>

    </main>
  );
}
