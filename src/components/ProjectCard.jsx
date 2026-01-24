import { motion } from 'framer-motion';

const ProjectCard = ({ project, isSquare }) => {
  return (
    <motion.div
      whileHover="hover"
      className={`relative p-[1px] rounded-[1.5rem] overflow-hidden group cursor-pointer transition-all duration-500 
        ${isSquare ? 'h-[320px] w-[340px] mx-auto' : 'h-[320px] w-full'}`}
    >
      {/* Animated Border Glow */}
      <motion.div
        variants={{ hover: { rotate: 360 } }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_270deg,#2563eb_360deg)] opacity-0 group-hover:opacity-100"
      />

      <div className="relative bg-[#0a0a0a] h-full w-full rounded-[1.5rem] p-5 z-10 flex flex-col justify-between border border-gray-800 group-hover:border-transparent transition-all">
        <div className="flex flex-col h-full">
          {/* Signal Line */}
          <div className="h-1 w-8 bg-blue-600 mb-3 group-hover:w-full transition-all duration-500" />
          
          {/* Title as Link */}
          <a href={project.link || "#"} target="_blank" rel="noopener noreferrer" className="block mb-1">
            <h3 className="text-md text-[18px] font-extrabold text-gray-300 tracking-tighter  group-hover:text-blue-500 transition-colors truncate">
              {project.title}
            </h3>
          </a>

          <p className="text-gray-300 text-[15px] leading-tight line-clamp-2 font-light mb-3 font-mono">
            {project.description}
          </p>

          {/* Project Image Section from index.js */}
          {project.image && (
            <div className="flex-1 w-full rounded-xl overflow-hidden bg-gray-900/50 border border-gray-800/50 mb-2">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </div>
          )}
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1 mt-auto">
          {project.tags?.slice(0, 3).map((tag, index) => (
            <span key={index} className="text-[10px] font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-full border border-blue-500/20 uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;