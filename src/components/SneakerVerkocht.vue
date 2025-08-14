<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    import KleurPreview from './KleurPreview.vue';
    import SneakerService from '@/services/SneakerService';

    export default {
        name: 'SneakerVerkocht',
        inject: ['leveranciers'],
        emits: ['verkoop', 'updated'],
        data(){
          return{
            colorArray: this.colors.split(' '),
            display: false,
            bakNr: "OUT-1-"
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
            },
            returnSneaker(){
                SneakerService.update(this.id,{ bakNr: this.bakNr, status: 4})
                    .then(() => {
                      this.display = !this.display;
                      this.$emit('updated', { id: this.id, bakNr: this.bakNr, status: 4 });
                    })
                    .catch(() => console.log("Kan Sneaker niet teruggen"))
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
        watch: {
            bakNr(newVal) {
                const prefix = "OUT-1-";

                if (!newVal) {
                  this.bakNr = prefix;
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
                if (formatted !== this.bakNr) {
                  this.bakNr = formatted;
                }
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
        <div id="retour" class="col valign borders" @click="display = !display">
            <img class="growz pointer" src="../img/undo.svg" />
        </div>
    </div>
    <div class="full m-0 p-0" id="confirm" v-show="display">
          <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
            <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
                <p class="d-flex align-items-center justify-content-center mt-5">Ben je zeker dat <span class="text-yellow mx-2">{{ id }}</span> terug in stock moet?</p>
                <div class="row m-0 p-0">
                  <div class="col-3 text-end mb-5 justify-content-center">
                    <img src="../img/bakNr.svg" class="med whiteIcons">
                  </div>
                  <div class="col-6">
                    <input class="text-center rounded" placeholder="locatie" v-model="bakNr" @keyup.enter="returnSneaker"/>
                  </div>
                </div>
                <div class="row m-0 p-0">
                  <div class="col-6 m-0 p-0">
                    <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="returnSneaker">JA</button> 
                  </div>
                  <div class="col-6 m-0 p-0">
                    <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="display = !display">NEE</button>
                  </div>
                </div>
            </div>
          </div>
      </div>
</template>

<style scoped>
    .full{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(247,247,247,0.5);
    }

    .whiteIcons{
      filter: brightness(0) invert(1);
    }

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