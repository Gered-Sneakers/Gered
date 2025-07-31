<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    import KleurPreview from './KleurPreview.vue';

    export default {
        name: 'SneakerSmall',
        data(){
          return{
            showCsv: true,
            showVerkoop: true,
            verkoopCheck: false,
            csvCheck: false,
            truncateLimit: 13
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
              this.$emit('verkoop', this.id)
            },
            handleCsv(){
              this.csvCheck = true
              this.$emit('csv',id);
            },
            updateTruncateLimit() {
              const width = window.innerWidth;
              if (width >= 1440) {
                this.truncateLimit = 20;
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
    <div class="row w-100 mx-auto text-center">
        <div id="id" class="col-1 borders valign" :class="colorlabel">{{ stringId }}</div>
        
        <div id="model" class="col-2 borders p-0" :title="brand + ' - ' + model + '\n' + extra">{{ brand }} <br> {{ truncate(model) }}</div> 
        
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
          <div class="w-100 h-100 m-0 p-0 valign" :class="{'bg-success':csvCheck}" v-if="csv==null" @click="handleCsv">
            <img class="csvImg mx-auto h-100 grow" :class="{'whiteIcons':csvCheck}" src="../img/csv.svg"  >
          </div>
          <div class="w-100 h-100 m-0 p-0 valign bg-success" v-else @click="$emit('csv',id)">
            <img class="csvImg mx-auto h-100 grow whiteIcons" src="../img/csv.svg"  >
          </div>
        </div>
        <div class="col-05 m-0 p-0 valign borders"> 
          <div class="w-100 h-100 m-0 p-0 valign" :class="{'bg-success':verkoopCheck}" v-if="status !== 4" @click="handleSell">
            <img class="csvImg mx-auto h-75 grow" :class="{'whiteIcons':verkoopCheck}" src="../img/sell.svg">
          </div>
          <div class="w-100 h-100 m-0 p-0 valign bg-success" v-else>
            <img class="csvImg mx-auto h-75 grow whiteIcons" src="../img/sell.svg">
          </div>
        </div>
    </div>
</template>

<style scoped>
    
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
     
</style>