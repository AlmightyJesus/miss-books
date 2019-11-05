'use strict';

export default {
    template: `
    <section class="">
        <h2>Filter Books:</h2>
        <form @submit.prevent="setFilter">
            <input placeholder="Srearch by Name" v-model="filterBy.title" type="text">
            <input placeholder="From" v-model.number="filterBy.fromPrice" type="text">
            <input placeholder="To" v-model.number="filterBy.toPrice" type="text">
            <button>Filter!</button>
        </form>
    </section>
    `,
    data() {
        return {
            filterBy: {
                title: '',
                fromPrice: 0,
                toPrice: Infinity
            },
        }
    },
    methods:{
        setFilter(){
            this.$emit('filtered', this.filterBy)
            this.filterBy = {
                title: '',
                fromPrice: 0,
                toPrice: Infinity
            }
        }
    },
    created() {
        
    }
}