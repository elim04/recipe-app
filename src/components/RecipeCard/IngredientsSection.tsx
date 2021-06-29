import { Ingredient } from "../../recipe.model";
import { makeStyles } from "@material-ui/core";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
} from "@material-ui/core";
interface IngredientsProps {
  ingredientsData: Ingredient[];
}

const useStyles = makeStyles({
  table: {
    width: 650,
  },
});

const IngredientsSection: React.FC<IngredientsProps> = ({
  ingredientsData,
}) => {
  const classes = useStyles();

  const rows = ingredientsData;

  return (
    <>
      <h2>Ingredients</h2>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Acquired?</TableCell>
              <TableCell align="center">Ingredient</TableCell>
              <TableCell align="center">Amount</TableCell>
              <TableCell align="center">Measurement</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center">
                  <Checkbox></Checkbox>
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.measurement}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default IngredientsSection;
