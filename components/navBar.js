import * as React from 'react';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Battery80OutlinedIcon from '@mui/icons-material/Battery80Outlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ForumTwoToneIcon from '@mui/icons-material/ForumTwoTone';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import { bgcolor } from '@mui/system';

var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes();
var dateTime = date + ' ' + time;

const navBar = () => {
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

  return (
    <AppBar sx={{ background: "none", color: '#FFF',boxShadow:'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box
            component="img"
            sx={{
              width: 60, height: 64,
            }}
            alt="Xbox"
            src={'../images/xbox.png'}
          />

          <Box sx={{ flexGrow: 0}}>
            <Tooltip title="Open settings">

              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="K" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' , color:'#fff'}}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              
              <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#111', color: '#fff' }}>
                <ListItem>
                xbox logo
                <GroupOutlinedIcon sx={{paddingLeft:"5"}}/>
                <ForumTwoToneIcon sx={{paddingLeft:"5"}}/>
                <EmojiEventsRoundedIcon sx={{paddingLeft:"5"}}/>
                <IosShareRoundedIcon sx={{paddingLeft:"5"}}/>  
                <Avatar/>
                </ListItem>
                <ListItem>
                
                  <ListItemText   />
                </ListItem>
                <ListItem>
                    
                  <ListItemText  />
                </ListItem>
              </List>
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"

            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',

              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            katlego
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />



          <Box m={1}
            paddingLeft='15'
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            flex="1"
          >


            < HeadsetMicOutlinedIcon />
            < Battery80OutlinedIcon />

            {time}
          </Box>
        </Toolbar>





      </Container>
    </AppBar>

  );
};
export default navBar;
