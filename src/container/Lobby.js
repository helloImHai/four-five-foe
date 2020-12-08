import React, { useEffect, useState } from "react";
import { Button, Box, Container, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  usePlayerState,
  usePlayerStateUpdate,
} from "../contexts/PlayerProvider";
import { useSocket } from "../contexts/SocketProvider";
import PlayerBar from "../components/PlayerBar";
import HomeButton from "../components/HomeButton";
import CustomDialogue from "../components/CustomDialogue";

function WaitingPrompt() {
  return (
    <>
      <h3>Waiting for Player 2...</h3>
      <p>Get a friend to join this room!</p>
    </>
  );
}
function ReadyPrompt() {
  return (
    <>
      <h3>We're all set!</h3>
      <p>Let's get this party started!</p>
    </>
  );
}

export default function Lobby() {
  const history = useHistory();
  const socket = useSocket();
  const [isReady, setIsReady] = useState(false);
  const [players, setPlayers] = useState();
  const { name, gameId } = usePlayerState();
  const playerState = usePlayerState();
  const setPlayerState = usePlayerStateUpdate();

  useEffect(() => {
    if (socket == null) return;
    socket.on("game_started", () => {
      history.push("/game");
    });
    socket.on("game_state", (payload) => {
      const { players } = payload;
      setPlayers((oldPlayers) => {
        if (Object.keys(players).length === 2) {
          setIsReady(true);
        } else {
          setIsReady(false);
        }
        return players;
      });
    });
    socket.on("another_player_disconnected", () => {
      setPlayerState((playerState) => ({ ...playerState, playerNumber: 0 }));
    });
    return () => socket.off();
  }, [socket, history, setIsReady, setPlayerState, setPlayers]);

  function startGame() {
    socket.emit("start_game");
  }

  return (
    <Container maxWidth="md">
      <Box m={10} />
      <CustomDialogue
        isOpen={playerState.opponentDisconnected}
        setIsOpen={() =>
          setPlayerState((p) => ({
            ...p,
            opponentDisconnected: !p.opponentDisconnected,
          }))
        }
        type="anotherPlayerDisconnect"
      />
      <Grid container direction="column" justify="center" align="center">
        <Grid item>
          {players == null ? "" : <PlayerBar players={players} />}
        </Grid>
        <Grid item>
          <h1>Hi {`${name}`}!</h1>
          {isReady ? <ReadyPrompt /> : <WaitingPrompt />}
          <h3>Game ID: {`${gameId}`}</h3>
        </Grid>

        <Grid item>
          <Box m={3}></Box>
        </Grid>
        <Grid item>
          <Box display="flex" flexDirection="row" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              disabled={!isReady}
              onClick={startGame}
            >
              {isReady ? "Start Game" : "Waiting for player 2"}
            </Button>
            <Box m={1} />
            <HomeButton />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
