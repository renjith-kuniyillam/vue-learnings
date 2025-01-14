<template>
  <base-container title="Vuex"></base-container>
  <auth-container></auth-container>
</template>

<script>
import AuthContainer from './components/AuthContainer.vue';
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
    AuthContainer
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>