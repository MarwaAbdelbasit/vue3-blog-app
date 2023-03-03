<template>
  <div class="home">
    <h1>Home</h1>
    
    <div v-if="error">{{ error }}</div>
    <posts-list v-if="posts.length" :posts="posts"></posts-list>
    <div v-else>Loading ...</div>
  </div>
</template>

<script>
import { ref } from 'vue'
import PostsList from '../components/PostsList.vue'
import { getPosts } from '../composables/posts'

export default {
  name: 'HomeView',
  components: { PostsList },
  setup() {
    const {
      posts,
      fetchPosts,
      error
    } = getPosts()

    fetchPosts()

    return {
      posts,
      fetchPosts,
      error
    }
  }
}
</script>
