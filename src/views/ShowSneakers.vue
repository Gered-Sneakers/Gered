<template>
  <!--<div class="vh-80 scroll">-->
    <div class="h-100 scroll">
    <div class="row max-1200 mx-auto bg-blue text-white text-center rounded-top py-2 sticky">
        <div id="id" class="col-1 borders mb-1"><img src="../img/barcode.svg"></div>
        <div id="merk" class="col-2 borders mb-1"><img src="../img/tag.svg"></div>
        <div id="kleur" class="col-1 borders mb-1"><img src="../img/color.svg"></div>
        <div id="maat" class="col-1 borders mb-1"><img src="../img/ruler.svg"></div>
        <div id="status" class="col-1 borders mb-1"><img src="../img/warning.svg"></div>
        <div id="user" class="col-2 borders mb-1"><img src="../img/login.svg"></div>
        <div id="datum" class="col-2 borders mb-1"><img src="../img/clock.svg"></div>
        <div id="leverancier" class="col-1 borders mb-1"><img src="../img/delivery.svg"></div>
        <div class="col-1 borders mb-1"><img src="../img/file.svg"></div>
        <!-- IMAG ROW -->
        <div id="id" class="col-1 borders mb-1">id</div>
        <div id="merk" class="col-2 borders mb-1">merk</div>
        <div id="kleur" class="col-1 borders mb-1">kleur</div>
        <div id="maat" class="col-1 borders mb-1">maat</div>
        <div id="status" class="col-1 borders mb-1">status</div>
        <div id="user" class="col-2 borders mb-1">vriend</div>
        <div id="datum" class="col-2 borders mb-1">datum</div>
        <div id="leverancier" class="col-1 borders mb-1">lever</div>
        <div class="col-1 borders mb-1">lijst</div>
    </div>
    <div class="max-1217 m-0 p-0 mx-auto">
      <SneakerSmall
        class="sneakerSmall"
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
        :csv="s.csv"
        @csv="csv"
        @verkoop="verkoop"
      >

      </SneakerSmall>
      
    </div>
  </div>
    <div class="row max-1217 mx-auto bg-blue text-white">
      <div class="col-9" >CSV: <span v-for="v in csvList" @click="csvRemove(v)" class="border-end border-light px-1 grow">{{ v }} </span></div>
      <div v-if="csvList.length == 0" @click="csvAdd" class="col-3 bg-warning hover grow">Cee eS Veejen BEjBIs</div>
      <div v-else @click="csvAdd" class="col-3 border-green bg-green hover grow">Cee eS Veejen BEjBIs</div>
      
    </div>
    <!--
     <div >VERKOOP: <span v-for="v in verkoopList" @click="verkoopRemove(v)">{{ v+" " }} </span></div>
    <div @click="verkoopAdd" class="border border-warning bg-warning hover grow">VERKAUFEN BEBI</div>
    -->
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
            console.log(this.sneakerList);
          })
          .catch(error =>{
            console.error(error);
          })

          
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
      },
      csv(id){
        console.log("CSV");
        console.log(id);
        !this.csvList.includes(id) && this.csvList.push(id);
        console.log(this.csvList);
      },
      csvRemove(id){
        this.csvList = this.csvList.filter(c => c !== id);
      },
      csvAdd(){
        console.log("Cee eS Veejen GIYAL");
        this.csvList.forEach(c => {
          console.log(c);

          SneakerService.update(c,{ csv:1 })
          .then(res=>{
            console.log(res);
            console.log("We don giv a fu bwoi");
          })
          .catch(err => {
            console.log(err);
          })
        })
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

  .sneakerSmall{
    min-height: 50px !important;
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