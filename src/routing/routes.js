import { Structure } from '../components/pages';


/**
 * Струкутра роутов приложения
 *
 * @type {Array}
 */
export let routes = [];

export let appIndex = [];
let index = 0;

for (let chapter in Structure) {
   if ( Structure.hasOwnProperty(chapter) ) {
       appIndex[index] = [];

       for (let page in Structure[chapter]) {
           if ( Structure[chapter].hasOwnProperty(page)) {
               appIndex[index].push({
                   path: `/${chapter}/${page}`,
               });
               routes.push({
                   path: `/${chapter}/${page}`,
                   component: Structure[chapter][page]
               })
           }
       }

       index++;
   }
}

console.log(appIndex);
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
