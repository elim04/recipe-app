import { List, ListItem } from "@material-ui/core";
import { Typography } from "@material-ui/core";
interface InstructionsProps {
  instructionsData: string[];
}

const InstructionsSection: React.FC<InstructionsProps> = ({
  instructionsData,
}) => {
  const instructionsRows = instructionsData.map((item) => {
    let count = 1;
    return <ListItem key={count + 1}>{item}</ListItem>;
  });

  return (
    <div>
      <Typography variant="h5">Instructions</Typography>
      <List>{instructionsRows}</List>
    </div>
  );
};

export default InstructionsSection;
