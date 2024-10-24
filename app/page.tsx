"use client";

import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import About from "./components/About"; // Ensure this points to the right file

export default function Home() {
  return (
    <div className="bg-black">
      <FloatingNav
        navItems={[
          { name: "Home", link: "/" }
        ]}
      />
      <Hero />
      <About /> 
    </div>
  );
}

