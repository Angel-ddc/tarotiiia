import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../types';

interface RevealedCardProps {
  card: Card;
  position: string;
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay * 0.2,
      ease: 'easeOut'
    }
  })
};

const TypewriterText: React.FC<{ text: string; delay: number }> = ({ text, delay }) => {
  const letters = text.split('');
  
  return (
    <div className="overflow-hidden">
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.05, delay: delay + index * 0.02 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export const RevealedCard: React.FC<RevealedCardProps> = ({ card, position }) => {
  return (
    <motion.div
      className="flex gap-8 bg-[#161b22] rounded-xl p-6 mb-6 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="w-48 h-80 rounded-xl overflow-hidden shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img 
          src={card.image} 
          alt={card.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </motion.div>

      <div className="flex-1">
        <motion.div
          custom={0}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-blue-400 mb-2"
        >
          <TypewriterText text={position} delay={0} />
        </motion.div>

        <motion.div
          custom={1}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-xl font-bold mb-4"
        >
          <TypewriterText text={card.name} delay={0.5} />
        </motion.div>

        <motion.div
          custom={2}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-gray-400"
        >
          <TypewriterText text={card.description} delay={1} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RevealedCard;