import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Education, Skills, Projects, Contact, Footer } from "@/components/portfolio/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Htet Aung Linn — Software Developer Portfolio" },
      { name: "description", content: "Portfolio of Htet Aung Linn, IST student at UYCC and self-driven developer building modern web and mobile applications." },
      { property: "og:title", content: "Htet Aung Linn — Software Developer Portfolio" },
      { property: "og:description", content: "Projects, tech stack and contact for developer Htet Aung Linn." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main><Hero /><About /><Education /><Skills /><Projects /><Contact /></main>
      <Footer />
    </div>
  );
}
