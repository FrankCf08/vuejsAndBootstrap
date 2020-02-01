new Vue ({
    el:'#app',

    data: {
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
        showPrices: true,
        color: '8f8f8f',
    },

    methods:{
        togglePrices(){
            this.showPrices = !this.showPrices;
            this.color = this.color.split('').reverse().join('')
        }
    },

    // Computer functions: they awalsy return a value

    computed:{
        title(){
           return  `${this.name} - ${this.symbol}`
        }
    },

    // Watch: return new value from the old one
    // It is used the same word from data
    watch:{
        showPrices(newValue, oldValue){
            console.log( newValue + ' ' + oldValue);
            
        }
    },
})