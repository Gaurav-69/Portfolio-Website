import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Briefcase, Award, User } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and experiences in the world of web development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                <User className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold">My Journey</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate web developer with a keen interest in creating user-friendly, 
              accessible, and performant web applications. My journey in coding started in college 
              where I discovered my passion for turning ideas into interactive experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or expanding my knowledge through online courses and 
              developer communities.
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 gap-6"
          >
            <motion.div 
              custom={0}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-start"
            >
              <div className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-full mr-4">
                <GraduationCap className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Education</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Bachelor of Science in Computer Science</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">University of Technology, 2018-2022</p>
              </div>
            </motion.div>

            <motion.div 
              custom={1}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-start"
            >
              <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-full mr-4">
                <Briefcase className="w-5 h-5 text-accent-600 dark:text-accent-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Experience</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Intern Web Developer</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">TechStart Company, Summer 2022</p>
              </div>
            </motion.div>

            <motion.div 
              custom={2}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md flex items-start"
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Certifications</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Frontend Web Development</p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">FreeCodeCamp, 2023</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;