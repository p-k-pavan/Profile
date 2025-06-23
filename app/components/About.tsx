"use client";
import { WobbleCard } from "./ui/WobbleCard";
import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import MagicButton from "./ui/MagicButton";
import animationData from "@/data/confetti.json";

export const cardData = [
  {
    id: 1,
    title: "Full-Stack Architect",
    description: "Crafting seamless digital experiences from front to back",
    content: [
      "MERN stack specialist",
      "Real-time applications",
      "Microservices architecture"
    ],
    className: "lg:col-span-4 md:col-span-6 md:row-span-2",
    bgColor: "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-fuchsia-500 via-red-600 to-orange-400",
    textColor: "text-white"
  },
  {
    id: 2,
    title: "Cloud Alchemist",
    description: "Transforming infrastructure with modern DevOps magic",
    content: [
      "Kubernetes orchestration",
      "CI/CD pipelines",
      "Load balancing & monitoring"
    ],
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    bgColor: "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-400 via-blue-500 to-indigo-600",
    textColor: "text-white"
  },
  {
    id: 3,
    title: "Tech Stack",
    description: "My digital toolbox for building the future",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    bgColor: "bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-lime-400 via-emerald-500 to-green-600",
    textColor: "text-white",
    techStacks: {
      "Frontend": ["React", "Next.js", "Tailwind", "Framer"],
      "Backend": ["Node", "Express", "Redis", "Flask"]
    }
  },
  {
    id: 4,
    title: "Automation Wizard",
    description: "Eliminating repetitive tasks with code",
    content: [
      "Infrastructure as Code",
      "Bash scripting",
      "CI automation"
    ],
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    bgColor: "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-500 via-pink-600 to-purple-700",
    textColor: "text-white"
  },
  {
    id: 5,
    title: "UI Artisan",
    description: "Building interfaces that delight users",
    content: [
      "Interactive & motion UI",
      "Accessible & responsive layouts",
      "Component-driven design"
    ],
    className: "md:col-span-4 md:row-span-1",
    bgColor: "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-amber-400 via-yellow-500 to-orange-500",
    textColor: "text-black"
  },
  {
    id: 6,
    title: "Let's Create",
    description: "Ready to bring your vision to life?",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    bgColor: "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-violet-500 via-purple-600 to-indigo-700",
    textColor: "text-white"
  }
];


const About = () => {
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "pkpavan@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <section id="about" className="p-4 md:p-12 w-full bg-black">
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
        {cardData.map((card) => (
          <WobbleCard
            key={card.id}
            containerClassName={`${card.className} ${card.bgColor} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[180px] flex flex-col`}
          >
            <div className={`flex-1 flex flex-col ${card.textColor}`}>
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                {card.title}
              </h3>
              <p className="text-sm md:text-base mb-3 opacity-90">
                {card.description}
              </p>

              {card.content && (
                <ul className="mt-2 space-y-1">
                  {card.content.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2">✦</span>
                      <span className="text-xs md:text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {card.techStacks && (
                <div className="mt-auto grid grid-cols-2 gap-2">
                  {Object.entries(card.techStacks).map(([category, items]) => (
                    <div key={category}>
                      <h4 className="text-[10px] uppercase font-bold mb-1">
                        {category}
                      </h4>
                      <div className="space-y-1">
                        {items.map((item) => (
                          <span
                            key={item}
                            className="block text-xs px-2 py-1 rounded bg-black/20 backdrop-blur-sm"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {card.id === 6 && (
                <div className="mt-auto relative">
                  {copied && (
                    <div className="absolute -top-20 -right-10">
                      <Lottie options={defaultOptions} height={150} width={150} />
                    </div>
                  )}
                  <MagicButton
                    title={copied ? "Email Copied!" : "Get In Touch"}
                    icon={<IoCopyOutline />}
                    position="left"
                    handleClick={handleCopy}
                    otherClasses="!bg-black/30 hover:!bg-black/50"
                  />
                </div>
              )}
            </div>
          </WobbleCard>
        ))}
      </div>
    </section>
  );
};

export default About;