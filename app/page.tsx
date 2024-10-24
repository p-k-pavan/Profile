"use client";

import Hero from "./components/Hero"
import {FloatingNav} from "./components/ui/FloatingNavbar"

export default function Home() {
  return (
    <div>
      <FloatingNav 
         navItems={[
          {name: "Home", link: "/"}
         ]}
      />
      <Hero />
    </div>
  )
}