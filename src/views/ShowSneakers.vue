<template>
  <!--<div class="vh-80 scroll">-->
  <div class="vh-80 m-0 p-0 scroll">
    <div class="row m-0 p-0 mx-auto bg-blue text-white text-center rounded-top sticky">
        <div id="id" class="col-1 mb-1 navImgWrap py-2" title="id" @click="toggleSort('id')"><img class="navImg" src="../img/barcode.svg"></div>
        <div id="merk" class="col-2 mb-1 navImgWrap py-2" :title="'merk' + '\n' + 'model'"><img class="navImg" src="../img/tag.svg"></div>
        <div id="kleur" class="col-15 mb-1 py-2" title="kleur"><img class="navImg" src="../img/color.svg"></div>
        <div id="maat" class="col-1 mb-1 navImgWrap py-2" title="maat" @click="toggleSort('size')"><img class="navImg" src="../img/ruler.svg"></div>
        <div id="status" class="col-05 mb-1 py-2" title="status"><img class="navImg" src="../img/warning.svg"></div>
        <div id="bakNr" class="col-1 mb-1 py-2" title="locatie"><img class="navImg" src="../img/stock.svg"></div>
        <div id="user" class="col-15 mb-1 py-2" title="gebruiker"><img class="navImg" src="../img/login.svg"></div>
        <div id="datum" class="col-15 mb-1 navImgWrap py-2" title="datum" @click="toggleSort('date')"><img class="navImg" src="../img/clock.svg"></div>
        <div id="leverancier" class="col-1 mb-1 py-2" title="leverancier"><img class="navImg" src="../img/delivery.svg"></div>
        <div id="csv" class="col-05 mb-1 py-2" title="csv"><img class="navImg" src="../img/csv.svg"></div>
        <div id="verkoop" class="col-05 mb-1 py-2" title="verkoop"><img class="navImg" src="../img/sell.svg"></div>
        <!-- IMAG ROW -->
        <div class="d-none">
        <div id="id" class="col-1 borders mb-1 fw-bold" @click="toggleSort('id')">id</div>
        <div id="merk" class="col-2 borders mb-1">merk</div>
        <div id="kleur" class="col-15 borders mb-1">kleur</div>
        <div id="maat" class="col-1 borders mb-1 fw-bold" @click="toggleSort('size')">maat</div>
        <div id="status" class="col-05 borders mb-1">status</div>
        <div id="bakNr" class="col-1 borders mb-1">loca</div>
        <div id="user" class="col-15 borders mb-1">user</div>
        <div id="datum" class="col-15 borders mb-1 fw-bold" @click="toggleSort('date')">datum</div>
        <div id="leverancier" class="col-1 borders mb-1">bron</div>
        <div class="col-1 borders mb-1">verkoop</div>
        </div>
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
        :bakNr="s.bakNr"
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
        <div class="brandPick navImgWrap py-2 col valign mx-auto justify-content-center" v-for="x in activeBrands" :key="x.name" @click="selectBrand(x.name)">
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

    <div class="full m-0 p-0" id="confirm" v-if="confirm">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
              <p class="d-flex align-items-center justify-content-center my-5">Wil je <span class="text-yellow mx-2">{{ stringId }}</span> wijzigen?</p>
              <div class="row m-0 p-0">
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="changeSneaker(id)">JA</button> 
                </div>
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="confirm = !confirm">NEE</button>
                </div>
              </div>
          </div>
        </div>
    </div>

    <div id="overlay" class="overlay">
      <div class="message">Rechtermuis op een rij om data te wijzigen.</div>
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
          confirm: false,
          id: null
          
        }
    },
    props: {
  
    },
    methods: {/*
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
      },*/
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

          SneakerService.update(id,{ status:6 })
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
        const found = this.leveranciers().find(l => l.id == id)
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
        this.id = id;
        this.confirm = !this.confirm;
      },
      changeSneaker(id){
        this.$router.push({ name: 'changeSneaker', params: { id: id } });
      }

    },
    inject: ["brands","labelColors","leveranciers","sneakers","werknemers"],
    computed: {/*
      sneakerList(){
        return this.sneakers();
      },*/
      activeBrands() {
        return this.brands().filter(x => x.isActive);
      },
      filteredSneakers() {
        let filtered = this.sneakerList;
            
        if (this.selectedBrand) filtered = filtered.filter(s => s.brand === this.selectedBrand);
        //if (this.selectedSize) filtered = filtered.filter(s => s.size == this.selectedSize);

        if (this.selectedSize) {
          const selected = parseFloat(this.selectedSize);
          const isHalf = selected % 1 !== 0;
                
          filtered = filtered.filter(s => {
            const size = parseFloat(s.size);
          
            if (isHalf) {
              // If user searched e.g. 36.5, show only 36.5
              return size === selected;
            } else {
              // If user searched e.g. 36, include 36 and 36.5
              return size === selected || size === selected + 0.5;
            }
          });
        }

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
      },
      stringId(){
        return (this.id? String(this.id).padStart(4, '0') : '0000')
      }
      /*,
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
    animation: fadeInOut 2s forwards;
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

  .navImg{
    
  }

  .navImgWrap{
    border-radius: 0.375rem !important;
    border: 2px solid transparent !important;
    cursor: pointer;
  }

  .navImgWrap:hover{
    background-color: rgba(0,159,253,0.5) !important;
    border: 2px solid rgb(0,159,253) !important;
  }

  .brandPick{
    border-radius: 0.375rem !important;
    border: 2px solid transparent;
  }
/*
  .brandPick:hover {
    background-color: rgba(0,159,253,0.5);
    border: 2px solid rgb(0,159,253);
    cursor: pointer;    
  }

  #maat:hover img{
    background-color: rgba(0,159,253,0.5);
    border: 2px solid rgb(0,159,253);
    border-radius: 25rem;
  }*/

  .full{
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(247,247,247,0.5);
     z-index: 99999999999999999999999999999999;
  }

  .full .row .col-6 p{
    height: 30vh;
    font-size: 25px;
    font-weight: bold;
  }

  .full button{
    font-size: 25px;
    font-weight: bold;
    padding-top: 40px !important;
    padding-bottom: 40px !important;
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