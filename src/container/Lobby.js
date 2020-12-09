import React, { useEffect, useState } from "react";
import { Button, Box, Container, Grid, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {
  usePlayerState,
  usePlayerStateUpdate,
} from "../contexts/PlayerProvider";
import { useSocket } from "../contexts/SocketProvider";
import PlayerBar from "../components/PlayerBar";
import HomeButton from "../components/HomeButton";
import CustomDialogue from "../components/CustomDialogue";
import Instructions from "../components/Instructions";

const TEXT = {
  waiting: {
    title: "Waiting for Player 2...",
    details: "Get a friend to join this room!",
  },
  ready: {
    title: "We're all set!...",
    details: "Let's get this party started!",
  },
};

function Prompt({ state }) {
  const text = TEXT[state];
  return (
    <>
      <Typography variant="h6" color="textPrimary">
        {text.title}
      </Typography>
      <Typography color="textPrimary">{text.details}</Typography>
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
    if (playerState.gameId === "") {
      history.push("/four-five-foe");
    }
  }, [history, playerState]);

  useEffect(() => {
    if (socket == null) return;
    socket.on("game_started", () => {
      history.push("/four-five-foe/game");
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
          <Typography variant="h3" color="textPrimary">
            Hi {`${name}`}!
          </Typography>
          <Box m={1} />

          <Prompt state={isReady ? "ready" : "waiting"} />

          <Box m={1} />
          <Typography variant="h5" color="textPrimary">
            Game ID: <strong>{`${gameId}`}</strong>
          </Typography>
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
      <Instructions />
    </Container>
  );
}
