const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      textValue: '',
      lastName: '',
      fullName: ''
    };
  },
  computed: {
    fullName() {
      console.log('Running again...');
      if(this.textValue === '') {
        return '';
      } 
      if(this.lastName === '') {
        return this.textValue + ' ' + 'Doe';
      }
      return this.textValue + ' ' + this.lastName;
    }
  },
  watch: {
    counter(value) {
      if(value > 50) {
        this.counter = 0;
      }
    },
    textValue() {
      this.fullName = this.textValue + ' ' + this.lastName;
    },
    lastName(value) {
      this.fullName = this.textValue + ' ' + value;
    }
  },
  methods: {
    onSubmit() {
      alert('Submitted!');
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
    },
    reset() {
      this.counter = 0;
    },
    // getFullName() {
    //   console.log('Printing full name');
    //   if(this.textValue === '') {
    //     return '';
    //   }
    //   return this.textValue + ' ' + 'Doe';
    // },
    setValue(event) {
      this.textValue = event.target.value;
    }
  }
});

app.mount('#events');
