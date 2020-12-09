import React from "react";
import { Box, Container } from "@material-ui/core";
import LocalGameGrid from "../components/LocalGameGrid.js";
import { makeStyles } from "@material-ui/core/styles";
import Instructions from "../components/Instructions";

const useStyles = makeStyles((theme) => ({
  indexContainer: {
    marginLeft: "auto",
    textAlign: "center",
  },
}));

export default function LocalGame() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.game}>
        <Container className={classes.indexContainer} maxWidth="lg">
          <LocalGameGrid />
        </Container>
      </Box>
      <Instructions />
    </div>
  );
}
