import Route from 'react-router-dom';

import * as chapter1 from '../components/pages/chapter1';

const routes = [
    {
        path: '/chapter1/page1',
        component: chapter1.Page1
    },{
        path: 'chapter1/page2',
        component: chapter1.Page2
    }
];
// todo: вывести роуты на главную
