import { motion } from 'framer-motion';

const Hero = () => {
  return (
    // h-screen ko min-h-screen kiya taaki mobile par content overflow na ho aur pt-24 navbar ke liye
    <section id="home" className="min-h-screen w-full flex items-center justify-center px-6 lg:px-20 overflow-hidden pt-24 lg:pt-10">
      
      {/* Wrapper: flex-col for mobile, flex-row for desktop */}
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">

        {/* LEFT SIDE: Professional Branding */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-block px-3 py-1 border border-blue-500/30 rounded-full bg-blue-500/5 mb-6">
            <span className="text-blue-500 font-mono text-[10px] tracking-widest uppercase">
              Aspiring RTL Design Engineer
            </span>
          </div>

          {/* Text size adjusted for mobile to prevent cutting */}
          <h1 className="text-5xl md:text-6xl lg:text-[85px] font-bold text-white tracking-tighter leading-[1] lg:leading-[0.9] mb-8">
            Electronics & <br />
            <span className="text-blue-600">VLSI Designer</span>
          </h1>

          <p className="text-gray-400 text-base md:text-xl max-w-lg leading-relaxed mb-10 mx-auto lg:mx-0">
            Interested in Front-End VLSI Design, Digital System Design, and FPGA-based Prototyping. Looking for opportunities as an RTL Design / FPGA Engineer.
          </p>

          <div className="flex justify-center lg:justify-start">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)] text-sm tracking-wider">
              View Projects
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2"
        >
          <motion.div
            whileHover="hover"
            className="relative p-[2px] rounded-[3rem] overflow-hidden group cursor-pointer"
          >
            {/* High-Tech Animated Border */}
            <motion.div
              variants={{
                hover: { rotate: 360 }
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#2563eb_360deg)] opacity-0 group-hover:opacity-100"
            />

            {/* Adjusted width for mobile (w-[280px]) and desktop (sm:w-[420px]) */}
            <div className="relative bg-[#0a0a0a] rounded-[3rem] p-3 sm:p-4 w-[280px] sm:w-[420px] z-10 shadow-2xl">
              {/* Height adjusted for mobile (h-[350px]) to fit screen */}
              <div className="relative h-[350px] sm:h-[450px] rounded-[2.5rem] bg-gray-900 overflow-hidden border border-gray-800 flex items-center justify-center">
                <img
                  src="/badre.jpeg"
                  alt="Alam"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* HUD Elements */}
                <div className="absolute top-6 left-6 text-[9px] font-mono text-white uppercase tracking-widest">
                  <p>Badre Alam</p>
                  <p>Electronics Engg.</p>
                </div>

                <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-blue-500/20"></div>
                <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-blue-500/20"></div>
              </div>

              {/* Status Bar */}
              <div className="mt-5 px-4 pb-2">
                <div className="h-[3px] w-full bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2.5 }}
                    className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;