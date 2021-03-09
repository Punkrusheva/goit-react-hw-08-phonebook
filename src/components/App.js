import React, { Suspense, lazy } from "react";
import Layout from "./Layout/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import routes from "../routes";

const PhoneBook = lazy(() => import('../views/PhoneBook/PhoneBook.js' /*webpackChunkName: 'phone-book' */));
const Register = lazy(() => import('../views/Register/Register.js' /*webpackChunkName: 'register' */));
const Login = lazy(() => import('../views/Login/Login.js' /*webpackChunkName: 'Login' */));

const App = () =>   
  <Layout>  
    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Switch>
        <Route path={routes.phoneBook} exact component={PhoneBook} />
        <Route path={routes.register} exact component={Register} />
        <Route path={routes.login} exact component={Login} />
        <Redirect to={routes.phoneBook} />
      </Switch>
    </Suspense>
  </Layout>

export default App;