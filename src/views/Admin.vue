<template>
    <div class="admin text-white">
      <div class="row text-center fw-bold">
        <div class="col mx-1 rounded-top bg-blue"></div>
        <div class="col mx-1 rounded-top bg-blue text-white">ADMIN</div>
      </div>
      <div class="row text-center">
        <div class="col mx-1 pt-3 rounded-bottom borderzz border-blue bg-purple">
            <input type="text" size="14" class="border border-blue rounded"><br>
            <img @click="uittikken" class="rotate mx-auto" src="../img/gered_logo.png" style="width: 40px;height: 40px;">
        </div>
        <div class="col mx-1 pt-3 rounded-bottom borderzz border-blue">
            <input id="adminName" type="text" size="14" class="border border-blue rounded" v-model="adminName"><br>
            <input id="adminPass" type="password" size="14" class="border border-blue rounded" v-model="adminPass"><br>
            <img @click="adminLogin" class="rotate mx-auto loginBtn" src="../img/gered_logo.png" style="width: 40px;height: 40px;">
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import router from '@/router';

  export default {
    name: 'Admin_View',
    data(){
      return{
        day: 0,
        month: 0,
        year: 0,
        hour: 0,
        minute: 0,
        intikID: "",
        uittikID: "",
        adminName: "",
        adminPass: "",
        testName: "matt",
        testPass: "2640",
        errors: [],

      }
    },
    props: {
      
    },
    methods:{
      adminLogin(){
        console.log("---------------------");
        console.log("ADMIN: " + this.adminName);
        console.log("TEST: " + this.testName);
        if(this.adminName == this.testName && this.adminPass == this.testPass){
          router.push('/settings');
        }else{
          alert('Wrong Credentials!');
        }
      }
    }
  }
  </script>
  
  
  <style scoped>
  .loginBtn{
  }

  .col{
    min-width: 25px;
  }
  </style>
  