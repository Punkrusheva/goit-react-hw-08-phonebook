import React, { Component, Suspense, lazy } from "react";
import Layout from "./Layout/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes";
import { authOperations } from "../redux/auth";
import { connect } from 'react-redux';
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const HomePage = lazy(() => import('../views/HomeView/HomePage.js' /*webpackChunkName: 'home-page' */));
const PhoneBook = lazy(() => import('../views/PhoneBookView/PhoneBook.js' /*webpackChunkName: 'phone-book' */));
const Register = lazy(() => import('../views/RegisterView/Register.js' /*webpackChunkName: 'register' */));
const Login = lazy(() => import('../views/LoginView/Login.js' /*webpackChunkName: 'Login' */));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  };
  
  render() {
    return (
      <Layout>
        <Suspense fallback={<h1>Загружаем...</h1>}>
          <Switch>
            <PublicRoute exact path={routes.homePage} component={HomePage} />
            <PrivateRoute
              path={routes.phoneBook}
              component={PhoneBook}
              redirectTo={routes.homePage}/>
            <PublicRoute
              path={routes.register}
              restricted
              redirectTo={routes.phoneBook}
              component={Register} />
            <PublicRoute
              path={routes.login}
              restricted
              redirectTo={routes.phoneBook}
              component={Login} />
            <Redirect to={routes.homePage}/>
          </Switch>
        </Suspense>
      </Layout>
    )
  }
};

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
}

export default connect(null, mapDispatchToProps)(App);