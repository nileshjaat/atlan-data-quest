import React, { useState } from 'react';
import Main from './components/Main';
import Navbar from './components/Navbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { colorSchemeOptions } from './utils/constant';

function App() {
  const [colorScheme, setColorScheme] = useState(colorSchemeOptions.light);
  const prefersLightMode = useMediaQuery(
    `(prefers-color-scheme: ${colorScheme})`
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersLightMode
            ? colorSchemeOptions.dark
            : colorSchemeOptions.light,
        },
      }),
    [prefersLightMode]
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar colorScheme={colorScheme} setColorScheme={setColorScheme} />
        <Main />
      </ThemeProvider>
    </>
  );
}

export default App;
