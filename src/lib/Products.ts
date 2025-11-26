type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  tags: string[];
  img: string;
  ribbon?: string;
  ribbonColor?: "default" | "blue";
};


export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: "Noir Elegance",
    description:
      "A sophisticated symphony of jasmine, amber, and vanilla that whispers timeless elegance.",
    price: 139,
    tags: ["Oriental", "Floral"],
    img: "/images/image3.jpeg",
    ribbon: "Best Seller",
    ribbonColor: "default",
  },
  {
    id: 2,
    title: "Azure Dream",
    description:
      "Fresh bergamot and sea salt merge with aquatic notes for an invigorating day scent.",
    price: 125,
    tags: ["Fresh", "Citrus"],
    img: "/images/image4.jpeg",
    ribbon: "New",
    ribbonColor: "blue",
  },
  {
    id: 3,
    title: "Velvet Rose",
    description:
      "Romantic petals of Bulgarian rose dance with hints of patchouli and musk.",
    price: 149,
    tags: ["Floral", "Woody"],
    img: "/images/image5.jpeg",
  },
  {
    id: 4,
    title: "Oud Mystique",
    description:
      "Deep oud wood mingles with saffron and leather for an enigmatic presence.",
    price: 189,
    tags: ["Woody", "Oriental"],
    img: "/images/image6.jpeg",
  },
  {
    id: 5,
    title: "Citrus Bloom",
    description:
      "Vibrant mandarin and neroli blossom into a sun-kissed garden of joy.",
    price: 115,
    tags: ["Citrus"],
    img: "/images/image7.jpeg",
  },
  {
    id: 6,
    title: "Sandalwood Serenity",
    description:
      "Creamy sandalwood embraces warm cedar and vanilla for peaceful meditation.",
    price: 155,
    tags: ["Woody"],
    img: "/images/image8.jpeg",
  },
  {
    id: 7,
    title: "Midnight Jasmine",
    description:
      "Intoxicating night-blooming jasmine wrapped in dark chocolate and tonka bean.",
    price: 145,
    tags: ["Floral"],
    img: "/images/image9.jpeg",
  },
  {
    id: 8,
    title: "Ocean Breeze",
    description:
      "Crisp marine accord with driftwood and white musk evokes coastal tranquility.",
    price: 129,
    tags: ["Fresh"],
    img: "/images/image10.jpeg",
  },
];