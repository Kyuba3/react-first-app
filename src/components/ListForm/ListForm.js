import styles from './ListForm.module.scss';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listRedux";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";


const ListForm = () => {
    
    const dispatch = useDispatch();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description}));
        setTitle('');
        setDescription('');
    }
    
    return (
        <form className={styles.listForm} onSubmit={handleSubmit}>
            <span className={styles.inputText}>
                Title:
            </span>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.inputText}>
                Description:
            </span>
            <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            <Button>
                ADD LIST
            </Button>
        </form>

    );
};

export default ListForm;