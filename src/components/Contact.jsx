import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Send } from 'lucide-react';

const ContactCard = ({ icon: Icon, title, value, href, color }) => (
  <motion.a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    whileHover={{ y: -5 }}
    /* Dimension: h-[120px] and w-full with 2x aspect feel */
    className="relative bg-black/40 backdrop-blur-md h-[120px] w-full rounded-2xl border border-white/5 flex items-center p-6 gap-5 hover:border-blue-500/40 transition-all group"
  >
    {/* Icon Container */}
    <div className="p-3 rounded-xl bg-white/5 group-hover:bg-blue-600/10 transition-colors">
      <Icon size={24} className={color} />
    </div>

    {/* Content */}
    <div className="flex flex-col overflow-hidden">
      <h3 className="text-sm font-bold text-blue-500 tracking-widest text-[18px]  group-hover:text-blue-500 transition-colors">
        {title}
      </h3>
      <p className="text-[16px] font-mono text-white truncate mt-1">
        {value}
      </p>
    </div>

    {/* Corner Detail like Hero/About cards */}
    <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/10 group-hover:border-blue-500/40 transition-all"></div>
  </motion.a>
);


const Contact = () => {

  // email send 
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMailTo = (e) => {
    e.preventDefault();
    
    // Aapki email ID yahan likhein
    const adminEmail = "badre2753@gmail.com"; 
    
    // Subject aur Body prepare kar rahe hain
    const subject = encodeURIComponent(`New Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `User Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    // mailto link create karke redirect kar dena
    window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${body}`;
  };


  return (
    <section id="contact-me" className="py-7 px-6 max-w-7xl mx-auto scroll mt-24">
      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        className="mb-10 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter  italic">
          Let's <span className="text-blue-600">Connect</span>
        </h2>
      </motion.div>

      {/* Grid: 4 columns on desktop for 2x width feel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10 ">
        <ContactCard 
          icon={Mail} 
          title="Email" 
          value="badre2753@gmail.com" 
          href="mailto:badre2753@gmail.com?subject=Contacting%20from%20Portfolio&body=Hi%20Badre%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20about"
          color="text-green-500" 
        />
        <ContactCard 
          icon={Linkedin} 
          title="LinkedIn" 
          value="badre-alam-589922292" 
          href="https://www.linkedin.com/in/badre-alam-589922292/" 
          color="text-blue-500"
        />
        <ContactCard 
          icon={Github} 
          title="Github" 
          value="badre2753" 
          href="https://github.com/badre2753" 
          color="text-white"
        />
        <ContactCard 
          icon={Phone} 
          title="Call" 
          value="+917007887608" 
          href="tel:+917007887608" 
          color="text-cyan-400"
        />
      </div>

      {/* Sleek Minimal Form */}
      <div className="max-w-xl mx-auto bg-black/40 backdrop-blur-md p-6 rounded-[2rem] border border-white/5">
      <form className="space-y-3" onSubmit={handleMailTo}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input 
            type="text" 
            name="name"
            placeholder="Name" 
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs focus:border-blue-500 outline-none transition-all w-full text-white"
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs focus:border-blue-500 outline-none transition-all w-full text-white"
          />
        </div>
        <textarea 
          name="message"
          placeholder="Message" 
          rows="3" 
          value={formData.message}
          onChange={handleChange}
          required
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-xs focus:border-blue-500 outline-none transition-all resize-none w-full text-white"
        ></textarea>
        <button 
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-xl text-xs transition-all uppercase tracking-widest group"
        >
          Send <Send size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
    </section>
  );
};

export default Contact;