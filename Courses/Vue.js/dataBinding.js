new Vue({

    el:'#app',

    data:{

        duties:[
            {
                title: 'Go shopping',
                completed: false,
            },
            {
                title: 'Learn Vue',
                completed: false,
            },
            {
                title: 'Leanr Firebase',
                completed: false,
            },
            {
                title: 'Become experienced on ES6',
                completed: false,
            },
            {
                title: 'Go running',
                completed: false,
            },
        ],
        counter: 0,
    },

    methods:{
        changeStatus(duty){
            duty.completed = !duty.completed
        }
    },

    computed:{
        countDuties(){
            return this.duties.filter(duty => duty.completed)
        }
    }

})