import React, { useState } from 'react';
import {NavLink, Link} from 'react-router-dom';
import { 
  AppBar, Box, Drawer, Divider, Toolbar, Button, List, ListItem, ListItemText, 
  Typography, ButtonGroup, Hidden, IconButton, useScrollTrigger, Slide, 
} from '@material-ui/core';
import CastIcon from '@material-ui/icons/Cast';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/core/styles'; 

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'white',
    ...theme.mixins.container
  },
  logoLink: {
    textDecoration: 'none', 
    color: theme.palette.primary.main
  },
  drawerPaper: {
    width: 240
  },
  logo: {
    marginRight: theme.spacing(3)
  },
  logoIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main
  },
  navBtn: {
    textTransform: 'capitalize',
    fontWeight: 600,
    margin: '0 10px',
  },
  navRegLink: {
    textDecoration: 'none',
    color: theme.palette.background.paper,
  },
  activeNav: {
    color: theme.palette.primary.main
  },
  OpenDrawerBtn: {
    marginLeft: 'auto',
    color: theme.palette.primary.main,
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  closeDrawerBtn: {
    display: 'flex',
    alignItems: 'center',
    ...theme.mixins.toolbar
  }
}))
 
const HideOnScroll = ({children, window}) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const navLinks = [
  {name: 'Features', href: '/features'},
  {name: 'Pricing', href: '/pricing'},
  {name: 'Demos', href: '/demos'},
  {name: 'Blog', href: '/blog'}
];


export default function Header(props) {
  const classes = useStyles();
  const [navDrawer, setNavDrawer] = useState(false);

  const toggleDrawer = () => {
    setNavDrawer(!navDrawer);
  }

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar color="inherit" className={classes.appBar} elevation={0}>
          <Toolbar>
            <Box className={classes.logoIcon}>
              <CastIcon/>
            </Box>
            <Link to="/" style={{textDecoration: 'none'}}>
              <Typography 
                component="h1" 
                variant="h5" 
                color="primary"
                className={classes.logo}
              >
                  {'podcastly'}
              </Typography>

            </Link>
            <Hidden smDown>
              <ButtonGroup>
                {navLinks.map((nav, index) => (
                  <NavLink 
                    to={nav.href}
                    key={index} 
                    style={{textDecoration: 'none'}} 
                  >
                    <Button
                      color="textPrimary"
                      className={classes.navBtn} 
                      variant="text"
                    >
                        {nav.name}
                    </Button>
                  </NavLink>
                ))}
              </ButtonGroup>
              <NavLink 
                to="/login" 
                style={{textDecoration: 'none', marginLeft: 'auto'}} 
              >  
                <Button 
                  className={classes.navBtn} 
                  variant="text" 
                >
                  Login
                </Button>
              </NavLink>

              <NavLink 
                to="/register" 
                style={{textDecoration: 'none'}}
              >
                <Button  
                  className={classes.navBtn} 
                  color="primary"
                  variant="contained"
                  disableElevation
                >
                    Sign Up
                </Button>
              </NavLink>
            </Hidden>
            
            <IconButton  
              className={classes.OpenDrawerBtn}
              onClick={toggleDrawer}
            >
              <MenuIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box mt={7} />
      <Drawer 
        variant="temporary" 
        onClose={toggleDrawer} 
        open={navDrawer}
        anchor="right"
        classes={{paper: classes.drawerPaper}}
      >
        <Box className={classes.closeDrawerBtn}>
          <IconButton 
            onClick={toggleDrawer}
            color="primary"
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
        <Divider />
        <List color="textPrimary">
          {navLinks.map((item, i) => (
            <NavLink 
              to={item.href} 
              style={{textDecoration: 'none', color: 'rgba(0,0,0,0.9)'}}
              onClick={toggleDrawer}
            >
              <ListItem button key={i}>
                <ListItemText primary={item.name} />
              </ListItem>
            </NavLink>
          ))}
          <NavLink 
            to="/login" 
            style={{textDecoration: 'none', color: 'rgba(0,0,0,0.9)'}}
            onClick={toggleDrawer}
          >
            <ListItem button>
              <ListItemText primary="Login" />
            </ListItem>
          </NavLink>
          <NavLink 
            to="/register" 
            style={{textDecoration: 'none', color: 'rgba(0,0,0,0.9)'}}
            onClick={toggleDrawer}
          >
            <ListItem button>
              <ListItemText primary="Sign Up" />
            </ListItem>
          </NavLink>
        </List>
      </Drawer>
    </React.Fragment>
  )
}
