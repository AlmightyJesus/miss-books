'use strict';
import LongTxt from '../cmps/long-txt.cmp.js';
import reviewAdd from './review-add.cmp.js';
import reviews from '../cmps/reviews.cmp.js';
import { bookService } from '../services/book-service.js';

export default {
    template: `
    <section class="book-details" v-if="book">
        <h2>Title: {{book.title}}</h2>
        <h2>{{showBookLength}}</h2>
        <h2>{{showBookAge}}</h2>
        <h2 :class="priceClass">Price: {{book.listPrice.amount}}{{book.listPrice.currencyCode}}</h2>
        <h2>{{isOnSale}}</h2>
        <long-txt v-bind:txt="book.description" :key="book.id"></long-txt>
        <router-link :to="getBookLink">Write a review</router-link>
        <ul class="reviews-list">
            <reviews v-for="(review,idx) in book.reviews" :bookId="book.id" :idx="idx" :review="review" :key="idx"></reviews>
        </ul>
        <router-link :to="'/book/'+prevBookId">&lt; Prev Book</router-link>
        <router-link :to="'/book/'+nextBookId">Next Book &gt;</router-link>
    </section>
    `,
    data() {
        return {
            currYear: new Date().getFullYear(),
            book: '',
            nextBookId: '',
            prevBookId: ''
        }
    },
    methods: {
        loadBook() {
            const bookId = this.$route.params.id;
            if(bookId)
            bookService.findBook(bookId)
                .then(book => {
                    this.book = book;
                    this.nextBookId = bookService.getNextBookId(book.id,1);
                    this.prevBookId = bookService.getNextBookId(book.id,-1);
                })
        }
    },
    computed: {
        showBookLength() {
            var currBook = this.book
            if (currBook.pageCount > 500) return 'Long reading'
            else if (currBook.pageCount > 200) return 'Decent reading'
            else if (currBook.pageCount < 100) return 'Light reading'
        },
        showBookAge() {
            var currBook = this.book
            if (this.currYear - currBook.publishedDate > 10) return 'Old Book!'
            else if (this.currYear - currBook.publishedDate < 2) return 'New Book!'
        },
        priceClass() {
            var currBook = this.book
            if (currBook.listPrice.amount > 150) return { red: true }
            if (currBook.listPrice.amount < 20) return { green: true }
        },
        isOnSale() {
            if (this.book.listPrice.isOnSale) return 'On Sale!'
        },
        getBookLink() {
            return `/book/review/${this.book.id}`
        },
    },
    created() {
        this.loadBook() 
    },
    components: {
        LongTxt,
        reviewAdd,
        reviews
    },
    watch:{
        '$route.params.id'() {
            this.loadBook();
        }
    }
}