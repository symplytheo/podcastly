import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
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
        <Header />
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/login" component={SignIn} />
          <Route path="/register" component={SignUp} />
          <Route path="/features" component={Features} />
          <Route exact path="/demos" component={Demos} />
          <Route path="/demos/:id" component={Demo} />
          <Route path="/blog" component={Blog} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>   
  )
}

