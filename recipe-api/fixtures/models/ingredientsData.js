const ingredients = [
  {
    name: "cauliflower",
    id: "1",
    dietary_restriction_id: "",
    vegan: true,
    vegetarian: true,
  },
  {
    name: "bread crumbs",
    id: "2",
    dietary_restriction_id: "",
    vegan: false,
    vegetarian: true,
  },
  {
    name: "flour",
    id: "3",
    dietary_restriction_id: 1,
    vegan: true,
    vegetarian: true,
  },
  {
    name: "egg",
    id: "4",
    dietary_restriction_id: 6,
    vegan: false,
    vegetarian: true,
  },
  {
    name: "paprika",
    id: "5",
    dietary_restriction_id: "",
    vegan: true,
    vegetarian: true,
  },
  {
    name: "cumin",
    id: "6",
    dietary_restriction_id: "",
    vegan: true,
    vegetarian: true,
  },
  {
    name: "oregano",
    id: "7",
    dietary_restriction_id: "",
    vegan: true,
    vegetarian: true,
  },

  {
    name: "hot sauce",
    id: "8",
    dietary_restriction_id: "",
    vegan: true,
    vegetarian: true,
  },
  {
    name: "corn tortillas",
    id: "9",
    dietary_restriction_id: "",
    vegan: true,
    vegetarian: true,
  },
  {
    name: "red cabbage",
    id: "10",
    dietary_restriction_id: "",
    vegan: true,
    vegetarian: true,
  },
  {
    name: "avocado",
    id: "11",
    dietary_restriction_id: "",
    vegan: true,
    vegetarian: true,
  },
  {
    name: "sour cream",
    id: "12",
    dietary_restriction_id: 5,
    vegan: false,
    vegetarian: true,
  },
  {
    name: "cilantro",
    id: "13",
    dietary_restriction_id: "",
    vegan: true,
    vegetarian: true,
  },
  {
    name: "limes",
    id: "14",
    dietary_restriction_id: "",
    vegan: true,
    vegetarian: true,
  },
  {
    name: "salt",
    id: "15",
    dietary_restriction_id: "",
    vegan: true,
    vegetarian: true,
  },
  {
    name: "black pepper",
    id: "16",
    dietary_restriction_id: "",
    vegan: true,
    vegetarian: true,
  },
  {
    name: "cooking oil - canola spray",
    id: "17",
    dietary_restriction_id: "",
    vegan: true,
    vegetarian: true,
  },
];

module.exports = ingredients;

// one to many, ingredients --> dietary restrictions , for filtering

// change dietary restrictions - to remove vegan/vegetarian
