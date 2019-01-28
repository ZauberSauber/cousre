import { Structure } from '../components/pages';
/**
 * Струкутра роутов приложения
 *
 * @type {Array}
 */
export let routes = [];

for (let chapter in Structure) {
   if ( Structure.hasOwnProperty(chapter) ) {
       for (let page in Structure[chapter]) {
           if ( Structure[chapter].hasOwnProperty(page)) {
               routes.push({
                   path: `/${chapter}/${page}`,
                   component: Structure[chapter][page]
               })
           }
       }
   }
}
// Пример сгенерированного роутинга
/*export const routes = [
    {
        path: '/chapter1/page1',
        component: Structure.chapter1.Page1_1
    },{
        path: '/chapter1/page2',
        component: Structure.chapter2.Page2_1
    }
];*/
