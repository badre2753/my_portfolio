import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {

  const handleHireMeClick = () => {
    const email = "badre2753@gmail.com";
    const subject = encodeURIComponent("Hiring Inquiry: Badre Alam");
    const body = encodeURIComponent("Hi Badre Alam, I saw your Portfolio and Resume. I want to discuss about your projects and skills.");

    // Ye line default email client ko open karegi
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-6 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
      <div className="text-white font-bold text-xl tracking-tighter">Badre Alam</div>
      <div className="hidden md:flex gap-8">
        {['Home', 'Projects', 'Skills' ,'Achievements', 'About-me', 'Contact-me'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-400 text-sm hover:text-white transition-all font-medium"
          >
            {item}
          </a>
        ))}
      </div>
      <motion.a
        /* Apna number aur message yahan dalo */
        href="https://wa.me/917007887608?text=Hi%20Badre%20Alam%20I%20saw%20your%20Resume%20And%20Portfolio%20,%20I%20want%20to%20discuss%20about%20your%20project%20and%20skills."
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className=" sm:block bg-blue-600  border border-blue-500/50 text-white px-6 py-2 rounded-full text-[14px] font-bold  transition-all  tracking-widest cursor-pointer"
      >
        Hire M
      </motion.a>
    </nav>
  );
};

export default Navbar;