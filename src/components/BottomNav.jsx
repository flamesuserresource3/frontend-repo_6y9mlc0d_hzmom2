import React from 'react';
import { Home, Activity, MessageCircle, FileText, User, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const NavButton = ({ icon: Icon, label, href }) => (
  <a href={href} className="flex flex-col items-center gap-1 text-[#B0B0B0] hover:text-white transition-colors">
    <Icon size={22} />
    <span className="text-[11px]">{label}</span>
  </a>
);

const BottomNav = () => {
  return (
    <div className="fixed inset-x-0 bottom-3 px-4 z-40">
      <div className="relative mx-auto max-w-3xl">
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[20px] shadow-2xl px-6 py-3 flex items-center justify-between">
          <NavButton icon={Home} label="Home" href="#dashboard" />
          <NavButton icon={Activity} label="Symptoms" href="#chat" />

          {/* Floating Action Button */}
          <motion.a
            href="#dashboard"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-6 rounded-full p-4 text-black shadow-xl"
            style={{ backgroundColor: '#1DB954', boxShadow: '0 10px 30px rgba(29,185,84,0.35)' }}
            aria-label="Add Health Data"
          >
            <Plus size={22} />
          </motion.a>

          <NavButton icon={MessageCircle} label="AI Chat" href="#chat" />
          <NavButton icon={FileText} label="Reports" href="#reports" />
          <NavButton icon={User} label="Profile" href="#dashboard" />
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
