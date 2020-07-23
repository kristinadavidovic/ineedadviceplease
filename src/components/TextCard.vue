<template>
    <div>
        <div class="text-card">
            <div class="loader" v-if="loading"></div>
            <div v-if="!loading && advice">
                {{ advice }}
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'TextCard',
        data() {
            return {
                advice: '',
                loading: true,
            };
        },
        mounted() {
            axios
                .get('https://api.adviceslip.com/advice')
                .then((response) => {
                    if (!response) return;
                    const { data } = response;
                    this.advice = data.slip.advice;
                    this.loading = false;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    };
</script>
