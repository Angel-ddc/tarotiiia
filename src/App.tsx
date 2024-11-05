import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles, Star, Heart, Clock, HelpCircle, MessageSquare, BrainCircuit } from 'lucide-react';
import ReadingPage from './pages/ReadingPage';

const readings = [
  { icon: Sparkles, name: 'readings.celtic', path: '/celtic' },
  { icon: Star, name: 'readings.star', path: '/star' },
  { icon: Heart, name: 'readings.love', path: '/love' },
  { icon: Clock, name: 'readings.time', path: '/time' },
  { icon: HelpCircle, name: 'readings.yesno', path: '/yesno' },
  { icon: MessageSquare, name: 'readings.question', path: '/question' },
  { icon: BrainCircuit, name: 'readings.chat', path: '/chat' }
];

function App() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleIconClick = (path: string) => {
    const audio = new Audio('/click.mp3');
    audio.play();
    navigate(path);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0d1117] to-gray-900 text-gray-100">
          <div className="container mx-auto px-4 py-12">
            <motion.h1 
              className="text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              TarotiA
            </motion.h1>

            <motion.div 
              className="w-24 h-24 mx-auto mb-12"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-full bg-[#0d1117] flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-blue-400" />
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 max-w-4xl mx-auto">
              {readings.map((reading, index) => (
                <motion.div
                  key={reading.path}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <motion.button
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-1 cursor-pointer relative group"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleIconClick(reading.path)}
                  >
                    <div className="w-full h-full rounded-full bg-[#0d1117] flex items-center justify-center relative overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20"
                        initial={false}
                        transition={{ duration: 0.3 }}
                      />
                      <reading.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                  </motion.button>
                  <motion.p 
                    className="mt-3 text-sm text-center text-gray-400 group-hover:text-gray-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {t(reading.name)}
                  </motion.p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="absolute top-4 right-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <select 
                className="bg-[#161b22] text-gray-300 border border-gray-700 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleLanguageChange}
                value={i18n.language}
              >
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="pt">Português</option>
                <option value="fr">Français</option>
                <option value="it">Italiano</option>
              </select>
            </motion.div>
          </div>
        </div>
      } />
      <Route path="/:type" element={<ReadingPage />} />
    </Routes>
  );
}

export default App;