import React from 'react';
import Proptypes from 'prop-types';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import logo from '../assets/atlan_logo.png';
import { colorSchemeOptions } from '../utils/constant';

const Navbar = ({ colorScheme, setColorScheme }) => {
  const changeTheme = () => {
    if (colorScheme === colorSchemeOptions.light) {
      setColorScheme(colorSchemeOptions.dark);
    } else {
      setColorScheme(colorSchemeOptions.light);
    }
  };

  return (
    <>
      <AppBar color="transparent" position="static">
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <img src={logo} alt="atlan nav logo" style={{ height: '35px' }} />
          <IconButton sx={{ ml: 1 }} onClick={changeTheme} color="inherit">
            {colorScheme === colorSchemeOptions.dark ? (
              <>
                <Brightness7Icon />
              </>
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  colscheme: Proptypes.string,
  setColorScheme: Proptypes.func,
};

Navbar.defaultProps = {
  colscheme: '',
  setColorScheme: () => {},
};
