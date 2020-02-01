new Vue({

    el:'#app',
    
    data:{
        showMessage: true,
        messages:{
            transition:'Transiciones con Vue.js',
            animacion: 'Animacion con Vue.js',
            animacionCustom: 'Animacion Custom con Vue.js',
            entraElements: 'Transicion con elemntos en Vue.js'
        },
    },

    methods:{
        showMe(){
            this.showMessage = !this.showMessage;
        }
    }
})