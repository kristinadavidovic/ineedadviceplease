<template>
    <div class="page page--home">
        <text-card></text-card>
    </div>
</template>

<script>
    import TextCard from '@/components/TextCard.vue';

    export default {
        name: 'Home',
        components: {
            TextCard,
        },
    };
</script>
