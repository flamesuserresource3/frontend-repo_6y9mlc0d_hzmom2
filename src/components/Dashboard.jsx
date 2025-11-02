import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Activity, Bell, FileText, MessageCircle, Plus, ShieldAlert } from 'lucide-react';

const Card = ({ children, className = '' }) => (
  <motion.div
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-[20px] shadow-xl ${className}`}
  >
    {children}
  </motion.div>
);

const TrendChart = ({ color = '#03A9F4' }) => {
  // Dummy smooth path
  const path = useMemo(
    () => 'M 0 40 C 40 10, 80 70, 120 35 S 200 55, 240 25',
    []
  );
  return (
    <svg viewBox="0 0 240 80" className="w-full h-20">
      <defs>
        <linearGradient id={`grad-${color}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <motion.path
        d={path}
        fill="none"
        stroke={`url(#grad-${color})`}
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
    </svg>
  );
};

const Dashboard = () => {
  const name = 'Aarogya User';

  return (
    <section id="dashboard" className="px-4 sm:px-6 lg:px-8 py-6 text-white">
      <div className="flex items-baseline justify-between">
        <div>
          <h2 className="text-xl text-[#B0B0B0]">Good Morning,</h2>
          <h3 className="text-2xl sm:text-3xl font-semibold">{name}</h3>
        </div>
        <motion.button
          whileTap={{ scale: 0.97 }}
          className="rounded-[20px] px-4 py-2 text-sm font-medium border border-white/10"
          style={{ background: 'linear-gradient(135deg, rgba(3,169,244,0.15), rgba(29,185,84,0.15))' }}
        >
          <div className="flex items-center gap-2"><Bell size={16} /> Reminders</div>
        </motion.button>
      </div>

      {/* Quick actions */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {[
          { label: 'Symptom Checker', icon: Activity, href: '#chat' },
          { label: 'AI Chat', icon: MessageCircle, href: '#chat' },
          { label: 'Reports', icon: FileText, href: '#reports' },
          { label: 'Reminders', icon: Bell, href: '#reports' },
          { label: 'Add Data', icon: Plus, href: '#dashboard' },
        ].map((item) => (
          <Card key={item.label} className="p-4 hover:shadow-2xl transition-shadow">
            <a href={item.href} className="flex items-center gap-3">
              <div
                className="p-3 rounded-[16px]"
                style={{ background: 'linear-gradient(135deg, rgba(3,169,244,0.2), rgba(29,185,84,0.2))' }}
              >
                <item.icon size={20} />
              </div>
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          </Card>
        ))}
      </div>

      {/* Trends */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#B0B0B0]">Weight</span>
            <span className="text-sm" style={{ color: '#1DB954' }}>+1.2%</span>
          </div>
          <TrendChart color="#1DB954" />
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#B0B0B0]">Blood Pressure</span>
            <span className="text-sm text-yellow-400">Stable</span>
          </div>
          <TrendChart color="#03A9F4" />
        </Card>
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-[#B0B0B0]">Sugar</span>
            <span className="text-sm text-red-400">-0.8%</span>
          </div>
          <TrendChart color="#03A9F4" />
        </Card>
      </div>

      {/* SOS + Analytics */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4" id="reports">
        <Card className="p-5 lg:col-span-2">
          <h4 className="text-lg font-semibold mb-3">Reports</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {[1,2,3,4].map((i) => (
              <motion.div
                key={i}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="p-4 rounded-[16px] bg-white/5 border border-white/10 flex items-center justify-between"
              >
                <div>
                  <p className="text-sm font-medium">Report #{i}</p>
                  <p className="text-xs text-[#B0B0B0]">Uploaded on 2025-10-0{i}</p>
                </div>
                <div className="flex gap-2 text-[#03A9F4]">
                  <FileText size={18} />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4">
            <motion.button whileTap={{ scale: 0.98 }} className="px-4 py-2 rounded-[20px] text-black font-medium" style={{ backgroundColor: '#1DB954' }}>
              Upload New Report
            </motion.button>
          </div>
        </Card>
        <Card className="p-5 flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="relative inline-flex">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="px-6 py-6 rounded-[20px] text-white font-semibold flex items-center gap-2"
                style={{ backgroundColor: '#FF3B30', boxShadow: '0 0 25px rgba(255,59,48,0.4)' }}
              >
                <ShieldAlert /> SOS
              </motion.button>
              <span className="absolute inset-0 rounded-[20px]" style={{ boxShadow: '0 0 45px 10px rgba(255,59,48,0.25)' }} />
            </div>
            <p className="text-xs text-[#B0B0B0] mt-2">Shares location and health summary (prototype)</p>
          </div>
        </Card>
      </div>

      {/* Reminders */}
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-3">Reminders</h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { t: 'Metformin 500mg', s: 'pending', time: '08:00 AM' },
            { t: 'BP Check', s: 'completed', time: '10:00 AM' },
            { t: 'Doctor Appointment', s: 'overdue', time: 'Yesterday' },
          ].map((r, idx) => (
            <motion.label
              key={idx}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="flex items-center gap-3 p-4 rounded-[16px] bg-white/5 border border-white/10 cursor-pointer"
            >
              <input type="checkbox" defaultChecked={r.s==='completed'} className="h-4 w-4 rounded" />
              <div className="flex-1">
                <p className="text-sm font-medium">{r.t}</p>
                <p className="text-xs text-[#B0B0B0]">{r.time}</p>
              </div>
              <span
                className="text-xs px-2 py-1 rounded-[12px]"
                style={{
                  backgroundColor: r.s==='completed' ? 'rgba(29,185,84,0.15)' : r.s==='pending' ? 'rgba(234,179,8,0.15)' : 'rgba(239,68,68,0.15)',
                  color: r.s==='completed' ? '#1DB954' : r.s==='pending' ? '#eab308' : '#ef4444',
                }}
              >
                {r.s}
              </span>
            </motion.label>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
