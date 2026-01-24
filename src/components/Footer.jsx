import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-[#0a192f] text-center text-gray-400 font-mono text-xs">
      {/* Social Icons for Mobile (Desktop par ye aksar side mein hote hain) */}
      <div className="flex justify-center gap-6 mb-4 text-xl md:hidden">
        <a href="#" className="hover:text-secondary"><i className="fab fa-github"></i></a>
        <a href="#" className="hover:text-secondary"><i className="fab fa-linkedin"></i></a>
        <a href="#" className="hover:text-secondary"><i className="fab fa-instagram"></i></a>
      </div>

      <p className="hover:text-secondary transition-colors cursor-pointer">
        Designed & Built by Shah Rukh Khan
      </p>
      <p className="mt-1">2026 © All Rights Reserved</p>
    </footer>
  );
};

export default Footer;