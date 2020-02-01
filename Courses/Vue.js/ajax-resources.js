new Vue({

    el:'#app',

    data:{
        people:[],
    },

    mounted(){
        this.getPerson();
    },
    
    methods:{
        getPerson(){
            this.$http.get('https://randomuser.me/api/?results=500')
                .then(response => {
                    this.people = response.body.results;
                })
        }
    }
})