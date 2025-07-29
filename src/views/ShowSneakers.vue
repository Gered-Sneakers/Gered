<template>
  <!--<div class="vh-80 scroll">-->
  <div class="vh-80 m-0 p-0 scroll">
    <div class="row mx-auto bg-blue text-white text-center rounded-top py-2 sticky">
        <div id="id" class="col-1 borders mb-1" @click="toggleSort('id')"><img src="../img/barcode.svg"></div>
        <div id="merk" class="col-2 borders mb-1"><img src="../img/tag.svg"></div>
        <div id="kleur" class="col-1 borders mb-1"><img src="../img/color.svg"></div>
        <div id="maat" class="col-1 borders mb-1" @click="toggleSort('size')"><img src="../img/ruler.svg"></div>
        <div id="status" class="col-1 borders mb-1"><img src="../img/warning.svg"></div>
        <div id="user" class="col-2 borders mb-1"><img src="../img/login.svg"></div>
        <div id="datum" class="col-1 borders mb-1" @click="toggleSort('date')"><img src="../img/clock.svg"></div>
        <div id="leverancier" class="col-1 borders mb-1"><img src="../img/delivery.svg"></div>
        <div class="col-1 borders mb-1"><img src="../img/csv.svg"></div>
        <div class="col-1 borders mb-1"><img src="../img/sell.svg"></div>
        <!-- IMAG ROW -->
        <div id="id" class="col-1 borders mb-1 fw-bold" @click="toggleSort('id')">id</div>
        <div id="merk" class="col-2 borders mb-1">merk</div>
        <div id="kleur" class="col-1 borders mb-1">kleur</div>
        <div id="maat" class="col-1 borders mb-1 fw-bold" @click="toggleSort('size')">maat</div>
        <div id="status" class="col-1 borders mb-1">status</div>
        <div id="user" class="col-2 borders mb-1">user</div>
        <div id="datum" class="col-1 borders mb-1 fw-bold" @click="toggleSort('date')">datum</div>
        <div id="leverancier" class="col-1 borders mb-1">bron</div>
        <div class="col-1 borders mb-1">csv</div>
        <div class="col-1 borders mb-1">verkoop</div>
    </div>
    <div class="w-100 text-dark m-0 p-0 mx-auto" 
     v-if="sneakerList.length > 0"
    >
      <div class="m-0 p-0" v-for="s in filteredSneakers">
      <SneakerSmall
        class="sneakerSmall img-50"
        v-if="s.status !== 5"
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
        :csv="s.csv"
        @csv="csvAdd(s.id)"
        @verkoop="verkoop"
        @contextmenu.prevent="handleRightClick(s.id)"
      >

      </SneakerSmall>
      </div>
      
    </div>
  </div>
  <div class="row w-100 vh-5 m-0 p-0 mx-auto bg-blue text-white ">
      <div class="col-1 valign border-2 border-end border-light fw-bold text-center"><span class="w-100 text-center" title="Totaal">{{ total }}</span></div>
      <div class="col-1 valign fw-bold text-center"><img class="mx-auto" src="../img/ruler.svg"> </div>
      <div class="col-1 valign border-2 border-end border-light fw-bold text-center p-0"><input class="sizeFilter w-75 h-75 mx-auto text-center" v-model="selectedSize"/></div>
      <div class="col-9 row m-0 p-0">
        <div class="col valign brandPick fw-bold text-center" title="Reset brand" @click="selectBrand(null)"><span class="w-100 text-center" >❌</span></div> 
        <div class="brandPick col valign mx-auto justify-content-center" v-for="x in activeBrands" :key="x.name" @click="selectBrand(x.name)">
          <!--<img :src="x.img">-->
          <img class="medz whiteIcons" :title="x.name" :src="`/src/img/brands/${x.img}`">
        </div>
      </div>
      <!--
      <div class="col-9 valign" >
      <span class="border-end">
        CSV&nbsp;</span> <span v-for="v in csvList" @click="csvRemove(v)" class="border-end border-light px-1 grow">{{ v }} </span></div>
      <div class="col-2 valign justify-content-center p-1">
        <button v-if="csvList[0]==null" @click="console.log(csvList)" class="w-100 h-100 bg-warning rounded fw-bold">Opslaan</button>
        <button v-else @click="csvAdd" class="w-100 h-100 bg-green rounded hover fw-bold">Opslaan</button>
      </div>-->
  </div>
    
    <!--
     <div >VERKOOP: <span v-for="v in verkoopList" @click="verkoopRemove(v)">{{ v+" " }} </span></div>
    <div @click="verkoopAdd" class="border border-warning bg-warning hover">VERKAUFEN BEBI</div>
    -->

    <div id="overlay" class="overlay">
      <div class="message">Right-click the sneaker to change data</div>
    </div>
</template>
  
<script>
import SneakerSmall from '@/components/SneakerSmall.vue';
import SneakerService from '@/services/SneakerService';
import LeverancierService from '@/services/LeverancierService';

