const app = Vue.createApp({
  data() {
    return { goals: [], goalToAdd: "" };
  },
  methods: {
    addGoalToList() {
      if (this.goalToAdd !== "") {
        this.goals.push(this.goalToAdd);
        this.goalToAdd = "";
      }
    },
    removeItem(index) {
      this.goals.splice(index, 1);
    }
  },
});

app.mount("#user-goals");
