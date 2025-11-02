import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Activity, Send } from 'lucide-react';

const TypingDots = () => (
  <div className="flex items-center gap-1">
    <span className="h-2 w-2 rounded-full bg-white/80 animate-bounce" style={{ animationDelay: '0ms' }} />
    <span className="h-2 w-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '150ms' }} />
    <span className="h-2 w-2 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '300ms' }} />
  </div>
);

const Bubble = ({ from = 'ai', children }) => (
  <motion.div
    initial={{ y: 8, opacity: 0, scale: 0.98 }}
    animate={{ y: 0, opacity: 1, scale: 1 }}
    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className={`max-w-[80%] px-4 py-3 rounded-[16px] text-sm ${
      from === 'user' ? 'ml-auto text-black' : 'mr-auto text-white'
    }`}
    style={{ backgroundColor: from === 'user' ? '#1DB954' : '#03A9F4' }}
  >
    {children}
  </motion.div>
);

const ChatSymptom = () => {
  const [tab, setTab] = useState('chat');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, from: 'ai', text: 'Hi! I am AarogyaAI. How can I help you today?' },
  ]);

  const [symptomText, setSymptomText] = useState('');
  const [history, setHistory] = useState([
    { date: '2025-11-01', summary: 'Headache and mild fever' },
    { date: '2025-10-28', summary: 'Cough and sore throat' },
  ]);

  const sendMessage = () => {
    const t = input.trim();
    if (!t) return;
    const next = [...messages, { id: Date.now(), from: 'user', text: t }, { id: Date.now()+1, from: 'ai', text: 'Thanks! In the prototype, AI responses are placeholders. Stay hydrated and rest well.' }];
    setMessages(next);
    setInput('');
  };

  const runSymptom = () => {
    const t = symptomText.trim();
    if (!t) return;
    setHistory([{ date: new Date().toISOString().slice(0,10), summary: t }, ...history]);
    setSymptomText('');
  };

  return (
    <section id="chat" className="px-4 sm:px-6 lg:px-8 py-6 text-white">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setTab('chat')}
          className={`px-4 py-2 rounded-[20px] text-sm font-medium flex items-center gap-2 border ${tab==='chat' ? '' : 'border-white/10'}`}
          style={{ backgroundColor: tab==='chat' ? '#03A9F4' : 'transparent' }}
        >
          <MessageCircle size={16} /> AI Chat
        </button>
        <button
          onClick={() => setTab('symptom')}
          className={`px-4 py-2 rounded-[20px] text-sm font-medium flex items-center gap-2 border ${tab==='symptom' ? '' : 'border-white/10'}`}
          style={{ backgroundColor: tab==='symptom' ? '#1DB954' : 'transparent' }}
        >
          <Activity size={16} /> Symptom Checker
        </button>
      </div>

      <AnimatePresence mode="wait">
        {tab === 'chat' ? (
          <motion.div
            key="chat"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 backdrop-blur-md bg-white/5 border border-white/10 rounded-[20px] p-4 h-[360px] flex flex-col"
          >
            <div className="flex-1 space-y-3 overflow-y-auto pr-1">
              {messages.map((m) => (
                <Bubble key={m.id} from={m.from}>{m.text}</Bubble>
              ))}
              <div className="mr-auto"><TypingDots /></div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-white/10 border border-white/10 rounded-[20px] px-4 py-3 text-sm outline-none placeholder:text-[#B0B0B0]"
              />
              <button onClick={sendMessage} className="px-4 py-3 rounded-[16px] text-black" style={{ backgroundColor: '#1DB954' }}>
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="symptom"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-4 grid lg:grid-cols-3 gap-4"
          >
            <div className="lg:col-span-2 backdrop-blur-md bg-white/5 border border-white/10 rounded-[20px] p-4">
              <div className="flex items-center gap-2">
                <input
                  value={symptomText}
                  onChange={(e) => setSymptomText(e.target.value)}
                  placeholder="Describe your symptoms..."
                  className="flex-1 bg-white/10 border border-white/10 rounded-[16px] px-4 py-3 text-sm outline-none placeholder:text-[#B0B0B0]"
                />
                <button onClick={runSymptom} className="px-4 py-3 rounded-[16px] text-black" style={{ backgroundColor: '#03A9F4' }}>
                  Check
                </button>
              </div>
              <div className="mt-4">
                <motion.div initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }} className="p-4 rounded-[16px] bg-white/5 border border-white/10">
                  <p className="text-sm font-medium">AI Assessment (prototype)</p>
                  <p className="text-xs text-[#B0B0B0] mt-1">This section shows placeholder guidance. Seek professional advice for medical concerns.</p>
                </motion.div>
              </div>
            </div>
            <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[20px] p-4">
              <p className="text-sm font-semibold mb-2">Past Checks</p>
              <div className="space-y-2">
                {history.map((h, i) => (
                  <motion.div key={i} initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: i * 0.05 }} className="p-3 rounded-[14px] bg-white/5 border border-white/10">
                    <p className="text-xs text-[#B0B0B0]">{h.date}</p>
                    <p className="text-sm">{h.summary}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ChatSymptom;
