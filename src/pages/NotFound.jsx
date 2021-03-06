import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Grid, Button, Container, Box } from '@material-ui/core'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'

export default function NotFound() {
  return (
    <Container style={{height: 500, padding: 25}} maxWidth="md">
      <Grid 
        container 
        justify="center" 
        alignItems="center" 
        style={{height: '100%', textAlign: 'center'}}
      >
        <Grid item xs={12}>
          <Typography variant="h1" display="block" paragraph>
            <b>404</b>
          </Typography>
          <Typography variant="h3" display="block" paragraph>
            <b>Page Not Found</b>
          </Typography>
          <Box mt={5}>
            <Link to="/" style={{textDecoration: 'none'}}>
              <Button color="primary" size="large" variant="contained">
                <ArrowLeftIcon />
                Back to Home
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}