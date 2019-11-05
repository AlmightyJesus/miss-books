'use strict';

import bookApp from './pages/book-app.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
import aboutPage from './pages/about.cmp.js';
import homepage from './pages/homepage.cmp.js';
import bookReview from './pages/review-add.cmp.js';
import bookAdd from './pages/book-add.cmp.js';


const harta = {
    template : `
        <section class="our-vision" >
            <h3>Harta!</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero nesciunt optio, excepturi explicabo harum consequatur eveniet at facilis pariatur iusto architecto minus commodi sequi eos cupiditate, hic aliquid nostrum modi?</p>
                
        </section>
    `
}

const myRoutes = [

    {
        path: '/books',
        component: bookApp
    },
    {
        path: '/about',
        component: aboutPage,
        children: [
            {
                path: 'harta',
                component: harta
            }]
    },
    {
        path: '/',
        component: homepage
    },
    {
        path: '/book/:id',
        component: bookDetails,
    },
    {
        path: '/add',
        component: bookAdd
    },
    {
        path: '/book/review/:id',
        component: bookReview
    }

]
const myRouter = new VueRouter({ routes: myRoutes })

export default myRouter;

