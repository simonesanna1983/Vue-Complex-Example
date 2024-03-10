import './style.css';

var app = new Vue({
  el: '#app',
  data: {
    todos: [],
    isTodosVisible: true,
    users: [],
    cats: [],
    showLoading: false,
    carouselValue1: 'Hello from parent',
    carouselValue2: 'Hello from parent',
  },
  mounted() {
    this.fetchTodos();
    this.fetchCats();
  },
  methods: {
    handleValueCallBack: function (type, value) {
      if (type === 'first') {
        this.carouselValue1 = value;
      }

      if (type === 'second') {
        this.carouselValue2 = value;
      }
    },
    manageTodosVisibility: function () {
      debugger;
      this.isTodosVisible = !this.isTodosVisible;
    },

    deleteTodo: function (id) {
      const ret = this.todos.filter((x) => x.id !== id);
      console.log('todos filtered ->', ret);
      this.todos = ret;
    },

    //Fetch
    fetchTodos() {
      this.showLoading = true;
      // Make a GET request to fetch todos data
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => {
          // Assign the fetched data to the todos array
          this.todos = data.slice(0, 5);
          this.showLoading = false;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          this.showLoading = false;
        });
    },

    fetchUsers: function () {
      this.showLoading = true;
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          // Assign the fetched data to the todos array
          this.users = data;
          this.showLoading = false;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          this.showLoading = false;
        });
    },

    fetchCats: function () {
      fetch('https://65eb385843ce164189338214.mockapi.io/photos')
        .then((response) => response.json())
        .then((data) => {
          this.cats = data;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },
  },
});
