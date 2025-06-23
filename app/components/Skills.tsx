import { motion } from "framer-motion";
import Image from "next/image";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { imgSrc: '/js.svg', label: 'JavaScript', desc: 'Programming Language' },
      { imgSrc: '/ts.svg', label: 'TypeScript', desc: 'Typed JavaScript' },
      { imgSrc: '/re.svg', label: 'React', desc: 'Frontend Library' },
      { imgSrc: '/next.js.svg', label: 'Next.js', desc: 'React Framework' },
      { imgSrc: '/redux.svg', label: 'Redux', desc: 'State Management' },
      { imgSrc: '/css3.svg', label: 'CSS', desc: 'Styling Language' },
      { imgSrc: '/tailwind.svg', label: 'TailwindCSS', desc: 'CSS Framework' },
      { imgSrc: '/aceternity.png', label: 'AceternityUI', desc: 'UI Components' }
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { imgSrc: '/nodejs.svg', label: 'NodeJS', desc: 'Backend Runtime' },
      { imgSrc: '/express.svg', label: 'ExpressJS', desc: 'Node.js Framework' },
      { imgSrc: '/mongodb.svg', label: 'MongoDB', desc: 'NoSQL Database' },
      { imgSrc: '/firebase.svg', label: 'Firebase', desc: 'Backend Service' },
      { imgSrc: '/appwrite.svg', label: 'Appwrite', desc: 'Backend Server' },
      { imgSrc: '/passport.png', label: 'Passport', desc: 'Authentication' }
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { imgSrc: '/docker.svg', label: 'Docker', desc: 'Containerization' },
      { imgSrc: '/kubernetes.svg', label: 'Kubernetes', desc: 'Orchestration' },
      { imgSrc: '/AWS.svg', label: 'AWS', desc: 'Cloud Platform' },
      { imgSrc: '/Terraform.svg', label: 'Terraform', desc: 'IaC' },
      { imgSrc: '/Ansible.svg', label: 'Ansible', desc: 'Automation' },
      { imgSrc: '/NGINX.svg', label: 'Nginx', desc: 'Web Server' },
      { imgSrc: '/jenkins.svg', label: 'Jenkins', desc: 'CI/CD' },
      { imgSrc: '/Argo CD.svg', label: 'ArgoCD', desc: 'GitOps' }
    ]
  },
  {
    title: "Monitoring & Security",
    skills: [
      { imgSrc: '/Grafana.png', label: 'Grafana', desc: 'Dashboards' },
      { imgSrc: '/Prometheus.png', label: 'Prometheus', desc: 'Metrics' },
      { imgSrc: '/sonarqube.svg', label: 'SonarQube', desc: 'Code Quality' },
      { imgSrc: '/trivy.svg', label: 'Trivy', desc: 'Security Scanner' },
      { imgSrc: '/owasp.svg', label: 'OWASP', desc: 'Security Standards' }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { imgSrc: '/Git.png', label: 'Git', desc: 'Version Control' },
      { imgSrc: '/GitHub.svg', label: 'GitHub Actions', desc: 'CI/CD' },
      { imgSrc: '/Linux.svg', label: 'Linux', desc: 'OS' },
      { imgSrc: '/zegocloud.png', label: 'Zegocloud', desc: 'Video API' }
    ]
  }
];

const Skill = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-900 via-transparent to-gray-950">

      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')]" />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20" />
      </div>

      <div className="px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 animate-gradient">
            My Technical Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Organized by technology domains with modern tooling
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <h3 className="text-xl font-semibold mb-8 text-center flex items-center justify-center w-full">
  <span className="flex-grow h-px bg-gradient-to-r from-purple-500 to-blue-500 max-w-[300px] sm:max-w-[350px] mr-3" />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-400 text-base sm:text-lg md:text-xl">
    {category.title}
  </span>
  <span className="flex-grow h-px bg-gradient-to-r from-blue-500 to-purple-500 max-w-[300px] sm:max-w-[350px] ml-3" />
</h3>


              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map(({ imgSrc, label, desc }, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-4 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 hover:-translate-y-1">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative mb-4">
                          <div className="absolute inset-0 bg-purple-500 rounded-full opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300" />
                          <Image
                            src={imgSrc}
                            alt={label}
                            className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        
                        <h3 className="text-base font-medium text-gray-200 group-hover:text-white transition-colors">
                          {label}
                        </h3>

                        <p className="text-xs text-gray-400 mt-1">{desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous learning badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800/70 border border-gray-700 text-gray-300 text-sm backdrop-blur-sm">
            <svg className="w-4 h-4 mr-2 text-purple-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Continuously expanding my technical toolkit
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;