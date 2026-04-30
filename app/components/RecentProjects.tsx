import { motion } from 'motion/react';
import { Code2, Gem, Globe, ShoppingCart, Radio } from 'lucide-react';

const projects = [
  {
    id: 'featured',
    type: 'Real-time Platform · Featured',
    title: 'LezzGo — Meetup Platform',
    desc: 'An event-driven social platform engineered for scale. Live location tracking, Socket.io-based real-time communication, personalized feeds, automated notifications, and group expense management — all running under heavy concurrent load.',
    metrics: [
      { label: '5K+ Active Users', color: 'cyan' },
      { label: 'Low-latency I/O', color: 'green' },
      { label: 'Socket.io', color: 'purple' },
    ],
    tags: ['Node.js', 'React.js', 'Socket.io', 'MongoDB', 'Redis', 'AWS'],
    icon: Code2,
    stats: [
      { label: 'Concurrent Users', value: '5K+', percent: 90 },
      { label: 'Real-time Latency', value: '~12ms', percent: 95 },
      { label: 'Core Features', value: 'CRUD + Feed + Notify', percent: 100 },
    ],
  },
  {
    type: 'ERP System',
    title: 'Carat Years',
    desc: 'Diamond factory ERP with a real-time auto-pricing engine driven by carat, shape, and live metal rates via external APIs — completely eliminating manual price updates and improving accuracy across the board.',
    metrics: [
      { label: 'Auto-pricing Engine', color: 'cyan' },
      { label: '0 Manual Updates', color: 'green' },
    ],
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'External APIs', 'AWS'],
    icon: Gem,
  },
  {
    type: 'CMS Platform',
    title: 'NBTC Multi-Site CMS',
    desc: 'No-code, template-driven platform managing 8 websites (1 main + 7 branches). Enables non-technical users to create and publish full sites independently, with 35–45% improved load times via Redux optimization and lazy loading.',
    metrics: [
      { label: '8 Sites Managed', color: 'cyan' },
      { label: '35-45% Faster Load', color: 'purple' },
    ],
    tags: ['React.js', 'Redux', 'Node.js', 'MongoDB', 'Lazy Loading'],
    icon: Globe,
  },
  {
    type: 'E-Commerce',
    title: 'Namma Mart',
    desc: 'Production-ready full-stack e-commerce platform with Razorpay payment integration, JWT auth, Redux state management, email verification via ZeroBounce, and OTP-based password recovery using Next.js + TypeScript.',
    metrics: [
      { label: 'Razorpay Payments', color: 'green' },
      { label: 'Full Auth Flow', color: 'purple' },
    ],
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'ShadCN', 'Razorpay', 'Redis'],
    icon: ShoppingCart,
  },
  {
    type: 'Live Streaming Platform · Internship',
    title: 'TradeShow',
    desc: 'Real-time product showcase platform with live streaming visuals, dynamic banners, and targeted in-app promotions. Built event-driven UI systems in React.js with animated overlays; AWS OBS for scalable media delivery.',
    metrics: [
      { label: 'Live Streaming', color: 'cyan' },
      { label: 'AWS OBS', color: 'green' },
    ],
    tags: ['React.js', 'Node.js', 'Express', 'AWS OBS', 'WebSockets'],
    icon: Radio,
  },
];

export function Projects() {
  return (
    <section
  id="projects"
  className="py-20 lg:py-32 relative z-10 bg-black overflow-hidden"
>
  {/* Background glow (same feel as hero) */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-200px] right-[-150px] w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-[-200px] left-[-150px] w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    {/* Header */}
    <div className="text-center mb-16">
      <span className="font-mono text-xs text-blue-300 tracking-widest uppercase block mb-4">
        01 · Projects
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
        Things I've Built
      </h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
    </div>

    {/* GRID FIX */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          whileHover={{ y: -8 }}
          className={`relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]
          ${project.id === 'featured' ? 'md:col-span-2 grid md:grid-cols-2 gap-8' : ''}
          `}
        >

          {/* Top gradient line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition" />

          {/* Icon */}
          <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition">
            <project.icon className="w-10 h-10 text-blue-400" />
          </div>

          {/* LEFT */}
          <div>
            <div className="text-xs text-purple-300 uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
              {project.type}
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">
              {project.title}
            </h3>

            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {project.desc}
            </p>

            {/* Metrics */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.metrics.map((m) => (
                <span
                  key={m.label}
                  className="text-xs px-3 py-1 border border-blue-400/20 text-blue-300 bg-blue-400/5 rounded-full"
                >
                  {m.label}
                </span>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-white/5 border border-white/10 text-gray-400 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT (featured only) */}
          {project.id === 'featured' && (
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-lg">
              {project.stats.map((stat) => (
                <div key={stat.label} className="mb-4 last:mb-0">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-gray-400">{stat.label}</span>
                    <span className="text-blue-400 font-mono">{stat.value}</span>
                  </div>

                  <div className="h-1 bg-white/10 rounded-full">
                    <div
                      className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                      style={{ width: `${stat.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}
