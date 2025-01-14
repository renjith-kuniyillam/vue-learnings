<template>
  <h3>{{ counter }}</h3>  
</template>

<script>

import { mapGetters } from 'vuex';
export default {
  name: 'TheCounter',
  computed: {
    // counter() {
    //   return this.$store.getters.counter;
    // }
    ...mapGetters(['counter'])
  },

};
</script>