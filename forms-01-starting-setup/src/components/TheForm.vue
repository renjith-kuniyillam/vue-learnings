<template>
  <form @submit.prevent="onSubmit">
    <div :class="{
      'form-control': true,
      invalid: !userNameValidity
    }"  >
      <label for="user-name">Your Name</label>
      <input id="user-name" name="user-name" v-model="name" @blur="onUsernameBlur"  type="text" />
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" ref="userAge" v-model="age" type="number" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select v-model="referrer" id="referrer" name="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="interests"/>
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" value="tutorials" v-model="interests" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" value="nothing" v-model="interests" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input id="how-video" value="video" v-model="how" name="how" type="radio" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" value="blogs" v-model="how" name="how" type="radio" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" value="other" v-model="how" name="how" type="radio" />
        <label for="how-other">Other</label>
      </div>
      <div>
        <RatingControl v-model="rating" />
      </div>
      <div>
        <input  id="terms-of-use" v-model="termsOfUse" type="checkbox" required />
        <label for="terms-of-use">I accept the terms of use</label>
      </div>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>
<script>
  import RatingControl from './RatingControl.vue';

  export default {
    components: {
      RatingControl
    },
    data() {
      return {
        name: '',
        age: null,
        referrer: 'wom',
        interests: [],
        how: null,
        termsOfUse: false,
        userNameValidity: true,
        rating: 'average'
      };
    },
    methods: {
      onSubmit() {
        console.log("vmodel name", this.name);
        console.log("vmodel age", this.age);
        console.log("31 numer", 31)
        console.log("via ref", this.$refs.userAge.value);

        console.log("reference", this.referrer);
        console.log('Checkbox values:', this.interests);

        console.log("Radio value", this.how);
        console.log("Terms of use value", this.termsOfUse);

        console.log("Rating value", this.rating);

      },
      onUsernameBlur() {
        this.userNameValidity = this.name.trim() !== '';
      }
      
    }
  }
</script>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.invalid input {
  border-color: red;
  background-color: #fbdada;
}

.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>