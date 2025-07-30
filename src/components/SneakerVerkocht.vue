<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    import KleurPreview from './KleurPreview.vue';

    export default {
        name: 'SneakerVerkocht',
        inject: ['leveranciers'],
        data(){
          return{
            colorArray: this.colors.split(' '),
            retour: false
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
            },
            price:{
                type: Number
            },
            sold:{
                type: Number
            },
            soldDate:{
                type: String
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
          supplierName() {
            return this.supplier ? this.supplier.substring(0, 7) : 'Onbekend';
          },
          stringId(){
            return (this.id? String(this.id).padStart(4, '0') : '0000')
          }
        },
        mounted () {
            //console.log(this.leveranciers);
        },
        components: {
            KleurPreview
        }
    }
</script>

<template>
    <div class="row m-0 p-0 mx-auto text-center text-dark">
        <div id="id" class="col borders valign" :class="colorlabel">{{ stringId }}</div>
        <div id="model" class="col borders" :title="model">{{ brand }} <br> <span v-if="model" >{{ model.slice(0,18) }}</span><span v-else>&nbsp;</span></div>
        <div id="kleur" class="col borders valign">
            <KleurPreview 
                v-for="c in colorArray"
                :color="c"
            /> 
        </div>
        <div id="maat" class="col valign borders"><div class="text-center">{{ size }}</div></div>
        <div id="user" class="col valign borders">{{ soldDate }}</div>
        <div id="datum" class="col valign borders">{{ price }}</div>
        <div id="leverancier" class="col valign borders" v-if="supplier">{{ supplier.substring(0,7) }}</div>
        <div id="retour" class="col valign borders" :class="{'bg-danger':retour}" @click="retour = !retour"></div>
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