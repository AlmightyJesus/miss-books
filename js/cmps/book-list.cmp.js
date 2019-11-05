'use strict';

import bookPreview from './book-preview.cmp.js';

export default {
    props: ['books'],
    template: `
    <section class="">
        <ul class="book-list">
        <router-link :key="currBook.id" v-for="currBook in books" :to="'/book/'+currBook.id"><book-preview :book="currBook"></book-preview></router-link>
        </ul>
    </section>
    `,
    data() {
        return {
        }
    },
    methods: {

    },
    computed: {
    },
    created() {

    },
    components: {
        bookPreview
    }
}