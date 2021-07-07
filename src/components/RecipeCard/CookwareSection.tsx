import { List, ListItem } from "@material-ui/core";
import { Typography } from "@material-ui/core";
interface CookwareProps {
  cookwareData: string[];
}

const CookwareSection: React.FC<CookwareProps> = ({ cookwareData }) => {
  const cookwareRows = cookwareData.map((item) => {
    return <ListItem key={item}>{item}</ListItem>;
  });
  return (
    <div>
      <Typography variant="h5">Cookware Required</Typography>
      <List className="cookware-list">{cookwareRows}</List>
    </div>
  );
};

export default CookwareSection;
