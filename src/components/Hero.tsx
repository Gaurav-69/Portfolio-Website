import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Code, ExternalLink } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-secondary-200/30 dark:bg-secondary-900/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-accent-200/30 dark:bg-accent-900/20 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 text-sm text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900/30 rounded-full mb-4">
              Web Developer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, I'm{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Gaurav Rautela
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
              A passionate web developer crafting beautiful and functional
              digital experiences with modern technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full flex items-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects <ExternalLink size={18} />
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 border border-gray-300 dark:border-gray-700 hover:border-primary-600 dark:hover:border-primary-400 text-gray-900 dark:text-gray-100 rounded-full flex items-center gap-2 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Animated Visual */}
          <motion.div
            className="relative hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 flex items-center justify-center">
              {/* Rotating circles */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-200 dark:border-primary-800 animate-spin-slow" />
              <div
                className="absolute inset-8 rounded-full border-2 border-dashed border-secondary-200 dark:border-secondary-800 animate-spin-slow"
                style={{ animationDirection: "reverse" }}
              />

              {/* Center icon */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-full shadow-lg z-10">
                <Code
                  size={72}
                  className="text-primary-600 dark:text-primary-400"
                />
              </div>

              {/* Floating tech elements */}
              <motion.div
                className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <span className="text-sm font-medium">React</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md"
                animate={{ x: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5,
                  ease: "easeInOut",
                }}
              >
                <span className="text-sm font-medium">TypeScript</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <span className="text-sm font-medium">Tailwind</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md"
                animate={{ x: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: "easeInOut",
                }}
              >
                <span className="text-sm font-medium">JavaScript</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          Scroll Down
        </span>
        <ChevronDown className="text-gray-500 dark:text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Hero;