//var csvList = [];
//var verkoopList = [];

  export default {
    name: 'ShowSneakers_View',
    data(){
        return{
          sneakerList: [],
          leverancierList: [],
          verkoopList: [],
          csvList: [],

          total: 0,

          selectedBrand: null,
          selectedSize: null,
          sortAscending: true,
          sortKey: 'id',
          x: 0,
          y: 0,
        }
    },
    props: {
  
    },
    methods: {
      async getSneakers(){
          await SneakerService.getAll()
            .then(response => {
              this.sneakerList = response.data;
              this.total = this.sneakerList.length;
              console.log(this.sneakerList);
            })
            .catch(error =>{
              console.error(error);
            })
      },
      verkoopRemove(id){
        SneakerService.update(id,{ status:3 })
          .then(res =>{
            console.log(res);
            console.log("We don giv a fu bwoi");
          })
          .catch(err => {
            console.log(err);
          })
      },
      verkoop(id){       
          SneakerService.update(id,{ status:4 })
          .then(res =>{
            console.log(res);
            console.log("We don giv a fu bwoi");

          })
          .catch(err => {
            console.log(err);
          })
      },/*
      csv(id){
        console.log("CSV");
        console.log(id);
        !this.csvList.includes(id) && this.csvList.push(id);
        console.log(this.csvList);
      },
      csvRemove(id){
        this.csvList = this.csvList.filter(c => c !== id);
      },*/
      csvAdd(id){
        console.log("CSVeejen Bejbi");

          SneakerService.update(id,{ csv:1 })
          .then(res=>{
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
      },
      getLeveranciers(){
        LeverancierService.getAll()
        .then( x => {
          this.leverancierList = x.data;
        })
      },
      getLeverancierName(id){
        id = parseInt(id);
        const found = this.leveranciers().find(l => l.id === id)
        return found ? found.name : "???"
      }
      // FILTERS
      ,
      selectBrand(brandName){
        this.selectedBrand = brandName;
      },
      /*
      filterSize(){
        let filtered = this.sneakerList;

        if (this.selectedBrand) {
          filtered = filtered.filter(s => s.brand === this.selectedBrand);
        }
      
        if (this.selectedSize) {
          filtered = filtered.filter(s => s.size === this.selectedSize);
        }
      
        return filtered.sort((a, b) => a.size - b.size);
      },*/
      toggleSort(key) {
        if(this.sortKey === key) {
          this.sortAscending = !this.sortAscending; // toggle direction
        } else {
          this.sortKey = key;
          this.sortAscending = true; // reset to ascending on new key
        }
      },
      handleRightClick(id) {
        alert("Do you want to change " + id);
      }

    },
    inject: ["brands","labelColors","leveranciers","sneakers","werknemers"],
    computed: {
      sneakerList(){
        return this.sneakers();
      },
      activeBrands() {
        return this.brands().filter(x => x.isActive);
      },
      filteredSneakers() {
        let filtered = this.sneakerList;
            
        if (this.selectedBrand) filtered = filtered.filter(s => s.brand === this.selectedBrand);
        if (this.selectedSize) filtered = filtered.filter(s => s.size == this.selectedSize);

        this.total = filtered.length;
      /*
        if (this.selectedSize) {
          filtered = filtered.filter(s => s.size === this.selectedSize);
          
        }
      */
        return filtered.sort((a, b) => {
          const key = this.sortKey;

          // sort by date
          if (key === 'date') {
            const parseDate = str => {
              const [day, month, year] = str.split('-').map(Number);
              return new Date(year, month - 1, day);
            };

            const dateA = parseDate(a.date);
            const dateB = parseDate(b.date);

            return this.sortAscending ? dateA - dateB : dateB - dateA;
          }

          // ✅ fallback for numeric fields like id, size
          return this.sortAscending ? a[key] - b[key] : b[key] - a[key];
        });
      }/*,
      availableSizes(){
        const sizes = this.sneakerList.map(s => s.size);
        return [...new Set(sizes)].sort((a,b) => a-b);
      }*/
      
    },
    mounted () {
      console.log("SNEAKERZ SHOW ---------------")
      console.log(this.sneakers());
      console.log(this.brands());
      console.log(this.labelColors());
      console.log(this.leveranciers());
      console.log(this.werknemers());
      console.log("-----------------------------");
      setTimeout(() => {
        const overlay = document.getElementById("overlay");
        if (overlay) overlay.remove();
      }, 5000);
    },
    watch:{
      $route(){
        this.getSneakers();
      }
    },
    components:{
      SneakerSmall
    }
  }

</script>
  
<style scoped>

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(20, 20, 20, 0.85);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    opacity: 0;
    animation: fadeInOut 3s forwards;
    font-size: 1.5rem;
    text-align: center;
  }

  

  @keyframes fadeInOut {
    0%   { opacity: 0; }
    10%  { opacity: 1; }
    90%  { opacity: 1; }
    100% { opacity: 0; }
  }

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

  .brandPick{
    border-radius: 0.375rem !important;
    border: 2px solid transparent;
  }

  .brandPick:hover {
    background-color: rgba(0,159,253,0.5);
    border: 2px solid rgb(0,159,253);
    cursor: pointer;    
  }

  #maat:hover{
    background-color: rgba(0,159,253,0.5);
    border-radius: 25rem;
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

  .medz{
    width: 30px;
    height: 30px;
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