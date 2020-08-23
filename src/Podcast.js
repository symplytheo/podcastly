import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {deepPurple} from '@material-ui/core/colors'
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header'
import Footer from './components/Footer'
//Components to render as page
import Homepage from './pages/Homepage' //Homepage
import SignIn from './pages/Login'; //Login page
import SignUp from './pages/Register'; //Login page
import Features from './pages/Features' //Features page
import Demos from './pages/Demos' //Index for Demo pages
import Demo from './pages/_Demo' //Demo pages -- dynamic url
import NotFound from './pages/NotFound' //404 error page
import Blog from './pages/Blog' //Blog page

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple['A400'],
    },
    secondary: {
      main: deepPurple[200]
    }
  },
  typography: {
    fontFamily: ['Poppins', 'Arial']
  }
})

export default function Podcast() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">About</Link>
              </li>
              <li>
                <Link to="/features">Users</Link>
              </li>
              <li>
                <Link to="/demos">Users</Link>
              </li>
            </ul>
          </nav>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/demo" component={Demos} />
          <Route excat path="/demos/:id" component={Demo} />
          <Route exact path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>   
  )
}

