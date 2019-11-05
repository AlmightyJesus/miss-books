'use strict';
import theRouter from '../routes.js'


export default {
    router: theRouter,
    template: `
    <nav class="nav-bar">
        <router-link to="/books" exact>books</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/" exact>Homepage</router-link>
    </nav>
    `,
    data() {
        return {

        }
    },
    methods: {
    },
    computed: {
    },
    components: {
    }
}
