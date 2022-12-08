import { useSelector } from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import { getFavoriteCard} from '../../redux/store';
import styles from './Favorite.module.scss';
import Card from '../Card/Card';

const Favorite = () => {
    
    const favoriteCards = useSelector(getFavoriteCard);

    if (favoriteCards.length === 0){
        return (
            <PageTitle>
                No Favorite Cards!
            </PageTitle>
        );
    };
    
    return (
        <div>
            <PageTitle>
                FAVORITE
            </PageTitle>
            <ul className={styles.cards}>
                {favoriteCards.map((favoriteCard) => (
                    <Card
                        key={favoriteCard.id}
                        title={favoriteCard.title}
                        cardId={favoriteCard.id} 
                        isFavorite={favoriteCard.isFavorite}
                    /> 
                ))}
            </ul>
        </div>
    );
};

export default Favorite;