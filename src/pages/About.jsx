import { motion } from 'framer-motion';
import resumeData from '../assets/resume.js';
import profilePic from '/main_sit_pic.jpeg';
import profilePic2 from '../assets/mainLogo30_noglasses.png';

const About = () => {
  const { summary } = resumeData.about;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto p-8 pt-24 text-white"
    >
      <div className="flex flex-row flex-nowrap">
        <div className="flex flex-col items-center w-1/4 p-4">
          <img src={profilePic2} alt="Adamu" className="rounded-lg w-72 h-auto shadow-xl mb-8" />
          <div className="flex flex-col space-y-4">
            <a href="https://wellfound.com/u/absobeha-adamu" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">Wellfound</a>
            <a href="https://github.com/myCoder452" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded text-center">GitHub</a>
            <a href="https://www.linkedin.com/in/absobeha-adamu-2b13b2377/" target="_blank" rel="noopener noreferrer" className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded text-center">LinkedIn</a>
            <a href="https://www.upwork.com/freelancers/~0161352bab5d570d0c" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-center">Upwork</a>
          </div>
        </div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-3/4 bg-secondary bg-opacity-50 p-8 rounded-lg shadow-lg overflow-hidden"
        >
          <h1 className="text-4xl font-bold font-serif text-light-blue mb-4">About Me</h1>
          <p className="text-lg leading-relaxed mb-6">{summary}</p>

          <h2 className="text-2xl font-bold font-serif text-light-blue mb-4">My Journey</h2>
          <p className="text-lg leading-relaxed mb-6">
            My journey into technology was sparked by a fascination with the elegant dance of logic and creativity. I've cultivated a deep appreciation for crafting digital experiences that are not only functional but also intuitive and beautiful. My path has been one of continuous learning, driven by a desire to transform complex challenges into simple, powerful solutions.
          </p>
          <p className="text-lg leading-relaxed">
            <img src={profilePic} alt="Adamu" className="rounded-lg w-[46%] h-auto float-right ml-6 mb-4" />
            I've had the privilege of contributing to diverse projects, where I've woven together the threads of front-end artistry and back-end structure. Each line of code is a testament to the collaborative spirit that fuels innovation. This journey has instilled in me the values of precision, adaptability, and the pursuit of excellence.
            <br /><br />
            Beyond the screen, I find inspiration in the intricate patterns of the natural world and the boundless stories of human connection. I believe that the most impactful technology is born from a deep understanding of the human experience. I am eager to continue this voyage, to explore new horizons, and to build a future where technology empowers and inspires.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;