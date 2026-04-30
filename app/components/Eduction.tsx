import { motion } from 'motion/react';
import { GraduationCap, Wrench } from 'lucide-react';

const education = [
  {
    icon: GraduationCap,
    degree: 'Bachelor of Engineering in Information Science',
    school: 'B.M. Sreenivasaiah College of Engineering',
    year: '02/2023 – 06/2025 · Bangalore',
    score: 'CGPA 7.65',
  },
  {
    icon: Wrench,
    degree: 'Diploma in Mechanical Engineering',
    school: 'KS Polytechnic',
    year: '08/2019 – 10/2022 · Bangalore',
    score: '73.2%',
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 lg:py-32 relative overflow-hidden">

  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-200px] right-[-150px] w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-[-200px] left-[-150px] w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
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
        04 · Education
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
        Academic Background
      </h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
    </motion.div>

    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

      {education.map((edu, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2 }}
          
          className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col gap-4 transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
        >

          <edu.icon className="w-12 h-12 text-blue-400 mb-2" />

          <h3 className="text-lg font-bold text-white leading-snug">
            {edu.degree}
          </h3>

          <p className="text-sm text-purple-300">
            {edu.school}
          </p>

          <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-auto">
            <span className="text-xs text-gray-400 font-mono">
              {edu.year}
            </span>
            <span className="text-sm font-bold text-blue-400 font-mono">
              {edu.score}
            </span>
          </div>

        </motion.div>
      ))}

    </div>
  </div>
</section>
  );
}
