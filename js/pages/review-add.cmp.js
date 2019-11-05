'use strict';
import { bookService } from "../services/book-service.js";
import { eventBus } from '../services/event-bus-service.js'

export default {

    template: `
    <form @submit.prevent="submitForm" class ="review-form">
        <input v-model="review.name" type="text" placeholder="Name">
        <select v-model.number="review.rate">
            <option hidden value="">Rate</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <label for="date-input">Read at:</label>
        <input v-model="review.readAt" id="date-input" type="date">
        <textarea v-model="review.freeTxt" placeholder="Write your review here" cols="30" rows="5"></textarea>
        <button>Add review!</button>
    </form>
    `,
    data() {
        return {
            review: {
                name: '',
                rate: '',
                readAt: '',
                freeTxt: ''
            }
        }
    },
    methods: {
        //add than also in remove btn
        submitForm() {
            const bookId = this.$route.params.id;
            bookService.addReview(bookId, this.review)
                .then(() => {
                    const msg = {
                        txt: `${this.review.name}'s review sent succefully!`,
                        type: 'success'
                    }
                    eventBus.$emit('show-msg', msg);
                    this.$router.push(`/book/${bookId}`)


                })
                .catch(err => {
                    const msg = {
                        txt: `review not sent (${err})`,
                        type: 'error'
                    }
                    eventBus.$emit('show-msg', msg);
                })
        }
    },
    computed: {

    }
}
