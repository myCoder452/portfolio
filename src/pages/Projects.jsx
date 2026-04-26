
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../assets/projects.js';

const Projects = () => {
  return (
    <div className="min-h-screen container mx-auto p-4 pt-24 text-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-16 text-center font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 pb-4"
      >
        Featured Projects
      </motion.h1>
      <div className="flex flex-col gap-12">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Helper to resolve public paths (which are strings now) vs imported paths (which are base64/urls)
  // Since we are using standard img tags, both work fine if passed to src
  // But strictly speaking, our imported logos are ready to use, and our images are relative paths string from public.
  const getImagePath = (path) => {
    // If it starts with /, it's absolute (unlikely for us)
    // If it doesn't start with /, and it's a string from our public array, we prepend /
    return path.startsWith('/') ? path : `/${path}`;
  };

  useEffect(() => {
    if (project.images && project.images.length > 1) {
      const timer = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % project.images.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [project.images]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-gray-900 bg-opacity-60 backdrop-blur-xl border border-gray-700 rounded-2xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch min-h-[400px]`}>

        {/* Visual Section */}
        <div className="lg:w-1/2 relative overflow-hidden bg-gray-800">
          {/* If we have gallery images, show slider. Else show logo prominently or a fallback pattern */}
          {project.images && project.images.length > 0 ? (
            <div className="w-full h-full relative">
              <AnimatePresence mode='wait'>
                <motion.img
                  key={currentImage}
                  src={getImagePath(project.images[currentImage])}
                  alt={`${project.name} preview`}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`absolute inset-0 w-full h-full object-cover ${project.imageClass || ''}`}
                />
              </AnimatePresence>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center p-12 bg-gradient-to-br from-gray-800 to-gray-900">
              <motion.img
                whileHover={{ scale: 1.05, rotate: 5 }}
                src={project.logo}
                alt={`${project.name} logo`}
                className={`w-48 h-48 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] rounded-xl ${project.logoClass || ''}`}
              />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative">
          {/* Subtle logo watermark if we have images */}
          {project.images && project.images.length > 0 && (
            <div className={`absolute top-6 right-6 w-16 h-16 opacity-100 overflow-hidden flex items-center justify-center ${project.logoClass || ''}`}>
              <img
                src={project.logo}
                alt="watermark"
                className={`w-full h-full object-cover ${project.logoImageClass || ''}`}
              />
            </div>
          )}

          <h2 className="text-3xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white mb-6 capitalize pb-2">
            {project.name}
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
            {project.description}
          </p>

          <div className="mt-auto pt-6 flex gap-4">
            {/* We can add buttons here later if the JSON had links */}
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default Projects;