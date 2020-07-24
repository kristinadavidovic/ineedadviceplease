<template>
    <div id="app" class="app" ref="app">
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
                if (
                    this.$route.name == 'home' ||
                    this.$route.name == 'advice'
                ) {
                    this.$refs.app.className = 'app--advice';
                }

                this.$route.name == 'compliment' &&
                    (this.$refs.app.className = 'app--compliment');
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
