<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    import KleurPreview from './KleurPreview.vue';

    export default {
        name: 'SneakerSmall',
        data(){
          return{
            colorArray: this.colors.split(' ')
          }
        },
        props:{
            dbid:{
         		type: Number,
         		required: true
         	},
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
                type: String
            },
            teRepareren:{
                type: String
            },
            creator:{
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
        mounted () {
            
        },
        components: {
            KleurPreview
        }
    }
</script>

<template>
    <div class="row max-800 mx-auto text-center">
        <div id="id" class="borders valign" :class="colorlabel">{{ id }}</div>
        <div id="model" class="borders">{{ brand }} <br> {{ model }}</div>
        <div id="kleur" class="borders valign">
            <KleurPreview 
                v-for="c in colorArray"
                :color="c"
            /> 
        </div>
        <div id="maat" class="valign borders"><div class="text-center">{{ size }}</div></div>
        <div id="status" v-if="status =='cleaning'" class="valign borders"><img src="../img/cleaning.svg"></div>
        <div id="status" v-else class="valign borders"><img src="../img/repair.svg"></div>
        <div id="user" class="valign borders">{{ creator }}</div>
        <div id="datum" class="valign borders">{{ date }}</div>
        <div id="leverancier" class="valign borders">{{ supplier.substring(0,4) }}</div>
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

   #id{
    width: 7.5% !important;
  }
  
  #model{
    width: 20% !important;
  }

  #kleur{
    width: 11% !important;
  }

  #maat{
    width: 7.5% !important;
  }

  #status{
    width: 7.5% !important;
  }

  #user{
    width: 15% !important;
  }

  #datum{
    width: 15% !important;
  }

  #leverancier{
    width: 10% !important;
  }

  .valign {
    display: flex;
    align-items: center;
    justify-content: center;
     /* of bijv. 120px */
  }
     
</style>