import React from 'react';
import { 
  Container, Grid, Typography, Box, Card, CardMedia, IconButton, Fab, Link, 
  Paper, LinearProgress 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilledWhite'
import laptop1 from '../../img/laptop-1.jfif'

const useStyles = makeStyles(theme => ({
container: {
  margin: theme.spacing(5, 0)
},
demo: {
  padding: theme.spacing(2)
},
card: {
  height: '100%', 
  width: 125
},
cardImg: {
  height: '100%'
},
progress: {
  height: 8, 
  borderRadius: 15, 
  marginRight: theme.spacing(2) 
},
subtitle: {
  fontSize: 12,
  [theme.breakpoints.up('sm')]: {
    fontSize: 14
  }
}
}))

export default function DemoSection() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container justify="center">
        <Grid item xs={12} md={8} style={{textAlign: 'center'}}>
          <Fab color="primary" size="small"><RssFeedIcon /></Fab>
          <Box mt={2}>
            <Typography variant="h4">
              <b>{'What does it sound like?'}</b> 
            </Typography>
          </Box>
          <Typography paragraph>
            {`You can listen to any of the demo via Podcastly Demo Podcast.
              Simply search for 'Podcastly Demo' on your favorite podcast 
              app or visit `}
              <Link>Apple Podcasts</Link>,&nbsp;
              <Link>Spotify</Link>,&nbsp;
              <Link>Google Podcasts</Link>. 
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        {[...Array(8)].map((el, i) => (
          <Grid item xs={12} sm={11} md={6} className={classes.demo} key={i}>
            <Paper elevation={0}>
              <Grid container>
                <Grid item xs={4} lg={3}>
                  <Card className={classes.card} elevation={0}>
                  <CardMedia component="img" src={laptop1} className={classes.cardImg}/>
                  </Card>
                </Grid>
                <Grid item xs={8} lg={9} style={{padding:'10px  5px'}}>
                  <Typography className={classes.subtitle}>
                    <b>PODCASTLY DEMO</b> SEASON 1 EPISODE {i+1}
                  </Typography>
                  <Typography variant="h5">
                    <b>Word of the Day</b>
                  </Typography>
                  <Grid container alignItems="center" className={classes.control}>
                    <Grid item xs={2}>
                      <IconButton size="small" color="primary">
                        <PlayCircleFilledIcon style={{fontSize: '36px'}}/>
                      </IconButton>
                    </Grid>
                    <Grid item xs={10}>
                      <LinearProgress className={classes.progress} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
  
        </Container>
  )
}