export interface Card {
  id: number;
  name: string;
  type: 'arcanoMayor' | 'arcanoMenor';
  image: string;
  description: string;
  significadoPositivo: string;
  significadoNegativo: string;
}

export interface Reading {
  id: string;
  type: string;
  cards: Card[];
  positions: string[];
  remainingCards: number;
}