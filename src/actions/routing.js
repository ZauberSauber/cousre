import * as routeActions from '../constants/routeActions';

/**
 * Action: переход по роуту
 *
 * @param {String} route
 *
 * @returns {*}
 */
export const routeGoTo = (route) => {
    return {
        type: routeActions.ROUTE_GO_TO,
        payload: route
    }
};
