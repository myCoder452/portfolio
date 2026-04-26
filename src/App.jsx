import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import AchievementsAndExperiences from './pages/AchievementsAndExperiences';
import Certifications from './pages/Certifications';
import CertificationDetail from './pages/CertificationDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import backgroundImage from './assets/cloudysky.jpg';

function AppContent() {
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div
      className={`flex flex-col min-h-screen bg-cover bg-center ${!isHomePage ? 'bg-eggshell text-white' : ''}`}
      style={{ backgroundImage: isHomePage ? `url(${backgroundImage})` : 'none' }}
    >
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<AchievementsAndExperiences />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/certifications/:slug" element={<CertificationDetail />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;