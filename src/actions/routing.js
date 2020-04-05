import * as routeActions from '../constants/routeActions';

/**
 * Action: переход по роуту
 *
 * @returns {{payload: {direction: *}, type: string}}
 */
export const routeGoNext = () => ({
        type: routeActions.ROUTE_GO_NEXT,
        payload: {direction: 'next'}
    });


export const routeGoBack = () => ({
    type: routeActions.ROUTE_GO_BACK,
    payload: {direction: 'back'}
});
