<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    import KleurPreview from './KleurPreview.vue';
    import SneakerService from '../services/SneakerService';

    export default {
        name: 'SneakerSmall',
        //emits: ['csv', 'verkoop', 'contextmenu'],
        emits: {
          verkoop: (id, args) => Number.isFinite(id) && args && typeof args === 'object',
          csv:     (id, args) => Number.isFinite(id) && args && typeof args === 'object',
          contextmenu: (id, evt) => Number.isFinite(id) && (!evt || evt.type === 'contextmenu'),
        },
        data(){
          return{
            showCsv: true,
            showVerkoop: true,
            verkoopCheck: false,
            csvCheck: false,
            truncateLimit: 13,
            display: false,
            displayz: false,
            baknr: "",
            baknrz: ""
            //leverancierList: 
          }
        },
        props:{
            id:{
                type: Number,
                required: true
            },
            colorlabel:{
                type: String
            },
            date:{
                type: String   
            },
            brand:{
                type: String   
            },
            model:{
                type: String
            },
            extra:{
              type: String
            },
            size:{
                type: Number   
            },
            colors:{
                type: String   
            },
            supplier:{
                type: String   
            },
            status:{
                type: Number
            },
            bakNr:{
              type: String
            },
            creator:{
                type: String
            },
            csv: {
                type: Boolean
            },
            verkoop:{
              type: Boolean
            }
        },
        methods:{
            capitalize(string){
                var firstLetter = string.charAt(0);
                var rest = string.substring(1);

                firstLetter = firstLetter.toUpperCase();

                console.log(firstLetter+rest);
            },
            show(){
              console.log(this.status);
            },
            truncate(text) {
              const limit = this.truncateLimit;
              return text && text.length > limit ? text.substring(0, limit) + ".." : text;
            },
            handleSell(){
              this.verkoopCheck = true
              this.display = true
              this.baknr = "OUT-1-"
              document.getElementById("sellInput").focus();              
            },
            handleCsv(){
              this.csvCheck = true
              this.displayz = true
              this.baknrz = "OUT-2-"
              document.getElementById("csvInput").focus(); 
            },
            verkoop(){
              this.display = false
              this.$emit('verkoop',this.id, {status: 4, bakNr: this.baknr})
              //SneakerService.getAll();
            },
            csv(){
              this.displayz = false 
              this.$emit('csv',this.id, {status: 6 , bakNr: this.baknrz})
            },
            updateTruncateLimit() {
              const width = window.innerWidth;
              if (width >= 1440) {
                this.truncateLimit = 18;
              } else if (width >= 1000) {
                this.truncateLimit = 13;
              } else if (width >= 800){
                this.truncateLimit = 10;
              }
            },
        },
        inject: ["leveranciers"],
        computed: {
          leveranciersList(){
            console.log("SVENBOLI BOLL");
            console.log(this.leveranciers());
            return this.leveranciers();
          },
          getStatus(){
            switch (parseInt(this.status)) {
              case 1:
                return new URL('../img/cleaning.svg', import.meta.url).href;
              case 2:
                return new URL('../img/repair.svg', import.meta.url).href;
              case 3:
                return new URL('../img/stock.svg', import.meta.url).href;
              case 4:
                return new URL('../img/sell.svg', import.meta.url).href;
              case 6:
                return new URL('../img/csv.svg', import.meta.url).href;
              default:
                return new URL('../img/cleaning.svg', import.meta.url).href;
            }
          },
          supplierName() {
            //const match = this.leveranciers().find(l => l.id === this.supplier || l.id === parseInt(this.supplier));
            return this.supplier ? this.supplier.substring(0, 7) : 'Onbekend';
          },
          colorArray(){
            return this.colors ? this.colors.split(' ') : []
          },
          stringId(){
            return String(this.id).padStart(4, '0')
          }
        },
        watch: {
            baknr(newVal) {
                const prefix = "OUT-1-";

                if (!newVal) {
                  this.baknr = prefix;
                  return;
                }
            
                // Force uppercase and strip invalid chars
                let raw = newVal.toUpperCase().replace(/[^A-Z0-9]/g, "");
            
                // Remove manually typed prefix if present
                if (raw.startsWith(prefix.replace(/-/g, ""))) {
                  raw = raw.slice(prefix.replace(/-/g, "").length);
                }
            
                // Always start with fixed prefix
                let formatted = prefix;
            
                // Limit raw to max 3 chars after prefix
                raw = raw.slice(0, 3);
            
                // Build with trailing dash after first char if there's only a letter
                if (raw.length === 1) {
                  formatted += `${raw[0]}-`;
                } else if (raw.length === 2) {
                  formatted += `${raw[0]}-${raw[1]}`;
                } else if (raw.length === 3) {
                  formatted += `${raw[0]}-${raw[1]}-${raw[2]}`;
                }
            
                // Max length 9 (OUT-1-A-1)
                formatted = formatted.slice(0, 9);
            
                // Prevent infinite loop
                if (formatted !== this.baknr) {
                  this.baknr = formatted;
                }
            },
            baknrz(newVal) {
                const prefix = "OUT-2-";

                if (!newVal) {
                  this.baknrz = prefix;
                  return;
                }
            
                // Force uppercase and strip invalid chars
                let raw = newVal.toUpperCase().replace(/[^A-Z0-9]/g, "");
            
                // Remove manually typed prefix if present
                if (raw.startsWith(prefix.replace(/-/g, ""))) {
                  raw = raw.slice(prefix.replace(/-/g, "").length);
                }
            
                // Always start with fixed prefix
                let formatted = prefix;
            
                // Limit raw to max 3 chars after prefix
                raw = raw.slice(0, 3);
            
                // Build with trailing dash after first char if there's only a letter
                if (raw.length === 1) {
                  formatted += `${raw[0]}-`;
                } else if (raw.length === 2) {
                  formatted += `${raw[0]}-${raw[1]}`;
                } else if (raw.length === 3) {
                  formatted += `${raw[0]}-${raw[1]}-${raw[2]}`;
                }
            
                // Max length 9 (OUT-1-A-1)
                formatted = formatted.slice(0, 9);
            
                // Prevent infinite loop
                if (formatted !== this.baknrz) {
                  this.baknrz = formatted;
                }
            }
        },
        mounted () {
          this.updateTruncateLimit(); // stel juiste limit in bij start
          window.addEventListener("resize", this.updateTruncateLimit);
        },
        beforeUnmount(){
          window.removeEventListener("resize", this.updateTruncateLimit);
        },
        components: {
            KleurPreview
        }
    }
