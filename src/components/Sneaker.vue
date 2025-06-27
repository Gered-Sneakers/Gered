<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
import KleurPreview from './KleurPreview.vue';

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
                type: Number
            },
            csv:{
                type: Number
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
        computed:{
            
        },
        components: {
            KleurPreview
        }
    }
</script>

<template>
    <div class="sneakerPreview w-75 mx-auto m-0 p-0 d-flex">
        <div class="container h-100 position-relative text-light text-center">
            <div class="row m-0 p-0 mt-3 mb-3 bg-blue rounded p-3">
                <div class="col-4 row m-0 p-0 text-center justify-content-start">
                    <div class="col-6 col-md-4 grow justify-content-start hover-dark" @click="$emit('cleaning',id)">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m360-680 40-80v-40h-40v-80h240q17 0 28.5 11.5T640-840v40l-40 80H480v-40l-80 80h-40ZM320-80v-274q0-11 3.5-23.5T332-400l148-280h120q14 14 27 37.5t13 42.5v520H320Zm80-80h160v-440h-32L400-356v196Zm0 0h160-160Z"/></svg>
                        <br>
                        <span class="d-block">Cleaning</span>
                    </div>
                    <div class="col-6 col-md-4 grow justify-content-start hover-dark" @click="$emit('repair',id)">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z"/></svg>
                        <br>
                        <span class="d-block">Repair</span>
                    </div>
                    <div class="col-0 col-md-4"></div>
                </div>
                <div class="col-4 text-center text-dark justify-content-center">
                    <span class="px-3 py-2 h3 fw-bold" :class="colorlabel">{{ id }}</span>
                </div>
                <div class="col-4 row m-0 p-0 justify-content-end"> 
                    <div class="col-0 col-md-4"></div>
                    <div class="col-6 col-md-4 grow justify-content-end hover-dark" @click="$emit('update',id)">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M167-120q-21 5-36.5-10.5T120-167l40-191 198 198-191 40Zm191-40L160-358l458-458q23-23 57-23t57 23l84 84q23 23 23 57t-23 57L358-160Zm317-600L261-346l85 85 414-414-85-85Z"/></svg>
                        <br>
                        <span class="d-block">Wijzig</span>
                    </div>
                    <div class="col-6 col-md-4 grow justify-content-start hover-dark" @click="$emit('stock',id)">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-40v-880h80v80h560v-80h80v880h-80v-80H200v80h-80Zm80-480h80v-160h240v160h240v-240H200v240Zm0 320h240v-160h240v160h80v-240H200v240Zm160-320h80v-80h-80v80Zm160 320h80v-80h-80v80ZM360-520h80-80Zm160 320h80-80Z"/></svg>
                        <br>
                        <span class="d-block">Stock</span>
                    </div>
                </div>
                <hr class="w-90 mx-auto my-2 opacity-25">
                
                <div class="row w-100 m-0 p-0 pt-2">
                <div class="col-15 valign ps-5"><img class="smallz whiteIcons" src="@/img/tag.svg"></div>
                <div class="col-75 text-center">{{ brand }}{{ " " }}{{ model = model.charAt(0).toUpperCase() + model.substring(1) }}</div>
                <div class="col-15 valign ps-5"></div>
                </div>
                <hr class="w-90 mx-auto my-2 opacity-25">
                <div class="col-6 m-0 p-0">
                <div class="row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/ruler.svg"></div>
                    <div class="col-9 text-end pe-5">{{ size }}</div>
                </div>
                <hr class="w-80 mx-auto my-2 opacity-25">
                <div class="row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/color.svg"></div>
                    <div class="col-9 text-end pe-5">
                        <KleurPreview 
                            v-for="c in colors"
                            :color="c"
                        /> 
                    </div>
                </div>
                <hr class="w-80 mx-auto my-2 opacity-25">
                <div class="row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/laces.svg"></div>
                    <div class="col-9 text-end pe-5">{{laces}}</div>
                </div>
                <hr class="w-80 mx-auto my-2 opacity-25">
                <div class="row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/soles.svg"></div>
                    <div class="col-9 text-end pe-5">{{soles}}</div>
                </div>
                </div>
                <div class="col-6 border-light m-0 p-0">
                <div class="row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/warning.svg"></div>
                    <div class="col-9 text-end pe-5">{{status}}<br v-if="teRepareren">{{teRepareren}}</div>
                </div>
                <hr class="w-80 mx-auto my-2 opacity-25">
                <div class="row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/delivery.svg"></div>
                    <div class="col-9 text-end pe-5">{{supplier}}</div>
                </div>
                <hr class="w-80 mx-auto my-2 opacity-25">
                <div class="row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/login.svg"></div>
                    <div class="col-9 text-end pe-5">{{creator}}</div>
                </div>
                <hr class="w-80 mx-auto my-2 opacity-25">
                <div class="row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="smallz whiteIcons" src="@/img/clock.svg"></div>
                    <div class="col-9 text-end pe-5">{{date}}</div>
                </div>
                
                </div>
                <hr class="w-90 mx-auto my-2 opacity-25">
                <div class="row m-0 p-0 mb-4"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
   .smallz{
      width: 22px;
      height: 22px;
   }

   .small{
    width: 16px;
    height: 16px;
   }

   .w-90{
    width: 90%;
   }
   
   .w-80{
    width: 80%;
   }

   .col-15{
    width: 12.5%;
   }

   .col-75{
    width: 75%;
   }

</style>