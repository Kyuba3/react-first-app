import Container from '../Container/Container';
import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.links}>
                    <Link to="/">
                        <i className={styles.icon + " fa fa-tasks"}></i>
                    </Link>
                    <ul>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} 
                                to="/">Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                                to="/favorite">Favorite
                            </NavLink>
                        </li>
                        <li> 
                            <NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
                                to="/about">About
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;