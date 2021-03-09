import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import routes from "../../routes";

const Navigation = () => (
  <ul className={styles.headerMenu}>
    <li className={styles.headerMenuItem}>
      <NavLink to={routes.phoneBook}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Contacts</NavLink>
      </li>
    <li className={styles.headerMenuItem}>
      <NavLink to={routes.register}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Registration</NavLink>
    </li>
    <li className={styles.headerMenuItem}>
      <NavLink to={routes.login}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Login</NavLink>
    </li>
    </ul>
);

export default Navigation;