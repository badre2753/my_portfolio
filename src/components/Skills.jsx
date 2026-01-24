import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, BookOpen,MemoryStick } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
    className="relative group cursor-pointer"
  >
    {/* Compact Card Body: Width is 2x of Height (e.g., w-full h-[100px]) */}
    <div className="relative bg-black/40 backdrop-blur-md h-[100px] w-full rounded-2xl p-4 flex items-center gap-5 border border-white/5 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
      
      {/* Icon/Logo Section */}
      <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
        <Icon className="text-blue-500 w-6 h-6 group-hover:text-white transition-colors" />
      </div>

      {/* Title Section */}
      <div className="flex flex-col">
        <h3 className="text-sm md:text-md font-bold text-white tracking-widest text-[18px] group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
       
      </div>

      {/* Corner Detail like Hero Card */}
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-blue-500/20 group-hover:border-blue-500 transition-all"></div>
    </div>
  </motion.div>
);

const Skills = () => {
  const skillData = [
    { icon: Cpu, title: "Digital Electronics" },
    { icon:  BookOpen, title: "Analog Electronics" },
    { icon: Cpu, title: "Microcontroller(8051)" },
    { icon: Cpu, title: "Microprocessor(8085)" },
    { icon: MemoryStick, title: "Verilog (RTL Design)" },
    { icon: Code, title: "TCL Language" },
    { icon: Code, title: "Python" },
    { icon: Code, title: "C Language" }
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto mb-40">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tighter uppercase  italic">
          Skills 
        </h2>
      </motion.div>

      {/* Grid with 3 columns to maintain 2x width aspect */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillData.map((skill, index) => (
          <SkillCard 
            key={index} 
            icon={skill.icon} 
            title={skill.title} 
            delay={index * 0.05}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;