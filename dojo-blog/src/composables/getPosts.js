import { ref } from 'vue';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // read our JSON
      let data = await fetch('http://localhost:3000/posts');
      posts.value = await data.json();

      if (!data.ok) {
        throw Error('no available data');
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
