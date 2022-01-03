import { ref } from 'vue';
import { projectFirestore } from '../firebase/config';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      // simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 2000);
      // });

      // read our JSON
      // let data = await fetch('http://localhost:3000/posts');
      // if (!data.ok) {
      //   throw Error('no available data');
      // }
      // posts.value = await data.json();

      // Retrieving a collection with Firestore
      const res = await projectFirestore
        .collection('posts')
        .orderBy('createdAt', 'desc')
        .get();
      // console.log(res.docs);

      if (res.empty) {
        throw Error('no available data');
      }

      posts.value = res.docs.map((doc) => {
        // console.log(doc.data());
        return { ...doc.data(), id: doc.id };
      });

      // console.log(posts.value);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
