import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const PLAYER = { 0: "x", "-1": "_", 1: "o" };

const useStyles = makeStyles(({ palette }) => ({
  unpicked: {
    borderRadius: "0px",
    color: palette.background.default,
    "&:disabled": {
      color: palette.background.default,
    },
    "&:hover": {
      color: "rgb(0,0,0,0)",
    },
  },
  picked: {
    borderRadius: "0px",
    "&:disabled": {
      color: palette.text.primary,
    },
  },
  winningCell: {
    borderRadius: "0px",
    "&:disabled": {
      backgroundColor: palette.success.light,
      color: palette.text.primary,
    },
  },
  lastMove: {
    borderRadius: "0px",
    "&:disabled": {
      backgroundColor: "#ffb6c1",
      color: palette.text.primary,
    },
  },
}));

export default function Node(props) {
  const classes = useStyles();
  const {
    col,
    row,
    player,
    clicked,
    isDisabled,
    isWinningCell,
    isLastMove,
  } = props;
  const cellType = isWinningCell
    ? classes.winningCell
    : isLastMove
    ? classes.lastMove
    : player === -1
    ? classes.unpicked
    : classes.picked;
  return (
    <IconButton
      onClick={() => clicked(row, col)}
      disabled={isDisabled}
      className={cellType}
      style={{ width: "100%" }}
    >
      {PLAYER[player]}
    </IconButton>
  );
}
