import { List, ListItem } from "@material-ui/core";

interface CookwareProps {
  cookwareData: string[];
}

const CookwareSection: React.FC<CookwareProps> = ({ cookwareData }) => {
  const cookwareRows = cookwareData.map((item) => {
    return <ListItem key={item}>{item}</ListItem>;
  });
  return (
    <div>
      <h2>Cookware Required</h2>
      <List className="cookware-list">{cookwareRows}</List>
    </div>
  );
};

export default CookwareSection;
