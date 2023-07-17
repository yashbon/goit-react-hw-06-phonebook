const filterInitialState = {
    filter: '',
};

export const filterReducer = (state = filterInitialState, action) => {
    switch (action.type) {
        case 'contacts/filter':
            return { ...state, filter: action.payload };
        default:
            return state;
    }
};

export const applyFilter = filterValue => {
    return {
        type: 'contacts/filter',
        payload: filterValue,
    };
};
