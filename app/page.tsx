"use client";

import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import About from "./components/About"; 
import RecentProjects from "./components/RecentProjects";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import Skill from "./components/Skills";

export default function Home() {
  return (
    <div className="bg-black w-screen max-w-full overflow-hidden relative">
    
      

      <div className="relative z-10">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/" },
            { name: "About", link: "#about" },
            { name: "Project", link: "#project" },
            { name: "Contact", link: "#contact" },
          ]}
        />
        <Hero />
        <About /> 
        <RecentProjects />
        <Skill />
        <Approach />
        <Footer />
      </div>
    </div>
  );
}