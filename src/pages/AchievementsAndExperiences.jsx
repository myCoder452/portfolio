
import { motion } from 'framer-motion';
import resumeData from '../assets/resume.js';

const AchievementsAndExperiences = () => {
  const { achievements, about, skills } = resumeData;
  const { experience } = about;

  const artisticSummaries = {
    analytical: "Harnessing the power of data to unravel complex narratives and inform strategic decisions. From dissecting market trends to optimizing system performance, my analytical skills transform raw information into actionable insights.",
    communication: "Bridging the gap between ideas and understanding. Whether it's articulating a vision to a team or crafting a compelling story for users, I believe clear and empathetic communication is the cornerstone of successful collaboration.",
    technical: "Building the digital world, one line of code at a time. My technical expertise is a blend of artistry and engineering, allowing me to craft robust, scalable, and elegant solutions to challenging problems."
  };

  return (
    <div className="min-h-screen container mx-auto p-4 pt-24 text-white">

      {/* Achievements Section */}
      <section className="mb-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-12 text-center font-serif text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-600"
        >
          Achievements, Experiences & Skills
        </motion.h1>
        {/* Large achievement card removed as per request */}
      </section>

      {/* Skills Section */}
      <section>
        {/* 'Professional Skills' title removed, merged with main title */}

        <div className="flex flex-col gap-20">
          {Object.keys(skills).map((skillCategory, catIndex) => (
            <div key={catIndex}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col items-center mb-10 text-center"
              >
                <h2 className="text-3xl font-bold font-serif capitalize text-white mb-4 bg-gray-800 px-8 py-2 rounded-full shadow-lg border border-gray-700">{skillCategory}</h2>
                <p className="text-gray-400 max-w-2xl italic">{artisticSummaries[skillCategory]}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills[skillCategory].map((skillItem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-gray-800 bg-opacity-40 backdrop-blur-lg border border-gray-700 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300 flex flex-col items-center text-center group"
                  >
                    <div className="mb-6 w-24 h-24 bg-gray-900 rounded-full shadow-inner group-hover:shadow-blue-500/30 transition-shadow duration-300 overflow-hidden flex items-center justify-center">
                      <img
                        src={skillItem.image}
                        alt="skill icon"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                      {skillItem.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AchievementsAndExperiences;