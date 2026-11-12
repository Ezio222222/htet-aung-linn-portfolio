import { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, Layers, BrainCircuit, Puzzle, GraduationCap, MapPin, BookOpen, ExternalLink, QrCode, Ticket, Mail, ArrowUpRight, Monitor, Server, Database, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "./ui";
import { GithubIcon, TelegramIcon } from "./icons";
import cinemaHome from "@/assets/cinema_home.png.asset.json";
import cinemaPage1 from "@/assets/cinema_page1.png.asset.json";
import cinemaPage2 from "@/assets/cinema_page2.png.asset.json";
import townhubHome from "@/assets/townhub_home.png.asset.json";
import townhubPage from "@/assets/townhub_page.png.asset.json";
import townhubPage2 from "@/assets/townhub_page_2.png.asset.json";

const container = "mx-auto max-w-6xl px-6 py-28";

export function About() {
  const highlights = [
    { Icon: Rocket, t: "Self-Driven Learner" }, { Icon: Layers, t: "Practical Project Experience" },
    { Icon: BrainCircuit, t: "Interested in AI & Emerging Technologies" }, { Icon: Puzzle, t: "Passionate About Problem Solving" },
  ];
  return (
    <section id="about" className={container}>
      <SectionHeading eyebrow="01 — About" title="A Little About Me" />
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-4 text-muted-foreground leading-relaxed">
          <p>I'm <span className="text-foreground font-semibold">Htet Aung Linn</span>, a self-driven software developer and Information Science and Technology (IST) student at the University of Yadanarpon Cyber City (UYCC), Pyin Oo Lwin.</p>
          <p>My programming journey started with learning HTML and CSS, followed by JavaScript and React. Over time, I expanded my knowledge into backend development, databases, and mobile application development.</p>
          <p>I enjoy building practical applications, exploring new technologies, and solving real-world problems through programming.</p>
          <p>I have worked on projects such as an online cinema booking system and TownHub, a local services platform.</p>
          <p>Beyond academic learning, I continuously improve my skills through self-study, experimentation, and personal projects.</p>
          <p>My goal is to become a skilled software engineer, develop meaningful technology solutions, and contribute to the global software development community.</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 self-start">
          {highlights.map(({ Icon, t }, i) => (
            <Reveal key={t} delay={i * 0.1}>
              <div className="glass group h-full rounded-2xl p-5 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
                <Icon className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
                <p className="mt-4 text-sm font-semibold">{t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className={container}>
      <SectionHeading eyebrow="02 — Education" title="My Education" />
      <div className="relative border-l border-border pl-10">
        <span className="absolute -left-[9px] top-8 h-4 w-4 rounded-full bg-gradient-brand shadow-glow" />
        <Reveal>
          <div className="glass flex flex-col gap-6 rounded-3xl p-8 transition-all hover:border-primary/40 md:flex-row md:items-center">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground"><GraduationCap className="h-8 w-8" /></div>
            <div>
              <h3 className="text-2xl font-bold">University of Yadanarpon Cyber City (UYCC)</h3>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary" />Information Science and Technology (IST)</span>
                <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-secondary" />Pyin Oo Lwin, Myanmar</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const skills = [
  { cat: "Frontend Development", Icon: Monitor, items: [["HTML5","html5/html5-original"],["CSS3","css3/css3-original"],["JavaScript","javascript/javascript-original"],["React","react/react-original"],["React Native","react/react-original"],["Tailwind CSS","tailwindcss/tailwindcss-original"]] },
  { cat: "Programming & Backend", Icon: Server, items: [["C++","cplusplus/cplusplus-original"],["Java","java/java-original"],["PHP","php/php-original"],["Python","python/python-original"],["FastAPI","fastapi/fastapi-original"]] },
  { cat: "Database & Backend Services", Icon: Database, items: [["MySQL","mysql/mysql-original"],["Supabase","supabase/supabase-original"],["Firebase","firebase/firebase-original"]] },
  { cat: "Tools & Development Environment", Icon: Wrench, items: [["Git","git/git-original"],["GitHub","github/github-original"],["Visual Studio Code","vscode/vscode-original"],["Postman","postman/postman-original"],["XAMPP","xampp/xampp-original"]] },
];

export function Skills() {
  return (
    <section id="skills" className={container}>
      <SectionHeading eyebrow="03 — Skills" title="My Tech Stack" />
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map(({ cat, Icon, items }, ci) => (
          <Reveal key={cat} delay={ci * 0.1}>
            <div className="glass h-full rounded-3xl p-6">
              <h3 className="mb-5 flex items-center gap-3 font-semibold"><Icon className="h-5 w-5 text-accent" />{cat}</h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {items.map(([name, path]) => (
                  <motion.div key={name} whileHover={{ y: -4 }} className="group flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-muted/40 transition-all hover:border-primary/50 hover:shadow-glow">
                    <img src={`${DI}/${path}.svg`} alt="" loading="lazy" className={`h-8 w-8 transition-transform group-hover:scale-110 ${name === "GitHub" ? "invert" : ""}`} />
                    <span className="text-center text-xs font-medium">{name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function TiltCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div whileHover={{ rotateX: 3, rotateY: -3, scale: 1.01 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} style={{ transformPerspective: 1000 }}
      className="group relative rounded-3xl bg-gradient-brand p-px opacity-100">
      <div className="rounded-3xl bg-background">{children}</div>
    </motion.div>
  );
}

function Mockup({ kind }: { kind: "cinema" | "town" }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/50">
      <div className="flex gap-1.5 border-b border-border px-4 py-3"><span className="h-2.5 w-2.5 rounded-full bg-destructive/70" /><span className="h-2.5 w-2.5 rounded-full bg-accent/70" /><span className="h-2.5 w-2.5 rounded-full bg-primary/70" /></div>
      <div className="aspect-[16/10] p-5 transition-transform duration-700 group-hover:scale-105">
        {kind === "cinema" ? (
          <div className="flex h-full flex-col gap-3">
            <div className="flex gap-2">{[0,1,2,3].map(i => <div key={i} className="aspect-[2/3] flex-1 rounded-lg bg-gradient-to-b from-secondary/60 to-primary/30" />)}</div>
            <div className="mx-auto h-1 w-2/3 rounded-full bg-accent/70" />
            <div className="grid flex-1 grid-cols-10 gap-1">{Array.from({ length: 30 }).map((_, i) => <div key={i} className={`rounded-sm ${[4,5,14,15,22].includes(i) ? "bg-primary" : "bg-foreground/10"}`} />)}</div>
          </div>
        ) : (
          <div className="flex h-full flex-col gap-3">
            <div className="h-8 rounded-lg bg-foreground/10" />
            <div className="grid flex-1 grid-cols-3 gap-2">{Array.from({ length: 6 }).map((_, i) => <div key={i} className="rounded-lg bg-gradient-to-br from-primary/40 to-accent/20 p-2"><div className="h-3 w-3 rounded-full bg-accent" /><div className="mt-2 h-1.5 w-2/3 rounded bg-foreground/30" /></div>)}</div>
          </div>
        )}
      </div>
    </div>
  );
}

const projects = [
  { n: "01", kind: "cinema" as const, title: "Cinema – Online Booking System", url: "https://star-cinema.page.gd/src/index.html",
    desc: "An online cinema booking application designed to make discovering movies and booking cinema tickets easier. Users can explore available movies, view showtimes, select their preferred seats, and book tickets through a convenient interface.",
    features: ["Movie browsing", "Movie details and showtimes", "Cinema seat selection", "Online ticket booking", "QR-code ticket generation", "Digital ticket verification"],
    tags: ["Web App", "Booking", "QR Tickets"] },
  { n: "02", kind: "town" as const, title: "TownHub – Local Services Platform", url: "https://townhub.page.gd/src/index.html?i=1",
    desc: "TownHub is a local services platform designed to connect people with useful services in their community. It provides an organized way to discover local services and explore available providers.",
    features: ["Local services discovery", "Organized service listings", "User-friendly interface", "Convenient access to local service information"],
    tags: ["Web App", "Directory", "Community"] },
];

export function Projects() {
  return (
    <section id="projects" className={container}>
      <SectionHeading eyebrow="04 — Work" title="Selected Projects" subtitle="Some of the applications I've built through learning, experimentation, and practical development." />
      <div className="space-y-12">
        {projects.map((p, i) => (
          <Reveal key={p.n}>
            <TiltCard>
              <div className={`grid gap-8 p-6 md:grid-cols-2 md:p-10 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                <Mockup kind={p.kind} />
                <div>
                  <p className="text-gradient font-mono text-5xl font-bold">{p.n}</p>
                  <h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">{p.features.map(f => <li key={f} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{f}</li>)}</ul>
                  {p.kind === "cinema" && (
                    <div className="mt-5 flex items-center gap-4 rounded-2xl border border-accent/40 bg-accent/10 p-4">
                      <Ticket className="h-6 w-6 text-accent" /><ArrowUpRight className="h-4 w-4 text-muted-foreground" /><QrCode className="h-8 w-8 text-accent" />
                      <div><p className="text-sm font-semibold">QR-Based Digital Ticketing</p><p className="text-xs text-muted-foreground">Book → receive a QR ticket → scan for verification.</p></div>
                    </div>
                  )}
                  <div className="mt-5 flex flex-wrap gap-2">{p.tags.map(t => <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground">{t}</span>)}</div>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105">Live Demo <ExternalLink className="h-4 w-4" /></a>
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const contacts = [
  { Icon: TelegramIcon, label: "Telegram", value: "@ezio20", href: "https://t.me/ezio20" },
  { Icon: GithubIcon, label: "GitHub", value: "Ezio222222", href: "https://github.com/Ezio222222" },
  { Icon: Mail, label: "Gmail", value: "htetaunglinn681156692@gmail.com", href: "mailto:htetaunglinn681156692@gmail.com" },
];

export function Contact() {
  return (
    <section id="contact" className={container}>
      <SectionHeading eyebrow="05 — Contact" title="Let's Connect" subtitle="Have an idea, an interesting opportunity, or want to collaborate? I'd love to hear from you." />
      <div className="grid gap-5 md:grid-cols-3">
        {contacts.map(({ Icon, label, value, href }, i) => (
          <Reveal key={label} delay={i * 0.1}>
            <a href={href} target="_blank" rel="noopener noreferrer" className="glass group flex h-full flex-col rounded-3xl p-6 transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow">
              <div className="flex items-center justify-between"><Icon className="h-8 w-8 text-primary" /><ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" /></div>
              <p className="mt-6 font-semibold">{label}</p>
              <p className="mt-1 break-all text-sm text-muted-foreground">{value}</p>
            </a>
          </Reveal>
        ))}
      </div>
      <Reveal><p className="text-gradient mt-24 text-center text-3xl font-extrabold tracking-tight md:text-5xl">LET'S BUILD SOMETHING GREAT TOGETHER.</p></Reveal>
    </section>
  );
}

export function Footer() {
  return <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">© {new Date().getFullYear()} Designed & Built by Htet Aung Linn</footer>;
}
