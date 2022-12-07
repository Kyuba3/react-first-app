import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getInputValue, updateSearchString } from '../../redux/store';

const SearchForm = () => {
    
    const searchInput = useSelector(getInputValue);
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState(searchInput);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(searchValue));
    }
    
    return (
        <form className={styles.searchForm} onSubmit={handleSubmit}>
            <TextInput placeholder="Search..." value={searchValue} onChange= {e => setSearchValue(e.target.value)} />
            <Button>
                <span className='fa fa-search' />
            </Button>
        </form>
    );
  };

  export default SearchForm;