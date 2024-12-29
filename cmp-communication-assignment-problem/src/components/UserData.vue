<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="age">Username:</label>
      <input type="text" v-model="username" placeholder="Enter your name" />
    </div>
    <div>
      <label for="age">Age:</label>
      <input type="number" v-model="age" placeholder="Enter your age" />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: {
    submit: function (userData) {
      if (userData.username && userData.age) {
        return true;
      } else {
        console.warn("Please enter your name and age");
        return false;
      }
    },
  },
  data() {
    return {
      username: "",
      age: 0,
    };
  },
  methods: {
    onSubmit() {
      const userData = {
        username: this.username,
        age: this.age,
      };
      this.$emit("submit", userData);
    },
  },
};
</script>
