import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './containers/navbar/App.jsx';
import {CalenderContextProvider} from './Context/calender.context';

const rootElement = document.getElementById('body');

ReactDOM.render(
  <React.Fragment>
    <CalenderContextProvider>
      <Nav />
    </CalenderContextProvider>
  </React.Fragment>,
  rootElement
);

// import React from 'react';
// import { Router, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { history } from '_helpers';
// import { PrivateRoute } from 'components/PrivateRoute';
// import { LoginPage } from 'LoginPage';
// import HomePage from 'containers/Home/HomePage';
// import { alertActions } from '_actions';


// class App extends React.Component {
//     constructor(props) {
//         super(props);

//         const { dispatch } = this.props;
//         history.listen((location, action) => {
//             // clear alert on location change
//             dispatch(alertActions.clear());
//         });
//     }

//     render() {
//         const { alert } = this.props;
//         return (
//             <div className="jumbotron">
//                 <div className="container">
//                     <div className="col-sm-8 col-sm-offset-2">
//                         {alert.message &&
//                             <div className={`alert ${alert.type}`}>{alert.message}</div>
//                         }
//                         <Router history={history}>
//                             <div>
//                                 <PrivateRoute exact path="/" component={HomePage} />
//                                 <Route path="/login" component={LoginPage} />
//                             </div>
//                         </Router>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// function mapStateToProps(state) {
//     const { alert } = state;
//     return {
//         alert
//     };
// }

// const connectedApp = connect(mapStateToProps)(App);
// export { connectedApp as App }; 