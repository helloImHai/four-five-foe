import React from "react";
import { useHistory } from "react-router-dom";
import { useSocket, useNewSocket } from "../contexts/SocketProvider";
import Button from "@material-ui/core/Button";

export default function HomeButton() {
  const socket = useSocket();
  const history = useHistory();
  const newSocket = useNewSocket();

  function handleHomeClick() {
    history.push("/four-five-foe/");
    socket.disconnect();
    newSocket();
  }

  return (
    <Button color="secondary" variant="contained" onClick={handleHomeClick}>
      Home
    </Button>
  );
}
