export type LocalizedText = { en: string; es: string };

export type MenuItem = {
  name: LocalizedText;
  description: LocalizedText;
  price: string;
  popular?: boolean;
  image?: { src: string; alt: string };
};

export type MenuCategory = {
  id: string;
  title: LocalizedText;
  intro: LocalizedText;
  items: MenuItem[];
  image?: { src: string; alt: string };
};

// Ice cream flavors shown in the "Helados" flavors popup -- not tied to any
// one item's price/description, just the full list of what's scoopable.
export const HELADO_FLAVORS: LocalizedText[] = [
  { en: "Bubblegum (Chicle)", es: "Chicle" },
  { en: "Strawberry (milk base)", es: "Fresa (base de leche)" },
  { en: "Strawberry (water base)", es: "Fresa (base de agua)" },
  { en: "Lime", es: "Limón" },
  { en: "Chocolate (Mexican hot chocolate)", es: "Chocolate (chocolate mexicano)" },
  { en: "Vanilla", es: "Vainilla" },
  { en: "Pineapple", es: "Piña" },
  { en: "Mango", es: "Mango" },
  { en: "Pine Nut (Piñón)", es: "Piñón" },
  { en: "Pecan (Nuez)", es: "Nuez" },
  { en: "Cookies and Cream", es: "Galletas con Crema" },
  { en: "Guava", es: "Guayaba" },
  { en: "Dragonfruit", es: "Pitahaya" },
  { en: "Gansito", es: "Gansito" },
];

