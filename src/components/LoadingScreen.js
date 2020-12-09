import React from "react";
import { Box, CircularProgress } from "@material-ui/core";

export default function LoadingScreen() {
  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <CircularProgress />
      </Box>
    </>
  );
}
