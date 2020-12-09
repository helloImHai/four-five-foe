import React from "react";
import { useSetDarkMode, useDarkMode } from "../contexts/CustomThemeProvider";
import { FormControlLabel, Switch, Box } from "@material-ui/core";

export default function DarkThemeSwitch() {
  const setDarkMode = useSetDarkMode();
  const isDarkMode = useDarkMode();
  const modeLabel = isDarkMode ? "🌙" : "☀️";
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      paddingBottom={2}
      paddingRight="10vw"
    >
      <FormControlLabel
        label={modeLabel}
        labelPlacement="start"
        control={
          <Switch
            checked={isDarkMode}
            onChange={() => setDarkMode((isDark) => !isDark)}
          />
        }
      />
    </Box>
  );
}
