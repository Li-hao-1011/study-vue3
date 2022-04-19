const App = {
  template: "#my-app",
  data() {
    return {
      books: [
        {
          id: 1,
          name: "《算法导论》",
          date: "2006-9",
          price: 85.0,
          count: 1,
        },
        {
          id: 2,
          name: "《UNIX编程艺术》",
          date: "2006-2",
          price: 59.0,
          count: 1,
        },
        {
          id: 3,
          name: "《编程珠玑》",
          date: "2008-10",
          price: 39.0,
          count: 1,
        },
        {
          id: 4,
          name: "《代码大全》",
          date: "2006-3",
          price: 128.0,
          count: 1,
        },
      ],
    };
  },
  methods: {
    addBook(index) {
      this.books[index].count++;
    },
    subBook(index) {
      this.books[index].count--;
    },
    removeBook(index) {
      this.books.splice(index, 1);
    },

    formatPrice(price){
      return "￥" + price;
    }
  },
  computed: {
    totalPrice() {
      let result = 0;
      for (const book of this.books) {
        result += book.price * book.count;
      }

      // result = this.books.reduce((previousValue, currentValue) => {
      //   console.log(previousValue, currentValue);
      //   return (
      //     previousValue.price * previousValue.count +
      //     currentValue.price * currentValue.count
      //   );
      // });

      return "￥" + result;
      // return this.books.reduce(
      //   (prevValue, currentValue) => prevValue + currentValue
      // );
    },

    filterBooks() {
      return this.books.map((book) => {
        const newBook = Object.assign({}, book);
        newBook.price = "￥" + newBook.price;

        return newBook;
      });
    },
  },
};

Vue.createApp(App).mount("#app");
