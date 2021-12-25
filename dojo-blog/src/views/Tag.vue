<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="postsWithTag" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script>
// challenge
//   - create a tag route, which the tag as a route parameter (/posts/:tag)
//   - in the Tag view, make a request for all the posts
//   - use the useRoute function to access the tag route parameter
//   - use a computed property to return an array of posts which have that tag
//   - use the PostList component to output the required posts
//   - show the spinner until the data is loaded, and error if there is one

import PostList from "@/components/PostList.vue";
import getPosts from "@/composables/getPosts";
import Spinner from "@/components/Spinner.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  name: "Tag",
  components: { PostList, Spinner },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();

    load();

    const postsWithTag = computed(() => {
      return posts.value.filter((p) => p.tags.includes(route.params.tag));
    });

    return { posts, error, postsWithTag };
  },
};
</script>

<style>
</style>