import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}
