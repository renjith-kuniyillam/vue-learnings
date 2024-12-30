<template>
  <h2>Manage Goals</h2>
  <input ref="inputEle" type="text" />
  <button @click="save">Save</button>
  <teleport to="body">
    <alert-dialog v-if="inputIsEmpty">
      <template #dialogContent>
        <h2>Alert!!</h2>
        <p>Please enter a valid input</p>
        <button @click="onConfirm">Ok</button>
      </template>
    </alert-dialog>
  </teleport>
</template>
<script>
import AlertDialog from "./AlertDialog.vue";

export default {
  components: {
    AlertDialog,
  },
  name: "ManageGoals",
  mounted: function () {
    console.log(this.$slots);
  },
  data() {
    return {
      inputIsEmpty: false,
    };
  },
  methods: {
    save() {
      if (!this.$refs.inputEle.value) {
        this.inputIsEmpty = this.$refs.inputEle.value || true;
      }
    },
    onConfirm() {
      this.inputIsEmpty = false;
    },
  },
};
</script>