import React from 'react';
import { motion } from 'framer-motion';

interface RemainingCardsProps {
  remaining: number;
}

export const RemainingCards: React.FC<RemainingCardsProps> = ({ remaining }) => {
  return (
    <motion.div
      className="absolute right-8 top-1/2 transform -translate-y-1/2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-400 text-sm mb-2">cartas restantes</p>
      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-1">
        <div className="w-full h-full rounded-full bg-[#0d1117] flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-400">{remaining}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default RemainingCards;