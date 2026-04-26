import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-accent p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Adamu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;