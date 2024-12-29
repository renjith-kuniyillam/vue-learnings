<template>
  <section>
    <h2>Select a Topic</h2>
    <knowledge-grid :topics="topics" ></knowledge-grid>
  </section>
</template>

<script>
export default {
  inject: ['topics'],
  props: ['topics'],
  emits: ['select-topic'],
};
</script>