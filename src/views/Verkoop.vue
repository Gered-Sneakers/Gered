<template>
  <div class="vh-80 m-0 p-0 scroll">
    <div class="row mx-auto bg-blue text-white text-center rounded-top py-2 sticky">
  <!--<div class="vh-85 scroll m-0 p-0">-->
    <!--<div class="row mx-auto bg-blue text-white text-center rounded-top py-2 sticky">-->
        <div id="id" class="col-1 borders rounded-top" @click="toggleSort('id')"><img src="../img/barcode.svg"></div>
        <div id="merk" class="col-2 borders"><img src="../img/tag.svg"></div>
        <div id="kleur" class="col-1 borders"><img src="../img/color.svg"></div>
        <div id="maat" class="col-1 borders" @click="toggleSort('size')"><img src="../img/ruler.svg"></div>
        <div id="user" class="col-2 borders"><img src="../img/login.svg"></div>
        <div id="datum" class="col-1 borders"><img src="../img/money.svg"></div>
        <div id="locatie" class="col-1 borders"><img src="../img/bakNr.svg"></div>
        <div id="leverancier" class="col-2 borders"><img src="../img/delivery.svg"></div>
        <div id="" class="col-1 borders rounded-top"><img src="../img/sell.svg"></div>
        <!-- IMAG ROW -->
        <div id="id" class="col-1 borders mb-1 fw-bold"  @click="toggleSort('id')">id</div>
        <div id="merk" class="col-2 borders mb-1">merk</div>
        <div id="kleur" class="col-1 borders mb-1">kleur</div>
        <div id="maat" class="col-1 borders mb-1 fw-bold" @click="toggleSort('size')">maat</div>
        <div id="user" class="col-2 borders mb-1">user</div>
        <div id="datum" class="col-1 borders mb-1">prijs</div>
        <div id="locatie" class="col-1 borders mb-1">locatie</div>
        <div id="leverancier" class="col-2 borders mb-1">bron</div>
        <div class="col-1 borders mb-1">verkoop</div>
    </div>
    <div class="m-0 p-0 mx-auto" v-if="filteredSneakers.length > 0">

        <div v-for="s in filteredSneakers" :key="s.id">
        <SneakerVerkoop
          v-if="s.status == 4"
          :id="s.id"
          :colorlabel="s.colorlabel"
          :date="s.date"
          :brand="s.brand"
          :model="s.model"
          :size="s.size"
          :colors="s.colors"
          :supplier="getLeverancierName(s.supplier)"
          :status="s.status"
          :creator="s.creator"
          :verkoop="s.verkoop"
          :price="s.price"
          :bakNr="s.bakNr"
          @verkoop="verkoop"
        >
        </SneakerVerkoop>
        
        </div>
      <!--
        @csv="csv"
        @verkoop="verkoop"
      -->
    </div>
  </div>
  <div class="row m-0 p-0 vh-5 bg-blue text-white valign">
      <div class="col-1" v-if="filteredSneakers.lenght == 0"></div>
      <div class="col-1 h-100 valign justify-content-center fw-bold" v-else title="Totaal"> {{ filteredSneakers.length }} </div>
      <div class="col-8"></div>
      <div class="col-3">
        <button @click="toggleContent(5)" id="verkochtButton" class="w-100 h-100 mx-auto rounded bg-green hover fw-bold">Sold</button>
      </div>
  </div>
    <div class="full m-0 p-0" id="confirm" v-show="showConfirmUpdate == true">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
              <p class="my-5">Ben je zeker dat <span class="text-yellow">{{ stringId }}</span> wil verkopen?</p>
              <div class="row m-0 p-0">
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-green rounded-bottom-left hover"  @click="confirmVerkoop">JA</button> 
                </div>
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="showConfirmUpdate = !showConfirmUpdate">NEE</button>
                </div>
              </div>
          </div>
        </div>
    </div>
</template>
  
<script>

