<template>
    <div class="row max-1217 mx-auto bg-blue text-white text-center">
        <div id="id" class="col-1 borders">ID</div>
        <div id="merk" class="col-2 borders"><img src="../img/tag.svg"></div>
        <div id="kleur" class="col-1 borders"><img src="../img/color.svg"></div>
        <div id="maat" class="col-1 borders"><img src="../img/ruler.svg"></div>
        <div id="status" class="col-1 borders"><img src="../img/warning.svg"></div>
        <div id="user" class="col-2 borders"><img src="../img/login.svg"></div>
        <div id="datum" class="col-2 borders"><img src="../img/clock.svg"></div>
        <div id="leverancier" class="col-1 borders"><img src="../img/delivery.svg"></div>
        <div class="col-1 borders"><img src="../img/file.svg"></div>
        
    </div>
    <div class="max-1217 m-0 p-0 mx-auto vh-80 scroll">
      <SneakerSmall
        
        v-if="sneakerList.length > 0"
        v-for="s in sneakerList"
        :id="s.id"
        :colorlabel="s.colorlabel"
        :date="s.date"
        :brand="s.brand"
        :model="s.model"
        :size="s.size"
        :colors="s.colors"
        :supplier="s.supplier"
        :status="s.status"
        :creator="s.creator"
        :verkoop="s.verkoop"
        @csv="csv"
        @verkoop="verkoop"
      >

      </SneakerSmall>
      
    </div>
    <div >VERKOOP: <span v-for="v in verkoopList" @click="verkoopRemove(v)">{{ v+" " }} </span></div>
    <div @click="verkoopAdd" class="border border-warning bg-warning hover grow">VERKAUFEN BEBI</div>
</template>
  
<script>

import SneakerSmall from '@/components/SneakerSmall.vue';
import SneakerService from '@/services/SneakerService';

//var csvList = [];
//var verkoopList = [];

  export default {
    name: 'ShowSneakers_View',
    data(){
        return{
          sneakerList: [],
          verkoopList: [],
          csvList: []
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
      },
      csv(id){
        console.log("CSV");
        console.log(id);
        this.csvList.push(id);
        console.log(this.csvList);
      },
      verkoop(id){
        console.log("VERKOOP");
        !this.verkoopList.includes(id) && this.verkoopList.push(id);
        console.log(this.verkoopList);
      },
      verkoopRemove(id){
        this.verkoopList = this.verkoopList.filter(v => v !== id);
      },
      verkoopAdd(){
        console.log("VERFAUKEN BWOI");
        this.verkoopList.forEach(v => {
          console.log(v);
          
          SneakerService.update(v,{ verkoop:1 })
          .then(res =>{
            console.log(res);
            console.log("We don giv a fu bwoi");
          })
          .catch(err => {
            console.log(err);
          })
          
        });
      }
    },
    mounted () {
      this.getSneakers();
    },
    components:{
      SneakerSmall
    }
  }
</script>
  
<style scoped>
  svg{
    filter: brightness(1);
  }

  .max-1200{
    max-width: 1200px;
    overflow-x: hidden;
  }

  .max-1217{
    max-width: 1215px;
  }

  .borders{
    border-top: 0px solid var(--gBlack);
    border-bottom: 2px solid var(--gBlack);
    border-left: 1px solid var(--gBlack);
    border-right: 2px solid var(--gBlack);
  }

  .row{
    overflow: visible !important;
  }

  .smallz{
    width: 22px;
    height: 22px;
  }

  .small{
    width: 16px;
    height: 16px;
  }

 .labelBlue{
    background-color: rgb(100, 125, 250);
  }

  .labelPink{
    background-color: rgb(250, 168, 241);
  }

  .labelGreen{
    background-color: rgb(146, 250, 146);
  }

  .labelGrey{
    background-color: rgb(163, 163, 163);
  }

  .labelYellow{
    background-color: rgb(249, 249, 125);
  }

  
</style>