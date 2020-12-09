import React from "react";
import { useSetDarkMode, useDarkMode } from "../contexts/CustomThemeProvider";
import { FormControlLabel, Switch, Box, Container } from "@material-ui/core";

export default function DarkThemeSwitch() {
  const setDarkMode = useSetDarkMode();
  const isDarkMode = useDarkMode();
  const modeLabel = isDarkMode ? "🌙" : "☀️";
  return (
    <Container maxWidth="md">
      <Box display="flex" justifyContent="flex-end" paddingBottom={2}>
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
    </Container>
  );
}
