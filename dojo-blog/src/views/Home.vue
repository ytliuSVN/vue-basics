<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        // read our JSON
        let data = await fetch("http://localhost:3000/posts");
        posts.value = await data.json();

        if (!data.ok) {
          throw Error("no available data");
        }
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    load();

    return { posts, error };
  },
};
</script>
