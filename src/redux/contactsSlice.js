// import { nanoid } from '@reduxjs/toolkit';
import { customAlphabet } from 'nanoid';

const contactsInitialState = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactsReducer = (state = contactsInitialState, action) => {
    switch (action.type) {
        case 'contacts/delete':
            return [...state.filter(contact => contact.id !== action.payload)];
        case 'contacts/add':
            // console.log('contacts/add', action.payload);
            return [action.payload, ...state];
        default:
            return state;
    }
};
export const addContact = newContact => {
    const nanoid = customAlphabet('1234567890', 2);
    return {
        type: 'contacts/add',
        payload: { id: 'id-' + nanoid(), ...newContact },
    };
};

export const deleteContact = contactId => {
    return {
        type: 'contacts/delete',
        payload: contactId,
    };
};

// import { createSlice } from "@reduxjs/toolkit"
// import { initialState } from "./store";

// const contactsInitialState = initialState.contacts;
// console.log(contactsInitialState);

// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: contactsInitialState,
//     reducers: {
//         deleteContact(state, action) {
//             console.log('hello');
//             console.log(state);
//             const index = state.findIndex(contact => contact.id === action.payload);
//             console.log(index);
//             state.splice(index, 1);
//         }
//     }
// });

// export const { deleteContact } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;

// // export const deleteContact = (contactId) => {
// //     return {
// //         type: 'contacts/deleteContact',
// //         playload: contactId
// //     }
// // }
