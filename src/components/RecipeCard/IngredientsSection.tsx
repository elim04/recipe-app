import { Ingredient } from "../../recipe.model";

interface IngredientsProps {
  ingredientsData: Ingredient[];
}

const IngredientsSection: React.FC<IngredientsProps> = ({
  ingredientsData,
}) => {
  return <div>Ingredients</div>;
};

export default IngredientsSection;
