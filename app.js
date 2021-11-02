// new application instance
const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: "Don't Make Me Think, Revisited", author: 'Steve Krug' },
        { title: 'A Project Guide to UX Design', author: 'Ross Unger' },
        { title: 'Just Enough Research', author: 'Erika Hall' },
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
