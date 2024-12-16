var app = Vue.createApp({
  data() {
    return {
      textValue: "",
      textKeyDownEnter: "",
    };
  },
  methods: {
    onAlertClick() {
      alert("Hello, Vue 3!");
    },
    onKeyDown(event) {
      this.textValue = event.target.value;
    },
    onKeyDownEnter(event) {
      this.textKeyDownEnter = event.target.value;
    },
  },
});

app.mount("#event-practice");
