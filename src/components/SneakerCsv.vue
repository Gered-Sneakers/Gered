<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
import KleurPreview from './KleurPreview.vue';

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
            price: "",
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
            date: ""
            
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
            }
        },
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
            }
        },
        mounted () {
            this.publi = this.publish;
            this.date = this.createdAt;
            this.emitCsvData();
            console.log(this.date);
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
          date: 'emitCsvData'
        },
        components: {
            KleurPreview
        }
    }
</script>

<template>
    <div class="row m-0 p-0 mx-auto text-center flex-nowrap text-dark">
        <div id="id" class="col-1 borders valign text-light" :class="colorlabel">{{ id }}</div>
        <div id="model" class="col-2 borders">{{ brand }} <br> {{ model }}</div>
        <div id="maat" class="col-1 valign borders"><div class="text-center">{{ size }}</div></div>
        <div id="price" class="col-2 m-0 p-0 valign borders">
            <input type="number" class="w-100 h-100 text-center" v-model="retailprice" placeholder="original">
        </div>
        <div id="price" class="col-2 m-0 p-0 valign borders">
            <input type="number" class="w-100 h-100 text-center" v-model="price" placeholder="price">
        </div>
        <div id="img" class="col-1 m-0 p-0 valign borders">
            <input type="url" class="w-100 h-100 text-center" v-model="imgSrc" placeholder="url">
        </div>
        <div id="retailDate" class="col-2 m-0 p-0 valign borders">
            <input type="number" class="w-100 h-100 text-center" min="1980" v-model="uitgave" placeholder="yyyy">
        </div>
        <div id="publish" class="col-1 m-0 p-0 valign borders">
          <div @click="toggle();" :class="active" class="w-100 h-100 m-0 p-0"></div>
        </div>
    </div>
</template>

<style scoped>
    img{
      filter: brightness(0.5);
      
    }

    .max-50{
        width: 66px !important;
        min-width: none !important;
    }

    .max-1200{
        max-width: 1200px;
    }

    .borders{
        border-top: 0px solid var(--gBlack);
        border-bottom: 1px solid var(--gBlack);
        border-left: 1px solid var(--gBlack);
        border-right: 1px solid var(--gBlack);
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