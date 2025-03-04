<template>
    <div class="loggen row m-0 p-0 text-center fw-bold">
        <div class="col-12 vh-10 rounded-top bg-blue text-white">
            <div class="title centered">
                <p class="w-100 text-center">Afmelden</p>
            </div>
        </div>
        <div class="col-12 vh-70 pt-3 border-left border-right border-blue bg-purple">
            <div class="h-100 centered">
                <input type="text" size="14" class="text-center border border-blue rounded" v-model="intikID"><br>
                <img @click="intikken" class="goButton rotate mx-auto" src="../img/gered_logo.png">
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Logout_View',
    props: {
  
    },
    methods:{
        /*
        getTimez(){
          var now = new Date();

          var hour = now.getHours();
          var minut = now.getMinutes();
          var time = hour+":"+minut;

          var day = now.getDate();
          var month = now.getMonth()+1;
          var year = now.getFullYear();
          var today = day+"-"+month+"-"+year;

          console.log(time);
          console.log(today);
        },
        */
        getTime(){
          fetch('https://timeapi.io/api/time/current/zone?timeZone=Europe%2FBrussels')
          .then(r => r.json())
          .then(data => {
            this.day = data.day;
            this.month = data.month;
            this.year = data.year;
            this.hour = data.hour;
            this.minute = data.minute;
            if(this.minute<10)this.minute = "0"+this.minute;

            console.log(this.intikID + " | " + this.day +"-"+ this.month +"-"+ this.year +" | "+ this.hour +":"+ this.minute)
          })
        },
        uittikken(){
            console.log("UIT");
            this.getTime();
        }
    }
  }
  </script>
  
  
  <style scoped>
    .title{
        font-size: 4em;
    }

    input[type=text]{
        width: 50vw;
        height: 10vh;
        font-size: 4em;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    
    .goButton{
        height: 10vh !important;
        
    }

    .centered{
        display: flex;
        justify-content: center;
        align-items: center;
    }


  </style>
  