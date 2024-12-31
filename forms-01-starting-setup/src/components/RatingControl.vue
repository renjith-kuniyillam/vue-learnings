<template>
  <div class="rating-control">
    <ul>
      <li>
        <button
          :class="{ selected: selectedRating === 'poor' }"
          @click="rate('poor')"
        >
          Poor
        </button>
      </li>
      <li>
        <button
          :class="{ selected: selectedRating === 'average' }"
          @click="rate('average')"
        >
          Average
        </button>
      </li>
      <li>
        <button
          :class="{ selected: selectedRating === 'best' }"
          @click="rate('best')"
        >
          Best
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props:['modelValue'],
    emits:['update:modelValue'],
  data() {
    return {
      selectedRating: this.modelValue,
    };
  },
  methods: {
    rate(rating) {
      this.selectedRating = rating;
      this.$emit('update:modelValue', rating);
    },
  },
};
</script>

<style scoped>
.selected {
  background-color: purple;
}
.rating-control {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}

.rating-control ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 10px;
}

.rating-control li {
  margin: 0;
}

.rating-control button {
  padding: 10px 20px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
  transition: background-color 0.3s;
}

.rating-control button:hover {
  background-color: #d0d0d0;
}

.rating-control button.selected:hover {
  background-color: green;
}

button.selected {
  background-color: purple;
}


</style>