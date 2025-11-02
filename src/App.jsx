import React from 'react';
import { motion } from 'framer-motion';
import HeroCover from './components/HeroCover';
import Dashboard from './components/Dashboard';
import ChatSymptom from './components/ChatSymptom';
import BottomNav from './components/BottomNav';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121212' }}>
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-50 pointer-events-none" style={{
          background: 'linear-gradient(120deg, #0b1b25, #0b1f1a, #0a1b26)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 18s ease infinite'
        }} />
        {/* Soft floating blobs */}
        <motion.div
          className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(3,169,244,0.25), transparent 60%)' }}
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(29,185,84,0.25), transparent 60%)' }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <HeroCover />
        <Dashboard />
        <ChatSymptom />
      </div>

      <BottomNav />

      {/* Keyframes */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
}

export default App;
