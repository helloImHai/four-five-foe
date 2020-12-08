import "./App.css";
import Game from "./container/Game.js";
import Home from "./container/Home.js";
import Lobby from "./container/Lobby.js";
import Instructions from "./components/Instructions";
import { SocketProvider } from "./contexts/SocketProvider.js";
import { PlayerProvider } from "./contexts/PlayerProvider.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    type: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SocketProvider>
        <PlayerProvider>
          <Router>
            <Route path="/" exact component={Home} />
            <Route path="/lobby" component={Lobby} />
            <Route path="/game" component={Game} />
            <Instructions />
          </Router>
        </PlayerProvider>
      </SocketProvider>
    </ThemeProvider>
  );
}

export default App;
