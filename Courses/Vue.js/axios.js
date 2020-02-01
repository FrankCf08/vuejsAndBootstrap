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
            axios.get('https://randomuser.me/api/?results=500')
                .then(response =>{
                    this.people = response.data.results;
                });
        }
    }
})