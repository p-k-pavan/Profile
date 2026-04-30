import { useState, useRef, useEffect } from "react";
import { FaLocationArrow, FaEnvelope, FaPhoneAlt, FaFileDownload } from "react-icons/fa";
import { FaXTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import MagicButton from "./ui/MagicButton";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setShowPopup(false);
      }
    };
    if (showPopup) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopup]);

  return (
    <footer
      className="relative w-full pt-32 pb-16 px-4 sm:px-8 lg:px-16 xl:px-24 overflow-hidden"
      id="contact"
    >
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
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Work Together
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
            Ready to bring your ideas to life? Contact me to discuss your
            project or just say hello!
          </p>

          <div className="relative mb-16" ref={popupRef}>
            <MagicButton
              title="Get in Touch"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={() => setShowPopup((prev) => !prev)}
              otherClasses="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-indigo-900/30"
            />

            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-1/2 -translate-x-1/2 mt-3 w-72 z-50"
                >
                  <div className="rounded-2xl bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-pink-500/40 p-[1.5px]">
                    <div className="rounded-2xl bg-[#0a0a12]/95 backdrop-blur-xl p-4 flex flex-col gap-3">

                      <div className="flex items-center justify-between mb-1">
                        <p className="text-white text-sm font-semibold">How would you like to connect?</p>
                        <button
                          onClick={() => setShowPopup(false)}
                          className="text-white/40 hover:text-white/80 transition-colors"
                        >
                          <IoClose size={16} />
                        </button>
                      </div>

                      <a
                        href="mailto:pkpavan.ise@gmail.com"
                        onClick={() => setShowPopup(false)}
                        className="group flex items-center gap-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-200"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25">
                          <FaEnvelope className="text-white text-sm" />
                        </div>
                        <div className="text-left">
                          <p className="text-white text-xs font-semibold">Send an email</p>
                          <p className="text-blue-400/70 text-[10px]">pkpavan.ise@gmail.com</p>
                        </div>
                        <FaLocationArrow className="text-white/20 group-hover:text-blue-400 transition-colors ml-auto text-xs" />
                      </a>

                      <a
                        href="/resume.pdf"
                        download="Pavan_Kumar_R_Resume.pdf"
                        onClick={() => setShowPopup(false)}
                        className="group flex items-center gap-3 p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40 transition-all duration-200"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/25">
                          <FaFileDownload className="text-white text-sm" />
                        </div>
                        <div className="text-left">
                          <p className="text-white text-xs font-semibold">Download resume</p>
                          <p className="text-purple-400/70 text-[10px]">PDF · Full Stack + DevOps</p>
                        </div>
                        <FaLocationArrow className="text-white/20 group-hover:text-purple-400 transition-colors ml-auto text-xs" />
                      </a>

                      <a
                        href="tel:+918971092326"
                        onClick={() => setShowPopup(false)}
                        className="group flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all duration-200"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/25">
                          <FaPhoneAlt className="text-white text-sm" />
                        </div>
                        <div className="text-left">
                          <p className="text-white text-xs font-semibold">Call me</p>
                          <p className="text-emerald-400/70 text-[10px]">+91 89710 92326</p>
                        </div>
                        <FaLocationArrow className="text-white/20 group-hover:text-emerald-400 transition-colors ml-auto text-xs" />
                      </a>

                    </div>
                  </div>

                  <div className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-gradient-to-br from-blue-500/40 to-purple-500/40 rounded-sm" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
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
            <p className="text-gray-400 group-hover:text-white transition-colors">
              Bangalore, India
            </p>
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
            {[
              { href: "https://github.com/p-k-pavan", icon: <FaGithub />, hover: "hover:border-blue-400" },
              { href: "https://x.com/PKPAVANN", icon: <FaXTwitter />, hover: "hover:border-purple-400" },
              { href: "https://linkedin.com/in/pkpavan", icon: <FaLinkedinIn />, hover: "hover:border-blue-400" },
            ].map(({ href, icon, hover }) => (
              <motion.a
                key={href}
                whileHover={{ y: -3 }}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center border border-gray-700 ${hover} transition-all hover:bg-gray-700/30 backdrop-blur-sm`}
              >
                <span className="text-gray-300 hover:text-white transition-colors">{icon}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;