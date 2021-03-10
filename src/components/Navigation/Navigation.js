import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import routes from "../../routes";

const Navigation = () => (
  <ul className={styles.navMenu}>
    <li className={styles.headerMenuItem}>
      <NavLink exact to={routes.homePage}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Home</NavLink>
      </li>
    <li className={styles.headerMenuItem}>
      <NavLink to={routes.phoneBook}
        className={styles.navLink}
        activeClassName={styles.navLinkActive}>Contacts</NavLink>
      </li>
    </ul>
);

export default Navigation;