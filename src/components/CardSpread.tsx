import React from 'react';
import { motion } from 'framer-motion';
import TarotCard from './TarotCard';
import { Card } from '../types';

interface CardSpreadProps {
  totalCards: number;
  selectedCards: Card[];
  onCardClick: (index: number) => void;
}

export const CardSpread: React.FC<CardSpreadProps> = ({
  totalCards,
  selectedCards,
  onCardClick
}) => {
  return (
    <motion.div 
      className="relative flex justify-center items-end gap-4 h-96"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {Array.from({ length: totalCards }).map((_, index) => (
        <TarotCard
          key={index}
          isReversed={!selectedCards[index]}
          image={selectedCards[index]?.image}
          cardNumber={index}
          totalCards={totalCards}
          onClick={() => onCardClick(index)}
        />
      ))}
    </motion.div>
  );
};

export default CardSpread;