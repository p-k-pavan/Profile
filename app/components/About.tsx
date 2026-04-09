"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IoCopyOutline, IoCheckmarkOutline } from "react-icons/io5";
import MagicButton from "./ui/MagicButton";
import animationData from "@/data/confetti.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export const cardData = [
  {
    id: 1,
    phase: "01",
    title: "UI / UX Design",
    description:
      "Custom wireframes & responsive layouts tailored to your brand — designed before any code is written so you approve the look and feel first.",
    tags: ["Figma", "Wireframing", "Mobile-first"],
    delivery: "2–3 days",
    gradient: "from-[#4F8EF7] via-[#6B6FF7] to-[#9B6BF7]",
    glowColor: "rgba(79,142,247,0.35)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    id: 2,
    phase: "02",
    title: "Full Stack Development",
    description:
      "Complete frontend + backend with MERN stack. React/Next.js UI, Node.js APIs, MongoDB database — scalable code your business can grow with.",
    tags: ["React / Next.js", "Node.js", "MongoDB"],
    delivery: "1–2 weeks",
    gradient: "from-[#A855F7] via-[#EC4899] to-[#F97316]",
    glowColor: "rgba(168,85,247,0.35)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 3,
    phase: "03",
    title: "Payments & Auth",
    description:
      "Secure payment gateways (Razorpay / Stripe / Telr) and login systems with JWT, OAuth, OTP — everything needed to safely accept customers.",
    tags: ["Razorpay", "Stripe", "JWT / OAuth"],
    delivery: "3–4 days",
    gradient: "from-[#06B6D4] via-[#10B981] to-[#84CC16]",
    glowColor: "rgba(6,182,212,0.35)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" /><path d="M1 10h22" />
      </svg>
    ),
  },
  {
    id: 4,
    phase: "04",
    title: "Hosting & Deployment",
    description:
      "Your app goes live on the platform that fits your budget — Hostinger, GoDaddy, Vercel, or AWS. Domain, SSL, and env config all included.",
    tags: ["AWS", "Hostinger", "GoDaddy", "Vercel"],
    delivery: "Within 1 day",
    gradient: "from-[#F59E0B] via-[#EF4444] to-[#EC4899]",
    glowColor: "rgba(245,158,11,0.35)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
  },
  {
    id: 5,
    phase: "05",
    title: "CI/CD Pipelines",
    description:
      "Automated build, test & deploy pipelines. Code goes from push to production with zero manual steps and zero downtime using Docker & Jenkins.",
    tags: ["Docker", "GitHub Actions", "Jenkins"],
    delivery: "2–3 days",
    gradient: "from-[#EF4444] via-[#F97316] to-[#FBBF24]",
    glowColor: "rgba(239,68,68,0.35)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    id: 6,
    phase: "06",
    title: "Support & Maintenance",
    description:
      "Post-launch monitoring, bug fixes, and performance checks with Grafana & Prometheus. Your site stays fast, secure, and always up.",
    tags: ["Grafana", "Prometheus", "Bug fixes"],
    delivery: "Ongoing",
    gradient: "from-[#10B981] via-[#06B6D4] to-[#6366F1]",
    glowColor: "rgba(16,185,129,0.35)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

const ServiceCard = ({
  card,
  index,
}: {
  card: (typeof cardData)[0];
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group cursor-default"
      style={{ willChange: "transform" }}
    >
      {/* Glow layer */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} blur-xl`}
        animate={{ opacity: hovered ? 0.5 : 0.15, scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.4 }}
        style={{ zIndex: 0 }}
      />

      {/* Gradient border shell */}
      <motion.div
        animate={{ y: hovered ? -5 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`relative z-10 rounded-2xl bg-gradient-to-br ${card.gradient} p-[1.5px]`}
      >
        {/* Inner dark card */}
        <div className="rounded-2xl bg-[#080810]/88 backdrop-blur-md p-5 flex flex-col gap-4 min-h-[220px]">

          {/* Top: icon + phase */}
          <div className="flex items-start justify-between">
            <motion.div
              animate={{ rotate: hovered ? 8 : 0, scale: hovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg`}
            >
              {card.icon}
            </motion.div>
            <span className="text-[11px] font-bold tracking-[0.18em] px-3 py-1.5 rounded-full bg-white/8 text-white/50 border border-white/10">
              {card.phase}
            </span>
          </div>

          {/* Title + description */}
          <div>
            <h3 className="text-white font-bold text-[15px] leading-snug mb-1.5">
              {card.title}
            </h3>
            <p className="text-white/50 text-[12px] leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {card.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-2.5 py-1 rounded-full text-white/80"
                style={{ background: "rgba(255,255,255,0.09)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Delivery */}
          <div className="flex items-center gap-2 pt-2 border-t border-white/[0.07]">
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.25 }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"
            />
            <span className="text-[11px] text-white/35">
              Delivered in{" "}
              <span className="text-white/60 font-medium">{card.delivery}</span>
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const [copied, setCopied] = useState(false);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true });

  const handleCopy = () => {
    navigator.clipboard.writeText("pkpavan.ise@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="about" className="relative py-16 px-4 md:px-12 w-full overflow-hidden">

      {/* Ambient background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/4 w-80 h-80 rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-emerald-500/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={headingInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-400 mb-3 px-4 py-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/5"
          >
            End-to-End Service
          </motion.span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            What I deliver —{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              start to finish
            </span>
          </h2>
          <p className="text-sm text-white/40 max-w-md mx-auto leading-relaxed">
            Every project handled end-to-end in 2–4 weeks.{" "}
            <span className="text-white/60">
              Design → Code → Deploy → Support.
            </span>
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cardData.map((card, i) => (
            <ServiceCard key={card.id} card={card} index={i} />
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 relative overflow-hidden rounded-2xl p-[1.5px] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40"
        >
          <div className="rounded-2xl bg-[#080810]/90 backdrop-blur-md px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-base">
                Full project — design to deployment
              </p>
              <p className="text-white/40 text-sm mt-0.5">
                Delivered end-to-end in{" "}
                <span className="text-emerald-400 font-semibold">2–4 weeks</span>{" "}
                for startups, businesses & agencies
              </p>
            </div>
            <div className="relative flex-shrink-0">
              {copied && (
                <div className="absolute -top-20 -right-10 pointer-events-none">
                  <Lottie
                    animationData={animationData}
                    loop={false}
                    style={{ height: 150, width: 150 }}
                  />
                </div>
              )}
              <MagicButton
                title={copied ? "Email copied!" : "Get a free quote"}
                icon={copied ? <IoCheckmarkOutline /> : <IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-gradient-to-r !from-blue-500 !to-purple-600 !text-white !border-0 hover:!opacity-90"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
