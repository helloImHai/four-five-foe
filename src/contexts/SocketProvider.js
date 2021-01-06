import React, { useContext, useState, useEffect } from "react";
import openSocket from "socket.io-client";

const serverUrl = "https://backboardd.herokuapp.com/";

const SocketContext = React.createContext();
const OpenNewSocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function useNewSocket() {
  return useContext(OpenNewSocketContext);
}

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState();
  function isSleepTime() {
    let currentHour = new Date().getUTCHours();
    return currentHour >= 17;
  }
  function initialiseSocket() {
    if (isSleepTime()) {
      return null;
    }
    const newSocket = openSocket(serverUrl, {
      transports: ["websocket"],
    });
    setSocket(newSocket);
    return newSocket;
  }
  useEffect(() => {
    const newSocket = initialiseSocket();
    if (newSocket == null) {
      return;
    }
    return () => newSocket.disconnect();
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      <OpenNewSocketContext.Provider value={initialiseSocket}>
        {children}
      </OpenNewSocketContext.Provider>
    </SocketContext.Provider>
  );
}
