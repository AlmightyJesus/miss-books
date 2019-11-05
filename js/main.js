'use strict';
Vue.config.devtools = false
// google books api
// AIzaSyBrh2mKC19GI4B3XHUGHS4MfxDzKzn6skc
import theRouter from './routes.js'
import appHeader from './cmps/app-header.cmp.js';
import userMsg from './cmps/user-msg.cmp.js';

var options = {
    router: theRouter,
    el: '#my-app',
    template: `
    <div>
        <user-msg></user-msg>
        <app-header></app-header>
        <router-view></router-view>
    </div>
    `,
    data: {

    },
    methods: {


    },
    computed: {

    },
    components: {
        appHeader,
        userMsg
    }

}

new Vue(options);
