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

export default function SignIn() {
  const classes = useStyle();
  return (
    <>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar} />
          <Typography variant="h5">
            <b>Sign In</b>
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container alignItems="center">
              <Grid item xs={12}>
                <TextField 
                  label="Email Address"
                  variant="outlined"
                  required
                  autoComplete="email"
                  autoFocus
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
                  margin="normal"
                  id="password"
                  type="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={7}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
              </Grid>
              <Grid item xs={5}>
                <Typography align="right" variant="body2">
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Typography>
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
              Sign In
            </Button>
            <Box mt={2}>
              <Link href="/register" variant="body2">
                {"Don't have an account yet? Sign Up"}
              </Link>
            </Box>
          </form>
        </div>
      </Container>
    </>
  )
};
