<template>
    <div v-if="error">{{ error }}</div>
    <div v-if="post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.body }}</p>
    </div>
    <div v-else>Loading ...</div>
</template>

<script>
import { getPost } from '@/composables/posts';
import SinglePost from '@/components/SinglePost.vue';
export default {
    name: 'Details',
    props: ['id'],
    components: { SinglePost },
    setup(props) {
        const { post, error, fetchPost } = getPost(props.id)

        fetchPost()

        return { post, error }
    }
}
</script>

<style>

</style>