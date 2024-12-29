<template>
    <div>
        <h2>Active User</h2>
        <p>Username: {{ username }}</p>
        <p>Age: {{ age }}</p>
    </div>
    
</template>
<script>
export default {
    props: {
        username: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
        };
    },

}
</script>
