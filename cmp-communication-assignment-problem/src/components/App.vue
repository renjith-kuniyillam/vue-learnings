<template>
  <div class="wrapper">
    <div><user-data @submit="onUserSubmit"></user-data></div>
    <div>
      <active-user
        :username="activeUsername"
        :age="activeUserAge"
      ></active-user>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      activeUsername: "",
      activeUserAge: 0,
    };
  },
  methods: {
    onUserSubmit(userData) {
      this.activeUsername = userData.username;
      this.activeUserAge = userData.age;
    },
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
}
</style>