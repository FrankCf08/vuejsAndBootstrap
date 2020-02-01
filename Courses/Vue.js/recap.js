var app = new Vue({
    el: '#app',

    data: {
        message:'Hola mundo! :)',
        connect: true,
        age:2,
        days: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Friday',
            'Saturday'
        ],
        duties:[
            {name:'Do my CV', priority: true, aged:378},
            {name:'Start my TV', priority: false, aged:272},
            {name:'Stop watching', priority: true, aged:138},
        ],
        houseWork:[
            'Clean',
            'Watch TV',
            'Cook',
            'Run',
        ],
        newHouseWork:null,
        person:{
            name: 'Frank',
            age:'24',
            address: 'SSS 21',
        },
    },

    methods:{
        addDuty(){
            this.houseWork.push(this.newHouseWork);
            this.newHouseWork = '';
        },
    },

    computed:{
        messageReversed(){
            return this.message.split('').reverse().join('')
        },
        filterDutyPriority(){
            return this.duties.filter(duty => duty.priority);
        },
        filterbyAged(){
            return this.duties.sort((a,b) => b.aged - a.aged);
        }
    }
})