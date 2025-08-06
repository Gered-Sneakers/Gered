<template>
    <div class="loggen bg-blue h-100 row m-0 p-0 text-center fw-bold">
        <div class="col-12 vh-10 bg-blue text-light">
            <div class="title h-100 valign">
                <p class="w-100 text-center">Zoeken</p>
            </div>
        </div>
        <div class="col-12 h-25 valign m-0 p-0">
            <div id="changeHeight" class=" mx-auto">
                <div class="row m-0 p-0 mx-auto">
                    <div class="row m-0 p-1 mx-auto justify-content-center">
                       
                        <div id="filters" class="col-12 row m-0 p-0 rounded-start rounded-end d-none mb-1">
                            <div class="col-1 bg-blue"></div>
                            
                            <div class="col-2 bg-blue valign">
                                <img src="../img/ruler.svg" class="w-100 medium p-1 whiteIcons mx-auto">
                            </div>
                            <div class="col-1 bg-blue"></div>
                            <div class="col-2 bg-blue valign">
                                <img src="../img/color.svg" class="w-100 medium p-1 whiteIcons mx-auto">
                            </div>
                            <div class="col-1 bg-blue"></div>
                            <div class="col-2 bg-blue valign">
                                <img src="../img/delivery.svg" class="w-100 medium p-1 whiteIcons mx-auto">
                            </div>
                            <div class="col-1 bg-blue"></div>
                            <div class="col-2 bg-blue valign">
                                <img src="../img/login.svg" class="w-100 medium p-1 whiteIcons mx-auto">
                            </div>
                            
                            <!-- IMAGINABLE ROW -->
                            <div class="col-1 bg-blue"></div>
                            <div class="col-2 m-0 p-0 my-1">
                                <div class="custom-number-input w-100 h-100">
                                <div class="number-input w-25 h-100 ps-1"><button class="text-light rounded-start" @click="sizeMin">-</button></div>
                                <input type="number" id="sneakerSize" class="w-50 h-100 text-center" step="0.5" min="36" max="50" :v-model="selectedSize">
                                <div class="number-input w-25 h-100 pe-1"><button class="text-light rounded-end" @click="sizePlus">+</button></div>
                                </div>
                            </div>
                            <div class="col-1 "></div>
                            <div class="col-2 my-1 custom-input">
                                <select class="w-100 h-100" v-model="colors" @change="console.log(colors)">
                                    <div v-for="c in color" :key="c.name">
                                        <option :class="c.name">{{ c.name }}</option>
                                    </div>
                                    <option class="zwart text-light">zwart</option>
                                    <option class="">multi</option>
                                </select>
                                <!--
                                <div class="dropdown">
                                  <button 
                                    class="btn btn-outline-primary dropdown-toggle w-100" 
                                    type="button" 
                                    @click="showDropdown = !showDropdown"
                                  >
                                    Kleuren
                                  </button>

                                  <div v-if="showDropdown" class="dropdown-menu p-3 show w-100 border bg-white" style="min-width:250px; max-height: 400px; overflow-x: hidden; overflow-y:auto;">
                                    <div class="row">
                                      <div 
                                        v-for="c in color" 
                                        :key="c.name"
                                        :class="c.name"
                                        class="col-3 p-1 rounded"
                                      >
                                        <div 
                                          class="valign colorSquare border rounded"
                                          :class="c.name"
                                        >
                                          <input 
                                            type="checkbox" 
                                            class="colorz"
                                            :class="c.name" 
                                            :value="c.name" 
                                            v-model="colors"
                                          >
                                        </div>
                                      </div>
                                      <div class="zwart col-3 p-1 rounded">
                                        <div 
                                          class="valign colorSquare border rounded zwart"
                                         
                                        >
                                          <input 
                                            type="checkbox" 
                                            class="colorz zwart"
                                            value="zwart" 
                                            v-model="colors"
                                          >
                                        </div>
                                      </div>
                                      <div class="multi col-3 p-1 rounded">
                                        <div 
                                          class="valign colorSquare border rounded multi"
                                        >
                                          <input 
                                            type="checkbox" 
                                            class="colorz multi"
                                            value="multi" 
                                            v-model="colors"
                                          >
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>-->
                            </div>

                            <div class="col-1"></div>

                            <div class="col-2 m-0 p-0 my-1 custom-input">
                                <select v-model="selectedLeverancier" class="w-100 h-100" @change="filterLeverancier">
                                    <div v-for="l in leveranciers" :key="l.id">
                                        <option v-if="l.isActive" :value="l.name">{{l.name}}</option>
                                    </div>
                                </select>
                            </div>

                            <div class="col-1"></div>

                            <div class="col-2 m-0 p-0 my-1 custom-input">
                                <select v-model="selectedWerknemer" class="w-100 h-100">
                                    <div v-for="w in werknemers" :key="w.id">
                                        <option v-if="w.isActive" :value="w.id" @click="console.log('FILTER MAKEN');">{{w.name}}</option>
                                    </div>
                                </select>
                            </div>
                            <!-- IMAGINABLE ROW -->
                            <div class="col-1 bg-blue valign">
                                <img src="../img/tag.svg" class="w-100 medium p-1 whiteIcons mx-auto">
                            </div>

                            <div class="col-11 row m-0 p-0 my-1">
                                <div class="col-3 col-md-2 col-xl-1 mx-auto border border-dark rounded" v-for="brand in brands.data" :key="brand.id">
                                    <img :src="'../src/img/brands/' + brand.img" class="w-100 grow blackIcons" @click="selectedBrand = brand.name;console.log(brand.name);filterBrand();">
                                </div>
                            </div>
                            <!-- COLORS -->
                             <!--
                            <div class="col-1 bg-blue"></div>
                            <div class="col-11 row m-0 p-0 my-1">
                                <div class="col w-100 valign mx-auto rounded border border-dark colorSquare white"><div class="mx-auto"><input type="checkbox" class="colorz white" value="wit" v-model="colors"></div></div>
                                <div class="col w-100 valign mx-auto rounded border colorSquare yellow"><div class="mx-auto"><input type="checkbox" class="colorz yellow" value="geel" v-model="colors"></div></div>
                                <div class="col w-100 valign mx-auto rounded border colorSquare orange"><div class="mx-auto"><input type="checkbox" class="colorz orange" value="oranje" v-model="colors"></div></div>
                                <div class="col w-100 valign mx-auto rounded border colorSquare red"><div class="mx-auto"><input type="checkbox" class="colorz red" value="rood" v-model="colors"></div></div>
                                <div class="col w-100 valign mx-auto rounded border colorSquare pink"><div class="mx-auto"><input type="checkbox" class="colorz pink" value="roos" v-model="colors"></div></div>
                                <div class="col w-100 valign mx-auto rounded border colorSquare purple"><div class="mx-auto"><input type="checkbox" class="colorz purple" value="paars" v-model="colors"></div></div>
                                <div class="col w-100 valign mx-auto rounded border colorSquare lightgreen"><div class="mx-auto"><input type="checkbox" class="colorz lightgreen" value="lichtgroen" v-model="colors"></div></div>
                                <div class="col w-100 valign mx-auto rounded border colorSquare green"><div class="mx-auto"><input type="checkbox" class="colorz green" value="groen" v-model="colors"></div></div>
                                <div class="col w-100 valign mx-auto rounded border colorSquare lightblue"><div class="mx-auto"><input type="checkbox" class="colorz lightblue" value="lichtblauw" v-model="colors"></div></div>
                                <div class="col w-100 valign mx-auto rounded border colorSquare blue"><div class="mx-auto"><input type="checkbox" class="colorz blue" value="blauw" v-model="colors"></div></div>
                                <div class="col w-100 valign mx-auto rounded border colorSquare beige"><div class="mx-auto"><input type="checkbox" class="colorz beige" value="beige" v-model="colors"></div></div>
                                <div class="col w-100 valign mx-auto rounded border colorSquare brown"><div class="mx-auto"><input type="checkbox" class="colorz brown" value="bruin" v-model="colors"></div></div>
                                <div class="col w-100 valign mx-auto rounded border colorSquare grey"><div class="mx-auto"><input type="checkbox" class="colorz grey" value="grijs" v-model="colors"></div></div>
                                <div class="col w-100 valign mx-auto rounded border colorSquare black"><div class="mx-auto"><input type="checkbox" class="colorz black" value="zwart" v-model="colors"></div></div>
                                <div class="col w-100 valign mx-auto rounded border colorSquare multi"><div class="mx-auto"><input type="checkbox" class="colorz multi" value="multi" v-model="colors"></div></div>
                            </div>
                            -->
                            <!-- IMAGINABLE ROW -->                           
                            
                        </div>

                        <div id="filterIcon" class="col-2 bg-blue m-0 valign rounded mb-1 d-none" @click="hideFilters">
                            <img src="../img/filter.svg" class="w-100 whiteIcons grow">
                        </div>

                        <div id="qrCode" class="col-2 bg-blue m-0 mb-1 rounded valign">
                            <img class="w-100 grow" src="../img/qr.svg">
                            <div id="reader" class="w-100 h-50 d-none"></div>
                        </div>
                        
                        <div class="col-8">
                            <input type="text" size="14" 
                            id="search"
                            class="w-100 text-center border-blue rounded mx-auto mb-1" 
                            maxlength="4"
                            placeholder="labelnr" 
                            v-model="searchId"
                            @keyup.enter="search();changeHeight();"
                            @click="showSelected"
                            ><br>
                        </div>
                        <div id="qrCode" class="col-2 bg-blue m-0 mb-1 rounded valign">
                            <img class="w-100 grow" src="../img/qr.svg">
                            <div id="reader" class="w-100 h-50 d-none"></div>
                        </div>
                        <div class="w-100 text-center d-flex justify-content-center">
                            <div id="nextButton" class="nextButton grow pointer boxShadow-blue square valign text-center h-100 mt-3">
                                <img @click="search()" class="vh-15 mx-auto selectDisable" src="../img/next.svg" title="Je kan ook [ENTER] duwen.">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
        <div class="h-75" v-if="sneaker">
            <Sneaker 
                :id="sneaker.id"
                :labelid="sneaker.labelid"
                :colorlabel="sneaker.colorlabel"
                :date="sneaker.date"
                :brand="sneaker.brand"
                :model="sneaker.model"
                :size="sneaker.size"
                :colors="sneaker.colors"
                :supplier="getLeverancierName(sneaker.supplier)"
                :laces="sneaker.laces"
                :soles="sneaker.soles"
                :status="getStatusName(sneaker.status)"
                :teRepareren="sneaker.teRepareren"
                :creator="sneaker.creator"
                :verkoop="sneaker.verkoop"
                :csv="sneaker.csv"
                :extra="sneaker.extra"
                :bakNr="sneaker.bakNr"
                @repair="repair"
                @update="update"

            ></Sneaker>
        </div>
        <div class="m-0 p-0 vh-50 d-none" v-else>
                <ShowSneakers/>
        </div>
        
        <div id="confirm" class="full d-none">
            <div id="confirmBox" class="col-6 bg-dark text-light rounded p-5">
                <p>Ben je zeker dat je {{ searchId }} wil verwijderen?</p>
                <button class="bg-green border-green rounded confirmbutton grow" @click="remove">YES</button> <button class="bg-red border-red rounded confirmbutton grow" @click="refuse">NO</button>
            </div>
        </div>
    </div>                       
  </template>
  
  <script>
    //import KleurPreview from '@/components/KleurPreview.vue';
    import SneakerService from '@/services/SneakerService';
    import Sneaker from '@/components/Sneaker.vue';
    import ConfirmBox from '@/components/ConfirmBox.vue';
    import BrandService from '@/services/BrandService';
    import LeverancierService from '@/services/LeverancierService';
    import WerknemerService from '@/services/WerknemerService';
    import ShowSneakers from './ShowSneakers.vue';

    import SneakerColors from '@/assets/sneakerColors.json';
    import { Html5QrcodeScanner } from 'html5-qrcode';

    //import {ref} from 'vue'

  export default {
    name: 'Search_View',
    data() {
        return{
            searchId: "",
            sneaker: null,
            error: null,

            sneakers: "",
            filteredSneakers: false,

            brands: "",
            leveranciers: [],
            werknemers: "",
            color: "",

            selectedBrand: "",
            selectedWerknemer: "",
            selectedLeverancier: "",
            selectedSize: "",
            //colors: ref([]),
            //showDropdown: ref(false)
        }
    },
    props: {
  
    },
    methods:{
        search(){
            this.error = null;
            console.log("Search method started");
            
            if(!this.searchId){
                this.error = "ID verwacht";
                return;
            }
            
            SneakerService.get(this.searchId)
                .then(response => {
                    this.sneaker = response.data;
                    this.sneaker.colors = this.sneaker.colors.split(" ");
                    this.sneaker.colors.pop();
                    
                    console.log(this.sneaker);
                })
                .catch(error => {
                    error = "Sneaker niet gevonden";
                    console.error(error);
                    alert(error);
               })
            
        },
        getAll(){
            SneakerService.getAll()
            .then(response => {
                console.log("ALL SNEAKERS");
                this.sneakers = response.data;
                console.log(this.sneakers);
            })
        },
        getBrands(){
            BrandService.getAll()
            .then(response => {
                this.brands = response;
            })
            .catch(error => {

            })
        },
        getLeveranciers(){
            LeverancierService.getAll()
            .then(response =>{
                console.log("ALL LEVERANCIERS");
                console.log(response);
                this.leveranciers = response.data;
                console.log(this.leveranciers);
            })
            .catch(error => {

            })
        },
        getWerknemers(){
            WerknemerService.getAll()
            .then(response =>{
                console.log("ALL WERKNEMERS");
                console.log(response.data);
                this.werknemers = response.data.sort((a, b) => a.name.localeCompare(b.name));
                console.log(this.werknemers);
            })
            .catch(error => {

            })
        },
        confirm(){
            document.getElementById("confirm").classList.remove("d-none");
        },
        refuse(){
            document.getElementById("confirm").classList.add("d-none");
        },
        update(){
            const updateData = sneaker;
            SneakerService.update(this.id,{sneaker})
            .then(response => {
                //update all data
                
                this.getWerknemers();
                this.updateId = null,
                this.updateName = '',
                this.updatePass = ''
            })
            .catch(error => {

            })
        },
        cleaning(){
            SneakerService.update(this.id,{sneaker})
            .then(response => {
                //status repair
            })
            .catch(error => {

            })
        },
        repair(){
            SneakerService.update(this.id,{sneaker})
            .then(response => {
                //status repair
            })
            .catch(error => {

            })
        },
        stock(){
            SneakerService.update(this.id,{sneaker})
            .then(response => {
                //status repair
            })
            .catch(error => {

            })
        },
        sold(){
            SneakerService.update(this.id,{sneaker})
            .then(response => {
                //status repair
            })
            .catch(error => {

            })
        },
        filterBrand(){
            if (!this.selectedBrand) return this.sneakers;
            else if(!this.filteredSneakers) this.filteredSneakers = this.sneakers.filter(s => s.brand.toLowerCase().includes(this.selectedBrand.toLowerCase()));
            else this.filteredSneakers = this.filteredSneakers.filter(s => s.brand.toLowerCase().includes(this.selectedBrand.toLowerCase()));
            console.log(this.filteredSneakers);
            
        },
        filterLeverancier() {
            if (!this.selectedLeverancier) return this.sneakers;
            else if(!this.filteredSneakers) this.filteredSneakers = this.sneakers.filter(s => s.supplier.toLowerCase().includes(this.selectedLeverancier.toLowerCase()));
            else this.filteredSneakers = this.filteredSneakers.filter(s => s.leverancier.name.toLowerCase().includes(this.selectedLeverancier.toLowerCase()))
            console.log(this.filteredSneakers);
        },
        
        /*,
        remove(){
            if(!this.searchId){
                this.error = "ID verwacht";
                return;
            }

            SneakerService.delete(this.searchId)
                .then(response => {
                    this.confirm();
                    console.log(`✅ Sneaker ${this.searchId} deleted.`, response.data);
                })
                .catch(error => {
                    error = "Sneaker niet gevonden";
                    console.error(error);
                    alert(error);
                })
        },*/
        changeHeight(){
            var salami = document.getElementById("changeHeight");
                console.log(salami);
                console.log("pre");
                salami.classList.remove("h-75");
                salami.classList.add("h-35");
                console.log(salami);
                console.log("after");
        },
        hideFilters(){
            var filterIcon = document.getElementById("filterIcon");
            var filters = document.getElementById("filters");
            
            if(filterIcon.classList.contains("rounded-start")) {
                filterIcon.classList.remove("rounded-start","col-1");
                filterIcon.classList.add("rounded","col-2");
            }
            else{
                filterIcon.classList.remove("rounded","col-2");
                filterIcon.classList.add("rounded-start","col-1");
            }
            
            if(filters.classList.contains("d-none")) filters.classList.remove("d-none");
            else  filters.classList.add("d-none");
        },
        sizePlus(){
            const input = document.getElementById('sneakerSize');
            if(!input.value || input.value == 50) input.value = 50;
            else input.value = parseFloat(input.value) + 0.5;
            this.selectedSize = input.value;
            console.log(this.selectedSize);
        },
        sizeMin(){
            const input = document.getElementById('sneakerSize');
            if(!input.value || input.value == 36) input.value = 36;
            else input.value = parseFloat(input.value) - 0.5;
            this.selectedSize = input.value;
            console.log(this.selectedSize);
        },
        showSelected(){
            console.log("SELECTED");
            console.log("-------------------------");
            console.log("LEVERANCIER => " + this.selectedLeverancier);
            console.log("SIZE =>" + this.selectedSize);
            console.log("WERKNEMER => " + this.selectedWerknemer);
            console.log("COLORS => " + this.colors);
            console.log("-------------------------");
        },
        createScanner(){
            const scanner = new Html5QrcodeScanner("reader",{ fps:10, qrbox:250 }, false );
            scanner.render(
              qrCodeMessage => {
                console.log("Scanned Qr", qrCodeMessage);
                //document.getElementById("showMsg").innerHTML= qrCodeMessage;
                this.searchId = qrCodeMessage;
                document.getElementById("search").
                scanner.clear();
                scanner.stop();
              },
              errorMessage => {
                console.warn("Scan error: ", errorMessage);
              }
            );
        },
        getLeverancierName(id){
          id = parseInt(id);
          const found = this.leveranciers.find(l => l.id === id)
          return found ? found.name : "???"
        },
        getStatusName(id){
            id = parseInt(id);
            var name = "Cleaning";
            switch(id){
                case 1:
                    name = "Cleaning"
                    break;
                case 2:
                    name = "Repair"
                    break;
                case 3:
                    name = "Stock"
                    break;
                case 4: 
                    name = "Verkoop"
                    break;
                case 5: 
                    name = "Verkocht"
                    break;
                default:
                    name = "Cleaning"
                    break;
            }
            return name;
        }

    },
    computed: {
    },
    mounted(){
        this.getAll();
        this.getBrands();
        this.getLeveranciers();
        this.getWerknemers();
        this.createScanner();
        this.color = SneakerColors;

        var el = document.getElementById("search");

        el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') this.search();
        });
    },
    components: {
        //KleurPreview,
        Sneaker,
        ConfirmBox,
        ShowSneakers
    }
  }
  </script>
  
  
  <style scoped>
    .full{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(247,247,247,0.5);
    }

    #confirmBox{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .confirmbutton{
        width: 45px;
    }

    input[type="checkbox"] {
        transform: scale(2.5);
    }

    hr{
        color: white;
    }

    .border-blauw{
        border-color: var(--gblue);
    }

    .custom-number-input, .custom-input {
        display: flex;
        align-items: center;
        height: 66px !important;
        font-size: 25px;
    }

    .number-input {
	    display: inline-flex;
    }

    .number-input button {
    	-webkit-appearance: none;
    	align-items: center;
    	background: var(--gBlack);
    	border: none;
    	cursor: pointer;
    	justify-content: center;
    	margin: 0;
    	outline: none;
    	padding: 0;
    	position: relative;
        width: 100%;
    }

    .number-input button:hover {
    	filter: brightness(140%);
    }

    /* Chrome, Safari, Edge */
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    
    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }


    #filterIcon, #qrCode{
        min-height: 50px;
        width: 75px;
        height: 75px;
    }

    #filters{
        border-top: 2px solid var(--gBlack);
        border-right: 2px solid var(--gBlack);
        border-bottom: 2px solid var(--gBlack);
    }
/*
    #filters div img{
        max-width: 50px;
        max-height: 50px;
    }
*/
    .whiteIcons{
        filter: brightness(0)invert(1);
    }

    .blackIcons{
        filter: brightness(0) !important;
    }

    .small{
        width: 16px;
        height: 16px;
   }

   .smallz{
        width: 22px;
        height: 22px;
   }

   .medium{
        width: 40px;
        height: 40px;
   }

    .colorSquare{
        width: 25% !important;
        position: relative;
    }

    .colorSquare:after{
        content: "";
        display: block;
        padding-bottom: 100%;
    }

   input[type=text]{
       width: 50vw;
       height: 75px;
       font-size: 65px;
   }

   .grow:hover span{
        color: #1F2937;
   }

   .grow .wijzig{
        color: #FACC15;
        transform: 1.05%;
   }

   .grow .verwijder{
        color: #EF4444;
        transform: 1.05%;
   }

   .multi, .multi::before{
    accent-color: var(--yellow);
    background-color: var(--multi);
    background-image: var(--multi);
    border: 3px solid transparent;
    color: var(--multi) !important;
  }

  </style>
  