// Prices and item names below are pulled directly from the shop's POS
// listing -- anything not on that list (Chamoyada, Gansito Helado) is left
// at its prior placeholder price since it isn't verified yet.
export const MENU: MenuCategory[] = [
  {
    id: "paletas",
    title: { en: "Paletas", es: "Paletas" },
    intro: { en: "Handmade Mexican popsicles.", es: "Paletas mexicanas hechas a mano." },
    items: [
      {
        name: { en: "Fruit Paleta", es: "Paleta de Fruta" },
        description: {
          en: "Fresh fruit, water-based, dairy-free.",
          es: "Fruta fresca, a base de agua, sin lácteos.",
        },
        price: "$3.00",
      },
      {
        name: { en: "Cream Paleta", es: "Paleta de Crema" },
        description: {
          en: "Rich, milk-based classic flavors.",
          es: "Sabores clásicos, cremosos, a base de leche.",
        },
        price: "$3.00",
      },
    ],
  },
  {
    id: "helados",
    title: { en: "Helados", es: "Helados" },
    intro: { en: "Scoopable ice cream, made in-house.", es: "Helado de bola, hecho en casa." },
    image: { src: "/heladosflavors.png", alt: "Helados flavors" },
    items: [
      {
        name: { en: "Helado (Small)", es: "Helado (Chico)" },
        description: {
          en: "Small cup, house-made ice cream.",
          es: "Vaso chico, helado hecho en casa.",
        },
        price: "$3.50",
      },
      {
        name: { en: "Helado (Regular)", es: "Helado (Regular)" },
        description: { en: "Regular cup, choice of flavors.", es: "Vaso regular, elige tu sabor." },
        price: "$5.50",
      },
      {
        name: { en: "Helado (Large)", es: "Helado (Grande)" },
        description: { en: "Large cup, extra scoops.", es: "Vaso grande, bolas extra." },
        price: "$6.00",
      },
      {
        name: { en: "Cone (Small)", es: "Cono (Chico)" },
        description: {
          en: "Small scoop on a crisp waffle cone.",
          es: "Una bola en cono de waffle crujiente.",
        },
        price: "$3.00",
      },
      {
        name: { en: "Cone (Large)", es: "Cono (Grande)" },
        description: {
          en: "Large scoop on a crisp waffle cone.",
          es: "Bola grande en cono de waffle crujiente.",
        },
        price: "$5.00",
      },
    ],
  },
  {
    id: "helados-especiales",
    title: { en: "Helados Especiales", es: "Helados Especiales" },
    intro: {
      en: "Novelty and specialty ice cream shapes.",
      es: "Figuras y helados especiales.",
    },
    items: [
      {
        name: { en: "3D Mango", es: "Mango 3D" },
        description: {
          en: "Hand-shaped mango ice cream sculpture.",
          es: "Escultura de helado de mango hecha a mano.",
        },
        price: "$6.00",
      },
      {
        name: { en: "3D Peach", es: "Durazno 3D" },
        description: {
          en: "Hand-shaped peach ice cream sculpture.",
          es: "Escultura de helado de durazno hecha a mano.",
        },
        price: "$6.00",
      },
      {
        name: { en: "Rolled Helado", es: "Helado Enrollado" },
        description: {
          en: "Thai-style rolled ice cream, made fresh to order.",
          es: "Helado enrollado estilo tailandés, preparado al momento.",
        },
        price: "$7.00",
      },
      {
        name: { en: "Soccer Ball", es: "Balón de Fútbol" },
        description: {
          en: "Ice cream shaped and decorated like a soccer ball.",
          es: "Helado con forma y decorado como un balón de fútbol.",
        },
        price: "$6.00",
      },
      {
        name: { en: "MX Chip", es: "MX Chip" },
        description: {
          en: "Mexican chocolate chip ice cream.",
          es: "Helado de chocolate mexicano con chispas.",
        },
        price: "$5.00",
      },
    ],
  },
  {
    id: "bebidas",
    title: { en: "Bebidas", es: "Bebidas" },
    intro: {
      en: "Cool, refreshing drinks and mangonadas.",
      es: "Bebidas frescas y mangonadas.",
    },
    items: [
      {
        name: { en: "Agua Fresca (Regular)", es: "Agua Fresca (Regular)" },
        description: {
          en: "Rotating flavors, made fresh daily.",
          es: "Sabores rotativos, preparada fresca cada día.",
        },
        price: "$3.50",
      },
      {
        name: { en: "Agua Fresca (Large)", es: "Agua Fresca (Grande)" },
        description: {
          en: "Rotating flavors, made fresh daily — large.",
          es: "Sabores rotativos, preparada fresca cada día — grande.",
        },
        price: "$5.00",
      },
      {
        name: { en: "Agua Preparada", es: "Agua Preparada" },
        description: {
          en: "Fruit-prepared water, made to order.",
          es: "Agua preparada con fruta, hecha al momento.",
        },
        price: "$9.00",
      },
      {
        name: { en: "Mangonada", es: "Mangonada" },
        description: {
          en: "Mango, chamoy, tajín, tamarindo straw.",
          es: "Mango, chamoy, tajín, popote de tamarindo.",
        },
        price: "$8.00",
      },
      {
        name: { en: "Mangonona", es: "Mangonona" },
        description: {
          en: "Our biggest mangonada, made to share.",
          es: "Nuestra mangonada más grande, para compartir.",
        },
        price: "$12.00",
      },
      {
        name: { en: "Maranadas", es: "Maranadas" },
        description: {
          en: "House specialty fruit and chamoy blend.",
          es: "Mezcla especial de la casa de fruta y chamoy.",
        },
        price: "$9.00",
      },
      {
        name: { en: "Chamoyada", es: "Chamoyada" },
        description: {
          en: "Icy chamoy treat with seasonal fruit.",
          es: "Postre helado de chamoy con fruta de temporada.",
        },
        price: "$6.50",
      },
    ],
  },
  {
    id: "antojitos",
    title: { en: "Antojitos", es: "Antojitos" },
    intro: {
      en: "Traditional Mexican street snacks, made to order.",
      es: "Antojitos mexicanos tradicionales, preparados al momento.",
    },
    items: [
      {
        name: { en: "Esquite (Regular)", es: "Esquite (Regular)" },
        description: {
          en: "Warm corn, mayo, cotija, chile, lime.",
          es: "Elote caliente, mayonesa, queso cotija, chile, limón.",
        },
        price: "$5.00",
      },
      {
        name: { en: "Esquite (Large)", es: "Esquite (Grande)" },
        description: {
          en: "Warm corn, mayo, cotija, chile, lime — large.",
          es: "Elote caliente, mayonesa, queso cotija, chile, limón — grande.",
        },
        price: "$8.00",
      },
      {
        name: { en: "Elote", es: "Elote" },
        description: {
          en: "Grilled corn on the cob, classic toppings.",
          es: "Elote asado, con los ingredientes clásicos.",
        },
        price: "$4.00",
      },
      {
        name: { en: "Elote Fuego", es: "Elote Fuego" },
        description: { en: "Grilled corn on the cob, extra spicy.", es: "Elote asado, extra picante." },
        price: "$6.00",
        image: { src: "/menu/elote.jpg", alt: "Elote Fuego" },
      },
    ],
  },
  {
    id: "fresas-postres",
    title: { en: "Fresas & Postres", es: "Fresas y Postres" },
    intro: {
      en: "The internet-famous treats and other sweets, made our way.",
      es: "Los postres famosos en internet y otras delicias, a nuestro estilo.",
    },
    items: [
      {
        name: { en: "Fresas Con Crema (Regular)", es: "Fresas Con Crema (Regular)" },
        description: {
          en: "Strawberries with sweet cream and condensed milk.",
          es: "Fresas con crema dulce y leche condensada.",
        },
        price: "$9.00",
      },
      {
        name: { en: "Fresas Con Crema (Small)", es: "Fresas Con Crema (Chica)" },
        description: {
          en: "Strawberries with sweet cream and condensed milk — small.",
          es: "Fresas con crema dulce y leche condensada — chica.",
        },
        price: "$5.00",
      },
      {
        name: { en: "Dubai Strawberries", es: "Fresas Dubái" },
        description: {
          en: "Chocolate-dipped strawberries with pistachio kunafa.",
          es: "Fresas cubiertas de chocolate con kunafa de pistache.",
        },
        price: "$10.00",
        popular: true,
        image: { src: "/menu/dubaichoc.png", alt: "Dubai Strawberries" },
      },
      {
        name: { en: "Smores Strawberries", es: "Fresas Smores" },
        description: {
          en: "Chocolate-dipped strawberries with graham crumble and toasted marshmallow.",
          es: "Fresas cubiertas de chocolate con galleta graham y malvavisco tostado.",
        },
        price: "$12.00",
        popular: true,
        image: { src: "/menu/smorestraw-focus.jpg", alt: "Smores Strawberries" },
      },
      {
        name: { en: "Fresona", es: "Fresona" },
        description: {
          en: "Jumbo stuffed strawberry dessert.",
          es: "Postre de fresa gigante rellena.",
        },
        price: "$10.00",
      },
      {
        name: { en: "Fruta Special", es: "Fruta Especial" },
        description: { en: "Chef's special fruit cup.", es: "Copa de fruta especial de la casa." },
        price: "$4.00",
      },
      {
        name: { en: "Frutas Del Dia", es: "Frutas Del Día" },
        description: {
          en: "Fruit of the day — ask what's fresh.",
          es: "Fruta del día — pregunta qué hay fresco.",
        },
        price: "$8.00",
      },
      {
        name: { en: "Mini Pancakes", es: "Mini Panqueques" },
        description: {
          en: "Bite-sized pancakes with toppings.",
          es: "Panqueques pequeños con toppings.",
        },
        price: "$10.00",
      },
      {
        name: { en: "Gansito Helado", es: "Gansito Helado" },
        description: {
          en: "Ice cream inspired by the classic Gansito snack cake — chocolate, strawberry, sprinkles.",
          es: "Helado inspirado en el clásico pastelito Gansito — chocolate, fresa, chispas.",
        },
        price: "$6.50",
        popular: true,
      },
    ],
  },
  {
    id: "locos",
    title: { en: "Locos", es: "Locos" },
    intro: {
      en: "Loaded chip and snack combos, piled high.",
      es: "Combos cargados de frituras y botanas, bien servidos.",
    },
    items: [
      {
        name: { en: "DoriLoco Cueritos", es: "DoriLoco Cueritos" },
        description: {
          en: "Doritos loaded with cueritos, fruit, and chamoy.",
          es: "Doritos cargados con cueritos, fruta y chamoy.",
        },
        price: "$11.00",
      },
      {
        name: { en: "TostiLoco Cueritos", es: "TostiLoco Cueritos" },
        description: {
          en: "Tostitos loaded with cueritos, fruit, and chamoy.",
          es: "Tostitos cargados con cueritos, fruta y chamoy.",
        },
        price: "$11.00",
      },
      {
        name: { en: "TostiEsquiete", es: "TostiEsquiete" },
        description: { en: "Tostitos loaded with esquites.", es: "Tostitos cargados con esquites." },
        price: "$11.00",
      },
      {
        name: { en: "Chicharrines", es: "Chicharrines" },
        description: { en: "Crispy pork rind chips.", es: "Chicharrones crujientes." },
        price: "$3.00",
      },
      {
        name: { en: "Grape Lokas", es: "Uvas Locas" },
        description: {
          en: "Chamoy-coated grapes with tajín.",
          es: "Uvas bañadas en chamoy con tajín.",
        },
        price: "$8.00",
      },
      {
        name: { en: "Pepino Loco", es: "Pepino Loco" },
        description: {
          en: "Loaded spicy cucumber with chamoy and tajín.",
          es: "Pepino picante cargado con chamoy y tajín.",
        },
        price: "$12.00",
      },
      {
        name: { en: "Maruchan Loka", es: "Maruchan Loka" },
        description: {
          en: "Instant ramen loaded with chamoy, lime, and chile.",
          es: "Sopa instantánea cargada con chamoy, limón y chile.",
        },
        price: "$12.00",
        image: { src: "/menu/maruchan.png", alt: "Maruchan Loka" },
      },
      {
        name: { en: "Maruchan Loka (Elote Only)", es: "Maruchan Loka (Solo Elote)" },
        description: {
          en: "Instant ramen loaded with corn only.",
          es: "Sopa instantánea cargada solo con elote.",
        },
        price: "$8.00",
      },
    ],
  },
];
