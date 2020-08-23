import React, { useState } from 'react';
import { 
  AppBar, Box, Drawer, Divider, Toolbar, Button, List, ListItem, ListItemText, Typography,
  ButtonGroup, Hidden, IconButton, useScrollTrigger, Slide, Link
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
    margin: '0 10px'
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
            <Typography 
              component="h1" 
              variant="h5" 
              color="inherit"
              className={classes.logo}
            >
              <Link href={process.env.PUBLIC_URL + "/"} color="inherit">
                {'podcastly'}
              </Link>
            </Typography>
            <Hidden smDown>
              <ButtonGroup>
                {navLinks.map((link, index) => (
                  <Button
                    key={index}
                    className={classes.navBtn} 
                    variant="text"
                    href={process.env.PUBLIC_URL + link.href}
                  >
                    {link.name}
                  </Button>
                ))}
              </ButtonGroup>
                
              <Button 
                className={classes.navBtn} 
                variant="text" 
                style={{marginLeft: 'auto'}}
                href="/login"
              >
                Login
              </Button>

              <Button  
                className={classes.navBtn} 
                color="primary"
                variant="contained"
                disableElevation
                href="/register"
              >
                Sign Up
              </Button>
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
        variant="persistent" 
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
        <List>
          {navLinks.map((link, i) => (
            <ListItem button key={i} href={link.href} component="a">
              <ListItemText primary={link.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  )
}
