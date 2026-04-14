import React from 'react';
import { FaLinkedin } from 'react-icons/fa'; // Ensure you have react-icons installed

const Footer = () => {
  return (
    <footer className="w-full py-5 px-6 border-t border-gray-900 bg-[#070707] font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        
        {/* Left Side: Brand/Copyright */}
        <div className="flex items-center gap-2">
          <p className="text-gray-400 text-[13px] tracking-wide">
            © 2026 All rights reserved by <span className="text-blue-600 font-bold text-[15px]">Badre Alam</span>
          </p>
        </div>

        {/* Right Side: Developer Info */}
        <div className="flex flex-col md:items-end items-center">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-[12px]">Developed by</span>
            <span className="text-blue-600 font-medium text-[15px]">Md Sanaullah Ansari</span>
          </div>

          <div className="flex items-center gap-4 mt-3">
            <a 
              href="https://www.linkedin.com/in/md-sanaullah-khan-1a0871281/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs bg-gray-900 px-4 py-2 rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
            >
              <FaLinkedin className="text-lg " />
              Connect on LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;