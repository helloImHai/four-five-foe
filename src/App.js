import "./App.css";
import GameGrid from "./components/GameGrid.js";
import { Box, Container } from "@material-ui/core";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

const useStyles = makeStyles({
  indexContainer: {
    marginLeft: "auto",
    textAlign: "center",
  },
  indexBox: {
    minHeight: "100vh",
  },
});

function App() {
  const classes = useStyles;
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.indexBox} bgcolor="background.default">
        <Container className={classes.indexContainer} maxWidth="lg">
          <br />
          <br />
          <br />
          <GameGrid />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
