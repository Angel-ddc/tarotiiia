import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import CardSpread from '../components/CardSpread';
import RemainingCards from '../components/RemainingCards';
import RevealedCard from '../components/RevealedCard';
import BackgroundEffects from '../components/BackgroundEffects';
import { useTarotReading } from '../hooks/useTarotReading';
import { readingConfigs } from '../data/readings';

export const ReadingPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const config = readingConfigs[type as keyof typeof readingConfigs];
  
  const { selectedCards, remainingCards, selectCard } = useTarotReading({
    type: type!,
    totalCards: config.totalCards,
    positions: config.positions
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0d1117] to-gray-900 relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {type}
        </motion.h2>

        <div className="relative">
          <CardSpread
            totalCards={config.totalCards}
            selectedCards={selectedCards}
            onCardClick={selectCard}
          />

          <RemainingCards remaining={remainingCards} />
        </div>

        <motion.div 
          className="mt-16 space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {selectedCards.map((card, index) => (
            card && (
              <RevealedCard
                key={card.id}
                card={card}
                position={config.positions[index]}
              />
            )
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ReadingPage;