import React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";
import { usePlayerState } from "../contexts/PlayerProvider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(({ palette }) => ({
  player: {
    height: "45px",
    paddingTop: 5,
  },
  current: {
    paddingTop: 5,
    background: palette.success.main,
  },
}));

export default function PlayerBar({ players, currentPlayer }) {
  const hero = usePlayerState();
  const heroName = handleName(hero.name);
  const villainId = Object.keys(players)
    .filter((player) => player !== hero.playerId)
    .reduce((x, y) => y, null);
  const villainName = handleName(players[villainId]);

  const classes = useStyles();
  let [heroClass, villainClass] = ["", ""];
  if (currentPlayer != null) {
    const isHeroTurn = currentPlayer === hero.playerNumber;
    heroClass = isHeroTurn ? classes.current : "";
    villainClass = isHeroTurn ? "" : classes.current;
  }

  function handleName(name) {
    if (name == null) {
      return " ";
    } else if (name.length > 8) {
      return name.substring(0, 7) + "...";
    } else {
      return name;
    }
  }

  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <Grid item xs={5} sm={3}>
        <Paper className={`${classes.player} ${heroClass}`} elevation={5}>
          <Typography variant="h4">{heroName}</Typography>
        </Paper>
      </Grid>
      <Grid item xs={5} sm={3}>
        <Paper className={`${classes.player} ${villainClass}`} elevation={5}>
          <Typography variant="h4">{villainName}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
