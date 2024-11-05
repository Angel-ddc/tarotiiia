import { useState, useCallback } from 'react';
import { Card } from '../types';
import { selectCardForPosition } from '../services/tarotService';

interface UseTarotReadingProps {
  type: string;
  totalCards: number;
  positions: string[];
}

export const useTarotReading = ({ type, totalCards, positions }: UseTarotReadingProps) => {
  const [selectedCards, setSelectedCards] = useState<Card[]>(Array(totalCards).fill(null));
  const [remainingCards, setRemainingCards] = useState(totalCards);

  const selectCard = useCallback((index: number) => {
    if (selectedCards[index]) return;

    const selectedIds = selectedCards.filter(Boolean).map(card => card.id);
    const newCard = selectCardForPosition(type, index, selectedIds);

    const audio = new Audio('/card-flip.mp3');
    audio.play();

    setSelectedCards(prev => {
      const newCards = [...prev];
      newCards[index] = newCard;
      return newCards;
    });

    setRemainingCards(prev => prev - 1);
  }, [selectedCards, type]);

  return {
    selectedCards,
    remainingCards,
    selectCard
  };
};

export default useTarotReading;