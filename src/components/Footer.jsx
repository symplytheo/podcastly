import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Grid, IconButton } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import TwitterIcon from '@material-ui/icons/Twitter'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'

const useStyles = makeStyles(theme => ({
  container: {
    padding: '25px 15px',
    borderTop: `1px solid ${theme.palette.divider}`,
    textAlign: 'center'
  },
  share: {
    fontSize: '32px',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '50%',
    margin: theme.spacing(2, 1)
  },
  link: {
    display: 'inline-block',
    margin: theme.spacing(1)
  },
  footLink: {
    textDecoration: 'none',
    color: 'rgba(0,0,0,0.6)'
  }
}))

export default function Footer() {
  const classes = useStyles();

  const shares = [<TwitterIcon />, <FacebookIcon />, <InstagramIcon />]
  const footLinks = [
    {text: 'Pricing', href: '/pricing'}, 
    {text: 'Contact', href: '/contact'}, 
    {text: 'Privacy Policy', href: '/privacy'}, 
    {text: 'Terms of Service', href: '/terms'}
  ]

  return (
    <React.Fragment>
      <Grid 
        container
        className={classes.container}
        justify="center"
      >
        <Grid item xs={12} sm={10} md={8}>
          {footLinks.map((fLink, f) => (
            <Link to={fLink.href} key={f}>
              <Typography 
                color="textSecondary" 
                variant="body2" 
                className={classes.link}
              >
                {fLink.text}
              </Typography>
            </Link>
          ))}
        </Grid>
        <Grid item xs={12} sm={10} md={8}>
          {shares.map((share, i) => (
            <IconButton size="medium" className={classes.share} key={i}>
              {share}
            </IconButton>
          ))}
        </Grid>
        <Grid item xs={12} sm={10} md={8}>
          <Typography color="textSecondary" variant="body2">
            <span>&copy; 2008 - { new Date().getFullYear() } </span>
            <Link style={{textDecoration: 'none'}}>
              <Typography 
                color="textSecondary" 
                variant="body2" 
                style={{display: 'inline'}}
              >
                {'Podcastly.'}
              </Typography>
            </Link>
            {` All rights reserved. Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Est blanditiis dolorem culpa incidunt minus,
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est 
            blanditiis dolorem culpa incidunt minus.`}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}