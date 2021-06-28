export interface Recipe {
  id: number;
  name: string;
  servingSize: number;
  cookware: string[];
  ingredients: Ingredient[];
  instructions: string[];
}

interface Ingredient {
  name: string;
  amount: number;
  measurement: string;
}
