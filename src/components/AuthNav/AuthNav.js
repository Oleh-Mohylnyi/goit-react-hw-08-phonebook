import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './authNav.module.scss';

// const styles = {
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 700,
//     color: '#2A363B',
//   },
//   activeLink: {
//     color: '#E84A5F',
//   },
// };

export default function AuthNav() {

    return (
        <nav >
            <ul className={s.listBtn}>
                <li>
                    <NavLink
                        to="/register"
                        className={s.btn}
                        // style={styles.link}
                        // activeStyle={styles.activeLink}
                    >
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className={s.btn}
                        // style={styles.link}
                        // activeStyle={styles.activeLink}
                    >
                        Login
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
