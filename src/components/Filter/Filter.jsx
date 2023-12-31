import { useDispatch } from 'react-redux';
import { applyFilter } from 'redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();

    const handleChange = event => {
        dispatch(applyFilter(event.target.value));
    };
    return (
        <>
            <label>Find contacts by name</label>
            <input
                className={css.filterInput}
                type="text"
                name="name"
                autoFocus={true}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={handleChange}
            />
        </>
    );
};

export default Filter;
