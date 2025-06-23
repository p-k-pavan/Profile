import { FaLocationArrow, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";

const Footer = () => {
  return (
    <footer className="relative w-full pt-32 pb-16 px-4 sm:px-8 lg:px-16 xl:px-24 overflow-hidden" id="contact">

      <div className="absolute inset-0 -z-10">
      
        <div className="absolute h-full w-full bg-black bg-grid-white/[0.1]">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]" />
        </div>
        
       
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-blue-900/10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Work Together</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
            Ready to bring your ideas to life? Contact me to discuss your project or just say hello!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full max-w-lg">
            <a href="mailto:pkpavan.ise@gmail.com" className="flex-1">
              <MagicButton
                title="Get in Touch"
                icon={<FaLocationArrow />}
                position="right"
                otherClasses="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-indigo-900/30"
              />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {/* Contact cards remain the same */}
          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-indigo-900/50 hover:border-blue-400/50 transition-all group backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-900/30 transition-all">
                <FaEnvelope className="text-blue-400 text-xl group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white">Email</h3>
            </div>
            <a
              href="mailto:pkpavan.ise@gmail.com"
              className="text-gray-400 hover:text-blue-300 transition-colors"
            >
              pkpavan.ise@gmail.com
            </a>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-purple-900/50 hover:border-purple-400/50 transition-all group backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-900/20 flex items-center justify-center group-hover:bg-purple-900/30 transition-all">
                <FaPhoneAlt className="text-purple-400 text-xl group-hover:text-purple-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white">Phone</h3>
            </div>
            <a
              href="tel:+918971092326"
              className="text-gray-400 hover:text-purple-300 transition-colors"
            >
              +91 89710 92326
            </a>
          </div>

          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-indigo-900/50 hover:border-blue-400/50 transition-all group backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center group-hover:from-blue-900/30 group-hover:to-purple-900/30 transition-all">
                <FaLocationArrow className="text-white text-xl group-hover:text-purple-300 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-white">Location</h3>
            </div>
            <p className="text-gray-400 group-hover:text-white transition-colors">Bangalore, India</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800/50"
        >
          <p className="text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Pavan Kumar R. All rights reserved.
          </p>

          <div className="flex gap-6">
            <motion.a
              whileHover={{ y: -3 }}
              href="https://github.com/p-k-pavan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center border border-gray-700 hover:border-blue-400 transition-all hover:bg-gray-700/30 backdrop-blur-sm"
            >
              <FaGithub className="text-gray-300 hover:text-white transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://x.com/PKPAVANN"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center border border-gray-700 hover:border-purple-400 transition-all hover:bg-gray-700/30 backdrop-blur-sm"
            >
              <FaXTwitter className="text-gray-300 hover:text-white transition-colors" />
            </motion.a>
            <motion.a
              whileHover={{ y: -3 }}
              href="https://linkedin.com/in/pkpavan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center border border-gray-700 hover:border-blue-400 transition-all hover:bg-gray-700/30 backdrop-blur-sm"
            >
              <FaLinkedinIn className="text-gray-300 hover:text-white transition-colors" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;