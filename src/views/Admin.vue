<template>
    <div class="admin row m-0 h-100 text-white">

      <div class="row m-0 p-0">
        <div class="col-12 vh-10 bg-blue text-white">
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
                  <input type="text" size="14" class="rounded border-blue mb-3 mx-auto text-center" placeholder="naam" 
                         id="adminName"  
                         v-model="admin"
                         >
                </div>
                <div class="row m-0 p-0 mx-auto">
                  <input  type="password" size="14" class="rounded border-blue mb-3 mx-auto text-center" placeholder="pass" 
                          id="adminPass" 
                          @keyup.enter="login" 
                          v-model="pass"
                  >
                </div>
                <!--
                <div class="row m-0 p-0 mx-auto">
                  <div>
                    <img @click="adminLogin" class="goButton rotate mx-auto" src="../img/gered_logo.png">
                  </div>
                </div>
                -->
                
              </div>
            </div>
        </div>
      </div>

    </div>
  </template>
  
  <script>
  import router from '@/router';
  import WerknemerService from '@/services/WerknemerService';

  export default {
    name: 'Admin_View',
    data(){
      return{
          admin: '',
          pass: '',
      }
    },
    props: {
      
    },
    methods:{
      login(){
        console.log(this.admin);
        console.log(this.pass);

        WerknemerService.adminLogin({name:this.admin,password:this.pass})
        .then(res => {
          router.push('/settings')
        })
        .catch(error=>{
            //console.error(error);
            alert("Alleen de baas mag hier inloggen.");
        })
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
  