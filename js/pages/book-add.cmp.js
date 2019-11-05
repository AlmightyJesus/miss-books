'use strict';
import { eventBus } from '../services/event-bus-service.js'
import { bookService } from '../services/book-service.js';

export default {
    template: `
    <div>
        <h1> Add a book </h1>
        <form @submit.prevent="searchBooks">
            <input placeholder="Enter Book Name" type="text" v-model="bookName" ref="bookNameInput">
            <button>Search!</button>
        </form>

        <ul v-if="resultsToShow">
            <li v-for="book in resultsToShow">
                <p>Title: {{book.title}}</p>
                <p>Authors: {{...book.authors}}</p>
                <button @click="onAddBook(book.id)">Add</button>
            </li>
        </ul>

    </div>
    `,
    data() {
        return {
            bookName: '',
            resultsToShow: null,
            bookSearchResults: null,
        }
    },
    methods: {
        searchBooks() {
            bookService.getBooksByTitle(this.bookName)
                .then(books => {
                    var booksInfo = books.map(book => {
                        return {
                            id: book.id,
                            title: book.volumeInfo.title,
                            authors: book.volumeInfo.authors
                        }
                    })
                    this.bookSearchResults = books
                    this.resultsToShow = booksInfo
                    this.bookName = ''
                })
                .catch(() => {
                    let msg = {
                        txt: `Book not found`,
                        type: 'error'
                    }
                    eventBus.$emit('show-msg', msg);
                })
        },
        onAddBook(bookId) {
            var selectedBook = this.bookSearchResults.find(book => book.id === bookId)
            bookService.addBook(selectedBook)
                .then(book => {
                    let msg = {
                        txt: `${book.title} Added succesfully!`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg)
                    this.$router.push(`/book/${book.id}`)
                })
                .catch(err => {
                    let msg = {
                        txt: `book not added (${err})`,
                        type: 'error'
                    }
                    eventBus.$emit('show-msg', msg);
                })
        }
    },
    computed: {


    },
    mounted(){
        this.$refs.bookNameInput.focus()
    }
}
