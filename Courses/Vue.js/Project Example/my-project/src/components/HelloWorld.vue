<template>
  <div>
    <div>
      <h1> {{msg}} </h1>
      <input type="text" v-model="msg">
    </div>
    <div>
      <h1 v-show="connect"> Connected </h1>

      <h2 v-if="age < 18"> No puedes Entrar! </h2>
      <h2 v-else-if=" age>= 18"> Puedes Entrar</h2>
      <h2 v-else> Eres inmortal</h2>
    </div>
    <div>
      <template v-if="connect">
        <h3>Welcome Frank</h3>
        <ul>
          <li>Hola</li>
          <li>Bye</li>
        </ul>
      </template>
    </div>
    <div>
      <!-- Matrix of Arrays -->
      <template>
        <div>
          <ul>
            <li v-for="day in days" v-bind:key="day"> {{day}}</li>
          </ul>
        </div>
      </template>
    </div>
    <!-- Matrix of Array of Objects -->
    <div>
      <template>
        <ul>
          <li v-for="(activity,index) in activities" v-bind:key="activity.name"> {{index+1}} - {{activity.name}} - {{activity.priority}}</li>
        </ul>
      </template>
    </div>
    <!-- Objects -->
    <div>
      <template>
        <ul>
          <li v-for="(value, key, index) in person" v-bind:key=key> 
            Index: {{index+1}} - field: {{key}} - Value:{{value}}
           </li>
        </ul>
      </template>
    </div>
    <div>
      <template>
        <ul>
          Stuff:
          <li v-for="(s,index) in stuff" v-bind:key="s">
           {{index+1}}.- {{s}}
          </li>
          <form v-on:="addStuff">
            <input type="text" placeholder="Introduce your stuff" v-model="newStuff">
            <button @click="addStuff"> Add Stuff</button>
            <!-- <input type="text" placeholder="Press Enter to Add" v-model="newStuff" v-on:keyup.enter="addStuff"> -->
          </form>
        </ul>
      </template>
    </div>
    <!-- Computed(same name as the function), Mensaje al revez -->
    <div>
      <h1> Mensaje al revez: {{ReverseMessage}}</h1>
      <ul>
        <!-- sortByPriority: it is my computed function -->
        <li v-for="(object,index) in sortByPriority" v-bind:key="index"> 
          {{index+1}}.-{{object.title}}
       </li>
      </ul>
      <h1> Sorted by Aged: {{ReverseMessage}}</h1>
      <ul>
        <!-- sortByPriority: it is my computed function -->
        <li v-for="(object,index) in sortByAged" v-bind:key="index"> 
          {{index+1}}.-{{object.title}}
       </li>
      </ul>
    </div>
    <div>
      <h1> Games </h1>
      <ul>
        <li v-for="(game, index) in bestGames" v-bind:key="index">
          {{index+1}}.-{{game.title}}
        </li>
        <input type="range" min="0" max="20" v-model="minimunScore">
      </ul>
    </div>
    <div>
      <h1> Games searched by Name </h1>
      <input type="search" v-model="searchByName" placeholder="Search game">
      <ul>
        <li v-for="(game, index) in searchGame" v-bind:key="index">
          {{index+1}}.-{{game.title}}
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <h1> Change Stuff boolean</h1>
        <div>
          Total Completed: {{stuffDone.length}}
        </div>
        <li
          :class="{completed: s.finished}"
          @click="completedStuff(s)"
          v-for="(s, index) in stuffListToDo" v-bind:key="index">
            {{index+1}}.- {{s.title}}
          </li>
      </ul>
    </div>
    <div>
      <pre> {{$data}} </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      days:[
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      activities:[
        {name: 'Cook', priority:'high'},
        {name: 'Broom', priority:'low'},
        {name: 'Take a shower', priority:'high'},
      ],
      connect:false,
      age: 17,
      person:{
        name: 'Frank',
        profession: 'Software Developer',
        age:24,
      },
      stuff:[
        'Learn Vuejs',
        'Learn S6',
        'Public documents',
      ],
      objectStuff:[
        {
          title:'Learn Vuejs',
          priority: true,
          aged: 8,
        },
        {
          title:'Learn S6',
          priority: false,
          aged: 54
        },
        {
          title:'Public documents',
          priority: true,
          aged: 42
        },
      ],
      newStuff:'',
      minimunScore: 5,
      games:[
        {
          title:'Battefield 1',
          gender:'FPS',
          score: 15
        },
        {
          title:'Civilization IV',
          gender:'Strategy',
          score: 10
        },
        {
          title:'S4 league',
          gender:'Guns',
          score: 30
        },
      ],
      searchByName:'',
      stuffListToDo:[
        {
          title:'Study Vue',
          finished: false,
        },
        {
          title:'Cook for Nico',
          finished: false,
        },
        {
          title:'Watch Tv',
          finished: false,
        },
        {
          title:'Pet Chase',
          finished: false,
        },
        {
          title:'Study Vue',
          finished: false,
        },
      ],
    }
  },
  methods:{
    addStuff: function(){
      this.stuff.push(this.newStuff),
      this.newStuff=''
    },
    completedStuff: function(s){
     s.finished = !s.finished;
          
    },
  },
  computed:{
    ReverseMessage(){
      return this.msg.split('').reverse().join('')
    },
    sortByPriority(){
      return this.objectStuff.filter( (stuff)=> stuff.priority );
    },
    sortByAged(){
      return this.objectStuff.sort((a,b) => b.aged - a.aged);
    },
    bestGames(){
      return this.games.filter((game)=> game.score >= this.minimunScore);
    },
    searchGame(){
      return this.games.filter((game)=> game.title.includes(this.searchByName));
    },
    stuffDone(){
      return this.stuffListToDo.filter(s => s.finished);
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
.completed {
  text-decoration: line-through;
}
</style>
