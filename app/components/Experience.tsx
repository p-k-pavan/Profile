import { motion } from 'motion/react';

const experiences = [
  {
    date: '06/2025 – 08/2025 · Bangalore',
    role: 'Full Stack Intern',
    company: 'Morphius AI',
    companyUrl: 'https://www.morphius.in',
    points: [
      'Architected and launched **TradeShow**, a real-time product showcase platform with live streaming, dynamic banners, and targeted in-app promotions for live trade events.',
      'Built event-driven UI systems in **React.js** with live product updates, animated displays, and promotional overlays — improving session retention.',
      'Integrated **AWS OBS** for scalable media storage and low-latency content delivery; developed fullstack features using Node.js and Express.js.',
    ],
  },
  {
    date: '08/2025 – 04/2026 · Bangalore',
    role: 'Full Stack Developer',
    company: 'Connectia Technology',
    companyUrl: 'https://connectiainfotech.in',
    points: [
      '**Carat Years:** Engineered a diamond factory ERP with a real-time auto-pricing engine based on carat, shape, and live metal rates via external APIs — eliminating manual price updates and improving accuracy.',
      'Built a high-volume Excel-to-JSON data pipeline with validation, transformation, and error reporting — processing 500+ records per upload with multi-variant product structures.',
      'Led AWS cloud migration with zero downtime and delivered frontend performance optimizations, ensuring seamless production availability.',
      '**NBTC Multi-Site CMS:** Built a no-code, template-driven platform managing 8 websites, enabling non-technical users to create and publish sites independently.',
      'Implemented **Redux** for state management, reduced redundant API calls, and introduced lazy loading — improving page load time by ~35–45%.',
      'Developed a fully API-driven CMS with dynamic content and high-quality media handling — zero hardcoded data.',
      '**LezzGo:** Engineered a real-time meetup platform handling 5K+ users with live location tracking and **Socket.io**-based communication.',
      'Built social features with full CRUD operations, personalized feeds, automated notifications, and group expense management.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-200px] left-[-150px] w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-200px] right-[-150px] w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-blue-300 tracking-widest uppercase block mb-4">
            03 · Experience
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Work History
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
        </motion.div>

        <div className="relative max-w-4xl mx-auto">

          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/50 via-purple-500/40 to-transparent" />

          <div className="space-y-12">

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-12"
              >

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.2 + 0.2 }}
                  className="absolute -left-1.5 top-1 w-3 h-3 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                />

                <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">

                  <div className="text-xs text-purple-300 mb-2 font-mono">
                    {exp.date}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {exp.role}
                  </h3>

                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      className="text-blue-400 hover:underline inline-flex items-center gap-1 mb-4"
                    >
                      {exp.company} ↗
                    </a>
                  ) : (
                    <div className="text-blue-400 mb-4">{exp.company}</div>
                  )}

                  <ul className="space-y-3">
                    {exp.points.map((point, pIdx) => (
                      <motion.li
                        key={pIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.2 + pIdx * 0.1 }}
                        className="text-sm text-gray-400 leading-relaxed pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-blue-400 before:text-xs before:top-1"
                        dangerouslySetInnerHTML={{
                          __html: point.replace(
                            /\*\*(.*?)\*\*/g,
                            '<strong class="text-white">$1</strong>'
                          ),
                        }}
                      />
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}
