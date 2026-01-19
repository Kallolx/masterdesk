import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="sticky top-0 h-[500px] w-full z-0 flex flex-col items-center justify-center bg-gradient-to-t from-[#a100be] to-gray-900 text-center px-4 overflow-hidden pt-20">
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center max-w-4xl mx-auto"
      >
        <img src="/logo2.svg" alt="Masterdsk Logo" className="h-20 md:h-28 mb-6" />
        
        <p className="text-gray-400 font-cinzel tracking-wide font-semibold text-xl md:text-3xl uppercase mb-10 max-w-4xl">
          Explore top-tier subscriptions with <span className="font-cinzel-decorative">masterdsk</span>
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-4">
          <button className="px-4 py-2 sm:px-8 sm:py-3 rounded-lg bg-white text-black font-serif font-extrabold border border-blue-600 text-sm sm:text-lg hover:bg-blue-700 hover:text-white transition-all active:scale-95 cursor-pointer">
            Browse Plan
          </button>
          <button className="px-4 py-2 sm:px-8 sm:py-3 rounded-lg bg-blue-600 text-white font-serif font-extrabold border border-blue-600 text-sm sm:text-lg hover:bg-white hover:text-black transition-all active:scale-95 cursor-pointer">
            Signup Now
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
