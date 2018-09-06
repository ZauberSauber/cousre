import * as routeActions from '../constants/routeActions';

const initialState = {
    path: '/',
    history: []
};

const routes = (state = initialState, action) => {
    switch (action.type) {
        case routeActions.ROUTE_GO_TO:
            return {
                ...state,
                history: [...state.history, action.payload]
            };
        case 'GO_BACK':
            return {
                ...state
            };
        default:
            return state
    }
};

export default routes;
