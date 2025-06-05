import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Tag } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A responsive admin dashboard for e-commerce platforms with data visualization, user management, and inventory tracking.",
    image: "https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    demoUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather application that provides real-time forecasts, location-based weather data, and interactive maps.",
    image: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["JavaScript", "React", "API Integration", "CSS"],
    demoUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Personal Blog",
    description: "A minimalist blog platform with markdown support, comment system, and responsive design for optimal reading experience.",
    image: "https://images.pexels.com/photos/7175450/pexels-photo-7175450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    demoUrl: "#",
    codeUrl: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Task Manager",
    description: "A full-stack task management application with user authentication, task categorization, and deadline tracking.",
    image: "https://images.pexels.com/photos/7054528/pexels-photo-7054528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "Firebase", "Tailwind CSS", "Authentication"],
    demoUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Movie Finder",
    description: "A movie discovery platform that allows users to search, filter, and bookmark their favorite films and TV shows.",
    image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["JavaScript", "API Integration", "CSS", "HTML"],
    demoUrl: "#",
    codeUrl: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "A recipe application that helps users discover meals based on available ingredients, dietary restrictions, and preferences.",
    image: "https://images.pexels.com/photos/6061392/pexels-photo-6061392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["React", "API Integration", "Styled Components"],
    demoUrl: "#",
    codeUrl: "#",
    featured: false,
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300"
              aria-label={`View live demo for ${project.title}`}
            >
              <ExternalLink size={18} />
            </a>
            <a 
              href={project.codeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300"
              aria-label={`View source code for ${project.title}`}
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              <Tag size={10} className="mr-1" /> {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState<string | null>(null);

  const filteredProjects = filter === 'featured' 
    ? projects.filter(project => project.featured) 
    : projects;

  // Extract unique tags from all projects
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Check out some of my recent projects that showcase my skills and capabilities.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                filter === null
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                filter === 'featured'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Featured
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-600 text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Github size={18} /> View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;