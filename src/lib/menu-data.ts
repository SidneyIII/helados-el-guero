export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  intro: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "paletas-helados",
    title: "Paletas & Helados",
    intro: "Handmade Mexican popsicles and scoopable ice cream.",
    items: [
      { name: "Fruit Paleta", description: "Fresh fruit, water-based, dairy-free.", price: "$3.50" },
      { name: "Cream Paleta", description: "Rich, milk-based classic flavors.", price: "$4.00" },
      { name: "Helado Cup", description: "Choice of two scoops, house-made.", price: "$5.00" },
    ],
  },
  {
    id: "antojitos",
    title: "Antojitos",
    intro: "Traditional Mexican street snacks, made to order.",
    items: [
      { name: "Esquites", description: "Warm corn, mayo, cotija, chile, lime.", price: "$6.00" },
      { name: "Elote", description: "Grilled corn on the cob, classic toppings.", price: "$5.50" },
      { name: "Tostilocos", description: "Loaded tostilocos with fruit, chamoy, and chips.", price: "$7.00" },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    intro: "Cool, refreshing drinks and mangonadas.",
    items: [
      { name: "Mangonada", description: "Mango, chamoy, tajín, tamarindo straw.", price: "$6.50" },
      { name: "Chamoyada", description: "Icy chamoy treat with seasonal fruit.", price: "$6.50" },
      { name: "Agua Fresca", description: "Rotating flavors, made fresh daily.", price: "$3.00" },
    ],
  },
  {
    id: "trending",
    title: "Trending",
    intro: "The internet-famous treats, made our way.",
    items: [
      { name: "Fresas Con Crema", description: "Strawberries with sweet cream and condensed milk.", price: "$6.00" },
      { name: "Dubai Strawberries", description: "Chocolate-dipped strawberries with pistachio kunafa.", price: "$8.00" },
    ],
  },
];
