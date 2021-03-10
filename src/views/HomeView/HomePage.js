import React, { Component } from 'react';
import Layout from '../../components/ContactsLayout/ContactsLayout';
import styles from './HomePage.module.css';
import "../../stylesheets/animation.css";

class HomePage extends Component {

  render() {
    return (
      <Layout >
       <h1 className={styles.title}>Hello WORLD!</h1>
      </Layout>
    );
  };
};

export default HomePage;