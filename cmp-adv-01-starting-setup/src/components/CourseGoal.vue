<template>
  <ul>
    <li v-for="goal in courseGoals" :key="goal.id">
        <slot name="iterationItem" :item="goal" :some-prop="someValue"></slot>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    courseGoals: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
        someValue: 'some value'
    };
  },
};
</script>
