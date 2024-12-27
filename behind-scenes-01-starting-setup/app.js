const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  beforeCreate() {
    console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  unmounted() {
    console.log('unmounted');
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      //this.message = this.currentUserInput;
      this.message = this.$refs.userInput.value;
      console.dir(this.$refs.userInput);
    },
  },
});

app.mount('#app');

setTimeout(() => {
  app.unmount();
}, 3000);


const app2 = Vue.createApp({
  template: `
    <p>{{ testVarialbe }}</p>
  `,
  data() {
    return {
      testVarialbe: "This is app 2"
    }
  }
})

app2.mount('#app2')
