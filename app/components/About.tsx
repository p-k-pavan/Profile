"use client";
import { WobbleCard } from "./ui/WobbleCard";
import React, { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "lottie-react";
import MagicButton from "./ui/MagicButton";
import animationData from "@/data/confetti.json";

export const cardData = [
  {
    id: 1,
    phase: "Phase 1",
    title: "UI / UX Design",
    description:
      "Custom wireframes & responsive layouts tailored to your brand — designed before any code is written so you approve the look and feel first.",
    tags: ["Figma", "Wireframing", "Mobile-first"],
    delivery: "Delivered in 2–3 days",
    className: "lg:col-span-2 md:col-span-3",
    accent: { bg: "bg-blue-50", text: "text-blue-800", tag: "bg-blue-100 text-blue-800" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    id: 2,
    phase: "Phase 2",
    title: "Full stack development",
    description:
      "Complete frontend + backend built with MERN stack. React/Next.js UI, Node.js APIs, MongoDB database — clean, scalable code your business can grow with.",
    tags: ["React / Next.js", "Node.js", "MongoDB"],
    delivery: "Core app in 1–2 weeks",
    className: "lg:col-span-2 md:col-span-3",
    accent: { bg: "bg-purple-50", text: "text-purple-800", tag: "bg-purple-100 text-purple-800" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 3,
    phase: "Phase 3",
    title: "Payments & authentication",
    description:
      "Secure payment gateway (Razorpay / Stripe) and login system with JWT, OAuth, OTP email verification — everything needed to safely accept customers and protect data.",
    tags: ["Razorpay", "Stripe", "JWT / OAuth"],
    delivery: "3–4 days integration",
    className: "lg:col-span-2 md:col-span-3",
    accent: { bg: "bg-emerald-50", text: "text-emerald-800", tag: "bg-emerald-100 text-emerald-800" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
        <rect x="1" y="4" width="22" height="16" rx="2" /><path d="M1 10h22" />
      </svg>
    ),
  },
  {
    id: 4,
    phase: "Phase 4",
    title: "Hosting & deployment",
    description:
      "Your app goes live on the platform that fits your budget — Hostinger, GoDaddy, Vercel, or AWS. Custom domain, SSL certificate, and env setup all included.",
    tags: ["Hostinger", "GoDaddy", "AWS", "Vercel"],
    delivery: "Live within 1 day",
    className: "lg:col-span-2 md:col-span-3",
    accent: { bg: "bg-amber-50", text: "text-amber-800", tag: "bg-amber-100 text-amber-800" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-600">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    id: 5,
    phase: "Phase 5",
    title: "CI/CD & zero-downtime releases",
    description:
      "Automated pipelines so every code update goes live instantly without breaking your site. Docker containers ensure the app runs identically on every machine.",
    tags: ["Docker", "GitHub Actions", "Jenkins"],
    delivery: "Set up in 2–3 days",
    className: "lg:col-span-2 md:col-span-3",
    accent: { bg: "bg-rose-50", text: "text-rose-800", tag: "bg-rose-100 text-rose-800" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-600">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: 6,
    phase: "Phase 6",
    title: "Support & maintenance",
    description:
      "Post-launch monitoring, bug fixes, and performance checks. You get ongoing support so your site stays fast, secure, and up — even after the project is delivered.",
    tags: ["Grafana", "Uptime monitoring", "Bug fixes"],
    delivery: "Ongoing after launch",
    className: "lg:col-span-2 md:col-span-3",
    accent: { bg: "bg-green-50", text: "text-green-800", tag: "bg-green-100 text-green-800" },
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

const About = () => {
  const [copied, setCopied] = useState(false);


  const handleCopy = () => {
    const text = "pkpavan.ise@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <section id="about" className="p-4 md:p-12 w-full bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            What I deliver — start to finish
          </h2>
          <p className="text-sm text-gray-400">
            Every project handled end-to-end in 2–4 weeks. Design → Code → Deploy → Support.
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {cardData.map((card) => (
            <WobbleCard
              key={card.id}
              containerClassName={`${card.className} bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 min-h-[200px]`}
            >
              <div className="p-5 flex flex-col h-full gap-3">

                {/* Top row: icon + phase badge */}
                <div className="flex items-center justify-between">
                  <div className={`w-9 h-9 rounded-lg ${card.accent.bg} flex items-center justify-center`}>
                    {card.icon}
                  </div>
                  <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${card.accent.bg} ${card.accent.text}`}>
                    {card.phase}
                  </span>
                </div>

                {/* Title & description */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{card.description}</p>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-100" />

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <span key={tag} className={`text-[11px] font-medium px-2 py-1 rounded-md ${card.accent.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Delivery time */}
                <div className="flex items-center gap-1.5 mt-auto">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] text-gray-400">{card.delivery}</span>
                </div>

              </div>
            </WobbleCard>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-6 bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-base">Full project — design to deployment</p>
            <p className="text-gray-400 text-sm mt-0.5">Delivered end-to-end in 2–4 weeks for startups, businesses & agencies</p>
          </div>
          <div className="relative flex-shrink-0">
            {copied && (
              <div className="absolute -top-20 -right-10">
                <Lottie animationData={animationData} loop={copied} autoplay={copied} style={{ height: 150, width: 150 }} />
              </div>
            )}
            <MagicButton
              title={copied ? "Email copied!" : "Get a free quote"}
              icon={<IoCopyOutline />}
              position="left"
              handleClick={handleCopy}
              otherClasses="!bg-white !text-black hover:!bg-gray-100"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
