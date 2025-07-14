<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    import KleurPreview from './KleurPreview.vue';

    export default {
        name: 'SneakerSmall',
        inject: ['leveranciers'],
        data(){
          return{
            colorArray: this.colors.split(' '),
            showCsv: true,
            showVerkoop: true
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
            creator:{
                type: String
            },
            verkoop:{
                type: Boolean
            },
            csv:{
                type: Boolean
            },
            leverancierList:{
                type: Array
            },
            brandList:{
                type: Array
            }

        },
        methods:{
            capitalize(string){
                var firstLetter = string.charAt(0);
                var rest = string.substring(1);

                firstLetter = firstLetter.toUpperCase();

                console.log(firstLetter+rest);
            }
        },
        computed: {
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
          }
        },
        mounted () {
            console.log(this.leveranciers);
        },
        components: {
            KleurPreview
        }
    }
</script>

<template>
    <div class="row mx-auto text-center text-dark">
        <div id="id" class="col-1 borders valign" :class="colorlabel">{{ id }}</div>
        <div id="model" class="col-2 borders" :title="model">{{ brand }} <br> <span v-if="model" >{{ model.slice(0,18) }}</span><span v-else>&nbsp;</span></div>
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
        <div id="leverancier" class="col-1 valign borders" v-if="supplier">{{ supplier.substring(0,7) }}</div>
        <div id="" class="col-1 valign borders" @click="$emit('verkoop',id)"><img src="../img/sell.svg"></div>
    </div>
</template>

<style scoped>
    img{
      filter: brightness(0.5);
      
    }

    .max-800{
        width: 800px;
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


  .valign {
    display: flex;
    align-items: center;
    justify-content: center;
     /* of bijv. 120px */
  }
     
</style>