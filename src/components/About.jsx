import React from 'react';
import { motion } from 'framer-motion';
import { User, Wrench, Briefcase, FileText } from 'lucide-react';

const About = () => {
  const tools = [
    { name: "Cadence Virtuoso", level: 57 },
    { name: "Xilinx Vivado", level: 95 },
    { name: "MATLAB ", level: 90 },
    { name: "VS Code", level: 98 },
    { name: "Mentorquesta Prime", level: 75 },
  ];

  return (
    /* scroll-mt-24 ensure karta h ki section navbar ke niche na dabe */
    <section id="about-me" className="py-5 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* LEFT COLUMN: Profile Info */}
        <div className="lg:col-span-4 flex flex-col items-center text-center space-y-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative w-48 h-48 rounded-full border-2 border-blue-500/30 overflow-hidden p-1 bg-[#0a0a0a]">
              <img
                src="/badre.jpeg"
                alt="Alam"
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold tracking-tighter text-white italic">
              Badre <span className="text-blue-600 font-black">Alam</span>
            </h2>
            <p className="text-blue-500 text-[14px] font-mono text-xs mt-2 uppercase tracking-[0.3em]">
              Electronics & VLSI Engineer
            </p>
            <p className="text-white text-[12px] mt-1 font-light tracking-wider">
              B.Tech in Electronics Engineering . REC Kannauj Affliated to (A.K.T.U Lucknow)
            </p>
          </div>

          <motion.a
            href="/Resume.pdf"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-sm transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            <FileText size={18} />
            RESUME ↓
          </motion.a>
        </div>

        {/* RIGHT COLUMN: Grid Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 md:col-span-1 min-h-[200px]">
            <div className="flex items-center gap-3 mb-6">
              <User className="text-blue-500" size={24} />
              <h3 className="text-xl font-bold text-white tracking-tight uppercase italic">About Me</h3>
            </div>
            <p className="text-gray-300  text-sm leading-relaxed font-light italic font-mono ">
              B.Tech student with hands-on experience in Verilog HDL, RTL design, FPGA prototyping, and MATLAB. Skilled in writing synthesizable RTL, functional verification, and validating designs on FPGA boards.<br/><br/>
            

             <p className=' font-bold text-white'>Key Highlights:<br/></p>
             # Minor Projects Automatic Washing Machine, 8-bit ALU, Traffic Light Controller, and Car Management System using Verilog on Xilinx Vivado 2020.2<br/><br/>
              # Smart India Hackathon participant  skilled in teamwork, problem-solving, and creative thinking<br/><br/>
              # Focused on GATE 2026-27 preparation to build a strong foundation in Electronics & VLSI custom chip design<br/>
              THANK YOU !
            </p>
          </div>

          <div className="bg-black/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="text-blue-500" size={24} />
              <h3 className="text-xl font-bold text-white tracking-tight  italic">Tools I Use</h3>
            </div>
            <div className="space-y-4">
              {tools.map((tool, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between text-[14px] font-mono text-gray-300 font-medium mb-1 uppercase">
                    <span>{tool.name}</span>
                    <span className="text-blue-500/50"></span>
                  </div>
                  <div className="h-[2px] w-full bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${tool.level}%` }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                      className="h-full bg-blue-600 shadow-[0_0_10px_#2563eb]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experiences Card */}
          <div className="bg-black/40 backdrop-blur-md p-8 rounded-[2rem] border border-white/5 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-blue-500" size={24} />
              <h3 className="text-xl font-bold text-white tracking-tight uppercase italic">Experiences</h3>
            </div>
            <div className="space-y-6 font-mono">
              <div>
                <h4 className="text-blue-400 font-bold text-sm uppercase text-[18px] ">COMPLETED  VLSI design training program</h4>
                <p className="text-WHITE  mt-1 font-light  font-mono text-[14px]">Introduction to VLSI & Digital Electronics. <br/> combinational and sequential circuit Design <br/> System Design Using Verilog on FPGA</p>
              </div>
              <div className="border-t border-white/5 pt-4">
                <h4 className="text-blue-400 font-bold text-sm uppercase text-[18px] ">IEEE Member</h4>
                <p className="text-white  mt-1 font-light  font-mono text-[14px]">Managing And conducting Seminars,workshops and professional development activites.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;