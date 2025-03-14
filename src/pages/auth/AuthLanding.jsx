import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AuthLanding() {
  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-b from-pink-500 via-purple-500 to-indigo-500 overflow-hidden relative px-2"> 
      {/* Simplified main container structure - single container with strict centering */}
      <motion.div 
        className="flex flex-col items-center justify-center w-full max-w-[280px] z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Heart Icon with heartbeat animation */}
        <motion.div 
          className="w-20 h-20 mb-6"
          animate={{ 
            scale: [1, 1.05, 1],
            boxShadow: ['0px 0px 15px 5px rgba(255,193,204,0.2)', '0px 0px 20px 8px rgba(255,193,204,0.4)', '0px 0px 15px 5px rgba(255,193,204,0.2)']
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-md">
            <defs>
              <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6bcb" />
                <stop offset="100%" stopColor="#B19CD9" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path 
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
              fill="url(#heartGradient)"
              filter="url(#glow)"
            />
          </svg>
        </motion.div>

        {/* Brand name - simplified text classes */}
        <h1 className="text-2xl font-bold tracking-wider text-white mb-2 uppercase text-center w-full">
          Heart Glow AI
        </h1>
        
        {/* Tagline - simplified text classes */}
        <p className="text-white/80 text-center mb-8 text-sm w-full">
          Express your feelings with beautifully crafted messages
        </p>

        {/* Buttons - direct inclusion without nested container for better centering */}
        {/* Sign In Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mb-4"
        >
          <Link 
            to="/login" 
            className="block text-center py-3 px-6 rounded-2xl border-2 border-white/30 text-white font-semibold text-base tracking-wide transition-all duration-200 hover:bg-white/10 hover:border-white/50"
          >
            Sign In
          </Link>
        </motion.div>

        {/* Sign Up Button */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full"
        >
          <Link 
            to="/signup" 
            className="block text-center py-3 px-6 rounded-2xl bg-gradient-to-r from-[#ff6bcb] to-[#B19CD9] text-white font-bold text-base tracking-wide shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            Sign Up
          </Link>
        </motion.div>
      </motion.div>

      {/* Expanded floating heart background elements - centered */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${30 + Math.random() * 40}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() * 10 - 5, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            <svg 
              width={15 + Math.random() * 15} 
              height={15 + Math.random() * 15} 
              viewBox="0 0 24 24"
            >
              <path 
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                fill="white"
              />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 