import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (!scrolled && location.pathname === '/') ? 'nav-link-home' : 'nav-link-other';

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-4 ${scrolled ? 'bg-primary shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <NavLink to="/" className={`text-2xl font-bold font-serif ${(!scrolled && location.pathname === '/') ? 'text-black' : 'text-white'}`}>ADAMU</NavLink>
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
          <NavLink to="/achievements" className={navLinkClass}>Achievements & Experiences</NavLink>
          <NavLink to="/certifications" className={navLinkClass}>Certifications</NavLink>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;