//test data for recipes
const recipeData = [
  {
    recipe_id: "1",
    name: "Cauliflower Tacos With Avocado Crema",
    servingSize: 4,
    cookware: [
      "large mixing bowl",
      "baking tray",
      "bowls for breading",
      "knife",
      "blender",
      "cast-iron",
    ],
    ingredients: [
      { name: "cauliflower", amount: 1, measurement: "each", id: 1 },
      { name: "bread crumbs", amount: 1, measurement: "cup", id: 2 },
      { name: "flour", amount: 0.5, measurement: "cup", id: 3 },
      { name: "egg", amount: 2, measurement: "each", id: 4 },
      { name: "paprika", amount: 1, measurement: "tsp", id: 5 },
      { name: "cumin", amount: 1, measurement: "tbsp", id: 6 },
      { name: "oregano", amount: 1, measurement: "tbsp", id: 7 },
      {
        name: "hot sauce",
        amount: 1,
        measurement: "amount of your choosing",
        id: 8,
      },
      { name: "corn tortillas", amount: 8, measurement: "each", id: 9 },
      {
        name: "red cabbage, chopped",
        amount: 0.25,
        measurement: "head",
        id: 10,
      },
      { name: "avocado", amount: 1, measurement: "each", id: 11 },
      { name: "sour cream", amount: 0.5, measurement: "cup", id: 12 },
      { name: "cilantro", amount: 1, measurement: "bunch", id: 13 },
      { name: "limes", amount: 2, measurement: "each", id: 14 },
      { name: "salt", amount: 1, measurement: "tsp", id: 15 },
      { name: "black pepper", amount: 1, measurement: "tsp", id: 16 },
      { name: "cooking oil - spray", amount: 1, measurement: "can", id: 17 },
    ],
    instructions: [
      "Pre heat oven to 425F.",
      "Prep cauliflower into small bite size pieces.",
      "Set up breading station, one bowl of bread crumbs, one bowl of flour, paprika, cumin, and oregano for dredging and one bowl of 2 eggs whisked with a splash of cold water (1 tbsp).",
      "Dredge cauliflower pieces in flour, then the egg and finally the bread crumbs. Place on baking tray. Once all breaded, spray with light cooking oil to help with crisping and make extra crunchy.",
      "Bake for 20 minutes, flip and bake again for 10-15 more minutes. Until golden brown.",
      "While cauliflower is baking, make avocado crema. With the blender, add the whole avocado, sour cream, cilantro chopped, juice of one lime, salt and pepper and blend till smooth.",
      "Cut remaining lime into wedges, and chop red cabbage for sprinkling on top of tacos.",
      "Heat up cast iron pan and then heat corn torillas on it, until warmed and some brown spots form.",
      "Take cauliflower out of oven and assemble!",
    ],
  },
  {
    recipe_id: "2",
    name: "Sour Dough Pizza",
    servingSize: 4,
    cookware: [
      "large mixing bowl",
      "baking tray",
      "bowls for breading",
      "knife",
      "blender",
      "cast-iron",
    ],
    ingredients: [
      { name: "cauliflower", amount: 1, measurement: "each", id: 1 },
      { name: "bread crumbs", amount: 1, measurement: "cup", id: 2 },
      { name: "flour", amount: 0.5, measurement: "cup", id: 3 },
      { name: "egg", amount: 2, measurement: "each", id: 4 },
      { name: "paprika", amount: 1, measurement: "tsp", id: 5 },
      { name: "cumin", amount: 1, measurement: "tbsp", id: 6 },
      { name: "oregano", amount: 1, measurement: "tbsp", id: 7 },
      {
        name: "hot sauce",
        amount: 1,
        measurement: "amount of your choosing",
        id: 8,
      },
      { name: "corn tortillas", amount: 8, measurement: "each", id: 9 },
      {
        name: "red cabbage, chopped",
        amount: 0.25,
        measurement: "head",
        id: 10,
      },
      { name: "avocado", amount: 1, measurement: "each", id: 11 },
      { name: "sour cream", amount: 0.5, measurement: "cup", id: 12 },
      { name: "cilantro", amount: 1, measurement: "bunch", id: 13 },
      { name: "limes", amount: 2, measurement: "each", id: 14 },
      { name: "salt", amount: 1, measurement: "tsp", id: 15 },
      { name: "black pepper", amount: 1, measurement: "tsp", id: 16 },
      { name: "cooking oil - spray", amount: 1, measurement: "can", id: 17 },
    ],
    instructions: [
      "Pre heat oven to 425F.",
      "Prep cauliflower into small bite size pieces.",
      "Set up breading station, one bowl of bread crumbs, one bowl of flour, paprika, cumin, and oregano for dredging and one bowl of 2 eggs whisked with a splash of cold water (1 tbsp).",
      "Dredge cauliflower pieces in flour, then the egg and finally the bread crumbs. Place on baking tray. Once all breaded, spray with light cooking oil to help with crisping and make extra crunchy.",
      "Bake for 20 minutes, flip and bake again for 10-15 more minutes. Until golden brown.",
      "While cauliflower is baking, make avocado crema. With the blender, add the whole avocado, sour cream, cilantro chopped, juice of one lime, salt and pepper and blend till smooth.",
      "Cut remaining lime into wedges, and chop red cabbage for sprinkling on top of tacos.",
      "Heat up cast iron pan and then heat corn torillas on it, until warmed and some brown spots form.",
      "Take cauliflower out of oven and assemble!",
    ],
  },
  {
    recipe_id: "3",
    name: "Paneer Makhani",
    servingSize: 4,
    cookware: [
      "large mixing bowl",
      "baking tray",
      "bowls for breading",
      "knife",
      "blender",
      "cast-iron",
    ],
    ingredients: [
      { name: "cauliflower", amount: 1, measurement: "each", id: 1 },
      { name: "bread crumbs", amount: 1, measurement: "cup", id: 2 },
      { name: "flour", amount: 0.5, measurement: "cup", id: 3 },
      { name: "egg", amount: 2, measurement: "each", id: 4 },
      { name: "paprika", amount: 1, measurement: "tsp", id: 5 },
      { name: "cumin", amount: 1, measurement: "tbsp", id: 6 },
      { name: "oregano", amount: 1, measurement: "tbsp", id: 7 },
      {
        name: "hot sauce",
        amount: 1,
        measurement: "amount of your choosing",
        id: 8,
      },
      { name: "corn tortillas", amount: 8, measurement: "each", id: 9 },
      {
        name: "red cabbage, chopped",
        amount: 0.25,
        measurement: "head",
        id: 10,
      },
      { name: "avocado", amount: 1, measurement: "each", id: 11 },
      { name: "sour cream", amount: 0.5, measurement: "cup", id: 12 },
      { name: "cilantro", amount: 1, measurement: "bunch", id: 13 },
      { name: "limes", amount: 2, measurement: "each", id: 14 },
      { name: "salt", amount: 1, measurement: "tsp", id: 15 },
      { name: "black pepper", amount: 1, measurement: "tsp", id: 16 },
      { name: "cooking oil - spray", amount: 1, measurement: "can", id: 17 },
    ],
    instructions: [
      "Pre heat oven to 425F.",
      "Prep cauliflower into small bite size pieces.",
      "Set up breading station, one bowl of bread crumbs, one bowl of flour, paprika, cumin, and oregano for dredging and one bowl of 2 eggs whisked with a splash of cold water (1 tbsp).",
      "Dredge cauliflower pieces in flour, then the egg and finally the bread crumbs. Place on baking tray. Once all breaded, spray with light cooking oil to help with crisping and make extra crunchy.",
      "Bake for 20 minutes, flip and bake again for 10-15 more minutes. Until golden brown.",
      "While cauliflower is baking, make avocado crema. With the blender, add the whole avocado, sour cream, cilantro chopped, juice of one lime, salt and pepper and blend till smooth.",
      "Cut remaining lime into wedges, and chop red cabbage for sprinkling on top of tacos.",
      "Heat up cast iron pan and then heat corn torillas on it, until warmed and some brown spots form.",
      "Take cauliflower out of oven and assemble!",
    ],
  },
];

module.exports = recipeData;
