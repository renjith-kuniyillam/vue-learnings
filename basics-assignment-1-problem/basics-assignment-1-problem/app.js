var app = Vue.createApp({
  data() {
    return {
      name: "Renjith",
      age: 30,
      randomNumber: Math.random(),
      imageUrl:
        "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
      inputText: "Hello World",
    };
  },
  methods: {
    setName(event, someValue) {
      this.name = someValue + event.target.value;
    },
    getRandomNumber() {
      if (this.randomNumber > 0.5) {
        return "Greater than 0.5";
      } else {
        return "Less than 0.5";
      }
    },
  },
});

app.mount("#assignment");
