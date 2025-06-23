"use client";

import { motion } from "framer-motion";
import { FaBrain, FaCode, FaRocket } from "react-icons/fa";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { Spotlight } from "./ui/Spotlight";

const Approach = () => {

  const phases = [
    {
      quote:
        "First, I understand the client's requirements and goals. I also study the target audience and decide which features the website needs. This helps me create a clear structure and plan.",
      name: "Discovery Phase",
      title: "Planning & Research",
    },
    {
      quote:
        "Once the plan is ready, I design the UI and start writing frontend and backend code using React and Node.js. I keep everything modular and follow best practices for clean code.",
      name: "Design & Development",
      title: "Frontend & Backend Setup",
    },
    {
      quote:
        "In this phase, I use GitHub for version control and create CI/CD pipelines using GitHub Actions. I also containerize the app using Docker to make deployment easy and consistent.",
      name: "DevOps Integration",
      title: "CI/CD & Docker",
    },
    {
      quote:
        "I host the application on cloud platforms like Vercel or AWS. I make sure everything works properly by testing and monitoring the application using basic tools.",
      name: "Deployment",
      title: "Hosting & Testing",
    },
    {
      quote:
        "After launching, I keep checking for performance and bugs. I also take user feedback and update the site accordingly. My goal is to keep improving and maintaining the project.",
      name: "Post Launch",
      title: "Monitoring & Maintenance",
    },
  ];


  return (
    <section className="w-full py-20  relative overflow-hidden">
      <div className="absolute inset-0 -z-10">

          <div className="absolute h-full w-full bg-black bg-grid-white/[0.1]">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />

      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center mb-4 text-white">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Development Process</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A transparent, collaborative approach to building your perfect digital solution
        </p>

        <InfiniteMovingCards items={phases} direction="left" speed="normal" pauseOnHover={true} />
      </motion.div>
    </section>
  );
};

export default Approach;
