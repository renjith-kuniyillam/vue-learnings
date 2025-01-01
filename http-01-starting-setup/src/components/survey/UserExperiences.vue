<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="onLoadData">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading"><strong>Loading...</strong></p>
      <p v-else-if="isError">Some error occured please try again later &#128577;</p>
      <ul v-else-if="!isLoading && results && results.length !== 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    
      <p v-else>No experiences found. Be the first to submit one!</p>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  data() {
    return {
      results: [],
      isLoading: false,
      isError: false,
    }
  },
  components: {
    SurveyResult,
  },
  methods: {
    onLoadData() {
      this.isLoading = true;
      fetch('https://vue-http-demo-c0bf1-default-rtdb.firebaseio.com/surveys.json')
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.isLoading = false;
          const results = [];
          for (const key in data) {
            const result = {
              id: key,
              name: data[key].userName,
              rating: data[key].rating,
            };
            results.push(result);
          }
          this.results = results;
        }).catch(()=> {
          this.isLoading = false;
          this.isError = true;

        });
    }
  },
  mounted() {
    this.onLoadData();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>