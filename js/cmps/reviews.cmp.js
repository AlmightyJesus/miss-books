'use strict';

import { bookService } from '../services/book-service.js';
import { eventBus } from '../services/event-bus-service.js'


export default {
    props: ['review', 'idx', 'bookId'],
    template: `
    <section>
        <ul  class="reviews-list">Review:
            <li>Reviewer name:{{review.name}}</li>
            <li>Read at:{{review.readAt}}</li>
            <li>Reaview:{{review.freeTxt}}</li>
            <li>Rate:{{review.rate}}</li>
        </ul>
        <button @click="removeReviewBtn()">x</button>
    </section>
    `,
    methods: {
        removeReviewBtn() {
            bookService.removeReview(this.bookId, this.idx)
                .then(() => {
                    const msg = {
                        txt: `${this.review.name}'s review deleted succefully!`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg)
                })
                .catch(err => {
                    const msg = {
                        txt: `review not deleted (${err})`,
                        type: 'error'
                    }
                    eventBus.$emit('show-msg', msg);
                })
        }
    }
}
