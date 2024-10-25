"use client";

import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import About from "./components/About"; 
import RecentProjects from "./components/RecentProjects"

export default function Home() {
  return (
    <div className="bg-black">
      <FloatingNav
        navItems={[
          { name: "Home", link: "/" },
          { name: "About", link: "#about" },
          { name: "Project", link: "#project" },
        ]}
      />
      <Hero />
      <About /> 
      <RecentProjects />
    </div>
  );
}

