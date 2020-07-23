<template>
    <div class="page page--advice-saved">
        <div class="page__heading">
            <h1>Saved Advice</h1>
            <div class="page__display-options">
                <div>Grid</div>
                <div>List</div>
            </div>
        </div>
        <advice-list></advice-list>
    </div>
</template>

<script>
    import AdviceList from '../components/AdviceList';

    export default {
        name: 'AdviceSaved',
        components: {
            AdviceList,
        },
    };
</script>
