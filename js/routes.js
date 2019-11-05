'use strict';

import bookApp from './cmps/book-app.cmp.js';
import bookDetails from './cmps/book-details.cmp.js';
import aboutPage from './cmps/about.cmp.js';
import homepage from './cmps/homepage.cmp.js';
import bookReview from './cmps/review-add.cmp.js';



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