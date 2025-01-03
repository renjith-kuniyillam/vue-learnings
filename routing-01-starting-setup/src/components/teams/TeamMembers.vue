<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  props:['teamId'],
  inject: ['users', 'teams'],
  data() {
    return {
      teamName: 'Test',
      members: [],
    };
  },
  methods: {
    getData() {
      // const teamId = this.$route.params.teamId;
      const teamId = this.teamId;
      if (teamId) {
        const team = this.teams.find((team) => team.id === teamId);
        if (team) {
          const teamMembers = this.users.filter((user) =>
            team.members.includes(user.id)
          );
          this.members = teamMembers;
        }
      } else {
        this.$emit('set-page', 'Teams');
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    next();
  },
  watch: {
    // '$route.params.teamId'() {
    //   this.getData();
    // },
    teamId() {
      this.getData();
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>