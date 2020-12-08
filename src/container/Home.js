import {
  Button,
  Typography,
  TextField,
  Box,
  Grid,
  Container,
  Paper,
  IconButton,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import React, { useRef, useEffect, useState } from "react";
import { useSocket } from "../contexts/SocketProvider";
import {
  usePlayerState,
  usePlayerStateUpdate,
} from "../contexts/PlayerProvider";
import CustomDialogue from "../components/CustomDialogue";
import { makeStyles } from "@material-ui/core/styles";
import { Edit } from "@material-ui/icons";

export default function Home() {
  const history = useHistory();
  const socket = useSocket();
  const setPlayerState = usePlayerStateUpdate();
  const playerState = usePlayerState();
  const [isJoinFail, setIsJoinFail] = useState(false);
  const [isIntroOpen, setIsIntroOpen] = useState(true);
  const hasSetName = playerState.name !== "";

  useEffect(() => {
    if (socket == null) return;
    if (hasSetName) {
      setIsIntroOpen(false);
      socket.emit("set_name", playerState.name);
    }

    socket.on("set_player_id", (payload) => {
      setPlayerState((playerState) => ({ ...playerState, playerId: payload }));
    });

    socket.on("joined_room", (payload) => {
      setPlayerState((playerState) => ({ ...playerState, gameId: payload }));
      history.push("/lobby");
    });

    socket.on("join_room_failure", () => {
      setIsJoinFail(true);
    });
    return () => socket.off();
  }, [socket, hasSetName, setPlayerState, playerState, history]);

  return (
    <Container maxWidth="md">
      <Box m={10} />
      <CustomDialogue
        isOpen={isIntroOpen}
        setIsOpen={setIsIntroOpen}
        type="intro"
      />
      <CustomDialogue
        isOpen={isJoinFail}
        setIsOpen={setIsJoinFail}
        type="joinFail"
      />

      <NameScreen hasSetName={hasSetName} />
      {hasSetName ? <GameOptions /> : ""}
    </Container>
  );
}

const useStyles = makeStyles({
  gameTypePaper: {
    minHeight: 170,
    padding: 20,
    "&:hover": {
      backgroundColor: "#fffafa",
      boxShadow: "3px 7px #888888;",
    },
  },
});

function GameOptions() {
  const socket = useSocket();
  const setPlayerState = usePlayerStateUpdate();
  const gameIdRef = useRef();
  const classes = useStyles();

  function newGame() {
    setPlayerState((playerState) => ({
      ...playerState,
      playerNumber: 0,
    }));
    socket.emit("create_room");
  }

  function joinGame() {
    setPlayerState((playerState) => ({
      ...playerState,
      playerNumber: 1,
    }));
    socket.emit("join_room", gameIdRef.current.value);
  }
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Paper className={classes.gameTypePaper} elevation={5}>
          <Typography variant="h4">Create a new game</Typography>
          <Box m={3} />
          <Typography>
            Click on this to create a new game and invite a friend to join you!
          </Typography>
          <Box m={3} />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={newGame}
          >
            New Game
          </Button>
        </Paper>
      </Grid>

      <Grid item xs={6}>
        <Paper className={classes.gameTypePaper} elevation={5}>
          <Typography variant="h4">Join a game</Typography>
          <Box m={3} />
          <TextField
            inputRef={gameIdRef}
            label="Game id"
            variant="outlined"
            color="secondary"
            size="small"
            fullWidth
            style={{ marginRight: 10 }}
          />
          <Box m={3} />
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={joinGame}
          >
            Join Game
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

function NameScreen({ hasSetName }) {
  const socket = useSocket();
  const playerState = usePlayerState();
  const setPlayerState = usePlayerStateUpdate();
  const nameRef = useRef();

  function setName() {
    if (nameRef.current.value === "") {
      alert("Please, I want to know your name");
      return;
    }
    socket.emit("set_name", nameRef.current.value);
    setPlayerState((playerState) => ({
      ...playerState,
      name: nameRef.current.value,
    }));
  }

  function resetName() {
    socket.emit("set_name", "");
    setPlayerState((playerState) => ({
      ...playerState,
      name: "",
    }));
  }

  return (
    <>
      {!hasSetName ? (
        <>
          <Typography variant="h3">Hello, what's your name?</Typography>
          <Box m={3} />
          <TextField
            xs={4}
            inputRef={nameRef}
            label="Name"
            variant="outlined"
            size="small"
            style={{ marginRight: 10, minWidth: "50%" }}
          />
          <Button variant="contained" color="primary" onClick={setName}>
            Set Name
          </Button>
        </>
      ) : (
        <Box display="flex" flexDirection="row">
          <Typography variant="h3">Hello, {playerState.name}</Typography>
          <Box>
            <IconButton size="small" onClick={resetName}>
              <Edit />
            </IconButton>
          </Box>
        </Box>
      )}
      <Box m={3} />
    </>
  );
}
