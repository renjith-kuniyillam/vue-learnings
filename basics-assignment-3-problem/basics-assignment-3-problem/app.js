var app = Vue.createApp({
  data() {
    return {
      num: 0
    };
  },
  computed: {
    result() {
      if (this.num < 37) {
        return "Not there yet";
      } else if (this.num >= 37) {
        return this.num;
      } 
    },
  },
  watch: {
    num() {
      const that = this;
      if(that.num >= 45) {
        setTimeout(function() {
          that.num = 0;
        }, 5000);
      }
    }
  },
  methods: {
    addFive() {
      this.num += 5;
    },
    addOne() {
      this.num += 1;
    },
  },
});

app.mount("#assignment"); // mount the app to the div with id app
