import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { 
  Typography, Link, Container, Avatar, TextField, FormControlLabel, 
  Checkbox, Button, Grid, Box
} from '@material-ui/core';

  const useStyle = makeStyles(theme => ({
    paper: {
      padding: theme.spacing(2, 0, 5, 0),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    avatar: {
      margin: theme.spacing(1),
      background: theme.palette.secondary.main
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(1, 0, 1, 0)
    }
  }));

export default function SignUp() {
  const classes = useStyle();
  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar} />
          <Typography variant="h5">
            <b>Create an Account</b>
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container alignItems="center">
            <Grid item xs={12}>
                <TextField 
                  label="Full Name"
                  variant="outlined"
                  required
                  autoFocus
                  autoComplete="name"
                  fullWidth
                  margin="normal"
                  id="name"
                />
              </Grid> 
              <Grid item xs={12}>
                <TextField 
                  label="Email Address"
                  variant="outlined"
                  required
                  autoComplete="email"
                  fullWidth
                  margin="normal"
                  id="email"
                />
              </Grid> 
              <Grid item xs={12}>
                <TextField 
                  label="Password"
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="password"
                  margin="normal"
                  id="password"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  label="Confirm Password"
                  variant="outlined"
                  required
                  fullWidth
                  autoComplete="password2"
                  margin="normal"
                  id="password2"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="terms" color="primary" />}
                  label={'I agree to the terms of service'}
                />
              </Grid>
            </Grid>
            <Button 
              className={classes.submit}
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              size="large"
            >
              Create Account
            </Button>
            <Box mt={2}>
              <Link href="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Box>
          </form>
        </div>
      </Container>
    </>
  )
};
