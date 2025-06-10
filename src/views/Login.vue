<template>
    <div class="row">
        <div class="col-12 vh-10 bg-blue text-white">
            <div class="title h-100 valign">
                <p class="w-100 text-center">Welkom {{ creator }}</p>
            </div>
        </div>

        <div class="row w-100 vh-80 valign m-0 p-0 text-center">
            <div class="row m-0 p-0 mx-auto">
                <div class="col-12 m-0 p-0 mx-auto">
                    <H1>Welkom bij G-App</H1>
                    <p>Indien je nog geen account hebt,</p>
                    <p>vraag ernaar bij je begeleider.</p>
                </div>
                <div class="col-12 m-0 p-0 mx-auto">
                    <input 
                        type="text" size="14" id="loginNaam" placeholder="Naam"
                        class="text-center mx-auto border-blue rounded mb-3"  
                        v-model="creator"
                        @keyup.enter="document.getElementById('loginPass').focus()"
                    >
                </div>
                <div class="col-12 m-0 p-0 mx-auto">
                    <input 
                        type="password" size="14" id="loginPass"  placeholder="Pass"
                        class="text-center mx-auto border-blue rounded mb-3" 
                        v-model="pass"
                        @keyup.enter="login()" 
                    >
                </div>
                <div class="col-12 m-0 p-0 mx-auto">
                    <button class="text-center mx-auto bg-blue rounded valign growz mb-3 text-white">
                        <span class="">Login</span>
                    </button> 
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
            creator: ""
        }
    },
    props: {
  
    },
    methods: {
  
    }
  }
</script>
  
<style scoped>
    input[type=text],[type=password],button{
          width: 50vw;
          height: 10vh;
          font-size: 4em;
          /*position: absolute;
          top: 30vh;
          left: 50%;
          transform: translate(-50%,-50%);*/
    }
</style>