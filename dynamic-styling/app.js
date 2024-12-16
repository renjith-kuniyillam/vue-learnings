var app = Vue.createApp({ 
    data() {
        return {
            isBoxASelected: false,
            isBoxBSelected: false,
            isBoxCSelected: false,
        }
    },
    computed: {
        boxAClasses() {
            return { active: this.isBoxASelected };
        },
        boxBClasses() {
            return { active: this.isBoxBSelected };
        },
        boxCClasses() {
            return { active: this.isBoxCSelected };
        }

    },
    methods: {
        onBoxASSelection() {
            console.log('Box A Selected');
            this.isBoxASelected = !this.isBoxASelected;
        },
        onBoxBSelection() {
            console.log('Box B Selected');
            this.isBoxBSelected = !this.isBoxBSelected;
        },
        onBoxCSelection() {
            console.log('Box C Selected');
            this.isBoxCSelected = !this.isBoxCSelected;
        },
    },
});

app.mount('#styling');