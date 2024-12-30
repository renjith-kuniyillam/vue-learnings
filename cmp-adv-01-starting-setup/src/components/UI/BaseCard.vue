
<template>
    <div>
        <slot name="header">
            <h2>Default Header</h2>
        </slot>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'BaseCard',
    mounted: function() {
        console.log(this.$slots);
    },
}
</script>


<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
