import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';

const ColumnForm = (props) => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: 'ADD_COLUMN', payload: {title, icon} });
        setTitle('');
        setIcon('');
    }

    return(
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span className={styles.inputText}>
                Title:
            </span> 
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            
            <span className={styles.inputText}>
                Icon: 
            </span>
            <TextInput value={icon} onChange={e => setIcon(e.target.value)} />
            
            <Button>
                ADD COLUMN
            </Button>
        </form>
    );
} ;

export default ColumnForm;