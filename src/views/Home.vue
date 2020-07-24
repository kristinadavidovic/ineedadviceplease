<template>
    <div class="page page--home">
        <div class="page-buttons">
            I need
            <router-link to="/advice" class="button">
                advice
            </router-link>
            or
            <router-link class="button" to="/compliment">
                compliment
            </router-link>
            , please.
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
    };
</script>
