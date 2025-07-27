// image imports
import { chawMein, margherita, samosa, maxresdefault } from "../../../public/materials/fast-food";
import { apple, banana, pineapple } from "../../../public/materials/raw-items";

export const materials_data = [
  {
    rawFruits: [
      {
        id: 1,
        name: "Apple (1kg)",
        image: apple,
        price: 120,
        quantity: 200,
        vendor: "FreshFarms",
        rating: 4.5,
        review: "Sweet and fresh apples, good quality.",
      },
      {
        id: 2,
        name: "Banana (1 dozen)",
        image: banana,
        price: 60,
        quantity: 300,
        vendor: "Tropical Traders",
        rating: 4.2,
        review: "Perfect ripeness and quantity.",
      },
      {
        id: 3,
        name: "Pineapple (1 piece)",
        image: pineapple,
        price: 90,
        quantity: 100,
        vendor: "Island Fresh Co.",
        rating: 4.7,
        review: "Very juicy and flavorful.",
      },
    ],
  },
  {
    fastFood: [
      {
        id: 6,
        name: "Margherita Pizza",
        image: margherita,
        price: 150,
        quantity: 75,
        vendor: "PizzaTown",
        rating: 4.6,
        review: "Classic and delicious with fresh cheese.",
      },
      {
        id: 7,
        name: "Chow Mein",
        image: chawMein,
        price: 100,
        quantity: 120,
        vendor: "Wok n Roll",
        rating: 4.3,
        review: "Great taste and portion size.",
      },
      {
        id: 8,
        name: "Veg Samosa (2 pcs)",
        image: samosa,
        price: 40,
        quantity: 180,
        vendor: "SnackCorner",
        rating: 4.0,
        review: "Crispy and well-spiced.",
      },
      {
        id: 10,
        name: "Loaded Nachos",
        image: maxresdefault,
        price: 110,
        quantity: 90,
        vendor: "CrunchStation",
        rating: 4.4,
        review: "Cheesy and crunchy, highly recommended.",
      },
    ],
  },
];

export default materials_data;
