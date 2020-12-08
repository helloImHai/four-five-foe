import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

const MODAL_STATE = {
  intro: {
    title: "Welcome to Four-Five-Foe",
    message: `Hello everyone! This is a two-player game I used to play back in 
    secondary school. It's really similar to tic-tac-toe, but you win with 
    either an open 4, or with 5 in a row. Due to this slight variation in the 
    rules, I'm calling it Four-Five-Foe!`,
    closingText: "Play Now",
  },
  joinFail: {
    title: "Join Room Failure",
    message: `The room you tried to join does not exists or is full.`,
    closingText: "Okay",
  },
  anotherPlayerDisconnect: {
    title: "Your Opponent has disconnected",
    message: `The reason you're seeing this message is because your friend doesn't
     want to play with you. `,
    closingText: "😢",
  },
};

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomDialogue({ isOpen, setIsOpen, type }) {
  const handleClose = () => {
    setIsOpen(false);
  };

  const { title, message, closingText } = MODAL_STATE[type];

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            {closingText}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
