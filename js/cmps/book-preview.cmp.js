'use strict';

export default {
    props: ['book'],
    template: `
    <li>
        <h2>{{book.title}}</h2>
        <img class="review-img" :src="book.thumbnail" :alt="book.title">
        
        <h3>Price:{{book.listPrice.amount}}{{showCurrency}}</h3>
    </li>
    `,
    data() {
        return {
            priceCurrency: this.book.listPrice.currencyCode
        }
    },
    computed: {
        showCurrency() {
            switch (this.priceCurrency) {
                case 'EUR':
                    return '€';
                case 'USD':
                    return '$';
                case 'ILS':
                    return '₪';
            }
        }
    },
    created() {

    }
}