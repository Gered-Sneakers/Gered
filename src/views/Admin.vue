<template>
    <div class="admin row m-0 h-100 text-white">

      <div class="row m-0 p-0">
        <div class="col-12 vh-10 rounded-top bg-blue text-white">
            <div class="title h-100 valign">
                <p class="w-100 text-center">Admin</p>
            </div>
        </div>
      </div>

      <div class="row m-0 text-center">
          <div class="col-12 vh-80">
            <div class="adminTile h-100 valign text-center mx-auto">
              <div class="row m-0 w-100 valign">
                <div class="row m-0 p-0 mx-auto">
                  <input id="adminName" type="text" size="14" class="borderz border-blue roundedz mb-3 mx-auto text-center" placeholder="naam" v-model="adminName">
                </div>
                <div class="row m-0 p-0 mx-auto">
                  <input id="adminPass" @keyup.enter="adminLogin" type="password" size="14" class="borderz border-blue roundedz mb-3 mx-auto text-center" placeholder="pass" v-model="adminPass">
                </div>
                <div class="row m-0 p-0 mx-auto">
                  <div>
                    <img @click="adminLogin" class="goButton rotate mx-auto" src="../img/gered_logo.png">
                  </div>
                </div>
              </div>
            </div>
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
        testName: "matt",
        testPass: "2640"

      }
    },
    props: {
      
    },
    methods:{
      adminLogin(){
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
  
  .col{
    min-width: 25px;
  }

  .title{
        font-size: 4em;
    }

  input[type=text],[type=password]{
      width: 50vw;
      height: 10vh;
      font-size: 4em;
      /*position: absolute;
      top: 30vh;
      left: 50%;
      transform: translate(-50%,-50%);*/
  }
    
  </style>
  