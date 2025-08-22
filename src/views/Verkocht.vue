<template>
  <div class="vh-80 m-0 p-0 scroll">
    <div class="row m-0 p-0 mx-auto bg-blue text-white text-center rounded-top py-2 sticky">
      <div class="row m-0 p-0 mx-auto bg-blue text-white text-center">
        <div id="id" class="col borders rounded-top" title="id"  @click="toggleSort('id')"><img src="../img/barcode.svg" class="navImg"></div>
        <div id="merk" class="col borders" title="merk"><img src="../img/tag.svg" class="navImg"></div>
        <div id="kleur" class="col borders" title="kleur"><img src="../img/color.svg" class="navImg"></div>
        <div id="maat" class="col borders" title="maat" @click="toggleSort('size')"><img src="../img/ruler.svg" class="navImg"></div>
        <div id="datum" class="col borders" title="datum"><img src="../img/clock.svg" class="navImg"></div>
        <div id="prijs" class="col borders" title="prijs"><img src="../img/money.svg" class="navImg"></div>
        <div id="leverancier" class="col borders" title="leverancier"><img src="../img/delivery.svg" class="navImg"></div>
        <div id="retour" class="col borders" title="retour"><img src="../img/undo.svg" class="navImg"></div>
      </div>
      <div class="row m-0 p-0 mx-auto bg-blue text-white text-center d-none">
        <!-- IMAG ROW -->
        <div id="id" class="col borders mb-1 fw-bold"  @click="toggleSort('id')">id</div>
        <div id="merk" class="col borders mb-1">merk</div>
        <div id="kleur" class="col borders mb-1">kleur</div>
        <div id="maat" class="col borders mb-1 fw-bold" @click="toggleSort('size')">maat</div>
        <div id="datum" class="col borders border-primaryd mb-1">verkocht</div>
        <div id="prijs" class="col borders mb-1">prijs</div>
        <div id="leverancier" class="col borders mb-1">bron</div>
        <div id="retour" class="col borders mb-1">retour</div>
      </div>
    </div>
    <div class="m-0 p-0 mx-auto" v-if="sneakerList.length > 0">

        <div v-for="s in filteredSneakers" :key="s.id">
        <SneakerVerkocht
          v-if="s.status == 5"
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
          :soldDate="s.soldDate"
          @verkoop="verkoop"
          @updated="getSneakers"
        >
        </SneakerVerkocht>
        
        </div>
      <!--
        @csv="csv"
        @verkoop="verkoop"
      -->
    </div>
  </div>
  <div class="row mx-auto vh-5 bg-blue text-white valign">
      <div class="col" v-if="filteredSneakers.lenght == 0"></div>
      <div class="col h-100 valign justify-content-center fw-bold" v-else title="Totaal"> {{ filteredSneakers.length }} </div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
  </div>
    <div class="full m-0 p-0" id="confirm" v-show="showConfirmUpdate == true">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
              <p class="my-5">Ben je zeker dat <span class="text-yellow">{{ id }}</span> wil verkopen?</p>
              <div class="row m-0 p-0">
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="confirmVerkoop">JA</button> 
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

import SneakerVerkocht from '@/components/SneakerVerkocht.vue';
import SneakerService from '@/services/SneakerService';
import LeverancierService from '@/services/LeverancierService';

var csvList = [];
var verkoopList = [];

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
        }
          
    },
    inject: ["brands","labelColors","leveranciers","sneakers","werknemers"],
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

          // Show only sold sneakers (status == 5)
          filtered = filtered.filter(s => s.status == 5);

          return filtered.sort((a, b) => {
            const key = this.sortKey;
            return this.sortAscending ? a[key] - b[key] : b[key] - a[key];
          });
        }
    },
    mounted () {
      this.getSneakers();
      this.getLeveranciers();
    },
    components:{
      SneakerVerkocht
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

  .bg-danger{
    background-color: red !important;
  }

  .smallz{
    width: 22px;
    height: 22px;
  }

  .small{
    width: 16px;
    height: 16px;
  }

   @media (min-width: 1600px) { 
    * {
      font-size: 30px;
    }
    #brandButton{
      height: 51px !important;
    }
    .medz, .navImg{
      width: 50px !important;
      height: 50px !important;
    }
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