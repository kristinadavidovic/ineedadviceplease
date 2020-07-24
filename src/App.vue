<template>
    <div id="app" class="app app--advice" ref="app">
        <router-view />
        <navigation type="main"></navigation>
        <navigation type="account"></navigation>
    </div>
</template>

<script>
    import Navigation from './components/Navigation';

    export default {
        name: 'App',
        components: {
            Navigation,
        },
        methods: {
            handleStyles() {
                this.$route.name == 'advice' &&
                    (this.$refs.app.className = 'app app--advice');

                this.$route.name == 'compliment' &&
                    (this.$refs.app.className = 'app app--compliment');
            },
        },
        mounted() {
            this.handleStyles();
        },
        watch: {
            $route() {
                this.handleStyles();
            },
        },
        data() {
            return {
                backgroundColor: '',
            };
        },
    };
</script>
