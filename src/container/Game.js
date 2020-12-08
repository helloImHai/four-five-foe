import React from "react";
import { Box, Container } from "@material-ui/core";
import GameGrid from "../components/GameGrid.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  indexContainer: {
    marginLeft: "auto",
    textAlign: "center",
  },
}));

export default function Game() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.game} bgcolor="background.default">
        <Container className={classes.indexContainer} maxWidth="lg">
          <br />
          <br />
          <br />
          <GameGrid />
        </Container>
      </Box>
    </div>
  );
}
