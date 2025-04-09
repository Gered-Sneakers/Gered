<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    import KleurPreview from './KleurPreview.vue';
    import Leveranciers from '@/assets/leveranciers.json';

    export default {
        name: 'Sneaker',
        data(){
          return{
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
                type: String
            },
            teRepareren:{
                type: String
            },
            verkoop:{
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
        computed:{
            
        },
        components: {
            KleurPreview
        }
    }
</script>

<template>
    <div class="sneakerPreview w-75 mx-auto m-0 p-0 d-flex bg-blue borderzz border-blue roundedz">
        <div class="container h-100 position-relative text-light text-center">
            <div class="row m-0 p-0 mt-3 mb-5">
                <div class="col-4 text-center">
                </div>
                <div class="col-4 text-center text-dark">
                    <span class="px-3 py-2 h3 fw-bold" :class="colorlabel">{{ id }}{{ labelcolor }}</span>
                </div>
                <div class="col-4">

                </div>
            </div>
            <div class="row m-0 p-0">
                <div class="col-12 m-0 p-0 pb-1 fw-bold text-center">
                    <span class="align-middle text-center">Overzicht</span>
                </div>
            </div>
            <hr class="w-90 mx-auto my-2 opacity-25">
            <div class="row m-0 p-0 pt-2">
                <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/tag.png"></div>
                <div class="col-9 text-end pe-5">{{ brand }}{{ " " }}{{ model = model.charAt(0).toUpperCase() + model.substring(1) }}</div>
            </div>
            <hr class="w-90 mx-auto my-2 opacity-25">
            <div class="row m-0 p-0">
                <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/ruler.png"></div>
                <div class="col-9 text-end pe-5">{{ size }}</div>
            </div>
            <hr class="w-90 mx-auto my-2 opacity-25">
            <div class="row m-0 p-0">
                <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/color.png"></div>
                <div class="col-9 text-end pe-5">
                    <KleurPreview 
                        v-for="c in colors"
                        :color="c"
                    /> 
                </div>
            </div>
            <hr class="w-90 mx-auto my-2 opacity-25">
            <div class="row m-0 p-0">
                <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/laces2.png"></div>
                <div class="col-9 text-end pe-5">{{laces}}</div>
            </div>
            <hr class="w-90 mx-auto my-2 opacity-25">
            <div class="row m-0 p-0">
                <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/soles.png"></div>
                <div class="col-9 text-end pe-5">{{soles}}</div>
            </div>
            <hr class="w-90 mx-auto my-2 opacity-25">
            <div class="row m-0 p-0">
                <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/sneaker.png"></div>
                <div class="col-9 text-end pe-5">{{status}}<br v-if="teRepareren">{{teRepareren}}</div>
            </div>
            <hr class="w-90 mx-auto my-2 opacity-25">
            <div class="row m-0 p-0">
                <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/delivery.png"></div>
                <div class="col-9 text-end pe-5">{{supplier}}</div>
            </div>
            <hr class="w-90 mx-auto my-2 opacity-25">
            <div class="row m-0 p-0">
                <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/clock.png"></div>
                <div class="col-9 text-end pe-5">{{date}}</div>
            </div>
            <div class="row m-0 p-0 mb-4"></div>
        </div>
    </div>
</template>

<style scoped>
    /* LABEL COLORS */
/*
    .labelBlue{
      background-color: rgb(100, 125, 250);
    }

    .labelPink{
      background-color: rgb(250, 168, 241);
    }

    .labelGreen{
      background-color: rgb(146, 250, 146);
    }

    .labelGrey{
      background-color: rgb(163, 163, 163);
    }

    .labelYellow{
      background-color: rgb(249, 249, 125);
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
</style>