<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="activateTheTopic(id)">Learn More</button>
  </li>
</template>

<script>
export default {
  inject: ['activateTheTopic'],
  props: ['id', 'topicName', 'description'],
  emits: ['select-topic'],
};
</script>