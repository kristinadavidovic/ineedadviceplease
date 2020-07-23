<template>
    <div class="text-card">
        <div class="loader" v-if="loading"></div>
        <div v-if="!loading && text">
            {{ text }}
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'TextCard',
        props: {
            text: {
                type: String,
                required: false,
            },
            loading: {
                type: Boolean,
                required: false,
                default: true,
            },
        },
    };
</script>
