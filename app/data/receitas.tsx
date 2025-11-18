export type Receita = {
  id: string;
  title: string;
  description: string;
  image: string;
};

export const receitas : Receita[] = [
  {
    id: '1',
    title: 'Panqueca de Banana',
    description: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    image: 'https://via.placeholder.com/100'
  },
  {
    id: '2',
    title: 'Salada Colorida',
    description: 'Refrescante e nutritiva.',
    image: 'https://via.placeholder.com/100'
  },
  {
    id: '3',
    title: 'Bolo de Chocolate',
    description: 'Perfeito para sobremesa!',
    image: 'https://via.placeholder.com/100'
  },
];