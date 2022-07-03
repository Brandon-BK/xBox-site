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
import { Tab,Tabs } from '@mui/material';
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
import { Divider } from '@mui/material';

export default function SwipeableTemporaryDrawer() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

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
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{
                bgcolor: '#3A3A3A', color: '#fff'


              
            }}>
                <Tab  sx={{ bgcolor: '#3A3A3A', color: '#fff' }}>
                <Tabs>ss</Tabs>
                <Tabs>sdsd</Tabs>
            </Tab>
                <List sx={{ bgcolor: '#3A3A3A', color: '#fff' }}>
                    <ListItem sx={[

                        (theme) => ({
                            '&:hover': {

                                boxShadow: "2px 2px 2px 2px #0f0",
                            },
                        }),
                    ]}>

                        <GroupOutlinedIcon />
                        <ForumTwoToneIcon />
                        <EmojiEventsRoundedIcon />
                        <IosShareRoundedIcon />

                    </ListItem>
                </List>
                {['Home', 'My games & apps'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={[

                        (theme) => ({
                            '&:hover': {

                                boxShadow: "2px 2px 2px 2px #0f0",
                            },
                        }),
                    ]} >
                        <ListItemButton>
                            <ListItemIcon>

                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List sx={{ bgcolor: '#3A3A3A', color: '#fff' }}>
                {['is playing Remotely', 'Settings', 'Xbox Assist', 'Fortnite', 'K'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={[

                        (theme) => ({
                            '&:hover': {

                                boxShadow: "2px 2px 2px 2px #0f0",
                            },
                        }),
                    ]}>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
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
    <AppBar sx={{ background: "none", color: '#FFF', boxShadow: 'none' }}>



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

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">

              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="K" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', color: '#fff' }}
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
                  <GroupOutlinedIcon sx={{ paddingLeft: "5" }} />
                  <ForumTwoToneIcon sx={{ paddingLeft: "5" }} />
                  <EmojiEventsRoundedIcon sx={{ paddingLeft: "5" }} />
                  <IosShareRoundedIcon sx={{ paddingLeft: "5" }} />
                  <Avatar />
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
            {['open'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>XBOX Icon</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
