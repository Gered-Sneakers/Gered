<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
import KleurPreview from './KleurPreview.vue';
import Brand from './BrandList.vue';

    export default {
        name: 'SneakerChange',
        data(){
          return{
            
            _id: null,
            _colorlabel: this.colorlabel,
            _date: this.date,
            _brand: this.brand,
            _model: this.model,
            _size: this.size,
            _color: this.color,
            _supplier: this.supplier,
            _laces: this.laces,
            _soles: this.soles,
            _paint: this.paint,
            _glue: this.glue,
            _status: this.status,
            _verkoop: this.verkoop,
            _csv: this.csv,
            _creator: this.creator,
            _bakNr: this.bakNr,
            _extra: this.extra
            
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
            paint:{
                type: String
            },
            glue:{
                type: String
            },
            status:{
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
            },
            bakNr:{
                type: String
            },
            extra:{
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
        inject: ["sneakers","leveranciers","brands"],
        computed:{
            stringId(){
                return String(this.id).padStart(4, '0')
            },
            colorArray() {
                try {
                  // Als colors een JSON array string is zoals '["rood","blauw"]'
                  if (this.colors.startsWith('[')) {
                    return JSON.parse(this.colors);
                  }
                  // Als het een gewone komma-gescheiden string is
                  return this.colors.split(',').map(c => c.trim());
                } catch (e) {
                  return [];
                }
            },
            brandList() {
                return typeof this.brands === 'function' ? this.brands() : this.brands;
            }
        },
        components: {
            KleurPreview,
            Brand
        }
    }
</script>

<template>
    <div class="sneakerPreview w-75 mx-auto m-0 p-0 d-flex">
        <div class="container h-100 position-relative text-light text-center">
            <div class="row m-0 p-0 mt-3 py-0 px-0 bg-blue rounded ">
                <div class="d-none col-4 row m-0 p-0 text-center justify-content-start">
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
                <div class="col-3"></div>
                <div class="col-6 mb-2 text-center text-dark justify-content-center">
                    <span class="px-3 py-2 h3 fw-bold rounded cardSize" :class="colorlabel">{{ stringId }}</span>
                </div>
                <div class="d-none col-4 row m-0 p-0 justify-content-end"> 
                    <div class="col-0 col-md-4"></div>                    
                    <div class="col-6 col-md-4 grow justify-content-start hover-dark" @click="$emit('stock',id)">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-40v-880h80v80h560v-80h80v880h-80v-80H200v80h-80Zm80-480h80v-160h240v160h240v-240H200v240Zm0 320h240v-160h240v160h80v-240H200v240Zm160-320h80v-80h-80v80Zm160 320h80v-80h-80v80ZM360-520h80-80Zm160 320h80-80Z"/></svg>
                        <br>
                        <span class="d-block">Stock</span>
                    </div>
                    <div class="col-6 col-md-4 grow justify-content-end hover-dark" @click="$emit('sold',id)">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M280-640q-33 0-56.5-23.5T200-720v-80q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v80q0 33-23.5 56.5T680-640H280Zm0-80h400v-80H280v80ZM160-80q-33 0-56.5-23.5T80-160v-40h800v40q0 33-23.5 56.5T800-80H160ZM80-240l139-313q10-22 30-34.5t43-12.5h376q23 0 43 12.5t30 34.5l139 313H80Zm260-80h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm120 160h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm120 160h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80h40q8 0 14-6t6-14q0-8-6-14t-14-6h-40q-8 0-14 6t-6 14q0 8 6 14t14 6Z"/></svg>
                        <br>
                        <span class="d-block">Verkocht</span>
                    </div>
                </div>
                <div class="col-3">
                    <div @click="next" id="nextButton" class="nextButton success grow boxShadow-blue square valign text-center h-100">
                        <img class="h-100 mx-auto selectDisable success" src="../img/next.svg" title="Je kan ook [ENTER] duwen.">
                    </div>
                </div>
                <hr class="w-100 mx-auto my-2 opacity-25">
                
                <div class="row w-100 m-0 p-0 pt-2">
                <div class="col-6 row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/tag.svg"></div>
                    <div class="col-9 text-end pe-5">
                            <select class="float-end w-50" v-model="_brand">
                                <option class="text-end" disabled value="">Merk</option>
                                <Brand id="brand"
                                    v-for="b in brandList"
                                    :key="b.name"
                                    :name="b.name"
                                    :img="b.img"
                                    :isActive="b.isActive"
                                    class="text-end"
                                    />
                            </select>
                    </div>
                </div>
                <div class="col-6 row m-0 p-0">
                    <div class="col-3"></div>
                    <div class="col-9 text-end pe-5"><input class="w-50 float-end text-end" :value='model = model.charAt(0).toUpperCase() + model.substring(1)'></div>
                </div>
                
                <div class="col-15 valign ps-5"></div>
                </div>
                <hr class="w-100 mx-auto my-2 opacity-25">
                <div class="col-6 m-0 p-0">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/ruler.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center"><input class="w-50 text-end" placeholder="MAAT" v-model="_size"></div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/color.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center">
                        <KleurPreview 
                            v-for="c in colorArray"
                            :color="c"
                        /> 
                    </div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/laces.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center text-success" @click="_laces = !_laces" v-if="_laces">✔</div>
                    <div class="col-9 text-end pe-5 align-content-center text-danger" @click="_laces = !_laces"v-else>❌</div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/soles.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center text-success" @click="_soles = !_soles" v-if="_soles">✔</div>
                    <div class="col-9 text-end pe-5 align-content-center text-danger" @click="_soles = !_soles" v-else>❌</div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/paint.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center text-success" @click="_paint = !_paint" v-if="_paint">✔</div>
                    <div class="col-9 text-end pe-5 align-content-center text-danger" @click="_paint = !_paint" v-else>❌</div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/broken.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center text-success" @click="_glue = !_glue" v-if="_glue">✔</div>
                    <div class="col-9 text-end pe-5 align-content-center text-danger" @click="_glue = !_glue" v-else>❌</div>
                </div>
                </div>
                <div class="col-6 border-light m-0 p-0">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/baknr.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center">
                        <input class="w-50 text-end" placeholder="BAKNUMMER" :value="_bakNr">
                    </div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/warning.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center">
                        <!-- INJECT STATUS HIER -->
                        {{status}}
                    </div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/extra.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center">
                        <input class="w-50 text-end" placeholder="EXTRA" :value="_extra">
                    </div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/delivery.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center">
                        <input class="w-50 text-end" placeholder="LEVERANCIER" :value="_supplier">
                    </div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/login.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center">
                        <input class="w-50 text-end" placeholder="GEBRUIKER" :value="_creator">
                    </div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/clock.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center">
                        <input class="w-50 text-end" placeholder="xx" :value="_date">
                    </div>
                </div>
                
                </div>
                <hr class="w-100 mx-auto mt-2 opacity-25">
                <div class="row m-0 p-0 mb-4"></div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
    *{
        font-size: 18px;
    }

    .success:hover{
        /*filter: hue-rotate(90deg);*/
        filter: brightness(0) saturate(100%) invert(49%) sepia(81%) saturate(324%) hue-rotate(79deg) brightness(98%) contrast(92%);

    }

    input,select{
        border-radius: 0.5rem !important;
    }

    .cardSize{
        font-size: 3rem;
    }
    
    .medz{
        width: 3rem;
        height: 3rem;
    }

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