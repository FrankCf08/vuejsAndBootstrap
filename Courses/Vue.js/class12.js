Vue.component('coin-detail',{
    
    props:['coin'],

    data(){
        return{
            showPrices: true,
            value:0,
        }
    },

    methods:{
        togglePrices(){
            this.showPrices = !this.showPrices

            //Event to notify the parent
            /*emit(method, parameter) */
            this.$emit('change-color', 'ff96c8')
        }
    },

    // Computer functions: they always return a value
    computed:{
        title(){
            return  `${this.coin.name} - ${this.coin.symbol}`
         },
 
        convertValue(){
            if(!this.value){
                return 0
            } 
            return this.value / this.coin.priceToday
        }
    },

    template:
    `<div>
        <img 
        v-bind:src="coin.img" alt="coin.name"
        v-on:mouseover="togglePrices"
        v-on:mouseout="togglePrices">
        <h1 
            v-bind:class="coin.changePercentage > 0 ? 'green' : 'red'">
            {{title}}

            <span v-if="coin.changePercentage > 0"> -> Great deal!</span>
            <span v-else-if="coin.changePercentage <0"> -> No good!</span>
            <span v-else="coin.changePercentage == 0"> ->  it is fine!</span>
        </h1>
        <div v-on:click="togglePrices">
            {{showPrices? 'Hide': 'Show'}}
        </div>
        <div>
            <input type="number" v-model="value">
            <span> {{ convertValue }}</span>
            <ul v-show ="showPrices">
                <li 
                    v-for="(price, index) in coin.priceWithDay" v-bind:key="price.id"
                    v-bind:class="{red: coin.priceToday > price.value , green: coin.priceToday < price.value, orange: coin.priceToday == price.value }">
                    {{index}} - {{price.day}} - value: {{price.value}}
                </li>
            </ul>
        </div>
    </div>`,
})


new Vue ({
    el:'#app',

    data: {

        btc:{
            name:'Bitcoin',
            symbol: 'BTC',
            img: 'https://comps.canstockphoto.es/vector-bitcoin-illustration-vectores-eps_csp53646331.jpg',
            changePercentage: 10,
            priceToday: 7500,
            priceWithDay: [
                {id:0, day:"Monday", value:"8400"},
                {id:1, day:"Tuesday", value:"8200"},
                {id:2, day:"Wednesday", value:"5800"},
                {id:3, day:"Thursday", value:"6300"},
                {id:4, day:"Friday", value:"7200"},
                {id:5, day:"Satuday", value:"7500"},
                {id:6, day:"Sunday", value:"8100"},
            ],
        },
        color: '8f8f8f',
    },  

    methods:{
        updateColor(color){
            this.color = color || this.color.split('').reverse().join('')
        }
    },

    // // Watch: return new value from the old one
    // // It is used the same word from data
    // watch:{
    //     showPrices(newValue, oldValue){
    //         // console.log( newValue + ' ' + oldValue);

    //     }
    // },
})