import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { BestCheckbox } from "best-checkbox";
import styled from "styled-components";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#2a2a2e"
  },
  table: {
    maxWidth: 414,
    backgroundColor: "#2a2a2e",
    flex: 1,
    width: "95%",
    margin: "auto",
    textAlign: "center",
    alignItems: "center",
    color: "white",
    border: "none"
  },
  tr: {
    border: "none",
    "& th": {
      color: "white",
      border: "none",
      opacity: "55%",
      textAlign: "center"
    },
    "& td": {
      color: "white",
      border: "none",
      opacity: "55%"
    }
  },
  head: {
    "& th": {
      color: "white",
      border: "none",
      fontWeight: "bold"
    }
  }
});

const ExerciseTitle = styled.p`
  color: DodgerBlue;
  display: flex;
  flex: 1;
  padding: 0px;
  opacity: 75%;
  font-weight: bold;
  justify-content: left;
  width: 95%;
  margin: 0;
  text-transform: capitalize;
`;

const rows = [
  { set: 1, prev: "50 kg x 5", kg: 55, reps: 5, check: true },
  { set: 2, prev: "50 kg x 5", kg: 55, reps: 5, check: true },
  { set: 3, prev: "50 kg x 5", kg: 55, reps: 5, check: false },
  { set: 4, prev: "50 kg x 5", kg: 55, reps: 5, check: false },
  { set: 5, prev: "50 kg x 5", kg: 55, reps: 5, check: false }
];

export const DenseTable = () => {
  const classes = useStyles();
  const [rowState, setRowState] = React.useState(rows);

  const [checkAllState, setCheckAllState] = React.useState(false);

  const handleCheckAll = () => {
    setCheckAllState(!checkAllState);
  };
  const handleCheckRow = (set: number) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newRowState = [...rowState]; // copy old
    newRowState[set - 1].check = event.target.checked;
    setRowState(newRowState);
  };

  const exerciseName = "incline dumbbell press";

  return (
    <>
      <ExerciseTitle>{exerciseName}</ExerciseTitle>
      <TableContainer component={Paper} className={classes.container}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead className={classes.head}>
            <TableRow>
              <TableCell>Set</TableCell>
              <TableCell align="center">Prev</TableCell>
              <TableCell align="center">kg</TableCell>
              <TableCell align="center">Reps</TableCell>
              <TableCell align="center">
                <BestCheckbox
                  color="Green"
                  checked={checkAllState}
                  onChange={handleCheckAll}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.set} className={classes.tr}>
                <TableCell component="th" scope="row">
                  {row.set}
                </TableCell>
                <TableCell align="center">{row.prev}</TableCell>
                <TableCell align="center">{row.kg}</TableCell>
                <TableCell align="center">{row.reps}</TableCell>
                <TableCell align="center">
                  <BestCheckbox
                    name={row.set.toString()}
                    checked={rowState[row.set - 1].check}
                    onChange={handleCheckRow(row.set)}
                    color="Green"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
