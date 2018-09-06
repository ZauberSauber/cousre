const appState = (state={}, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {
                ...state,
                currentPage: ''
            };
        case 'GET_PAGE':
            return {
                ...state
            };
        case 'SET_STATE':
            return {
                ...state
            };
        default:
            return state
    }
};

export default appState;
