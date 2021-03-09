import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import App from './components/App';
import store from "./redux/phoneBook/store";
import './stylesheets/main.css';
import './stylesheets/normalize.css';

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root'),
);