import * as React from 'react';
import {
  AppBar,
  Toolbar,
  Tooltip,
  Typography,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import useFetch from '../../hooks/useFetch';

const drawerWidth = 240;
export default function Navbar({ handleDrawerToggle }) {
  const { user } = useFetch();

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgColor: 'info.main',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>

        <div>
          <Tooltip title="Admin" arrow>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
              {/* <img src={user?.img} alt="admin avatar" height='20' width='20'/> */}
              <span>{user?.username}</span>
            </IconButton>
          </Tooltip>
        </div>
      </Toolbar>
    </AppBar>
  );
}
