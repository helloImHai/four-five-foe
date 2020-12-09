import React from "react";
import { Box, Container } from "@material-ui/core";
import GameGrid from "../components/GameGrid.js";
import { makeStyles } from "@material-ui/core/styles";
import Instructions from "../components/Instructions";

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
      <Box className={classes.game}>
        <Container className={classes.indexContainer} maxWidth="lg">
          <GameGrid />
        </Container>
      </Box>
      <Instructions />
    </div>
  );
}
