<template>
    <div class="advice-list">
        <div v-for="item in savedAdvice">
            {{ item.advice }}
        </div>
    </div>
</template>

<script>
    // 3rd
    import { mapState } from 'vuex';

    export default {
        name: 'AdviceList',
        computed: {
            ...mapState(['savedAdvice']),
            savedAdvice() {
                return this.$store.state.savedAdvice;
            },
        },
        mounted() {
            console.log('🚀', this.$store.state);
        },
    };
</script>
