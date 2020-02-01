new Vue ({
    el:'#app',

    data: {
        name:'Nicolas Bellido',
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
    },

    methods:{
        togglePrices(){
            this.showPrices = !this.showPrices;
        }
    }
})