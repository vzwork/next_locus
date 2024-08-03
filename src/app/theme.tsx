"use client";

import { ThemeProvider, TypeBackground, createTheme } from "@mui/material";
import { ReactNode } from "react";

// declaring custom theme color
// declare module '@mui/material/styles' {
//   interface Palette {
//     custom: Palette['primary'];
//   }

//   interface PaletteOptions {
//     custom?: PaletteOptions['primary'];
//   }
// }

declare module "@mui/material/styles" {
  interface TypeBackground {
    transperent?: string;
    transperentHover?: string;
    transperentLight?: string;
  }
  interface TypeInfo {
    darker?: string;
  }
}

const themeLight = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#eee",
      default: "#c9d0d1",
      transperent: "rgba(255, 255, 255, 0.6)",
      transperentHover: "rgba(255, 255, 255, 0.4)",
      transperentLight: "rgba(255, 255, 255, 0.3)",
    },
    primary: {
      main: "#577894",
    },
    secondary: {
      main: "#108f71",
    },
    info: {
      main: "#aaa",
      // darker: "#555",
    },
  },
});

const themeDark = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: "#333",
      default: "#000",
      transperent: "rgba(30, 30, 30, 0.7)",
      transperentHover: "rgba(20, 20, 20, 0.7)",
      transperentLight: "rgba(30, 30, 30, 0.4)",
    },
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#304241",
    },
    info: {
      main: "#555",
    },
  },
});

interface IChildrenTheme {
  children: ReactNode;
}

export default function Theme({ children }: IChildrenTheme) {
  // const stateTheme = useStateTheme();
  const stateTheme = "light";

  return (
    <>
      <ThemeProvider
        theme={stateTheme === "light" ? themeLight : themeDark}
      >
        {children}
      </ThemeProvider>
    </>
  );
}
