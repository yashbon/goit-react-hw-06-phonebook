import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactButtonDel = ({ contactId }) => {
    const dispatch = useDispatch();
    const handleDeleteContact = contactId => dispatch(deleteContact(contactId));
    return (
        <>
            <button
                style={{
                    height: 'fit-content',
                }} // className={css.deleteContact_Button}
                type="button"
                onClick={() => handleDeleteContact(contactId)}
            >
                delete
            </button>
        </>
    );
};

export default ContactButtonDel;
