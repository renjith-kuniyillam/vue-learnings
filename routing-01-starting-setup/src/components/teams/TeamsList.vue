<template>
  <router-view></router-view>
  <ul>
    <teams-item
      v-for="team in teams"
      :id="team.id"
      :key="team.id"
      :name="team.name"
      :member-count="team.members.length"
    ></teams-item>
  </ul>
  
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
  data() {
    return {
      teamMembers: []
    }
  },
  components: {
    TeamsItem,
  },
  inject: ['teams'],
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter');
    next();
  },

};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 40rem;
  padding: 0;
}
</style>