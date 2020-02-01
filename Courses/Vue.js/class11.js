/*Components: They are reusable
    Vue.component( 'name of component', {Object}) */
Vue.component('counter',{
    data(){
        return{
            counter:0
        }
    },

    methods:{
        counterClick(){
            this.counter+=1
        }
    },
    template:
       `<div>
            <button v-on:click="counterClick"> Click me!</button>
            <span> {{counter}} </span>
        </div>`
})

new Vue ({
    el:'#app',

    data:{
        title:'Class11',
    }
})