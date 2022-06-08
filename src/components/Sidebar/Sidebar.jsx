import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Toolbar,
  Collapse,
  Typography,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HotelIcon from '@mui/icons-material/Hotel';
import InfoIcon from '@mui/icons-material/Info';
import BedIcon from '@mui/icons-material/Bed';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import useFetch from '../../hooks/useFetch';

function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const { dispatch, user } = useFetch();

  const handleClick = () => {
    setOpen(!open);
  };
  const handleLogOut = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGOUT' });
    localStorage.removeItem(user);
  };
  return (
    <div>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Reservation
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="Info" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/users">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Users" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/hotels">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <HotelIcon />
                  </ListItemIcon>
                  <ListItemText primary="Hotels" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Link to="/rooms">
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <BedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Rooms" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </>
      </List>

      <Divider />
      <ListItem button onClick={handleLogOut} to="/logout">
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Log out" />
      </ListItem>
    </div>
  );
}

export default Sidebar;
