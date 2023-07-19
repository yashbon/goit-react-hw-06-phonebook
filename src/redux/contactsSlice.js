import { createSlice } from '@reduxjs/toolkit';
import { customAlphabet } from 'nanoid';

// ************ Persit
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};
//************* Persit E N D */

const initialStateContacts = {
    list: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
};

const nanoid = customAlphabet('1234567890', 2);
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialStateContacts,
    reducers: {
        deleteContact(state, action) {
            return {
                list: state.list.filter(
                    contact => contact.id !== action.payload
                ),
            };
        },
        addContact: {
            reducer(state, action) {
                state.list.unshift(action.payload);
            },
            prepare(newContact) {
                return {
                    payload: {
                        id: 'id-' + nanoid(),
                        ...newContact,
                    },
                };
            },
        },
    },
});

export const { deleteContact, addContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);
