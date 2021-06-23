export interface Recipe {
  name: string;
  servingSize: number;
  cookware: string[];
  ingredients: [{ name: string; amount: number; measurement: string }];
  instructions: string[];
}
