import { useTheme } from "next-themes";
import { GlobalStyles } from "@mui/material";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme";
import { FC, useEffect, useState } from "react";

const MUIThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  // const { resolvedTheme } = useTheme();
  // const [currentTheme, setCurrentTheme] = useState(darkTheme);

  // useEffect(() => {
  //   resolvedTheme === "light"
  //     ? setCurrentTheme(lightTheme)
  //     : setCurrentTheme(darkTheme);
  // }, [resolvedTheme]);
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <GlobalStyles styles={globalStyles} /> */}
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
