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
        <div id="" class="col-1 borders"><img src="../img/file.svg"></div>
    </div>
    <div class="max-1217 m-0 p-0 mx-auto vh-80 scroll">

        <div v-for="s in sneakerList" v-if="sneakerList.length > 0">
        <SneakerVerkoop
          v-if="s.verkoop"
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
          @verkoop="verkoop"
        >
        </SneakerVerkoop>
        </div>
      <!--
        @csv="csv"
        @verkoop="verkoop"
      -->
    </div>
    <div class="full m-0 p-0 d-none" id="confirm">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
              <p class="my-5">Ben je zeker dat <span class="text-yellow">{{ id }}</span> wil verkopen?</p>
              <div class="row m-0 p-0">
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="verkoop">JA</button> 
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

import SneakerVerkoop from '@/components/SneakerVerkoop.vue';
import SneakerService from '@/services/SneakerService';

var csvList = [];
var verkoopList = [];

  export default {
    name: 'Verkoop_View',
    data(){
        return{
          sneakerList: [],
          id: ""
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
        showConfirmBox(){
          document.getElementById("confirm").classList.remove("d-none");
        },

        refuse(){
            document.getElementById("confirm").classList.add("d-none");
        }, 
        verkoop(nr){
            this.id = nr;
            this.showConfirmBox();
            
        },
        confirmVerkoop(){
            // ADD TO VERKOCHT DATABASE

            // REMOVE FROM STOCK
        }
    },
    mounted () {
      this.getSneakers();
    },
    components:{
      SneakerVerkoop
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