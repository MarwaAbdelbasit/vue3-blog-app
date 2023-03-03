import { ref } from "vue"

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const fetchPosts = async () => {
        try {
            const data = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!data.ok) {
                throw Error('No data available!')
            }
            posts.value = await data.json()
        } catch (err) {
            error.value = err.message
        }
    }

    return { posts, error, fetchPosts }
}

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const fetchPost = async () => {
        try {
            const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            if(!data.ok) {
                throw Error('This Post is not available!')
            }
            post.value = await data.json()
        } catch (err) {
            error.value = err.message
        }
    }

    return { post, error, fetchPost }
}

export {
    getPosts,
    getPost
}