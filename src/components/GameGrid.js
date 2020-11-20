import React, { useState } from "react";
import Node from "./Node";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const HEIGHT = 20;
const WIDTH = 30;
const NEXT_COL = [-1, -1, 0, 1, 1, 1, 0, -1];
const NEXT_ROW = [0, -1, -1, -1, 0, 1, 1, 1];

function setUpGrid() {
  const gameGrid = [];
  for (let i = 0; i < HEIGHT; i++) {
    const row = [];
    for (let j = 0; j < WIDTH; j++) {
      row.push(box(i, j));
    }
    gameGrid.push(row);
  }
  return gameGrid;
}

function box(row, col) {
  return {
    row,
    col,
    player: -1,
  };
}

const useStyles = makeStyles({
  gamegrid: {
    overflowX: "auto",
    maxHeight: "85vh",
    border: 5,
    borderColor: "#000",
    borderStyle: "solid",
    borderRadius: 5,
  },
  table: {
    width: "100%",
  },
  tableBody: {
    position: "relative",
  },
  cell: {
    padding: 0,
    border: 1,
    borderColor: "#aaa",
    borderStyle: "solid",
  },
});

export default function GameGrid() {
  const classes = useStyles();
  const [gameGrid, setGameGrid] = useState(setUpGrid());
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  function handleCellClick(row, col) {
    console.log(row, col, currentPlayer);
    const curGameGrid = [...gameGrid];
    curGameGrid[row][col] = { ...curGameGrid[row][col], player: currentPlayer };
    setGameGrid(curGameGrid);
    setCurrentPlayer((currentPlayer + 1) % 2);
    checkWin(row, col);
  }

  function checkWin(row, col) {
    const curPlayer = gameGrid[row][col].player;
    console.log(curPlayer === 0 ? "x" : "o");
    for (let dir = 0; dir < 4; dir++) {
      const len =
        explore(next([row, col], dir), gameGrid[row][col].player, dir) +
        explore(next([row, col], dir + 4), gameGrid[row][col].player, dir + 4) +
        1;
      if (len >= 5) {
        congratulate(curPlayer);
      }
    }
  }

  function next([row, col], dirIndex) {
    return [row + NEXT_ROW[dirIndex], col + NEXT_COL[dirIndex]];
  }

  function congratulate(player) {
    const xoPlayer = player === 0 ? "x" : "o";
    setIsGameOver(true);
    console.log(`${xoPlayer} won!`);
  }

  function explore(pos, player, dirIndex) {
    const [row, col] = pos;
    if (row < 0 || row >= HEIGHT || col < 0 || col >= WIDTH) {
      return 0;
    } else if (gameGrid[row][col].player === -1) {
      return 0.5;
    } else if (gameGrid[row][col].player !== player) {
      return 0;
    }
    return 1 + explore(next(pos, dirIndex), player, dirIndex);
  }

  function resetBoard() {
    setGameGrid(setUpGrid());
    setCurrentPlayer(0);
    setIsGameOver(false);
  }

  // console.log(gameGrid.map((x) => x.map((y) => y.player)));

  return (
    <div>
      <Grid container className={classes.gamegrid}>
        <Table className={classes.table}>
          <TableBody className={classes.tableBody}>
            {gameGrid.map((row, rowIndex) => {
              return (
                <TableRow key={rowIndex}>
                  {row.map((node, colIndex) => {
                    const { row, col, player } = node;
                    return (
                      <TableCell
                        className={classes.cell}
                        style={{ minWidth: "50px" }}
                        align="center"
                        size="small"
                      >
                        <Node
                          key={row * 100 + col}
                          row={row}
                          col={col}
                          player={player}
                          isGameOver={isGameOver}
                          clicked={handleCellClick}
                        />
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
      <br />
      <Button variant="contained" color="primary" onClick={resetBoard}>
        New Game
      </Button>
    </div>
  );
}
