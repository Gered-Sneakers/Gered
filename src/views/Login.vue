<template>
    <div class="row">
        <div class="col-12 vh-10 bg-blue text-white">
            <div class="title h-100 valignz">
                <p class="w-100 text-center">Welkom bij G-App {{ authState.loginName }}</p>
            </div>
        </div>

        <div class="row w-100 vh-80 valignz m-0 p-0 text-center" v-if="!authState.isLoggedIn">
            <div class="row m-0 p-0 mx-auto">
                <div class="col-12 m-0 p-0 mx-auto mb-5">
                    <img class="img-big mb-3 rotate" src="../img/den G.png">
                </div>
                <div class="col-12 m-0 p-0 mx-auto">
                    <input 
                        type="text" size="14" id="loginNaam" placeholder="Naam"
                        class=" text-center mx-auto border-blue rounded mb-3"  
                        v-model="authState.loginName"
                        @keyup.enter="document.getElementById('loginPass').focus()"
                    >
                </div>
                <div class="col-12 m-0 p-0 mx-auto">
                    <input 
                        type="password" size="14" id="loginPass"  placeholder="Wachtwoord"
                        class=" text-center mx-auto border-blue rounded mb-3" 
                        autocomplete="off"
                        v-model="authState.loginPass"
                        @keyup.enter="login()" 
                    >
                </div>
                <div class="col-12 m-0 p-0 mx-auto">
                    <button @click="login" class="btn-big btn-hover text-center mx-auto bg-blue rounded valignz mb-3 text-white">
                        <span class="">Login</span>
                    </button> 
                </div>
                <div class="col-12 m-0 p-0 mx-auto d-none">
                    <button @click="register" class="btn-big btn-hover text-center mx-auto bg-blue rounded valignz mb-3 text-white">
                    <span class="">Registreren</span>
                    </button> 
                </div>
            </div>
        </div>
        
        <div class="row w-100 vh-80 valignz m-0 p-0 text-center" v-else>
            <div class="col-12 h-100 m-0 p-0 mx-auto valign justify-content-center">
                <div>
                <router-link :to="{ name: 'addsneaker' }" class="col h-100 valign rounded">
                    <button @click="login" class="btn-big btn-hover text-center mx-auto bg-blue rounded valignz mb-3 py-5 text-white">
                        <span class="">ADD SNEAKER</span>
                    </button> 
                </router-link>
                <router-link :to="{ name: 'repair' }" class="col h-100 valign rounded mt-4">
                    <button class="btn-big btn-hover text-center mx-auto bg-blue rounded valignz mb-3 py-5 text-white">
                        <span class="">REPAIR</span>
                    </button> 
                </router-link>
                <router-link :to="{ name: 'repair' }" class="col h-100 valign rounded mt-4">
                    <button class="btn-big btn-hover text-center mx-auto bg-blue rounded valignz mb-3 py-5 text-white">
                        <span class="">STOCK</span>
                    </button> 
                </router-link>
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
    <div class="full m-0 p-0 d-none" id="errorbox" ref="errorbox">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
              <p class="my-5 mx-3">Wete gij u passwoord ni ofwa?!</p>
              <p class="my-5 mx-3">Zedde misschin verbannen?!</p>
              <p class="my-5 mx-3">Ik weet het wel zenne <br> pas maar op want kheb u int oog!</p>
              <p class="my-5 mx-3">Doe nekeer samali op uwe heps , samaliheps </p>
              <div class="row m-0 p-0">
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-green rounded-bottom-left" @click="byeError">JA</button> 
                </div>
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-red rounded-bottom-right" @click="byeError">NEE</button>
                </div>
              </div>
          </div>
        </div>
    </div>
</template>
  
<script>
import axios from "axios"
import { authState } from '@/stores/auth'

  export default {
    name: 'Login_View',
    data(){
        return{
            name: "",
            pass: "",
            authState
        }
    },
    props: {
  
    },
    methods: {
        async login() {
            try{
                const res = await axios.post("http://localhost:8080/api/login", {
                    name: this.authState.loginName,
                    pass: this.authState.loginPass
                })

                localStorage.setItem("token", res.data.token)
                localStorage.setItem("user", JSON.stringify(res.data.user))
                localStorage.setItem("admin", JSON.stringify(res.data.user.isAdmin))

                authState.isLoggedIn = true
                authState.isAdmin = res.data.user.isAdmin
                
                const isAdmin = JSON.parse(localStorage.getItem("admin"));
                console.log("ADMIN");
                console.log(isAdmin);
                
                var user = localStorage.getItem("user");
                console.log(user);
                //if(isAdmin===1 || isAdmin === true)  this.$router.push("/settings")
                
            }
            catch(err){
                console.log(err);
                this.$refs.errorbox.classList.remove("d-none");
                this.$refs.errorbox.classList.add("d-block");
            }   
        },
        register(){
            var confirm = document.getElementById("confirm").classList;
            
            if(confirm.contains("d-none")) confirm.remove("d-none");
            else confirm.add("d-none");
        },
        byeError(){
            authState.pass = ""
            this.$refs.errorbox.classList.remove("d-block");
            this.$refs.errorbox.classList.add("d-none");
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

    .input{
        max-width: 800px !important;
        min-width: 400px !important;
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
        background-color: #10B981 !important;
        border-color: #10B981;
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