import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroCover = () => {
  return (
    <section id="hero" className="relative h-[60vh] w-full overflow-hidden rounded-b-[20px]" style={{ backgroundColor: '#0b0f14' }}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

      <div className="relative z-10 flex h-full items-end p-6 sm:p-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[20px] p-5 sm:p-7 shadow-xl max-w-xl"
        >
          <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">AarogyaAI</h1>
          <p className="mt-2 text-sm sm:text-base text-[#B0B0B0]">Your intelligent health companion. Track, analyze, and manage your wellbeing with a calm, futuristic interface.</p>
          <div className="mt-4 flex gap-3">
            <motion.a
              href="#dashboard"
              whileTap={{ scale: 0.98 }}
              className="rounded-[20px] px-5 py-2 text-sm font-medium text-black"
              style={{ backgroundColor: '#1DB954' }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="#chat"
              whileTap={{ scale: 0.98 }}
              className="rounded-[20px] px-5 py-2 text-sm font-medium text-white border border-white/15"
              style={{ background: 'linear-gradient(135deg, rgba(3,169,244,0.2), rgba(29,185,84,0.2))' }}
            >
              Try AI Assistant
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCover;
