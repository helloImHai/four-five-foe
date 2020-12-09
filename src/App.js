import Game from "./container/Game.js";
import Home from "./container/Home.js";
import Lobby from "./container/Lobby.js";
import { SocketProvider } from "./contexts/SocketProvider.js";
import { PlayerProvider } from "./contexts/PlayerProvider.js";
import { CustomThemeProvider } from "./contexts/CustomThemeProvider";
import DarkThemeSwitch from "./components/DarkThemeSwitch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const useStyle = makeStyles({ main: { minHeight: "90vh" } });

function App() {
  const classes = useStyle();
  return (
    <CustomThemeProvider>
      <SocketProvider>
        <PlayerProvider>
          <Box
            bgcolor="background.default"
            paddingTop={"10vh"}
            className={classes.main}
          >
            <DarkThemeSwitch />
            <Router>
              <Route path="/four-five-foe/" exact component={Home} />
              <Route path="/four-five-foe/lobby" component={Lobby} />
              <Route path="/four-five-foe/game" component={Game} />
            </Router>
            {/* </Paper> */}
          </Box>
        </PlayerProvider>
      </SocketProvider>
    </CustomThemeProvider>
  );
}

export default App;
