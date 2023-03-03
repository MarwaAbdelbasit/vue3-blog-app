<template>
    <div>
        <router-link :to="{name:'Details', params: { id: post.id }}">{{ post.title }}</router-link>
        <p>{{ snippet }}</p>
    </div>
</template>

<script>
import { computed } from 'vue';
export default {
    name: 'SinglePost',
    props: ['post'],
    setup(props) {
        const snippet = computed(() => {
            return props.post.body.length>100 ? props.post.body.substring(0, 100) + '...' : props.post.body
        })

        return { snippet }
    }
}
</script>

<style>

</style>