export type MenuItem = {
  name: string;
  description: string;
  price: string;
  popular?: boolean;
  image?: { src: string; alt: string };
  // Small pinned corner photo -- unlike `image`, doesn't add height to the
  // card, so it can't shift the surrounding grid/masonry layout.
  thumbnail?: { src: string; alt: string };
};

export type MenuCategory = {
  id: string;
  title: string;
  intro: string;
  items: MenuItem[];
  image?: { src: string; alt: string };
};

// Prices and item names below are pulled directly from the shop's POS
// listing -- anything not on that list (Chamoyada, Gansito Helado) is left
// at its prior placeholder price since it isn't verified yet.
export const MENU: MenuCategory[] = [
  {
    id: "paletas",
    title: "Paletas",
    intro: "Handmade Mexican popsicles.",
    items: [
      { name: "Fruit Paleta", description: "Fresh fruit, water-based, dairy-free.", price: "$3.00" },
      { name: "Cream Paleta", description: "Rich, milk-based classic flavors.", price: "$3.00" },
    ],
  },
  {
    id: "helados",
    title: "Helados",
    intro: "Scoopable ice cream, made in-house.",
    image: { src: "/heladosflavors.png", alt: "Helados flavors" },
    items: [
      { name: "Helado (Small)", description: "Small cup, house-made ice cream.", price: "$3.50" },
      { name: "Helado (Regular)", description: "Regular cup, choice of flavors.", price: "$5.50" },
      { name: "Helado (Large)", description: "Large cup, extra scoops.", price: "$6.00" },
      { name: "Cone (Small)", description: "Small scoop on a crisp waffle cone.", price: "$3.00" },
      { name: "Cone (Large)", description: "Large scoop on a crisp waffle cone.", price: "$5.00" },
    ],
  },
  {
    id: "helados-especiales",
    title: "Helados Especiales",
    intro: "Novelty and specialty ice cream shapes.",
    items: [
      { name: "3D Mango", description: "Hand-shaped mango ice cream sculpture.", price: "$6.00" },
      { name: "3D Peach", description: "Hand-shaped peach ice cream sculpture.", price: "$6.00" },
      { name: "Rolled Helado", description: "Thai-style rolled ice cream, made fresh to order.", price: "$7.00" },
      { name: "Soccer Ball", description: "Ice cream shaped and decorated like a soccer ball.", price: "$6.00" },
      { name: "MX Chip", description: "Mexican chocolate chip ice cream.", price: "$5.00" },
    ],
  },
  {
    id: "bebidas",
    title: "Bebidas",
    intro: "Cool, refreshing drinks and mangonadas.",
    items: [
      { name: "Agua Fresca (Regular)", description: "Rotating flavors, made fresh daily.", price: "$3.50" },
      { name: "Agua Fresca (Large)", description: "Rotating flavors, made fresh daily — large.", price: "$5.00" },
      { name: "Agua Preparada", description: "Fruit-prepared water, made to order.", price: "$9.00" },
      { name: "Mangonada", description: "Mango, chamoy, tajín, tamarindo straw.", price: "$8.00" },
      { name: "Mangonona", description: "Our biggest mangonada, made to share.", price: "$12.00" },
      { name: "Maranadas", description: "House specialty fruit and chamoy blend.", price: "$9.00" },
      { name: "Chamoyada", description: "Icy chamoy treat with seasonal fruit.", price: "$6.50" },
    ],
  },
  {
    id: "antojitos",
    title: "Antojitos",
    intro: "Traditional Mexican street snacks, made to order.",
    items: [
      { name: "Esquite (Regular)", description: "Warm corn, mayo, cotija, chile, lime.", price: "$5.00" },
      { name: "Esquite (Large)", description: "Warm corn, mayo, cotija, chile, lime — large.", price: "$8.00" },
      {
        name: "Elote",
        description: "Grilled corn on the cob, classic toppings.",
        price: "$4.00",
        thumbnail: { src: "/menu/elote.jpg", alt: "Elote" },
      },
      { name: "Elote Fuego", description: "Grilled corn on the cob, extra spicy.", price: "$6.00" },
    ],
  },
  {
    id: "fresas-postres",
    title: "Fresas & Postres",
    intro: "The internet-famous treats and other sweets, made our way.",
    items: [
      { name: "Fresas Con Crema (Regular)", description: "Strawberries with sweet cream and condensed milk.", price: "$9.00" },
      { name: "Fresas Con Crema (Small)", description: "Strawberries with sweet cream and condensed milk — small.", price: "$5.00" },
      {
        name: "Dubai Strawberries",
        description: "Chocolate-dipped strawberries with pistachio kunafa.",
        price: "$10.00",
        popular: true,
        image: { src: "/menu/dubaichoc.png", alt: "Dubai Strawberries" },
      },
      {
        name: "Smores Strawberries",
        description: "Chocolate-dipped strawberries with graham crumble and toasted marshmallow.",
        price: "$12.00",
        popular: true,
        image: { src: "/menu/smorestraw-focus.jpg", alt: "Smores Strawberries" },
      },
      { name: "Fresona", description: "Jumbo stuffed strawberry dessert.", price: "$10.00" },
      { name: "Fruta Special", description: "Chef's special fruit cup.", price: "$4.00" },
      { name: "Frutas Del Dia", description: "Fruit of the day — ask what's fresh.", price: "$8.00" },
      { name: "Mini Pancakes", description: "Bite-sized pancakes with toppings.", price: "$10.00" },
      {
        name: "Gansito Helado",
        description: "Ice cream inspired by the classic Gansito snack cake — chocolate, strawberry, sprinkles.",
        price: "$6.50",
        popular: true,
      },
    ],
  },
  {
    id: "locos",
    title: "Locos",
    intro: "Loaded chip and snack combos, piled high.",
    items: [
      { name: "DoriLoco Cueritos", description: "Doritos loaded with cueritos, fruit, and chamoy.", price: "$11.00" },
      { name: "TostiLoco Cueritos", description: "Tostitos loaded with cueritos, fruit, and chamoy.", price: "$11.00" },
      { name: "TostiEsquiete", description: "Tostitos loaded with esquites.", price: "$11.00" },
      { name: "Chicharrines", description: "Crispy pork rind chips.", price: "$3.00" },
      { name: "Grape Lokas", description: "Chamoy-coated grapes with tajín.", price: "$8.00" },
      { name: "Pepino Loco", description: "Loaded spicy cucumber with chamoy and tajín.", price: "$12.00" },
      {
        name: "Maruchan Loka",
        description: "Instant ramen loaded with chamoy, lime, and chile.",
        price: "$12.00",
        image: { src: "/menu/maruchan.png", alt: "Maruchan Loka" },
      },
      { name: "Maruchan Loka (Elote Only)", description: "Instant ramen loaded with corn only.", price: "$8.00" },
    ],
  },
];
