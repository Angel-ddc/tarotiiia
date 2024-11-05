import React from 'react';
import { motion } from 'framer-motion';

interface TarotCardProps {
  isReversed?: boolean;
  onClick?: () => void;
  image?: string;
  cardNumber?: number;
  totalCards?: number;
}

export const TarotCard: React.FC<TarotCardProps> = ({
  isReversed = true,
  onClick,
  image,
  cardNumber,
  totalCards
}) => {
  const rotationAngle = totalCards 
    ? (cardNumber! - Math.floor(totalCards / 2)) * 5 
    : 0;

  return (
    <motion.div
      className="relative w-48 h-80 cursor-pointer card-hover"
      whileHover={{ scale: 1.05, y: -10 }}
      style={{ transformOrigin: 'bottom center' }}
      animate={{ rotate: rotationAngle }}
      onClick={onClick}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <motion.div
          className="w-full h-full"
          initial={false}
          animate={{
            backgroundImage: isReversed 
              ? "url('/card-back.svg')" 
              : `url('${image}')`
          }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default TarotCard;