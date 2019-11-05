'use strict';

import { bookService } from '../services/book-service.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookList from '../cmps/book-list.cmp.js';
import bookDetails from './book-details.cmp.js';

export default {
    template: `
    <div>
        <book-details></book-details>
        <book-filter @filtered="setFilter"></book-filter>
        <book-list :books="booksToShow"></book-list>
    </div>
    `,
    data() {
        return {
            books: [],
            filterBy: null,
            selectedBook: ''
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filterBy = filterBy
        },
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            var regex = new RegExp(`${this.filterBy.title}`, 'i');
            return this.books.filter(book => {
                return regex.test(book.title) &&
                    book.listPrice.amount >= this.filterBy.fromPrice &&
                    book.listPrice.amount <= this.filterBy.toPrice
            })
        }
    },
    created() {
        bookService.getBooks()
            .then(books => {
                this.books = books
            })

    },
    components: {
        bookFilter,
        bookList,
        bookDetails,
    }
}