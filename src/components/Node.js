import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  unpicked: {
    borderRadius: "0px",
    color: "rgba(0, 0, 0, 0)",
    "&:disabled": {
      color: "rgba(0, 0, 0, 0)",
    },
  },
  picked: {
    borderRadius: "0px",
    "&:disabled": {
      color: "#333",
    },
  },
  winningCell: {
    borderRadius: "0px",
    "&:disabled": {
      backgroundColor: "#98FB98",
      color: "#677",
    },
  },
});

export default function Node(props) {
  const classes = useStyles();
  const { col, row, player, clicked, isGameOver, isWinningCell } = props;
  const cellType = isWinningCell
    ? classes.winningCell
    : player === -1
    ? classes.unpicked
    : classes.picked;
  const isDisabled = player !== -1 || isGameOver;
  return (
    <IconButton
      onClick={() => clicked(row, col)}
      disabled={isDisabled}
      className={cellType}
      style={{ width: "100%" }}
    >
      {player === 0 ? "x" : "o"}
    </IconButton>
  );
}
