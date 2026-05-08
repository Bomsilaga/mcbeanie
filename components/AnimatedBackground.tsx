'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Primary animated gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30"
        animate={{
          y: [0, -80, 0],
          x: [0, 60, 0],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '-150px', left: '-150px' }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-pink-600 to-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-25"
        animate={{
          y: [0, 80, 0],
          x: [0, -60, 0],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        style={{ bottom: '-150px', right: '-150px' }}
      />

      {/* Center accent orb */}
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-15"
        animate={{
          y: [0, 40, 0],
          x: [0, -40, 0],
          scale: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}
      />

      {/* Floating accent elements */}
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-br from-teal-400/40 to-transparent rounded-full filter blur-2xl"
        animate={{
          y: [0, -100, 0],
          x: [0, 80, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
        style={{ top: '10%', right: '10%' }}
      />

      {/* Grid overlay with animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(0deg, transparent 24%, rgba(168, 85, 247, 0.1) 25%, rgba(168, 85, 247, 0.1) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, 0.1) 75%, rgba(168, 85, 247, 0.1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(168, 85, 247, 0.1) 25%, rgba(168, 85, 247, 0.1) 26%, transparent 27%, transparent 74%, rgba(168, 85, 247, 0.1) 75%, rgba(168, 85, 247, 0.1) 76%, transparent 77%, transparent)',
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-slate-900/40" />
    </div>
  );
}

