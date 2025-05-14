<template>
    <div class="">
    <div class="max-1200 row mx-auto bg-blue text-white text-center rounded-top">
        <div id="id" class="col-2 borders">ID</div>
        <div id="merk" class="col-2 borders"><img src="../img/tag.svg"></div>
        <div id="maat" class="col-1 borders"><img src="../img/ruler.svg"></div>
        <div id="price" class="col-2 borders"><img src="../img/sell.svg"></div>
        <div id="price" class="col-2 borders"><img src="../img/sell.svg"></div>
        <div id="img" class="col-2 borders"><img src="../img/img.svg"></div>
        <div id="publish" class="col-1 borders"><img src="../img/publish.svg"></div>
    </div>
    <div class="max-1200  vh-70 mx-auto ">
      <div v-for="s in sneakerList">
      <SneakerCsv
        v-if="s.csv == 1"
        :id="s.id"
        :colorlabel="s.colorlabel"
        :brand="s.brand"
        :model="s.model"
        :size="s.size"
        :colors="s.colors"
      >
      </SneakerCsv>

      </div>
    </div>
    <div class="w-50 mx-auto mt-2 vh-10 rounded valign bg-green grow">

      <router-link :to="{ name: 'csvdownload' }" class="grow col h-100 valign rounded">
        <div class="w-100 text-center fw-bold text-light">
          DOWNLOAD CSV
        </div>
      </router-link>
        
    </div>
    </div>
</template>
  
<script>

import SneakerCsv from '@/components/SneakerCsv.vue';
import SneakerService from '@/services/SneakerService';

  export default {
    name: 'Csv_View',
    data(){
        return{
          sneakerList: [],
        }
    },
    props: {
  
    },
    methods: {
      getSneakers(){
        SneakerService.getAll()
          .then(response => {
            this.sneakerList = response.data;
            console.log(this.sneakerList);
          })
          .catch(error =>{
            console.error(error);
          })

          
      }
    },
    mounted () {
      this.getSneakers();
    },
    components:{
      SneakerCsv
    }
  }
</script>
  
<style scoped>
    .max-1200{
        width: 1200px;
        overflow-x: hidden;
    }

</style>