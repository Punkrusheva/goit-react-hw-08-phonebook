import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation/Navigation';
import styles from './Layout.module.css';

function Layout({ children}) {
  return (
    <div className={styles.layout} >
      <Navigation />
      <hr/>
        {children}
    </div>
  )
}

Layout.defaultProps = {
  title: '',
  children: '',
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};


export default Layout;