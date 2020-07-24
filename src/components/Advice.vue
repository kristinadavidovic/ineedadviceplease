<template>
    <div class="advice">
        <navigation type="advice" v-if="!loading"></navigation>
        <text-card :text="advice.advice" :loading="loading"></text-card>
        <div class="advice-actions">
            <a
                @click="saveAdvice(advice)"
                v-if="!loading && $auth.isAuthenticated"
                class="button advice-action"
            >
                Save
            </a>
        </div>
    </div>
</template>

<script>
    // 3rd
    import axios from 'axios';
    // components
    import TextCard from './TextCard';
    import Navigation from './Navigation';
    // utils
    import { ADVICE_API_BASE_URL } from '../utils/constants';

    export default {
        name: 'Advice',
        components: {
            TextCard,
            Navigation,
        },
        data() {
            return {
                advice: '',
                loading: true,
            };
        },
        mounted() {
            axios
                .get(ADVICE_API_BASE_URL)
                .then((response) => {
                    if (!response) return;
                    const { data } = response;
                    this.advice = data.slip;
                    this.loading = false;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        methods: {
            saveAdvice(advice) {
                // this.store.commit('addAdvice', advice);
                console.log('🤯', advice);
            },
        },
    };
</script>
