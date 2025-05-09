<template>
    <div class="">
    <div class="max-1200 row mx-auto bg-blue text-white text-center">
        <div id="id" class="col-2 borders">ID</div>
        <div id="merk" class="col-2 borders"><img src="../img/tag.svg"></div>
        <div id="maat" class="col-2 borders"><img src="../img/ruler.svg"></div>
        <div id="price" class="col-2 borders"><img src="../img/sell.svg"></div>
        <div id="price" class="col-2 borders"><img src="../img/sell.svg"></div>
        <div id="img" class="col-2 borders"><img src="../img/img.svg"></div>
    </div>
    <div class="max-1200 scroll vh-70 mx-auto ">
      <SneakerCsv
        v-if="sneakerList.length > 0"
        v-for="s in sneakerList"
        :id="s.id"
        :colorlabel="s.colorlabel"
        :brand="s.brand"
        :model="s.model"
        :size="s.size"
        :colors="s.colors"
      >
      </SneakerCsv>
    </div>
    <div class="w-50 mx-auto mt-2 vh-10 rounded valign bg-green">
        <div class="w-100 text-center fw-bold text-light">
            DOWNLOAD CSV
        </div>
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
          })
          .catch(error =>{
            console.error(error);
          })

          console.log(this.sneakerList);
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