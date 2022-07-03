import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import { Tab, Tabs, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SiXbox from 'react-icons/si';
import Battery80OutlinedIcon from '@mui/icons-material/Battery80Outlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import AppBar from '@mui/material';
import Toolbar from '@mui/material';


var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date + ' ' + time;


export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, height: 800, bgcolor: '#3A3A3A', color: '#fff' }}

      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{
        bgcolor: '#3A3A3A', color: '#fff'



      }}>

        <List sx={{ bgcolor: '#3A3A3A', color: '#fff' }}>
          <ListItem disablePadding>

            <GroupOutlinedIcon fontSize='large' sx={[

              (theme) => ({
                '&:hover': {

                  color: "#0f0",
                },
              }),
            ]} /> <Divider />
            <ForumTwoToneIcon fontSize='large' sx={[

              (theme) => ({
                '&:hover': {

                  color: "#0f0",
                },
              }),
            ]} /><Divider />
            <EmojiEventsRoundedIcon fontSize='large' sx={[

              (theme) => ({
                '&:hover': {

                  color: "#0f0",
                },
              }),
            ]} /><Divider />
            <IosShareRoundedIcon fontSize='large' sx={[

              (theme) => ({
                '&:hover': {

                  color: "#0f0",
                },
              }),
            ]} />

          </ListItem>
        </List>
        {['Home', 'My games & apps'].map((text, index) => (
          <ListItem key={text} disablePadding  >
            <ListItemButton>
              <ListItemIcon>

                {index % 2 === 0 ? <HomeRoundedIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List sx={{ bgcolor: '#3A3A3A', color: '#fff' }}>
        {['Playing Remotely', 'Settings', 'Xbox Assist', 'Fortnite', 'K'].map((text, index) => (
          <ListItem key={text} disablePadding >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <HomeRoundedIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {['open'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Box sx={{backgroundColor:'none'}}>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
             
            >
              {list(anchor)}
            </SwipeableDrawer>
            <Button onClick={toggleDrawer(anchor, true)}>kot</Button>
<Typography>Username</Typography>
            <Box m={1}
              paddingTop='0'
              paddingLeft='15'
              display="flex"
              justifyContent="flex-end"
              alignItems="flex"
              flex="0"
            >


              < HeadsetMicOutlinedIcon />
              < Battery80OutlinedIcon />

              {time}
            </Box>
          </Box>
        </React.Fragment>
      ))}
    </div>
  );
}