</script>

<template>
    <div class="row sneakerSmall w-100 mx-auto text-center" @contextmenu.prevent="$emit('contextmenu', id, $event)">
        <div id="id" class="col-1 borders valign" :class="colorlabel">{{ stringId }}</div>
        
        <div id="model" class="col-2 borders p-0 valign" :title="brand + ' - ' + model + '\n' + extra">{{ brand }} <br> {{ truncate(model) }}</div> 
        
        <div id="kleur" class="col-15 borders valign">
            <KleurPreview 
                v-for="c in colorArray"
                :color="c"
            /> 
        </div>
        <div id="maat" class="col-1 valign borders"><div class="text-center">{{ size }}</div></div>
        <div id="status" class="col-05 valign borders"><img class="h-50" :src="getStatus"></div>
        <div id="bakNr" class="col-1 valign borders">{{ bakNr }}</div>
        <div id="user" class="col-15 valign borders">{{ creator }}</div>
        <div id="datum" class="col-15 valign borders">{{ date }}</div>
        <div id="leverancier" class="col-1 valign borders">{{ supplierName }}</div>
        <!--<div id="leverancier" class="col-1 valign borders">{{ leveranciersList[supplier] }}</div>-->
        <div class="col-05 m-0 p-0 valign borders"> 
          <div class="w-100 h-100 m-0 p-0 valign" :class="{'bg-success':csvCheck}" v-if="status!==6" v-show="status >2" @click="handleCsv">
            <img class="csvImg mx-auto h-100 grow" :class="{'whiteIcons':csvCheck}" src="../img/csv.svg"  >
          </div>
          <div class="w-100 h-100 m-0 p-0 valign bg-success" v-else @click="$emit('csv',id)">
            <img class="csvImg mx-auto h-100 grow whiteIcons" src="../img/csv.svg"  >
          </div>
        </div>
        <div class="col-05 m-0 p-0 valign borders"> 
          <div class="w-100 h-100 m-0 p-0 valign" :class="{'bg-success':verkoopCheck}" v-if="status !== 4" v-show="status >2" @click="handleSell">
            <img class="csvImg mx-auto h-75 grow" :class="{'whiteIcons':verkoopCheck}" src="../img/sell.svg">
          </div>
          <div class="w-100 h-100 m-0 p-0 valign bg-success" v-else>
            <img class="csvImg mx-auto h-75 grow whiteIcons" src="../img/sell.svg">
          </div>
        </div>
    </div>
    <div class="full m-0 p-0" id="confirm" v-show="display">
          <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
            <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
                <p class="d-flex align-items-center justify-content-center mt-5">Ben je zeker dat <span class="text-yellow mx-2">{{ id }}</span> naar verkoop gaat?</p>
                <div class="row m-0 p-0">
                  <div class="col-3 text-end mb-5 justify-content-center">
                    <img src="../img/bakNr.svg" class="med whiteIcons">
                  </div>
                  <div class="col-6">
                    <input id="sellInput" class="text-center rounded" placeholder="locatie" @keyup.enter="verkoop" v-model="baknr"/>
                  </div>
                </div>
                <div class="row m-0 p-0">
                  <div class="col-6 m-0 p-0">
                    <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="verkoop">JA</button> 
                  </div>
                  <div class="col-6 m-0 p-0">
                    <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="display = !display;verkoopCheck=false">NEE</button>
                  </div>
                </div>
            </div>
          </div>
      </div>
      <div class="full m-0 p-0" id="confirm" v-show="displayz">
          <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
            <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
                <p class="d-flex align-items-center justify-content-center mt-5">Ben je zeker dat <span class="text-yellow mx-2">{{ id }}</span> online gaat?</p>
                <div class="row m-0 p-0">
                  <div class="col-3 text-end mb-5 justify-content-center">
                    <img src="../img/bakNr.svg" class="med whiteIcons">
                  </div>
                  <div class="col-6">
                    <input id="csvInput" class="text-center rounded" placeholder="locatie" @keyup.enter="csv" v-model="baknrz"/>
                  </div>
                </div>
                <div class="row m-0 p-0">
                  <div class="col-6 m-0 p-0">
                    <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="csv">JA</button> 
                  </div>
                  <div class="col-6 m-0 p-0">
                    <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="displayz = !displayz;csvCheck=false">NEE</button>
                  </div>
                </div>
            </div>
          </div>
      </div>
