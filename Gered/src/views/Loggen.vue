<template>
    <div class="loggen row">
        <div class="col-10 text-end">
            <input type="text" size="14" class="border border-blue rounded"><br>
            <input type="text" size="14" class="border border-blue rounded">
        </div>
        <div class="col-1 text-start p-2 h-100 valign" @click="getTime">
            <!--<button class="mx-auto text-blue border-blue bg-white rounded fw-bold">LOGIN</button>-->
            <img @click="getTime" class="rotate mx-auto" src="../img/gered_logo.png" style="width: 40px;height: 40px;">
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Admin_View',
    props: {
  
    },
    methods:{
      getTime(){

        fetch('https://timeapi.io/api/time/current/zone?timeZone=Europe%2FBrussels')
        .then(r => r.json())
        .then(data => {
          console.log("xxx");
        })
      }
    }
  }
  </script>
  
  
  <style scoped>
  
  </style>
  