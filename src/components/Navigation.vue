<template>
    <div id="nav" class="navigation" :class="`navigation--${type}`">
        <router-link v-for="link in routerLinks" :to="link.url" :key="link.id">
            {{ link.name }}
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
        props: {
            type: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                routerLinks: [
                    {
                        id: 1,
                        name: 'Home',
                        url: '/',
                    },
                    {
                        id: 2,
                        name: 'About',
                        url: '/about',
                    },
                ],
            };
        },
    };
</script>
