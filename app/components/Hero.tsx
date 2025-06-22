"use client";

import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="absolute left-80 top-28 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="absolute right-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />

        <div className="absolute h-full w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2]">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center px-4 max-w-7xl mx-auto"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 mb-4"
          >
            Building for the Future — Code, Deploy, Repeat
          </motion.p>

          <TextGenerateEffect
            className="text-center text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            words="Crafting Scalable Web Apps with a DevOps Mindset"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-center md:tracking-wider my-6 text-sm md:text-lg lg:text-xl text-neutral-300 max-w-2xl"
          >
            Hi! I'm Pavan Kumar R, a final-year engineering student, passionate
            about full-stack development and DevOps. I specialize in building
            modern web applications and automating deployments to deliver smooth
            and scalable digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col md:flex-row gap-4 items-center"
          >
            <a href="#projects">
              <MagicButton
                title="Explore My Work"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="bg-white text-black hover:bg-white/90"
              />
            </a>
            <a href="#contact">
              <MagicButton
                title="Let's Connect"
                position="right"
                otherClasses="border border-white bg-transparent hover:bg-white/10"
              />
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-neutral-400 text-sm"
        >
          Scroll to explore
        </motion.div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          className="w-6 h-10 border-2 border-neutral-400 rounded-full mx-auto mt-2 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 bg-neutral-400 rounded-full mt-2"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
