<template>
  <button type="button" @click="confirmButton('teams-list')">Confirm</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data() {
    return {
      savedChanges: false
    }
  },
  inject: ['users'],
  methods: {
    confirmButton() {
      this.$router.push('/teams');
      this.$router.forward();
      this.$router.back();
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.savedChanges) {
      next();
    } else {
      const confirmed = window.confirm('Do you want to leave without saving?');
      if (confirmed) {
        next();
      }
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>