import React from 'react';
import { motion } from 'framer-motion';
import { certificatesData } from '../constants/certificates';

const CertificateCard = ({ cert }) => {
  return (
    <motion.div
      whileHover="hover"
      // Medium height maintained
      className="relative w-full h-[280px] md:h-[320px]  overflow-hidden group cursor-pointer  transition-all duration-500 shadow-lg"
    >

      {/* Main Container: Dark background filler taaki sides khali na lagein */}
      <div className="relative bg-[#0a0a0a] h-full w-full  overflow-hidden z-10 flex items-center justify-center p-1">
        {cert.image && (
          <div className="w-full h-full relative flex items-center justify-center">
            <img 
              src={cert.image} 
              /* FIX: object-contain poori image dikhayega, kategi nahi */
              className="max-w-full max-h-full object-contain opacity-100 "
            />
            
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const chunks = [];
  for (let i = 0; i < certificatesData.length; i += 5) {
    chunks.push(certificatesData.slice(i, i + 5));
  }

  return (
    <section id="achievements" className="py-10 px-6 max-w-7xl mx-auto scroll-mt-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <h2 className="text-4xl font-bold tracking-tighter  italic text-white">
          Career <span className="text-blue-600">Wins</span>
        </h2>
      </motion.div>

      {chunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex} className="space-y-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chunk[0] && <CertificateCard cert={chunk[0]} />}
            {chunk[1] && <CertificateCard cert={chunk[1]} />}
            {chunk[2] && <CertificateCard cert={chunk[2]} />}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:max-w-[70%] max-w-[100%] mx-auto">
            {chunk[3] && <CertificateCard cert={chunk[3]} />}
            {chunk[4] && <CertificateCard cert={chunk[4]} />}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Certificates;