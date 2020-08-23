import React from 'react';
import { Container, Typography, Grid, Button, Box } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
import { NavLink } from 'react-router-dom';

const demos = [
  { id: 1, name: 'My first podcast', desc: 'some description here...' },
  { id: 2, name: 'My second podcast', desc: 'some description here...' },
  { id: 3, name: 'My third podcast', desc: 'some description here...' },
  { id: 4, name: 'My fourth podcast', desc: 'some description here...' }
]

export default function Demo({match}) {
  const id = match.params.id;
  const demo = demos.find(el => el.id === parseInt(id));

  return (
    <>
      { demo ?
        <Container style={{height: 450, padding: 25}} maxWidth="md">
          <Typography variant="h4" align="center" paragraph>
            <b>{demo.name}</b>
          </Typography>
          <Typography paragraph>
            {demo.desc}
          </Typography>
        </Container>
        : 
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
                <b>Demo {id} Not Found</b>
              </Typography>
              <Box mt={5}>
                <NavLink to="/demos">
                  <Button color="primary" size="large" variant="contained">
                    <ArrowLeftIcon />
                    Back to Demos
                  </Button>
                </NavLink>
              </Box>
            </Grid>
          </Grid>
        </Container>
      }
    </>
  )
}