import React, { useContext, useState } from "react";

const PlayerContext = React.createContext();
const PlayerUpdateContext = React.createContext();

export function usePlayerState() {
  return useContext(PlayerContext);
}

export function usePlayerStateUpdate() {
  return useContext(PlayerUpdateContext);
}

export function PlayerProvider({ children }) {
  const [playerState, setPlayerState] = useState({
    name: "",
    gameId: "",
    playerId: "",
    playerNumber: -1,
    opponentDisconnected: false,
  });

  return (
    <PlayerContext.Provider value={playerState}>
      <PlayerUpdateContext.Provider value={setPlayerState}>
        {children}
      </PlayerUpdateContext.Provider>
    </PlayerContext.Provider>
  );
}
