var app = Vue.createApp({
    data() {
        return {
            taskToAdd: '',
            tasks: [],
            toggleDisplay: true
        }
    },
    methods: {
        addTask() {
            if(this.taskToAdd !== '') {
                this.tasks.push(this.taskToAdd)
                this.taskToAdd = ''
            }
        },
        onToggleDisplay() {
            this.toggleDisplay = !this.toggleDisplay;
        }
    },
})

app.mount('#assignment')