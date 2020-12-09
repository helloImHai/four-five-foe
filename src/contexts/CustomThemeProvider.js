import React, { useContext, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const CustomThemeContext = React.createContext();
const CustomThemeUpdateContext = React.createContext();

export function useDarkMode() {
  return useContext(CustomThemeContext);
}

export function useSetDarkMode() {
  return useContext(CustomThemeUpdateContext);
}

export function CustomThemeProvider({ children }) {
  const [isDark, setDarkMode] = useState(true);

  const main = isDark ? "dark" : "light";

  const theme = createMuiTheme({
    palette: {
      type: main,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CustomThemeContext.Provider value={isDark}>
        <CustomThemeUpdateContext.Provider value={setDarkMode}>
          {children}
        </CustomThemeUpdateContext.Provider>
      </CustomThemeContext.Provider>
    </ThemeProvider>
  );
}
