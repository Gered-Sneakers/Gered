<template>
  <div class="nav vh-10 row m-0 p-0 text-blue fw-bold">
    <router-link :to="{ name: 'search' }" class="grow col h-100 valign rounded">
        <img class="vh-10 p-4 mx-auto" src="../img/search.svg" title="Zoek">
      <!--<p class="w-100 pt-3 align-middle text-center">ZOEK</p>-->
    </router-link>
    <router-link :to="{ name: 'addsneaker' }" class="grow col h-100 valign rounded">
        <img class="vh-10 p-4 mx-auto" src="../img/add.svg" title="Sneaker toevoegen">
      <!--<p class="w-100 pt-3 align-middle text-center">Add</p>-->
    </router-link>
    <router-link :to="{ name: 'admin' }" class="grow col h-100 valign rounded">
        <img class="vh-10 p-4 mx-auto" src="../img/admin.svg" title="Administratie"> 
        <!--<p class="w-100 pt-3 align-middle text-center">Admin</p>-->
    </router-link>
    <router-link :to="{ name: 'showSneakers'}" class="grow col h-100 valign rounded">
        <img class="vh-10 p-4 mx-auto" src="../img/clock.svg" title="Clock">
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
.nav{
  height: 75px;
  z-index: 11;
  font-size: 18px;
}

a{
  text-decoration: none;
  color: #009ffd;
  border: 5px solid transparent;
  
}

img{
  width: auto;
  min-height: 90px;
  min-width: 90px;
  /*max-height: 75px !important;*/
}

.title{
  min-height: 100px !important;
}

</style>
