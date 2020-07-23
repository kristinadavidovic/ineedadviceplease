<template>
    <div id="nav" class="navigation" :class="`navigation--${type}`">
        <router-link v-for="link in routerLinks" :to="link.url" :key="link.id">
            {{ link.name }}
        </router-link>
        <div v-if="$auth.loading" class="loader"></div>
        <div v-if="!$auth.loading">
            <a v-if="!$auth.isAuthenticated" @click="login">Sign in</a>
            <a v-if="$auth.isAuthenticated" @click="logout">Log out</a>
        </div>
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
                        name: 'Random Advice',
                        url: '/',
                    },
                    {
                        name: 'Saved Advice',
                        url: '/advice-saved',
                    },
                    {
                        name: 'About',
                        url: '/about',
                    },
                ],
            };
        },
        methods: {
            login() {
                this.$auth.loginWithRedirect();
            },
            logout() {
                this.$auth.logout({
                    returnTo: window.location.origin,
                });
            },
        },
    };
</script>
