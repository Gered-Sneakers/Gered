<template>
  <div class="nav row m-0 p-0 rounded-pill text-blue fw-bold">
    <router-link :to="{ name: 'missie' }" class="grow col-3 h-100 valign borderz border-blue rounded-pill bg-white"> 
        <p class="w-100 pt-3 align-middle text-center">MISSIE</p>
    </router-link>  
    <router-link :to="{ name: 'partners' }" class="grow col-3 h-100 valign borderz border-blue rounded-pill bg-white"> 
        <p class="w-100 pt-3 align-middle text-center">PARTNERS</p>
    </router-link> 
    <router-link :to="{ name: 'shop' }" class="grow col-3 h-100 valign borderz border-blue rounded-pill bg-white"> 
        <p class="w-100 pt-3 align-middle text-center">SHOP</p> 
    </router-link> 
    <router-link :to="{ name: 'contact' }" class="grow col-3 h-100 valign borderz border-blue rounded-pill bg-white rounded-right">
        <p class="w-100 pt-3 align-middle text-center">CONTACT</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Nav_View',
  props: {

  },
  methods: {

  }
}
</script>


<style scoped>
.grow:hover{
  color: white !important;
  /*background-color: #009ffd !important;*/
  background-color: rgba(0,159,253,0.5) !important;
  transform:scale(1.05);
}

.grow{
  transform:scale(0.95);
}

.nav{
  height: 75px;
  z-index: 11;
  font-size: 18px;
}

a{
  text-decoration: none;
  color: #009ffd;
}
</style>
