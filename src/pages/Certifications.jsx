import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import resumeData from '../assets/resume.js';

const Certifications = () => {
  const { certifications } = resumeData;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-8 pt-24"
    >
      <h1 className="text-4xl font-bold font-serif text-highlight mb-8 text-center">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((certification, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-secondary bg-opacity-50 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 h-full flex flex-col"
          >
            <Link to={`/certifications/${certification.slug}`} className="cursor-pointer flex flex-col h-full">
              <img src={certification.image} alt={certification.title} className="w-full h-48 object-cover" />
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-bold font-serif text-highlight mb-2">{certification.title}</h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Certifications;