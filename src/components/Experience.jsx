import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, company, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="relative pl-10 pb-10 border-l border-blue-500/20 last:border-0 ml-4"
  >
    {/* Glowing Timeline Dot */}
    <div className="absolute left-[-6px] top-0 h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_15px_#2563eb]" />
    
    {/* Compact Experience Card */}
    <div className="relative bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all group">
      <span className="text-blue-500 font-mono text-xs uppercase tracking-widest">{year}</span>
      <h4 className="text-white font-bold text-lg mt-1 tracking-tighter uppercase">{title}</h4>
      <p className="text-blue-400/60 text-xs font-medium mb-3 uppercase tracking-tight">{company}</p>
      <p className="text-gray-400 text-xs leading-relaxed max-w-lg font-light">{desc}</p>
      
      {/* Corner Detail like Hero Card */}
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-blue-500/10 group-hover:border-blue-500/40 transition-all"></div>
    </div>
  </motion.div>
);

const Experience = () => (
  <section id="experience" className="py-12 px-6 max-w-4xl mx-auto">
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mb-12 text-left"
    >
      <h2 className="text-3xl font-bold tracking-tighter uppercase italic">
        Professional <span className="text-blue-600">Journey</span>
      </h2>
      <p className="text-gray-500 mt-2 font-mono text-[10px] tracking-[0.5em] uppercase">// Timeline of Academic & Tech Growth</p>
    </motion.div>

    <div className="space-y-2">
      <TimelineItem 
        year="2025 - Present"
        title="VLSI Intern"
        company="TechSemicon Solutions"
        desc="Working on physical design flow and timing analysis for 7nm nodes. Optimizing RTL-to-GDSII flow."
        delay={0.1}
      />
      <TimelineItem 
        year="2024"
        title="Minor Project: 8-bit RISC Processor"
        company="University Project"
        desc="Implemented a custom RISC architecture on FPGA using Verilog. Developed custom Instruction Set Architecture (ISA)."
        delay={0.2}
      />
      <TimelineItem 
        year="2023 - 2024"
        title="TPC Coordinator"
        company="College Placement Cell"
        desc="Managing recruitment drives and coordinating between top-level companies and students."
        delay={0.3}
      />
    </div>
  </section>
);

export default Experience;