import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        savedAdvice: [
            {
                id: 0,
                advice: 'Test Store',
            },
        ],
        savedCompliments: [],
    },
    mutations: {
        addAdvice(state, payload) {
            console.log('🤯STATE: ', state);
            console.log('🤯PLAYLOAD: ', payload);
            state.savedAdvice.push(payload);
        },
    },
    actions: {},
    modules: {},
});
