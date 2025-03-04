<template>
  <div class="nav row m-0 p-0 text-blue fw-bold">
    <router-link :to="{ name: 'in' }" class="grow col h-100 valign"> 
        <p class="w-100 pt-3 align-middle text-center">In</p>
    </router-link>  
    <router-link :to="{ name: 'out' }" class="grow col h-100 valign"> 
        <p class="w-100 pt-3 align-middle text-center">Out</p>
    </router-link> 
    <router-link :to="{ name: 'Add' }" class="grow col h-100 valign">
        <p class="w-100 pt-3 align-middle text-center">Add Shoe</p>
    </router-link>
    <router-link :to="{ name: 'f11' }" class="grow col h-100 valign"> 
        <p class="w-100 pt-3 align-middle text-center">F11</p> 
    </router-link> 
    <router-link :to="{ name: 'admin' }" class="grow col h-100 valign">
        <p class="w-100 pt-3 align-middle text-center">Admin</p>
    </router-link>
    <router-link :to="{ name: 'settings' }" class="grow col h-100 valign">
        <p class="w-100 pt-3 align-middle text-center">!!</p>
    </router-link>
    <router-link :to="{ name: 'test' }" class="grow col h-100 valign">
        <p class="w-100 pt-3 align-middle text-center">X</p>
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