</template>

<style scoped>

    .sneakerSmall > div {
      height: 55px;
    }

    .full{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(247,247,247,0.5);
        z-index: 9999999999999999999999999999999999999999999999999999999999999;
    }

    .whiteIcons{
      filter: brightness(0) invert(1);
    }
    
    img{
      filter: brightness(0.5);
      
    }

    .bg-success{
      background-color: rgb(25, 135, 84) !important;
    }

    .whiteIcons{
      filter: brightness(0) invert(1);
    }

    .max-800{
        width: 800px;
    }

    .max-1200:hover div{
      background-color: var(--gYellow);
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

     .csvImg{
      width: 30px !important;
      height: 30px !important;
     }
/*
  .rood, .red, .red::before{
    accent-color: var(--red);
    background-color: var(--red);
    border: 3px solid var(--red);
  }

  .groen, .green, .green::before{
    accent-color: var(--green);
    background-color: var(--green);
    border: 3px solid var(--green);
  }

  .blauw, .blue, .blue::before{
    accent-color: var(--blue);
    background-color: var(--blue);
    border: 3px solid var(--blue);
  }

  .geel, .yellow, .yellow::before{
    accent-color: var(--yellow);
    background-color: var(--yellow);
    border: 3px solid var(--yellow);
    color: black;
  }

  .grijs,.grey, .grey::before{
    accent-color: var(--grey);
    background-color: var(--grey);
    border: 3px solid var(--grey);
  }
  
  .zwart, .black, .black::before{
    accent-color: var(--black);
    background-color: var(--black);
    border: 3px solid var(--black);
  }
  
  .wit, .white, .white::before{
    accent-color: var(--white);
    background-color: var(--white);
    border: 3px solid var(--white);
  }
  
  .paars, .purple, .purple::before{
    accent-color: var(--purple);
    background-color: var(--purple);
    border: 3px solid var(--purple);
  }
  
  .darkgreen, .darkgreen::before{
    accent-color: var(--darkgreen);
    background-color: var(--darkgreen);
    border: 3px solid var(--darkgreen);
  }
  
  .navy, .navy::before{
    accent-color: var(--navy);
    background-color: var(--navy);
    border: 3px solid var(--navy);
  }
  
  .oranje,.orange, .orange::before{
    accent-color: var(--orange);
    background-color: var(--orange);
    border: 3px solid var(--orange);
  }
  
  .roos, .pink, .pink::before{
    accent-color: var(--pink);
    background-color: var(--pink);
    border: 3px solid var(--pink);
  }
  
  .lichtgroen, .lightgreen, .lightgreen::before{
    accent-color: var(--lightgreen);
    background-color: var(--lightgreen);
    border: 3px solid var(--lightgreen);
  }
  
  .lichtblauw, .lightblue, .lightblue::before{
    accent-color: var(--lightblue);
    background-color: var(--lightblue);
    border: 3px solid var(--lightblue);
  }
  
  .beige, .beige::before{
    accent-color: var(--beige);
    background-color: var(--beige);
    border: 3px solid var(--beige);
  }

  .multi, .multi::before{
    accent-color: var(--yellow);
    background-color: var(--multi);
    background-image: var(--multi);
    border: 3px solid transparent;
  }
  */

  .smallz{
      width: 22px;
      height: 22px;
   }

   .small{
    width: 16px;
    height: 16px;
   }


  .valign {
    display: flex;
    align-items: center;
    justify-content: center;
     /* of bijv. 120px */
  }

  @media(min-width: 1600px){
    *{
      font-size: 22px !important;
    }

    .medz, .navImg, .csvImg {
      width: 50px !important;
      height: 50px !important;
    }

    #status img{
      width: 40px !important;
      height: 40px !important;
    }

    .sneakerSmall > div{
      height: 60px !important;
    }

    .small{
      width: 24px !important;height: 24px !important;
    }

    

  }

  
     
</style>