<template>
    <a class="button" @click="action">
        <slot></slot>
    </a>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            action: {
                type: String,
                required: true,
            },
        },
    };
</script>