import SneakerVerkoop from '@/components/SneakerVerkoop.vue';
import SneakerService from '@/services/SneakerService';
import LeverancierService from '@/services/LeverancierService';

var csvList = [];
var verkoopList = [];
//var sneakerList = [];

  export default {
    name: 'Verkoop_View',
    data(){
        return{
          sneakerList: [],
          leverancierList: [],
          leverancierName: "",
          id: "",
          showConfirmUpdate: false,
          sortKey: 'id',
          sortAscending: true
        }
    },
    props: {
  
    },
    methods: {
        async getSneakers(){
          await SneakerService.getAll()
            .then(response => {
              this.sneakerList = response.data;
              console.log(this.sneakerList);
            })
            .catch(error =>{
              console.error(error);
            })
        },
        getLeveranciers(){
          LeverancierService.getAll()
          .then(x => {
            this.leverancierList = x.data;
            console.log("LEVERANCIER");
            console.log(this.leverancierList);
          })
        },
        getLeverancierName(id){
          id = parseInt(id);
          const found = this.leveranciers().find(l => l.id === id)
          return found ? found.name : "???"
        },
        /*
        showConfirmBox(){
          showConfirmUpdate = !showConfirmUpdate;
        },
        
        refuse(){
            document.getElementById("confirm").classList.add("d-none");
        }, 
        */
        verkoop(nr){
            this.id = nr;
            this.showConfirmUpdate = !this.showConfirmUpdate;
            //this.showConfirmBox();
            
        },
        confirmVerkoop(){
          console.log("VERKAUFEN SLETSCH")
          var updateData = { status: 5, soldDate: this.createDate }
          SneakerService.update(this.id,updateData)
          .then( () => {
              console.log("yolo baby update , check db bro");
              this.showConfirmUpdate = ! this.showConfirmUpdate;
              this.getSneakers();
          })
          .catch(error => {
                  error = "Sneaker upodate nope bra";
                  console.error(error);
                  alert(error);
          })
        },
        toggleSort(key){
          if (this.sortKey === key) {
            this.sortAscending = !this.sortAscending;
          } else {
            this.sortKey = key;
            this.sortAscending = true;
          }
        },
        toggleContent(nr) {
          switch (nr) {
            case 1: this.active = 'sneaks'; break;
            case 2: this.active = 'csv';    break;
            case 3: this.active = 'main';   break;
            case 4: this.active = 'verkoop';break;
            case 5: this.active = 'verkocht';break;
          }

          this.$nextTick(() => {
            if (this.active === 'sneaks')   this.$refs.sneakerComponent?.getSneakers?.();
            if (this.active === 'csv')      this.$refs.csvComponent?.getSneakers?.();
            if (this.active === 'verkoop')  this.$refs.verkoopComponent?.getSneakers?.();
            if (this.active === 'verkocht') this.$refs.verkochtComponent?.getSneakers?.();
          });
        },
        
          
    },
    inject: ["brands","labelColors","leveranciers","werknemers"],
    computed: {
      createDate(){
          var now = new Date();

          var hour = now.getHours();
          var minut = now.getMinutes();
          var time = hour+":"+minut;

          var day = now.getDate();
          var month = now.getMonth()+1;
          var year = now.getFullYear();
          var today = day+"-"+month+"-"+year;


          console.log(time);
          console.log(today);

          return today;
        },
        filteredSneakers() {
          let filtered = Array.isArray(this.sneakerList) ? this.sneakerList : [];

          // Only status 4 (sneakers ready to be sold)
          //filtered = filtered.filter(s => s.status == 4);

          return filtered.sort((a, b) => {
            const key = this.sortKey;
            return this.sortAscending ? a[key] - b[key] : b[key] - a[key];
          });
        },
        stringId(){
          return (this.id? String(this.id).padStart(4, '0') : '0000')
        }
    },
    mounted () {
      this.getSneakers();
      this.getLeveranciers();
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