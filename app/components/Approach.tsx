"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Approach = () => {

  const phases = [
  {
    quote:
      "I start by understanding your business goals, target users, and must-have features. You get a clear project scope, timeline, and tech plan before a single line of code is written — no surprises later.",
    name: "Discovery Phase",
    title: "Scope, Goals & Timeline",
  },
  {
    quote:
      "I design the UI in Figma and build the frontend with React/Next.js and Tailwind. You review and approve the design first. Backend APIs, database schema, and auth are set up in parallel using Node.js and MongoDB.",
    name: "Design & Development",
    title: "UI Design + Full Stack Build",
  },
  {
    quote:
      "Every code push is automatically tested and deployed via GitHub Actions CI/CD pipelines. The app is containerized with Docker so it runs identically in development, staging, and production — zero 'works on my machine' issues.",
    name: "DevOps Integration",
    title: "CI/CD, Docker & Automation",
  },
  {
    quote:
      "I deploy your app to AWS, Vercel, Hostinger, or GoDaddy — whichever fits your budget. Custom domain setup, SSL certificate, environment configuration, and a final end-to-end test are all included before handover.",
    name: "Deployment",
    title: "Live Hosting & Final QA",
  },
  {
    quote:
      "After launch I monitor uptime, performance, and errors using Grafana and Prometheus. Bug fixes, feature updates, and rate/content changes can be done with a single click or bulk upload — no developer needed for routine updates.",
    name: "Post Launch",
    title: "Monitoring, Fixes & Updates",
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
          From your first message to a live, monitored product — here's exactly how I work
        </p>

        <InfiniteMovingCards items={phases} direction="left" speed="normal" pauseOnHover={true} />
      </motion.div>
    </section>
  );
};

export default Approach;
