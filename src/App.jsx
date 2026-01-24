import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import { projects } from './constants';
import Skills from './components/Skills';
// import Experience from './components/Experience'
import About from './components/About';
import Contact from './components/Contact';

const CircuitBackground = () => (
  <div className="fixed inset-0 -z-10 h-full w-full bg-[#050505]">
    <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
  </div>
);

export default function App() {
  const projectChunks = [];
  for (let i = 0; i < projects.length; i += 5) {
    projectChunks.push(projects.slice(i, i + 5));
  }

  return (
    <main className="linear-gradient(90deg,rgba(2, 1, 8, 1) 2%, rgba(9, 9, 121, 0.84) 48%, rgba(0, 212, 255, 1) 100%) min-h-screen text-white selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />
      <CircuitBackground />
      <Hero />

      <section id="projects" className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tighter uppercase italic">
            My <span className="text-blue-600">Projects</span>
          </h2>
        </motion.div>

        {projectChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className="space-y-6 mb-6">
            {/* Row 1: Middle card (chunk[1]) is wider now */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {chunk[0] && (
                <div className="lg:col-span-4">
                  <ProjectCard project={chunk[0]} isSquare={false} />
                </div>
              )}
              {chunk[1] && (
                <div className="lg:col-span-4 flex justify-center">
                  <ProjectCard project={chunk[1]} isSquare={true} />
                </div>
              )}
              {chunk[2] && (
                <div className="lg:col-span-4">
                  <ProjectCard project={chunk[2]} isSquare={false} />
                </div>
              )}
            </div>

            {/* Row 2: Two Centered Rectangles */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {chunk[3] && (
                <div className="lg:col-start-3 lg:col-span-4">
                  <ProjectCard project={chunk[3]} isSquare={false} />
                </div>
              )}
              {chunk[4] && (
                <div className="lg:col-span-4">
                  <ProjectCard project={chunk[4]} isSquare={false} />
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
      <Skills id="skills" />
      {/* <Experience id="experience"/> */}
      <About id="about-me" />
      <Contact id="contact-me" />


      <footer className="py-10 text-center border-t border-gray-900 bg-[#070707] font-sans">
        <div className='justify-evenly flex items-center'>
          <p className="text-white text-[15px] font-bold  tracking-widest">
            © 2026 <span className='text-blue-700 text-[25px]'>Badre Alam</span> All rights reserved.
          </p>
          <p className="text-white   font-bold tracking-widest">
            Developed by <span className='text-blue-700 text-[25px]'>Md Sanaullah Ansari</span><br />
            <a
              target='_blank'
              className='text-blue font-sans text-[15px] text-blue-500'
              href='https://www.linkedin.com/in/md-sanaullah-khan-1a0871281/'>Linkedln </a>
            <span className='text-[10px]'> Availaible for Website Building And Colaboration</span>
          </p>
        </div>
      </footer>
    </main>
  );
}