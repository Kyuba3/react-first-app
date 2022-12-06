import PageTitle from '../PageTitle/PageTitle';
import styles from'./Hero.module.scss';

const Hero = () => {
    return (
      <div className={styles.Hero}>
        <PageTitle>My First React App</PageTitle>
        <p className={styles.subtitle}>A simple to-do app, with lists, columns and card</p>
      </div>
    );
  };

  export default Hero;