import { Card } from '../types';
import { getRandomCard } from '../data/cards';
import { readingConfigs } from '../data/readings';

export const selectCardForPosition = (
  readingType: string,
  position: number,
  selectedIds: number[]
): Card => {
  switch (readingType) {
    case 'celtic':
      return position === 0
        ? getRandomCard('arcanoMayor', selectedIds)
        : getRandomCard(undefined, selectedIds);
    
    case 'star':
      return position === 0
        ? getRandomCard('arcanoMayor', selectedIds)
        : position % 2 === 0
        ? getRandomCard('arcanoMayor', selectedIds)
        : getRandomCard('arcanoMenor', selectedIds);
    
    case 'love':
      return (position === 0 || position === 4)
        ? getRandomCard('arcanoMayor', selectedIds)
        : getRandomCard('arcanoMenor', selectedIds);
    
    case 'time':
      return position === 1
        ? getRandomCard('arcanoMenor', selectedIds)
        : getRandomCard('arcanoMayor', selectedIds);
    
    case 'yesno':
      return getRandomCard('arcanoMayor', selectedIds);
    
    default:
      return getRandomCard(undefined, selectedIds);
  }
};