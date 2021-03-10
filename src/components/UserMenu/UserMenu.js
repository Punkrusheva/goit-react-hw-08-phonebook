import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import styles from "./UserMenu.module.css";

const UserMenu = ({ email, onLogout }) => (
  <div className={styles.container}>
    <span className={styles.email}>Welcome, {email}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
    </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);