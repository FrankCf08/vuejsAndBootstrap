new Vue({

    el:'#app',

    data:{

        game:[
            {
                title: 'Battlefield 1',
                gender: 'FPS',
                score:'9',
            }, 
            {
                title: 'Civilization IV',
                gender: 'Estrategia',
                score:'10',
            }, 
            {
                title: 'Resident Evil 7',
                gender: 'Survival',
                score:'7',
            }, 
        ],
        minScore: 5,
        checkGame:'',
    },

    computed:{
        filterMinScore(){
            return this.game.filter( d => d.score >= this.minScore )
        },
        checkGameName(){
            return this.game.filter( g => g.title.includes(this.checkGame))
        }
    }
}) 