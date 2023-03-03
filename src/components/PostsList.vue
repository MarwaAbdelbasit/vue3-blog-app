<template>
    <div v-for="post in posts" :key="post.id">
        <single-post :post="post"></single-post>
    </div>
    <popup></popup>
</template>

<script>
import SinglePost from './SinglePost.vue';
import Popup from './Popup.vue';

export default {
    name: 'PostsList',
    props: ['posts'],
    components: { SinglePost, Popup }
}
</script>

<style>

</style>