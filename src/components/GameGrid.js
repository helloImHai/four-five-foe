import React, { useEffect, useState, useRef } from "react";
import Node from "./Node";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const HEIGHT = 22;
const WIDTH = 22;
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
    isWinningCell: false,
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
  const [gameGrid, setGameGrid] = useState(setUpGrid);
  const [currentPlayer, setCurrentPlayer] = useState(() => 0);
  const [isGameOver, setIsGameOver] = useState(() => false);
  const lastMove = useRef([-1, -1]);
  const count = useRef(0);
  const renderCount = useRef(1);

  /**
   * If game grid changes then add number of moves, check win, and setCurrentPlayer
   */
  useEffect(() => {
    let [row, col] = lastMove.current;
    if (row === -1) return;
    count.current = count.current + 1;
    checkWin(row, col, currentPlayer);
    setCurrentPlayer((currentPlayer) => (currentPlayer + 1) % 2);
  }, [gameGrid]);

  /**
   * If count changes then check draw
   */
  useEffect(() => {
    checkDraw(count.current);
  }, [count.current]);

  /**
   * Render count
   */
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function handleCellClick(row, col) {
    lastMove.current = [row, col];
    setGameGrid((gameGrid) => {
      gameGrid = [...gameGrid];
      gameGrid[row][col] = { ...gameGrid[row][col], player: currentPlayer };
      return gameGrid;
    });
  }

  function checkDraw(count) {
    if (!isGameOver && count === HEIGHT * WIDTH) {
      alert("Congratulations, it's a draw!");
    }
  }

  function colorWinningCell(row, col) {
    const curGameGrid = [...gameGrid];
    curGameGrid[row][col] = { ...curGameGrid[row][col], isWinningCell: true };
    setGameGrid(curGameGrid);
  }

  function checkWin(row, col, curPlayer) {
    console.log(curPlayer === 0 ? "x" : "o");
    for (let dir = 0; dir < 4; dir++) {
      const len =
        explore(next([row, col], dir), curPlayer, dir) +
        explore(next([row, col], dir + 4), curPlayer, dir + 4) +
        1;
      if (len >= 5) {
        explore(next([row, col], dir), curPlayer, dir, true);
        explore([row, col], curPlayer, dir + 4, true);
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

  function explore(pos, player, dirIndex, isWinning) {
    const [row, col] = pos;
    if (row < 0 || row >= HEIGHT || col < 0 || col >= WIDTH) {
      return 0;
    } else if (gameGrid[row][col].player === -1) {
      return 0.5;
    } else if (gameGrid[row][col].player !== player) {
      return 0;
    }
    if (isWinning) colorWinningCell(row, col);
    return 1 + explore(next(pos, dirIndex), player, dirIndex, isWinning);
  }

  function resetBoard() {
    setGameGrid(setUpGrid());
    setCurrentPlayer(0);
    setIsGameOver(false);
    lastMove.current = [-1, -1];
    count.current = 0;
  }

  return (
    <div>
      {/* <div>Rendered {renderCount.current} times</div> */}
      <Grid container className={classes.gamegrid}>
        <Table className={classes.table}>
          <TableBody className={classes.tableBody}>
            {gameGrid.map((row, rowIndex) => {
              return (
                <TableRow key={rowIndex}>
                  {row.map((node, colIndex) => {
                    const { row, col, player, isWinningCell } = node;
                    return (
                      <TableCell
                        key={row * 100 + col}
                        className={classes.cell}
                        style={{ minWidth: "50px" }}
                        align="center"
                        size="small"
                      >
                        <Node
                          row={row}
                          col={col}
                          player={player}
                          isGameOver={isGameOver}
                          isWinningCell={isWinningCell}
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
