import { createApp } from 'vue';
import App from './App.vue';
import FriendContanct from './components/FriendContact.vue';



let app = createApp(App);
app.component('friend-contact',  FriendContanct);
app.mount('#app');
