import Container from '../Container/Container';
import styles from './NavBar.module.scss';


const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <div className={styles.links}>
                    <a href="/">
                        <i className={styles.icon + " fa fa-tasks"}></i>
                    </a>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/Favorite">Favorite</a>
                        </li>
                        <li> 
                            <a href="/About">About</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;