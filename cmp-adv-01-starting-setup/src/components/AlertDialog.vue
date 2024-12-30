<template>
    <dialog open>
        <slot name="dialogContent"></slot>
    </dialog>
</template>
<script>
export default {
    name: 'AlertDialog',
    mounted: function() {
        console.log(this.$slots);
    },
}
</script>
<style scoped>
dialog {
    width: 100%;
    max-width: 20rem;
    margin: 2rem auto;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}
</style>