<template>
    <section class="auth-container">
        <button @click="login" v-if="!isAuthenticated">Login</button>
        <button @click="logout" v-else>Logout</button>
    </section>
    
</template>
<style scoped>
.auth-container {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AuthContainer',
  computed: {
    ...mapGetters({
      isAuthenticated: 'userIsAuthenticated'
    })
  },
  methods: {
    login() {
        this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  }
};
</script>

