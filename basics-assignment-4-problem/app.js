var app = Vue.createApp({  
    data() {
        return {
            enteredClass: '',
            toggleParagraph: false,
            colorVar: ''
        };
    },
  
    computed: {
        paraClasses() {
            return {
                user1: this.enteredClass === 'user1',
                user2: this.enteredClass === 'user2',
                visible: !this.toggleParagraph,
                hidden: this.toggleParagraph
            };
        }
    },
    methods: {
        togglePara(event) {
            console.log(this.toggleParagraph);
            this.toggleParagraph = !this.toggleParagraph;
        }
    }

});

app.mount('#assignment');