export interface Recipe {
  name: string;
  servingSize: number;
  cookware: string[];
  ingredients: Ingredient[];
  instructions: string[];
}

export interface Ingredient {
  name: string;
  amount: number;
  measurement: string;
}
