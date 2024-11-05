import { Card } from '../types';

export const tarotCards: Card[] = [
  {
    id: 0,
    name: 'El Loco',
    type: 'arcanoMayor',
    image: 'https://images.unsplash.com/photo-1635407640793-72dd329d218a?w=800&auto=format&fit=crop',
    description: 'El Loco representa nuevos comienzos, inocencia y espíritu libre. Sugiere tomar riesgos y confiar en el viaje de la vida.',
    significadoPositivo: 'Nuevas aventuras, libertad, originalidad',
    significadoNegativo: 'Imprudencia, riesgo innecesario, caos'
  },
  {
    id: 1,
    name: 'El Mago',
    type: 'arcanoMayor',
    image: 'https://images.unsplash.com/photo-1572937336162-1b7fbc2fe5c3?w=800&auto=format&fit=crop',
    description: 'El Mago simboliza la manifestación, el poder personal y la habilidad para transformar ideas en realidad.',
    significadoPositivo: 'Poder, habilidad, acción decisiva',
    significadoNegativo: 'Manipulación, engaño, talentos desperdiciados'
  },
  // Añadiremos más cartas aquí
];

export const getRandomCard = (type?: 'arcanoMayor' | 'arcanoMenor', excludeIds: number[] = []): Card => {
  const availableCards = tarotCards.filter(
    card => (!type || card.type === type) && !excludeIds.includes(card.id)
  );
  return availableCards[Math.floor(Math.random() * availableCards.length)];
};