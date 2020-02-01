new Vue ({
    el: '#app',
    data:{
        mytitle: 'My first Project',
        module: '',
        time: '',
        moduleArray:[],
    },
    computed:{
        totalTime(){
            if(this.moduleArray.length == 0){
                return 0
            }
            var sum=0;

            for(var i=0; i<this.moduleArray.length;i++){
                sum+= parseInt(this.moduleArray[i].time)
            }
            return sum
        },
        arrayLength(){
            return this.moduleArray.length
        },
    },
    methods:{
        addModule(){
            var module = {module: this.module, time:this.time}
            this.moduleArray.push(module)
            // Clean all data
            this.module = ''
            this.time = ''
        }
    },
})