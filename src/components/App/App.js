import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import SettingsPage from '../SettingsPage/SettingsPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import SearchPage from '../SearchPage/SearchPage';
import './App.css';
import SchedulePage from '../SchedulePage/SchedulePage';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import recycle from './recycle.jpg';

const customTheme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: 'rgb(255, 255, 255, 0.8)',
      },
    },
  },
});
class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <ThemeProvider theme={customTheme}>
        <Router>
          <div
            style={{
              backgroundImage: `url(${recycle})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              height: '100%',
            }}
          >
            <Nav />
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from="/" to="/home" />
              {/* <ProtectedRoute
              exact
              path="/login"
              authRedirect="/LoginPage"
              component={LoginPage}
            /> */}
              {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
              <Route exact path="/about" component={AboutPage} />
              <ProtectedRoute exact path="/search" component={SearchPage} />
              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
              <ProtectedRoute exact path="/admin" component={UserPage} />
              {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
              <ProtectedRoute exact path="/settings" component={SettingsPage} />
              <ProtectedRoute exact path="/schedule" component={SchedulePage} />
              {/* This works the same as the other protected route, except that if the user is logged in,
            they will be redirected to the authRedirect path provided. */}
              <ProtectedRoute
                exact
                path="/login"
                authRedirect="/admin"
                component={LoginPage}
              />
              <ProtectedRoute
                exact
                path="/registration"
                authRedirect="/admin"
                component={RegisterPage}
              />
              <ProtectedRoute
                exact
                path="/home"
                authRedirect="/admin"
                component={LandingPage}
              />
              <ProtectedRoute
                exact
                path="/search"
                authRedirect="/SearchPage"
                component={SearchPage}
              />

              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default connect()(App);
