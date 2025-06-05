import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, PaintBucket, Layers } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'design' | 'other';
}

const skills: Skill[] = [
  { name: 'HTML', level: 90, category: 'frontend' },
  { name: 'CSS', level: 85, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'TypeScript', level: 75, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Node.js', level: 70, category: 'backend' },
  { name: 'Express', level: 65, category: 'backend' },
  { name: 'MongoDB', level: 60, category: 'backend' },
  { name: 'Firebase', level: 70, category: 'backend' },
  { name: 'Figma', level: 75, category: 'design' },
  { name: 'UI/UX Design', level: 70, category: 'design' },
  { name: 'Git', level: 80, category: 'other' },
  { name: 'Responsive Design', level: 85, category: 'frontend' },
];

const SkillBar: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay * 0.1 + 0.3, ease: "easeOut" }}
          className={`h-2.5 rounded-full ${
            skill.category === 'frontend' ? 'bg-primary-600' :
            skill.category === 'backend' ? 'bg-secondary-600' :
            skill.category === 'design' ? 'bg-accent-600' : 'bg-gray-600'
          }`}
        />
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const designSkills = skills.filter(skill => skill.category === 'design');
  const otherSkills = skills.filter(skill => skill.category === 'other');

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary-600 dark:text-primary-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The technologies, frameworks, and tools I work with to create amazing web experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            custom={0}
            variants={categoryVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mr-4">
                <Code2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            {frontendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index} />
            ))}
          </motion.div>

          <motion.div
            custom={1}
            variants={categoryVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-secondary-100 dark:bg-secondary-900/30 rounded-full mr-4">
                <Database className="w-6 h-6 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            {backendSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index} />
            ))}
          </motion.div>

          <motion.div
            custom={2}
            variants={categoryVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-accent-100 dark:bg-accent-900/30 rounded-full mr-4">
                <PaintBucket className="w-6 h-6 text-accent-600 dark:text-accent-400" />
              </div>
              <h3 className="text-xl font-semibold">Design</h3>
            </div>
            {designSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index} />
            ))}
          </motion.div>

          <motion.div
            custom={3}
            variants={categoryVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mr-4">
                <Layers className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold">Others</h3>
            </div>
            {otherSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} delay={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;