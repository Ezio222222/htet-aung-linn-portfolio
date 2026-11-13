import profileImg from "@/assets/profile.jpg";
import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Database, Atom, Smartphone, Terminal, Cpu } from "lucide-react";

const ParticleField = lazy(() => import("./ParticleField"));

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

const floating = [
  { Icon: Atom, cls: "-top-2 left-6" },
  { Icon: Code2, cls: "top-10 -right-4" },
  { Icon: Database, cls: "bottom-12 -left-6" },
  { Icon: Smartphone, cls: "-bottom-2 right-10" },
  { Icon: Terminal, cls: "top-1/2 -right-8" },
  { Icon: Cpu, cls: "top-1/3 -left-8" },
];

export function Hero() {
  const [gl, setGl] = useState<boolean | null>(null);
  useEffect(() => setGl(hasWebGL()), []);
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        {gl && (
          <Suspense fallback={null}>
            <ParticleField />
          </Suspense>
        )}
        {gl === false && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,var(--primary),transparent_45%)] opacity-20" />
        )}
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-sm tracking-[0.3em] text-accent">HELLO, I'M</p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
            HTET AUNG
            <br />
            <span className="text-gradient">LINN</span>
          </h1>
          <p className="mt-6 text-2xl font-semibold md:text-3xl">Building Digital Experiences.</p>
          <p className="mt-4 max-w-lg text-muted-foreground">
            I'm an Information Science and Technology student and self-driven developer passionate
            about building modern applications and exploring innovative technologies.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Explore My Work{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center rounded-full px-6 py-3 font-semibold transition-colors hover:border-primary"
            >
              Let's Connect
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mx-auto h-64 w-64 md:h-80 md:w-80"
        >
          <div className="absolute inset-0 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,var(--primary),var(--secondary),var(--accent),var(--primary))] p-[2px] shadow-glow">
            <div className="h-full w-full rounded-full bg-background" />
          </div>
          <div className="glass absolute inset-3 grid place-items-center overflow-hidden rounded-full">
            <img
              src={profileImg}
              alt="Portrait of Htet Aung Linn"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: "center 16%" }}
            />
          </div>
          {floating.map(({ Icon, cls }, i) => (
            <motion.div
              key={i}
              className={`glass absolute grid h-12 w-12 place-items-center rounded-xl text-primary ${cls}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Icon className="h-5 w-5" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
