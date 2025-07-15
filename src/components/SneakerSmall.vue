<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    import KleurPreview from './KleurPreview.vue';

    export default {
        name: 'SneakerSmall',
        data(){
          return{
            showCsv: true,
            showVerkoop: true,
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
            size:{
                type: Number   
            },
            colors:{
                type: String   
            },
            supplier:{
                type: String   
            },
            laces:{
                type: String   
            },
            soles:{
                type: String   
            },
            status:{
                type: Number
            },
            teRepareren:{
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
            truncate(text,limit = 18){
              return text && text.length > limit ? text.substring(0,limit) + ".." : text;
            }
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
          }
        },
        mounted () {

            //console.log(this.id," CSV ",this.csv);
            //console.log(this.id, " VERKOOP ",this.verkoop);
        },
        components: {
            KleurPreview
        }
    }
</script>

<template>
    <div class="row w-100 mx-auto text-center">
        <div id="id" class="col-1 borders valign" :class="colorlabel">{{ id }}</div>
        
        <div id="model" class="col-2 borders" :title="brand + ' - ' + model">{{ brand }} <br> {{ truncate(model) }}</div> 
        
        <div id="kleur" class="col-1 borders valign">
            <KleurPreview 
                v-for="c in colorArray"
                :color="c"
            /> 
        </div>
        <div id="maat" class="col-1 valign borders"><div class="text-center">{{ size }}</div></div>
        <div id="status" class="col-1 valign borders"><img class="h-50" :src="getStatus"></div>
        <div id="user" class="col-2 valign borders">{{ creator }}</div>
        <div id="datum" class="col-2 valign borders">{{ date }}</div>
        <div id="leverancier" class="col-1 valign borders">{{ supplierName }}</div>
        <!--<div id="leverancier" class="col-1 valign borders">{{ leveranciersList[supplier] }}</div>-->
        <div class="col-1 valign borders"> 
            <img class="csvImg me-2 h-100 grow" src="../img/csv.svg" v-if="csv==null" @click="$emit('csv',id);showCsv = false">
            <img class="me-2 w-50 grow" src="../img/sell.svg" v-if="status!==4" v-show="showVerkoop" @click="$emit('verkoop',id);showVerkoop = false">
        </div>
    </div>
</template>

<style scoped>
    img{
      filter: brightness(0.5);
      
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
      width: 45px !important;
      height: 45px !important;
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