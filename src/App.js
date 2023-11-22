import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import application from "./pages/application"
import login from './pages/login';
import SignIn from "./component/Signin/index"

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    function App() {
        return (
          <Router>
              <Route path='/' component={Home} exact />
              <Route path='/projects' component={ProjectPage} exact />
              <MuiThemeProvider theme={theme} />
              <Route exact path="/application" component={application} />
          </Router>
        );
      }
      

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 