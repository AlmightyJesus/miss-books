'use strict';

import bookApp from './pages/book-app.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
import aboutPage from './pages/about.cmp.js';
import homepage from './pages/homepage.cmp.js';
import bookReview from './pages/review-add.cmp.js';



const myRoutes = [

    {
        path: '/books',
        component: bookApp
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/',
        component: homepage
    },
    {
        path: '/book/:id',
        component: bookDetails
    },
    {
        path: '/book/review/:id',
        component: bookReview
    }

]
const myRouter = new VueRouter({ routes: myRoutes })

export default myRouter;