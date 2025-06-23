import { GlareCard } from "./ui/GlareCard";
import MagicButton from "./ui/MagicButton";
import { motion } from "framer-motion";
import { FaBrain, FaCode, FaRocket } from "react-icons/fa";

const Approach = () => {
  const phases = [
    {
      title: "Discovery Phase",
      icon: <FaBrain className="text-purple-400 text-2xl" />,
      description: "We'll collaborate to map out your website's goals, target audience, and key functionalities. Through detailed discussions, we'll define site structure, navigation, and content requirements to create a solid foundation.",
      svgPath: "M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    },
    {
      title: "Development Phase",
      icon: <FaCode className="text-blue-400 text-2xl" />,
      description: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I maintain transparent communication and keep you updated at every milestone.",
      svgPath: "M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    },
    {
      title: "Launch Phase",
      icon: <FaRocket className="text-green-400 text-2xl" />,
      description: "I'll translate everything into functional code, building your website from the ground up. After rigorous testing and optimization, we'll deploy your site and ensure everything runs smoothly.",
      svgPath: "M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
    }
  ];

  return (
    <section className="w-full py-20 bg-black/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-purple-900/10 to-transparent"></div>
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
          A transparent, collaborative approach to building your perfect digital solution
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <GlareCard className="h-full w-full max-w-md flex flex-col items-center justify-start p-8 bg-gradient-to-b from-gray-900/50 to-gray-900/20 border border-gray-800 hover:border-purple-500/30 transition-all">
                <div className="flex flex-col items-center h-full">
                  <div className="mb-6 w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                    {phase.icon}
                  </div>

                  <MagicButton
                    title={phase.title}
                    otherClasses="mb-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  />

                  <svg
                    width="66"
                    height="65"
                    viewBox="0 0 66 65"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 text-white mb-6"
                  >
                    <path
                      d={phase.svgPath}
                      stroke="currentColor"
                      strokeWidth="15"
                      strokeMiterlimit="3.86874"
                      strokeLinecap="round"
                    />
                  </svg>

                  <div className="flex-grow flex items-center">
                    <p className="text-gray-300 text-center text-sm md:text-base leading-relaxed line-clamp-4 hover:line-clamp-none transition-all">
                      {phase.description}
                    </p>
                  </div>

                  <div className="mt-6 text-xs text-gray-500">
                    Phase {index + 1} of 3
                  </div>
                </div>
              </GlareCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Approach;