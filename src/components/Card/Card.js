import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import styles from './Card.module.scss'
import clsx from 'clsx';

const Card = (props) => {

    const cardId = props.cardId;
    const [favoriteValue, setFavoriteValue] = useState(props.isFavorite);
    const dispatch = useDispatch();
    
    const toggleFavorite = (e) => {
        e.preventDefault();
        setFavoriteValue(!favoriteValue);
        dispatch(toggleCardFavorite(cardId));
    }

    const deleteCard = (e) => {
        e.preventDefault();
        dispatch(removeCard(cardId));
    }
    
    return (
        <li className={styles.card}>{props.title}
            <div className={styles.buttons}>
                <button 
                    onClick={toggleFavorite}
                    className={clsx(styles.button, props.isFavorite && styles.isActive)}>
                    <i className={'fa fa-star-o'} />
                </button>
                <button
                    onClick={deleteCard}
                    className={styles.button}>
                    <i className={'fa fa-trash'} />
                </button>
            </div>
        </li>
    );
};

export default Card;