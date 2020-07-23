<template>
    <div class="page page--home">
        <advice></advice>
        <button>Save Advice</button>
    </div>
</template>

<script>
    // components
    import Advice from '../components/Advice';

    export default {
        name: 'Home',
        components: {
            Advice,
        },
    };
</script>
