import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const TertiaryButton = withStyles({
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
