export interface Recipe {
  id: number;
  name: string;
  servingSize: number;
  cookware: string[];
  ingredients: [{ name: string; amount: number; measurement: string }];
  instructions: string[];
}
