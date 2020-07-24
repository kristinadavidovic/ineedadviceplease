<template>
    <div class="page page--home">
        I need
        <div class="page-buttons">
            <router-link to="/advice" class="button">
                advice
            </router-link>
            or
            <a class="button">
                compliment
            </a>
            , please.
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
    };
</script>
