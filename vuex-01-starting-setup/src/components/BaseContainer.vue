<template>
  <section v-if="isAuthenticated">
    <h2>{{ title }}</h2>
    <the-counter></the-counter>
    <my-favorite-counter></my-favorite-counter>
    <button @click="increment">Increment by 1</button>
    <button @click="increaseByTen({ value: 10})">Increase by 10</button>
    <slot></slot>
  </section>
</template>

<script>
import TheCounter from './TheCounter.vue';
import MyFavoriteCounter from './MyFavoriteCounter.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  props: ['title'],
  components: {
    TheCounter,
    MyFavoriteCounter
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    ...mapGetters({
      isAuthenticated: 'userIsAuthenticated'
    })
  },
  methods: {
    // increment() {
    //   //this.$store.commit('increment');
    //   //this.$store.dispatch('increment');
    //   this.$store.dispatch({
    //     type: 'increment',
    //     value: 1
    //   });
    // },
    // increaseByTen() {
    //   //this.$store.commit('increase', { value: 10});
    //   this.$store.dispatch('increase', { value: 10});
    // }
    ...mapActions({
      increment: 'increment',
      increaseByTen: 'increase'
    })
  }
};
</script>

<style scoped>
section {
  max-width: 30rem;
  margin: 2rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

h2 {
  text-align: center;
}
</style>