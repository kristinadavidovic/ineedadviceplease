<template>
    <div id="nav" class="navigation" :class="`navigation--${type}`">
        <!-- main -->
        <template v-if="type == 'main'">
            <router-link
                v-for="link in mainLinks"
                :to="link.url"
                :key="link.id"
            >
                {{ link.name }}
            </router-link>
        </template>
        <!-- advice -->
        <template v-if="type == 'advice'">
            <router-link
                v-for="link in adviceLinks"
                :to="link.url"
                :key="link.id"
            >
                {{ link.name }}
            </router-link>
        </template>
        <template v-if="type == 'account'">
            <div v-if="$auth.loading" class="loader"></div>
            <div v-if="!$auth.loading">
                <a v-if="!$auth.isAuthenticated" @click="login">Sign in</a>
                <a v-if="$auth.isAuthenticated" @click="logout">Log out</a>
            </div>
        </template>
    </div>
</template>

<script>
    // utils
    import {
        ROUTE_ABOUT,
        ROUTE_ADVICE,
        ROUTE_COMPLIMENT,
        ROUTE_HOME,
    } from '../utils/constants';

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
                mainLinks: [
                    {
                        id: 1,
                        name: ROUTE_HOME,
                        url: '/',
                    },
                    {
                        id: 2,
                        name: ROUTE_ADVICE,
                        url: '/advice',
                    },
                    {
                        id: 3,
                        name: ROUTE_COMPLIMENT,
                        url: '/compliment',
                    },
                    {
                        id: 4,
                        name: ROUTE_ABOUT,
                        url: '/about',
                    },
                ],
                adviceLinks: [
                    {
                        id: 1,
                        name: 'random',
                        url: '/advice',
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
