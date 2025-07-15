<template>
  <div class="nav vh-10 row m-0 p-0 text-blue fw-bold">
    <router-link :to="{ name: 'login' }" class="grow col h-100 valign rounded">
        <img class="vh-10 p-4 mx-auto" src="../img/home.svg" title="Home">
      <!--<p class="w-100 pt-3 align-middle text-center">ZOEK</p>-->
    </router-link>
    <router-link :to="{ name: 'addsneaker' }" class="grow col h-100 valign rounded">
        <img class="vh-10 p-4 mx-auto" src="../img/add.svg" title="Sneaker toevoegen">
      <!--<p class="w-100 pt-3 align-middle text-center">Add</p>-->
    </router-link>
    <!--
    <router-link :to="{ name: 'qr' }" class="grow col h-100 valign rounded">
        <img class="vh-10 p-4 mx-auto" src="../img/qr.svg" title="Scannen"> 
    </router-link>
    -->
    <router-link :to="{ name: 'search' }" class="grow col h-100 valign rounded">
        <img class="vh-10 p-4 mx-auto" src="../img/search.svg" title="Zoek">
      <!--<p class="w-100 pt-3 align-middle text-center">ZOEK</p>-->
    </router-link>
    <router-link :to="{ name: 'settings' }" class="grow col h-100 valign rounded" v-if="authState.isAdmin">
        <img class="vh-10 p-4 mx-auto" src="../img/admin.svg" title="Administratie"> 
    </router-link>
    <div class="grow col h-100 valign rounded" v-if="authState.isLoggedIn" @click="showConfirmBox">
        <img class="vh-10 p-4 mx-auto" src="../img/logout.svg" title="Uitloggen">
    </div>
  </div>
  <div class="full m-0 p-0" id="confirm" v-if="showConfirm">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
              <p class="my-5 mx-3">Ben je zeker dat je <span class="text-yellow">{{ id }}</span> wil uitloggen?</p>
              <div class="row m-0 p-0">
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="logout">JA</button> 
                </div>
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="refuse">NEE</button>
                </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { authState } from '@/stores/auth'
import { useRouter } from 'vue-router'

export default {
  name: 'Nav_View',
  setup() {
    const router = useRouter()
    const showConfirm = ref(false)

    function logout() {
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      localStorage.removeItem("admin")

      authState.isLoggedIn = false
      authState.isAdmin = false

      showConfirm.value = false
      //this.refuse();
      authState.loginName = ''
      authState.loginPass = ''
      
      router.push("/login")/*.then(() => {
        location.reload();
      });*/
      
    }

    function showConfirmBox(){
      showConfirm.value = true;
    }

    function refuse(){
      showConfirm.value = false;
    }


    return {
      authState,
      logout,
      showConfirm,
      showConfirmBox,
      refuse
    }
  },
  mounted() {
    const adminFlag = localStorage.getItem("admin");
    this.isAdmin = adminFlag === "1" || adminFlag === "true" || JSON.parse(adminFlag) === true;
    console.log("ADMIN: " + adminFlag);
    this.isLoggedIn = !!localStorage.getItem("token")
    console.log("Logedin: " + this.isLoggedIn)
    console.log("AUTH");
    console.log(authState);
  }
}
</script>


<style scoped>
/*
.grow:hover{
  transform:scale(1.05);
}

.grow{
  transform:scale(0.95);
}

.grow:hover img{
  filter:brightness(0.75) !important;
}
*/
.full{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(247,247,247,0.5);
}

.nav{
  height: 75px;
  z-index: 9999999999999999;
  font-size: 18px;
}

.nav > *{
  z-index: 9999999999999999999999999999;
}

a{
  text-decoration: none;
  color: #009ffd;
  border: 5px solid transparent;
  
}

img{
  /*width: auto;*/
  min-height: 90px;
  min-width: 90px;
  /*max-height: 75px !important;*/
}

.title{
  min-height: 100px !important;
}

</style>
