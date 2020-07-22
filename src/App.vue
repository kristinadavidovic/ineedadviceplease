<template>
    <div id="app" class="app">
        <router-view />
        <navigation type="main"></navigation>
    </div>
</template>

<script>
    import Navigation from './components/Navigation';

    export default {
        name: 'App',
        components: {
            Navigation,
        },
    };
</script>
