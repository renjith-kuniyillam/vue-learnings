import { createApp } from 'vue';

import App from './App.vue';
import { createStore } from 'vuex';

let store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload;
    }
  },
  actions: {
    increment(context) {
      console.log("context", context);
      setTimeout(function() {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
    login(context) {
      context.commit('setAuth', true);
    },
    logout(context) {
      context.commit('setAuth', false);
    }
  },
  getters: {
    counter(state) {
      return state.counter * 10;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.counter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    }
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
