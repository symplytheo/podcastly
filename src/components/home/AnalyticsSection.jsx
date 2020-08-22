import React from 'react'
import { 
  Container, Grid, Typography, Box, Card, CardMedia, Fab, Button, Hidden 
} from '@material-ui/core'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import laptop2 from '../../img/laptop-2.jpg'
import laptop3 from '../../img/laptop-3.jpg'

const analytics = [
  'Podcast hosting and RSS feed',
  'Straight-forward podcast analytics',
  'Host unlimited shows & episodes',
  'Invite the whole team'
]

export default function AnalyticsSection() {
  return (
    <Container style={{padding: 15}}>
      <Grid container>
        <Grid item xs={12} md={6} style={{padding: '0px 10px 0px'}}>
          <Box my={1}>
            <Fab color="primary" size="small">
              <RssFeedIcon />
            </Fab>
          </Box>
          <Typography variant="h4">
            <b>{`Podcast hosting & analytics`}</b> 
          </Typography>
        </Grid>
      </Grid>
      <Grid container style={{padding: '15px 0px'}} justify="space-between">
        <Grid item xs={12} md={7}>
          <Grid container justify="space-between">
            {analytics.map((analytic, a) => (
              <Grid item xs={6} sm={5} md={5} style={{padding: '0px 10px'}} key={a}>
                <Typography variant="body1">
                  <b>{analytic}</b> 
                </Typography>
                <Typography paragraph variant="body2">
                  {`Create as many podcast shows and episodes as you'd like. 
                  You arent't charged per show, so flex your creative muscles 
                  and go create.`}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Box>
            <Button color="primary">
              <ArrowRightIcon />
              Sign up now
            </Button>
          </Box>
        </Grid>
        <Hidden smDown>
          <Grid item md={4} container justify="flex-end">
            <Box style={{position: 'relative'}} mb={10}>
              <Card  elevation={0} style={{height: 200, width: '85%'}}>
                <CardMedia component="img" src={laptop2} style={{height: '100%'}} />
              </Card>
              <Card elevation={0} style={{position: 'absolute', height: 250, top: 50, left: 50}}>
                <CardMedia component="img" src={laptop3} style={{height: '100%'}}/>
              </Card>
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}