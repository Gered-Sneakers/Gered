<template>
    <div class="row">
        <div class="col-12 vh-10 bg-blue text-white">
            <div class="title h-100 valignz">
                <p class="w-100 text-center">Welkom bij G-App {{ creator }}</p>
            </div>
        </div>

        <div class="row w-100 vh-80 valignz m-0 p-0 text-center">
            <div class="row m-0 p-0 mx-auto">
                <div class="col-12 m-0 p-0 mx-auto mb-5">
                    <img class="img-big mb-3 rotate" src="../img/den G.png">
                </div>
                <div class="col-12 m-0 p-0 mx-auto">
                    <input 
                        type="text" size="14" id="loginNaam" placeholder="Naam"
                        class="growz text-center mx-auto border-blue rounded mb-3"  
                        v-model="creator"
                        @keyup.enter="document.getElementById('loginPass').focus()"
                    >
                </div>
                <div class="col-12 m-0 p-0 mx-auto">
                    <input 
                        type="password" size="14" id="loginPass"  placeholder="Wachtwoord"
                        class="growz text-center mx-auto border-blue rounded mb-3" 
                        v-model="pass"
                        @keyup.enter="login()" 
                    >
                </div>
                <div class="col-12 m-0 p-0 mx-auto">
                    <button class="btn-big btn-hover text-center mx-auto bg-blue rounded valignz growz mb-3 text-white">
                        <span class="">Login</span>
                    </button> 
                </div>
                <div class="col-12 m-0 p-0 mx-auto">
                    <button @click="register" 
                    class="btn-big btn-hover text-center mx-auto bg-blue rounded valignz growz mb-3 text-white">
                        <span class="">Registreren</span>
                    </button> 
                </div>
            </div>
        </div>
    </div>
    <div class="full m-0 p-0 d-none" id="confirm">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
              <p class="my-5">Vraag aan je coördinator een account.</p>
              <div class="row m-0 p-0">
                <div class="col-12 m-0 p-0">
                  <button class="btn-hover-light w-100 py-3 bg-green rounded-bottom-left hover" @click="register">JA</button> 
                </div>
              </div>
          </div>
        </div>
    </div>
</template>
  
<script>
  export default {
    name: 'Login_View',
    data(){
        return{
            creator: "",
        }
    },
    props: {
  
    },
    methods: {
        register(){
            var confirm = document.getElementById("confirm").classList;
            
            if(confirm.contains("d-none")) confirm.remove("d-none");
            else confirm.add("d-none");
        }
    },
    computed: {
    }
  }
</script>
  
<style scoped>
    .full{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(247,247,247,0.5);
    }

    .hover{
      font-weight: bold;
    }

    .hover:hover{
      color: var(--gWhite);
      filter: brightness(125%);
    }

    .img-big{
        width: 150px;
        height: 150px;
    }

    .img-med{
        width: 99px;
        height: 99px;
    }

    .img-small{
        width: 66px;
        height: 66px;
    }

    .txt-big{
        font-size: 66px;
    }

    .btn-hover:hover{
        color: #8FFE07 !important;
        /*box-shadow: 5px 5px 10px #8FFE07, -5px -5px 10px #8FFE07, -5px 5px 10px #8FFE07, 5px -5px 10px #8FFE07;*/
    }

    .btn-hover-light:hover{
        color: #8FFE07 !important;
        box-shadow: 2px 2px 5px #8FFE07,-2px 2px 5px #8FFE07;
    }

    input[type=text],[type=password],.btn-big{
          width: 50vw;
          height: 10vh;
          font-size: 4em;
          /*max-height: 100px;*/
          /*position: absolute;
          top: 30vh;
          left: 50%;
          transform: translate(-50%,-50%);*/
    }
</style>