<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
import KleurPreview from './KleurPreview.vue';
import SneakerService from '@/services/SneakerService';

    export default {
        name: 'SneakerCsv',
        data(){
          return{
            handle: "",
            title: "",
            vendor: "",
            type: "Sneaker",
            modelz: "",                        
            sizez: "",
            uitgave: "",
            pricez : "",
            amount: 1,
            retailprice: "",
            barcode: "",

            imgSrc: "",
            imgPos: "",
            imgAlt: "",
            publi: false,

            labelColor: "",
            //colors: "",
            active: "",
            activez: "",
            date: "",

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
            publish:{
                type: Boolean
            },
            createdAt:{
                type: String
            },
            price:{
              type: Number
            }
        },
        emits: ['update','updated','return'],
        methods:{
            capitalize(string){
                var firstLetter = string.charAt(0);
                var rest = string.substring(1);

                firstLetter = firstLetter.toUpperCase();

                console.log(firstLetter+rest);
            },
            createProperties(){
                //this.date = this.createtedAt //`${createdAt}`
                this.handle = (this.brand+"-"+this.model+"-"+this.id).replace(" ","-")//`${brand}-${model}-${id}`
                this.title = this.brand+" "+this.model
                this.vendor = this.brand
                this.type = "Sneaker"
                
                this.retailprice = this.retailprice
                
                this.modelz =  this.model
                this.sizez =  this.size
                this.imgPos = 1
                this.imgAlt = this.title
                /*
                console.log("CREATE PROPS----------------------");
                console.log(this.handle);
                console.log(this.title);
                console.log(this.vendor);
                console.log(this.retailprice);
                console.log(this.price);
                console.log(this.type);
                console.log(this.modelz);
                console.log(this.sizez);
                console.log(this.imgSrc);
                console.log(this.imgPos);
                console.log(this.imgAlt);
                */
                
                
            },
            toggle(){
                this.active = this.active == "" ? "green" : "";    
                this.publi= this.publi == false ? true: false;
                console.log(this.id + " " + this.publi + " " + this.date);
            },
            emitCsvData(){
              this.createProperties();
              this.$emit('update',{
                handle: this.handle,
                title: this.title,
                vendor: this.vendor,
                type: "Sneaker",
                model: this.modelz,                        
                size: this.sizez,
                uitgave: this.uitgave,
                price: this.price,
                amount: 1,
                retailprice: this.retailprice,
                barcode: this.id,

                imgSrc: this.imgSrc,
                imgPos: 1,
                imgAlt: this.title,
                published: this.publi,
              })
            },
            sendBack(){
                this.display = !this.display;
                this.$emit('return', this.id , { bakNr: this.bakNr, status: 3 });
            },
            returnSneaker(){
              this.display = !this.display;
              document.getElementById("inputFocus").focus();   
            }
            
        },
        computed:{
          stringId(){
            return (this.id? String(this.id).padStart(4, '0') : '0000')
          }
        },
        mounted () {
            this.publi = this.publish;
            this.date = this.createdAt;
            this.emitCsvData();
            //console.log(this.date);
        },
        components: {
            KleurPreview
        },
        watch: {
          handle: 'emitCsvData',
          title: 'emitCsvData',
          vendor: 'emitCsvData',
          model: 'emitCsvData',
          sizez: 'emitCsvData',
          uitgave: 'emitCsvData',
          price: 'emitCsvData',
          amount: 'emitCsvData',
          retailprice: 'emitCsvData',
          barcode: 'emitCsvData',
          imgSrc: 'emitCsvData',
          imgPos: 'emitCsvData',
          imgAlt: 'emitCsvData',
          published: 'emitCsvData',
          labelColor: 'emitCsvData',
          active: 'emitCsvData',
          date: 'emitCsvData',

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
        },
      }
    }
</script>

<template>
    <div class="row m-0 p-0 mx-auto text-center flex-nowrap text-dark">
        <div id="id" class="col-1 borders valign text-light" :class="colorlabel">{{ stringId }}</div>
        <div id="model" class="col-2 borders">{{ brand }} <br> {{ model }}</div>
        <div id="maat" class="col-1 valign borders"><div class="text-center">{{ size }}</div></div>
        <div id="price" class="col-1 m-0 p-0 valign borders">
            <input type="number" class="w-100 h-100 text-center" :value="retailprice" placeholder="original">
        </div>
        <div id="price" class="col-1 m-0 p-0 valign borders">
            <input type="number" class="w-100 h-100 text-center" :value="price" placeholder="price">
        </div>
        <div id="img" class="col-2 m-0 p-0 valign borders">
            <input type="url" class="w-100 h-100 text-center" :title="bakNr" v-model="imgSrc" placeholder="url">
        </div>
        <div id="retailDate" class="col-2 m-0 p-0 valign borders">
            <input type="number" class="w-100 h-100 text-center" min="1980" v-model="uitgave" placeholder="yyyy">
        </div>
        <div id="publish" class="col-1 m-0 p-0 valign borders">
          <div @click="toggle();" :class="active" class="w-100 h-100 m-0 p-0 valign">
            <img src="../img/publish.svg" class="medz grow m-0 p-0 pointer">
          </div>
        </div>
        <div @click="returnSneaker" id="delete" class="col-1 m-0 p-0 valign borders">
          <img src="../img/undo.svg" class="medz grow valign m-0 p-0 pointer" :class="activez">
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
                    <input id="inputFocus" class="text-center rounded" placeholder="locatie" v-model="bakNr" @keyup.enter="sendBack"/>
                  </div>
                </div>
                <div class="row m-0 p-0">
                  <div class="col-6 m-0 p-0">
                    <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="sendBack">JA</button> 
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
    img{
      filter: brightness(0.5);
      
    }

    .whiteIcons{
      filter: brightness(0) invert(1);
    }

    .full{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(247,247,247,0.5);
    }

    .max-50{
        width: 66px !important;
        min-width: none !important;
    }

    .max-1200{
        max-width: 1200px;
    }

    [type="number"],[type="url"]{
      border-width: 0px !important;
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