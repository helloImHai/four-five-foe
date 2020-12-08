import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

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

const BootstrapButton = withStyles({
  root: {
    fontSize: 16,
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#f9a602",
    borderColor: "#f9a602",
    "&:hover": {
      backgroundColor: "#D68E22",
      borderColor: "#D68E02",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#FEC34E",
      borderColor: "#FEC34E",
    },
  },
})(Button);

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

export default function Instructions() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Box m={3} />
      {!isOpen ? (
        <Box display="flex" flexDirection="row" justifyContent="center">
          <BootstrapButton
            variant="contained"
            color="primary"
            onClick={() => setIsOpen(true)}
          >
            Instructions
          </BootstrapButton>
        </Box>
      ) : (
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={isOpen}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            HOW TO PLAY
          </DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              It's just like tic-tac-toe but the board is much bigger and you
              win with 5 instead of 3. This means that an "open" 4 would also
              result in a win because the opponent will have no way to block
              you!
            </Typography>
            <Typography gutterBottom>
              I meant to write more for this part and include pictures but I'm
              lazy, will get back to this if I have time after deployment.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              READY
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  );
}
