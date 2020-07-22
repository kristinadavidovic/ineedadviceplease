<template>
    <div class="text-card" v-if="advice">
        {{ advice }}
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'TextCard',
        data() {
            return {
                advice: '',
            };
        },
        mounted() {
            axios
                .get('https://api.adviceslip.com/advice')
                .then((response) => {
                    if (!response) return;
                    const { data } = response;
                    this.advice = data.slip.advice;
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    };
</script>
