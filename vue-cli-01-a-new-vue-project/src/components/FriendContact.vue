<template>
  <section style="border: 1px solid #ccc; padding: 1rem; margin:auto; width: 25%; text-align: center;">
    <h2>{{ friend.name }}</h2>
    <button @click="onShowDetailsClick">Show Details</button>
    <ul v-if="showDetails">
      <li style="list-style-type: none">
        <p><strong>Phone :</strong>{{ friend.phone }}</p>
        <p><strong>Email :</strong>{{ friend.email }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "FriendContact",
  methods: {
    onShowDetailsClick() {
      this.showDetails = !this.showDetails;
    },
  },
  data() {
    return {
      showDetails: false,
      friend: {
        id: "ManualJohns",
        name: "Manual Johns",
        phone: "1234567890",
        email: "manual.johns@localhost.com",
      },
    };
  },
};
</script>

