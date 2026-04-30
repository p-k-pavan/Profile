import { motion } from 'motion/react';
import { Zap, Palette, Wrench, Cloud, Database, Rocket } from 'lucide-react';

const skillCategories = [
  {
    name: 'Languages',
    icon: Zap,
    color: 'cyan',
    skills: [
      { name: 'JavaScript', highlight: true },
      { name: 'TypeScript', highlight: true },
      { name: 'Python', highlight: false },
      { name: 'HTML', highlight: false },
      { name: 'CSS', highlight: false },
    ],
  },
  {
    name: 'Frontend',
    icon: Palette,
    color: 'purple',
    skills: [
      { name: 'React.js', highlight: true },
      { name: 'Next.js', highlight: true },
      { name: 'Redux Toolkit', highlight: false },
      { name: 'Tailwind CSS', highlight: false },
      { name: 'ShadCN UI', highlight: false },
      { name: 'Chakra UI', highlight: false },
      { name: 'Cloudinary', highlight: false },
    ],
  },
  {
    name: 'Backend',
    icon: Wrench,
    color: 'emerald',
    skills: [
      { name: 'Node.js', highlight: true },
      { name: 'Express.js', highlight: true },
      { name: 'Socket.io', highlight: false },
      { name: 'WebSockets', highlight: false },
      { name: 'RESTful APIs', highlight: false },
      { name: 'Flask', highlight: false },
      { name: 'Multer', highlight: false },
    ],
  },
  {
    name: 'Cloud & Infra',
    icon: Cloud,
    color: 'amber',
    skills: [
      { name: 'AWS EC2', highlight: true },
      { name: 'AWS S3', highlight: true },
      { name: 'CloudFront', highlight: false },
      { name: 'Route 53', highlight: false },
      { name: 'RDS', highlight: false },
      { name: 'IAM / VPC', highlight: false },
      { name: 'ALB / ASG', highlight: false },
      { name: 'CloudWatch', highlight: false },
      { name: 'SNS', highlight: false },
      { name: 'EFS', highlight: false },
      { name: 'Terraform', highlight: false },
      { name: 'Ansible', highlight: false },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    color: 'red',
    skills: [
      { name: 'MongoDB', highlight: true },
      { name: 'Redis', highlight: true },
      { name: 'Mongoose', highlight: false },
    ],
  },
  {
    name: 'DevOps & Tools',
    icon: Rocket,
    color: 'cyan',
    skills: [
      { name: 'Docker', highlight: true },
      { name: 'GitHub Actions', highlight: false },
      { name: 'Nginx', highlight: false },
      { name: 'PM2', highlight: false },
      { name: 'Linux CLI', highlight: false },
      { name: 'Git', highlight: false },
      { name: 'Postman', highlight: false },
      { name: 'Firebase Auth', highlight: false },
      { name: 'Auth.js', highlight: false },
      { name: 'JWT', highlight: false },
    ],
  },
];

export function Skills() {
  return (
   <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">

  {/* Background glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-[-200px] left-[-150px] w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>
    <div className="absolute bottom-[-200px] right-[-150px] w-[400px] h-[400px] bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-12">

    {/* Header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16"
    >
      <span className="font-mono text-xs text-blue-300 tracking-widest uppercase block mb-4">
        02 · Skills
      </span>
      <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
        Tech Arsenal
      </h2>
      <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto" />
    </motion.div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {skillCategories.map((category, idx) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          
          /* 🔥 GLASS CARD */
          className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl p-7 transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]"
        >

          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/10">
              <category.icon className="w-5 h-5 text-blue-300" />
            </div>
            <span className="font-semibold text-white">{category.name}</span>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <motion.span
                key={skill.name}
                whileHover={{ y: -2 }}
                className={`text-xs px-3 py-1.5 rounded border transition-all duration-300 ${
                  skill.highlight
                    ? 'border-blue-400/30 text-blue-300 bg-blue-400/5'
                    : 'border-white/10 text-gray-400 bg-white/5'
                }`}
              >
                {skill.name}
              </motion.span>
            ))}
          </div>

        </motion.div>
      ))}

    </div>
  </div>
</section>
  );
}
