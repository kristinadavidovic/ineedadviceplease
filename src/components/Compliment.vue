<template>
    <div class="compliment">
        <navigation type="compliment" v-if="!loading"></navigation>
        <text-card :text="compliment" :loading="loading"></text-card>
        <div class="compliment-actions">
            <a
                @click="saveCompliment(compliment)"
                v-if="!loading && $auth.isAuthenticated"
                class="button compliment-action"
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
    import { COMPLIMENT_API_BASE_URL } from '../utils/constants';

    export default {
        name: 'Compliment',
        components: {
            TextCard,
            Navigation,
        },
        data() {
            return {
                compliment: '',
                loading: true,
            };
        },
        methods: {
            saveCompliment() {
                console.log('🤯', compliment);
            },
        },
        mounted() {
            axios
                .get(COMPLIMENT_API_BASE_URL)
                .then((response) => {
                    const { data } = response;
                    this.compliment = data.compliment;
                    this.loading = false;
                })
                .catch((error) => console.error(error));
        },
    };
</script>
