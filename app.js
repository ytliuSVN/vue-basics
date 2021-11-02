// new application instance
const app = Vue.createApp({
  data() {
    return {
      url: 'https://www.kaiostech.com/store/',
      showBooks: true,
      books: [
        {
          title: "Don't Make Me Think, Revisited",
          author: 'Steve Krug',
          img: 'assets/1.jpg',
        },
        {
          title: 'A Project Guide to UX Design',
          author: 'Ross Unger',
          img: 'assets/2.jpg',
        },
        {
          title: 'Just Enough Research',
          author: 'Erika Hall',
          img: 'assets/3.jpg',
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
  },
});

app.mount('#app');
