import { Youtube, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80"
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      <div className="container mx-auto px-4 z-20 text-center">
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The Next Odisha
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Showcasing the beauty, culture, and future of Odisha through compelling storytelling
        </motion.p>
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#" className="bg-red-600 hover:bg-red-700 px-8 py-3 rounded-full font-semibold flex items-center gap-2">
            <Youtube className="w-5 h-5" />
            Subscribe Now
          </a>
          <a href="#about" className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full font-semibold flex items-center gap-2">
            Learn More
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </header>
  );
}