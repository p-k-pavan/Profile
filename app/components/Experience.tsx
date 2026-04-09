"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    company: "Moriphius AI",
    role: "Software Engineer Intern",
    duration: "3 months",
    type: "Internship",
    gradient: "from-[#4F8EF7] to-[#6B6FF7]",
    glowColor: "rgba(79,142,247,0.3)",
    dotColor: "#4F8EF7",
    typeBg: "bg-blue-500/15 text-blue-400 border border-blue-500/25",
    durationBg: "bg-white/5 text-neutral-400",
    initial: "M",
    projects: [
      {
        name: "OBS Streaming Pipeline",
        accent: "from-[#4F8EF7] to-[#9B6BF7]",
        leftBorder: "border-l-blue-500",
        tagBg: "bg-blue-500/10 text-blue-300 border border-blue-500/20",
        description:
          "Built and integrated a video/audio streaming pipeline using AWS media services for OBS-based live streaming projects. Worked on real-time media delivery infrastructure to ensure low-latency, high-quality streams at scale.",
        tags: ["AWS", "OBS", "Video Streaming", "Media Pipeline"],
      },
    ],
  },
  {
    id: 2,
    company: "Connectia",
    role: "Full Stack Developer",
    duration: "8.5 months",
    type: "Full-time",
    gradient: "from-[#A855F7] to-[#EC4899]",
    glowColor: "rgba(168,85,247,0.3)",
    dotColor: "#A855F7",
    typeBg: "bg-purple-500/15 text-purple-400 border border-purple-500/25",
    durationBg: "bg-white/5 text-neutral-400",
    initial: "C",
    projects: [
      {
        name: "Soul Dune — Tour Booking Platform",
        accent: "from-[#F59E0B] to-[#EF4444]",
        leftBorder: "border-l-amber-500",
        tagBg: "bg-amber-500/10 text-amber-300 border border-amber-500/20",
        description:
          "Built a complete tour booking platform from scratch. Integrated Telr payment gateway for secure online bookings, implemented JWT authentication and Redux state management. Delivered both a customer-facing booking interface and a full admin dashboard for managing tours and reservations.",
        tags: ["MERN Stack", "Redux", "JWT", "Telr Payments", "Admin Dashboard"],
      },
      {
        name: "Carat Years — Diamond Jewellery Platform",
        accent: "from-[#06B6D4] to-[#10B981]",
        leftBorder: "border-l-cyan-500",
        tagBg: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20",
        description:
          "Migrated the entire application from a company server to AWS. Redesigned the UI and built a dynamic price calculator — same product shows different pricing based on carat weight and diamond shape. Added single-click rate updates and bulk product upload via Excel-to-JSON conversion.",
        tags: ["AWS Migration", "MERN Stack", "Dynamic Pricing", "Excel/JSON", "UI Design"],
      },
      {
        name: "NBTC — Multi-site Platform Upgrade",
        accent: "from-[#10B981] to-[#6366F1]",
        leftBorder: "border-l-emerald-500",
        tagBg: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20",
        description:
          "Upgraded the platform from v2 to v5. Reworked the codebase to fix broken functionality, rebuilt the admin dashboard to manage 1 main site and 7 sub-sites from a single control panel — eliminating the need to switch between multiple admin panels.",
        tags: ["MERN Stack", "v2 → v5 Migration", "Multi-site", "Admin Dashboard"],
      },
      {
        name: "Lezzgo — Social Meetup App",
        accent: "from-[#EF4444] to-[#EC4899]",
        leftBorder: "border-l-rose-500",
        tagBg: "bg-rose-500/10 text-rose-300 border border-rose-500/20",
        description:
          "Built the backend for a meetup planning app featuring live location tracking once a meetup starts, in-app chat, expense calculator, and user invitations. After meetup completion, the event converts into a social feed post where other users can like and comment.",
        tags: ["Node.js", "Socket.io", "Live Tracking", "Real-time Chat", "REST APIs"],
      },
    ],
  },
];

const stats = [
  { label: "Months experience", value: "12", gradient: "from-[#4F8EF7] to-[#6B6FF7]", glow: "rgba(79,142,247,0.2)" },
  { label: "Projects shipped", value: "7+", gradient: "from-[#A855F7] to-[#EC4899]", glow: "rgba(168,85,247,0.2)" },
  { label: "Companies worked", value: "2", gradient: "from-[#06B6D4] to-[#10B981]", glow: "rgba(6,182,212,0.2)" }
];

const Experience = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({ 1: true, 2: true });

  const toggle = (id: number) =>
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <section id="experience" className="relative p-4 md:p-12 w-full overflow-hidden">

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-blue-600/8 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-purple-600/8 blur-[110px]" />
      </div>

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-purple-400 mb-3 px-4 py-1.5 rounded-full border border-purple-400/25 bg-purple-400/5">
            Where I've worked
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-neutral-400 text-sm">
            11 months of professional experience · 7+ production projects shipped
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, #4F8EF7, #A855F7, #10B981)" }}
          />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="md:pl-12 relative"
              >
                {/* Glowing timeline dot */}
                <div
                  className="absolute left-[7px] top-3 w-4 h-4 rounded-full hidden md:block"
                  style={{
                    background: exp.dotColor,
                    boxShadow: `0 0 10px 3px ${exp.glowColor}`,
                    border: "2px solid #080810",
                  }}
                />

                {/* Company header button */}
                <button onClick={() => toggle(exp.id)} className="w-full text-left mb-4 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div className="flex items-center gap-3">
                      {/* Gradient avatar */}
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg`}
                        style={{ boxShadow: `0 4px 14px ${exp.glowColor}` }}
                      >
                        {exp.initial}
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-base leading-tight">
                          {exp.company}
                        </h3>
                        <p className="text-neutral-400 text-xs">{exp.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-[52px] sm:ml-0">
                      <span className={`text-[11px] font-semibold px-3 py-1 rounded-full ${exp.typeBg}`}>
                        {exp.type}
                      </span>
                      <span className={`text-[11px] px-3 py-1 rounded-full ${exp.durationBg}`}>
                        {exp.duration}
                      </span>
                      <span className="text-neutral-500 text-xs transition-transform duration-200 group-hover:scale-110">
                        {expanded[exp.id] ? "▲" : "▼"}
                      </span>
                    </div>
                  </div>
                </button>

                {/* Project cards */}
                {expanded[exp.id] && (
                  <div className="flex flex-col gap-3">
                    {exp.projects.map((project, pIdx) => (
                      <motion.div
                        key={pIdx}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: pIdx * 0.06 }}
                        className={`relative bg-white/[0.04] border border-white/10 border-l-2 ${project.leftBorder} rounded-xl p-4 flex flex-col gap-3 hover:bg-white/[0.07] transition-colors duration-200 overflow-hidden`}
                      >
                        {/* Subtle top gradient shine */}
                        <div
                          className={`absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r ${project.accent} opacity-60`}
                        />

                        {/* Project name with gradient */}
                        <p className={`text-sm font-semibold bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}>
                          {project.name}
                        </p>
                        <p className="text-neutral-400 text-xs leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-[10px] font-medium px-2 py-1 rounded-md ${project.tagBg}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="relative rounded-xl p-[1px] overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${stat.glow}, transparent)` }}
            >
              <div
                className={`relative rounded-xl bg-gradient-to-br ${stat.gradient} p-[1px]`}
              >
                <div className="rounded-xl bg-[#080810]/90 p-4 text-center">
                  <p
                    className={`text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </p>
                  <p className="text-neutral-400 text-xs mt-1">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;