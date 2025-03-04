<template>
    <div class="row m-0 p-0 text-white" style="height:75px;">
        <div class="col-3 m-0 p-0 ">
                <div class="h-100 w-100">
                    <div class="float-end me-0 me-xl-5 h-100">
                    <div class="h-100 valign">
                    <router-link :to="{ name: 'admin' }" class="">
                        <img class="rotate invert ms-2 ms-xl-4" style="width:30px;height:30px;" src="../img/settings.png">
                    </router-link>
                    </div>
                    </div>
                </div>
        </div>
        <!--
        <div class="col m-0 p-0 text-center valign">

        </div>
        -->
        <div class="col-6 row h-100 m-0 p-0">
            <a class="vzw h-100 valign" href="https://waarhetomdraait.be/">
            <div class="w-100 text-center text-white fw-bold growText">
              <p class="big w-100 m-0 p-0 text-center">© Waar het om draait </p>
              <p class="w-100 m-0 p-0 text-center">2025</p>
            </div>
          </a>
            
        </div>
        
        <div class="col-3 m-0 p-0 text-center text-blue">
            <div class="h-100 valign">
                <a href="https://www.facebook.com/gered.project"><img class="growBox invert ms-2 ms-xl-4" style="width:30px;height:30px;" src="../img/fb.png"></a>
                <a href="https://www.instagram.com/gered.project/"><img class="growBox invert ms-2 ms-xl-4" style="width:30px;height:30px;" src="../img/ig.png"></a>
                <a href="#"><img class="growBox invert ms-2 ms-xl-4" style="width:30px;height:30px;" src="../img/vinted.png"></a>
                <a href="#"><img class="growBox invert ms-2 ms-xl-4" style="width:30px;height:30px;" src="../img/tiktok.png"></a>
                <a href="#"><img class="growBox invert ms-2 ms-xl-4" style="width:30px;height:30px;" src="../img/snapchat.png"></a>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Footer_View',
    props: {
  
    },
    methods: {
  
    }
  }
  </script>
  
  
  <style scoped>
.big{
    font-size: 18px;
}

  .growBox:hover{
    transform:scale(1.1);
  }
  
  .growBox, .growText{
    transform:scale(1);
  }

  input[type=text]{
    font-size: 14px;
    line-height: 1px !important;
    color: #009ffd;
  }
  
  a{
    text-decoration: none;
    color: #009ffd;
  }

  .invert{
    filter: invert(1);
  }
  </style>
  