import React from 'react'
import { Container, Grid, Typography, Box, Card, CardMedia, Fab, Button } from '@material-ui/core'
import RssFeedIcon from '@material-ui/icons/RssFeed'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import laptop2 from '../../img/laptop-2.jpg'
import laptop3 from '../../img/laptop-3.jpg'

const features = [
  'Type your podcast as if it were a blog',
  'Include audio snippets, songs, tunes, jingles...',
  'Voices in multiples lanuages and accents',
  'Single click text-to-speech'
]

export default function FeaturesSection() {
  return (
    <Container style={{padding: 15}}>
      <Grid container justify="flex-end">
        <Grid item xs={12} md={7} style={{padding: '0px 10px 0px'}}>
          <Box my={1}>
            <Fab color="primary" size="small">
              <RssFeedIcon />
            </Fab>
          </Box>
          <Box mb={2}>
            <Typography variant="h4">
              <b>{'An exceptionaly intuitive editor to create podcasts'}</b> 
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container justify="space-between">
        <Grid item xs={11} sm={8} md={4} style={{padding: 10}}>
          <Box style={{position: 'relative'}} mb={10}>
            <Card style={{height: 200, width: '85%'}}>
              <CardMedia component="img" src={laptop2} style={{height: '100%'}} />
            </Card>
            <Card style={{position: 'absolute', height: 220, top: 50, left: 50}}>
              <CardMedia component="img" src={laptop3} style={{height: '100%'}}/>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container justify="space-between">
            {features.map((feature, f) => (
              <Grid item xs={6} sm={5} style={{padding: '0px 10px'}} key={f}>
                <Typography variant="body1">
                  <b>{feature}</b> 
                </Typography>
                <Typography paragraph variant="body2">
                {`Our easy to use text editor allows you to craft your perfect 
                podcast, and when you're ready convert the text to audio. Or 
                even paste in your existing blog post and let Podcastly's AI 
                produce the audio.`}
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Box style={{textAlign: 'right'}}>
            <Button color="primary">
              <ArrowRightIcon />
              Register for a Free Trial
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}