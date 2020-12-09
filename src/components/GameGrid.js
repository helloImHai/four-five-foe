import React, { useEffect, useState, useRef } from "react";
import Node from "./Node";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { useSocket } from "../contexts/SocketProvider";
import {
  usePlayerState,
  usePlayerStateUpdate,
} from "../contexts/PlayerProvider";
import PlayerBar from "./PlayerBar";
import HomeButton from "./HomeButton";
import { useHistory } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

const useStyles = makeStyles(({ palette }) => ({
  gamegrid: {
    overflowX: "auto",
    maxHeight: "60vh",
    border: 5,
    borderColor: palette.text.secondary,
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
}));

export default function GameGrid() {
  const classes = useStyles();
  const [gameState, setGameState] = useState({});
  const { gameGrid, currentPlayer, isGameOver, players } = gameState;
  const playerState = usePlayerState();
  const setPlayerState = usePlayerStateUpdate();
  const renderCount = useRef(1);
  const socket = useSocket();
  const history = useHistory();

  useEffect(() => {
    if (playerState.gameId === "") {
      history.push("/four-five-foe");
    }
  }, [history, playerState]);

  /**
   * Set up change in state
   */
  useEffect(() => {
    if (socket == null) return;
    socket.on("game_state", (payload) => {
      setGameState(payload);
    });
    socket.on("another_player_disconnected", () => {
      setPlayerState((p) => ({
        ...p,
        opponentDisconnected: true,
        playerNumber: 0,
      }));
      history.push("/four-five-foe/lobby");
    });
    return () => socket.off();
  }, [socket, setPlayerState, history]);

  /**
   * Render count
   */
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  function handleCellClick(row, col) {
    // For immediate response
    setGameState((gameState) => {
      const { gameGrid, currentPlayer, lastMove, count } = gameState;
      let nextGameGrid = [...gameGrid];
      let nextPlayer = (currentPlayer + 1) % 2;
      nextGameGrid[row][col] = {
        ...gameGrid[row][col],
        player: currentPlayer,
        isLastMove: true,
      };

      if (lastMove != null) {
        nextGameGrid[lastMove[0]][lastMove[1]].isLastMove = false;
      }

      return {
        ...gameState,
        gameGrid: nextGameGrid,
        currentPlayer: nextPlayer,
        lastMove: [row, col],
        count: count + 1,
      };
    });
    socket.emit("clickTile", [row, col]);
  }

  function resetBoard() {
    socket.emit("reset_game");
  }

  return gameGrid == null ? (
    <LoadingScreen />
  ) : (
    <Container maxWidth="md">
      <PlayerBar players={players} currentPlayer={currentPlayer} />
      <Box m={2} />
      <Grid container className={classes.gamegrid}>
        <Table className={classes.table}>
          <TableBody className={classes.tableBody}>
            {gameGrid.map((row, rowIndex) => {
              return (
                <TableRow key={rowIndex}>
                  {row.map((node, colIndex) => {
                    const {
                      row,
                      col,
                      player,
                      isWinningCell,
                      isLastMove,
                    } = node;
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
                          isDisabled={
                            player !== -1 ||
                            playerState.playerNumber !== currentPlayer ||
                            isGameOver
                          }
                          isWinningCell={isWinningCell}
                          isLastMove={isLastMove}
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
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Button variant="contained" color="primary" onClick={resetBoard}>
          New Game
        </Button>
        <Box m={1} />
        <HomeButton />
      </Box>
    </Container>
  );
}
