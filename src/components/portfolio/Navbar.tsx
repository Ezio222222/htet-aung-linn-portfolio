import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const NAV = ["home", "about", "education", "skills", "projects", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let cur = "home";
      for (const id of NAV) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all", scrolled && "glass border-x-0 border-t-0")}>
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 font-bold">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-brand font-mono text-sm text-primary-foreground">HAL</span>
          <span className="hidden sm:inline">Htet Aung Linn</span>
        </a>
        <ul className="hidden gap-1 md:flex">
          {NAV.map((id) => (
            <li key={id} className="relative">
              <a href={`#${id}`} className={cn("block px-3 py-2 text-sm capitalize transition-colors", active === id ? "text-foreground" : "text-muted-foreground hover:text-foreground")}>{id}</a>
              {active === id && <motion.span layoutId="nav-dot" className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-brand" />}
            </li>
          ))}
        </ul>
        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="glass overflow-hidden md:hidden">
            {NAV.map((id) => (
              <li key={id}><a onClick={() => setOpen(false)} href={`#${id}`} className={cn("block px-6 py-3 capitalize", active === id ? "text-primary" : "text-muted-foreground")}>{id}</a></li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
