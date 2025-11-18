export type Receita = {
  id: string;
  title: string;
  description: string;
  image: string;
  flags: string[];
};

export const receitas : Receita[] = [
  {
    id: '1',
    title: 'Sorvete de matcha',
    description: 'Delicioso sorvete de matcha com apenas 5 ingredientes, venha conferir!',
    image: 'https://static.itdg.com.br/images/640-400/53c2861596936e9f83c61e029869dc96/shutterstock-652699975.jpg',
   flags:["Facil","Sorvete"]
  },
  {
    id: '2',
    title: 'Terrine de queijo',
    description: 'A gente tem certeza que você vai amar essa receita de terrine de queijo para qualquer momento do dia!',
    image: 'https://static.itdg.com.br/images/640-400/52f90c3bcd1b5b46a2cd18f187e56c17/shutterstock-1762110368.jpg',
     flags:["Queijo","Terrine"]
  
  },
  {
    id: '3',
    title: 'Crumble de castanha do pará e pistache',
    description: 'venha conferir!',
    image: 'https://static.itdg.com.br/images/640-400/79183ae6e3380b37ffaf0e936fe99bbd/1-4-.jpg',
     flags:["Castanha do pará"]
  },
];