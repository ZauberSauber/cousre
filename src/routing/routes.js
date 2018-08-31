import Route from 'react-router-dom';

import { Structure } from '../components/pages';

console.log(Structure);

export const routes = [
    {
        path: '/chapter1/page1',
        component: Structure.chapter1.Page1_1
    },{
        path: '/chapter1/page2',
        component: Structure.chapter2.Page2_1
    }
];
