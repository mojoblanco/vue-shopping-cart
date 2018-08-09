import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { // = data
        products: []
    },
    getters: { // = computed properties
        productsCount() {

        },
        availableProducts(state, getters) {
            return state.products.filter(product => product.inventory > 0)
        }
    },
    actions: { // = methods
        fetchProducts() {

        }
    },
    mutations: {
        setProducts(state, products) {
            state.products = products
        }
    }
})