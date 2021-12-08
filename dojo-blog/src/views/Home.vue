<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="toggle">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "welcome to the blog",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum exercitationem quasi corporis!",
        id: 1,
      },
      { title: "top 5 CSS tips", body: "lorem ipsum", id: 2 },
    ]);
    const showPosts = ref(true);

    const toggle = () => {
      showPosts.value = !showPosts.value;
    };

    return { posts, showPosts, toggle };
  },
};
</script>
