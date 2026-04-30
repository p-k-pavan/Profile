"use client";

import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import Approach from "./components/Approach";
import Footer from "./components/Footer";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/RecentProjects";
import { Education } from "./components/Eduction";
import { CustomCursor } from "./components/ui/CustomCursor";

export default function Home() {
  return (
    <div className="bg-black w-screen max-w-full overflow-hidden relative">

      <CustomCursor />

      <div className="relative z-10">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/" },
            { name: "Projects", link: "#projects" },
            { name: "Skills", link: "#skills" },
            { name: "Experience", link: "#experience" },

            { name: "Education", link: "#education" },
            { name: "Contact", link: "#contact" },

          ]}
        />
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        {/* <Approach /> */}
        <Footer />
      </div>
    </div>
  );
}