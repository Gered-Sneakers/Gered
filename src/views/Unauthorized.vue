<template>
    <div class="unauthorized">
      <h1>🚫 Toegang geweigerd</h1>
      <p>{{user}}, je hebt geen toestemming om deze pagina te bekijken.</p>
      <p>Wegens serverkosten gaat er automatisch €5 van je loon.</p>
      <router-link to="/login">Terug naar start</router-link>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';

  export default {
    name: "Unauthorized",
    data(){
        return{
          user: ref()
        }
    },
    props: {
      
    },
    methods: {
      getUser(){
        var user = JSON.parse(localStorage.getItem("user"));
        console.log(user)
        console.log(user.name);
        return user.name;
      }
    },
    mounted () {
      this.user = this.getUser();
    }


  };
  </script>
  
<style scoped>
    .unauthorized {
      text-align: center;
      margin-top: 100px;
    }
</style>
