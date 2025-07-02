<template>
    <div class="h-100 valign bg-blue text-light px-5">
        <div class="targets row w-100 m-0 p-0" v-if="sneaker == null">
            <img class="vh-15 mb-4" src="../img/repair.svg">
            <input type="text" size="14" 
                id="search"
                class="w-100 text-center border-blue rounded mx-auto mb-1" 
                maxlength="4"
                placeholder="labelnr" 
                v-model="id"
                @keyup.enter="search()"
                @click="showSelected"
            >
        </div>
        <div class="targets row w-100 m-0 p-0" v-if="sneaker != null">
            <div class="col-4 col-xxl-2">
            <div class="sneakerPreview fw-bold w-100 valign m-0 p-0 d-flex borderzz bg-blue text-light border-light rounded">
                <div class="container position-relative">
                    <div class="row m-0 p-0 mb-5">
                        <div class="col-12 text-center">
                            <span class="px-3 py-2 h3 fw-bold rounded invis-border" :class="labelColor">{{ sneaker.id }}</span>
                        </div>
                    </div>
                    <div class="row m-0 p-0 border-2 border-bottom border-light">
                        <div class="col-12 m-0 p-0 pb-1 fw-bold text-center">
                            <span class="align-middle text-center">Overzicht</span>
                        </div>
                    </div>
                    <div class="row m-0 p-0 pt-2">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/tag.svg"></div>
                        <div class="col-9 text-end">{{ sneaker.brand }}{{ " " }}<span v-if="model">{{ sneaker.model = sneaker.model.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') }}</span></div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/ruler.svg"></div>
                        <div class="col-9 text-end">{{ sneaker.size }}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/color.svg"></div>
                        <div class="col-9 text-end">
                            <KleurPreview 
                                v-for="c in sneaker.colors"
                                :color="c"
                            />
                        </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/laces.svg"></div>
                        <div class="col-9 text-end fw-1000" v-if="sneaker.laces=='Aanwezig'">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/soles.svg"></div>
                        <div class="col-9 text-end fw-1000" v-if="sneaker.soles=='Aanwezig'">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/paint.svg"></div>
                        <div class="col-9 text-end fw-1000" v-if="sneaker.paint=='Goed'">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/repair.svg"></div>
                        <div class="col-9 text-end fw-1000" v-if="sneaker.glue=='Goed'">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/warning.svg"></div>
                        <div class="col-9 text-end fw-1000" v-if="sneaker.status==1">Cleaning</div>
                        <div class="col-9 text-end fw-1000" v-else-if="sneaker.status==2">Repair</div>
                        <div class="col-9 text-end fw-1000" v-else-if="sneaker.status==3">Stock</div>
                        <div class="col-9 text-end fw-1000" v-else-if="sneaker.status==4">Verkocht</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-4 valign justify-content-start grow"><img class="smallz whiteIcons" src="@/img/delivery.svg" :title="sneaker.leverancier"></div>
                        <div class="col-4 valign justify-content-center grow"><img class="smallz whiteIcons" src="@/img/login.svg" :title="sneaker.creator"></div>
                        <div class="col-4 valign justify-content-end grow"><img class="smallz whiteIcons" src="@/img/clock.svg" :title="sneaker.datum"></div>
                    </div>
                    <div class="row m-0 p-0 mb-4"></div>
                </div>
            </div>
            </div>
            <div class="col-8 col-xxl-10 justify-content-center">
            <div id="REPAIR" class="targets rounded row d-flex flex-column h-100 text-start">
                <div class="row m-0 p-0 mx-auto text-light">
                    <div    class="col-6 m-0 p-0 mb-4 text-center"
                            @click="lacesCheck = !lacesCheck"
                    >
                        <div class="w-50 mx-auto invis-border" :class="{ highlight: lacesCheck }">
                            <img class="imgSquare w-100 mx-auto" src="../img/laces.svg">
                            <label class="col-12" for="check1">(1) Geen veters  </label>
                        </div>
                    </div>
                    <div    class="col-6 m-0 p-0 mb-4 text-center"
                            @click="solesCheck = !solesCheck"
                    >
                        <div class="w-50 mx-auto invis-border" :class="{ highlight: solesCheck }">
                            <img class="imgSquare w-100 mx-auto" src="../img/soles.svg">
                            <label class="col-12" for="check2"> (1) Geen binnenzool</label>
                        </div>
                    </div>
                </div>
                <div class="flex-grow-1"></div>
                <div class="row m-0 p-0 mx-auto mt-auto text-light">
                    <div    class="col-6 m-0 p-0 mb-4 text-center"
                            @click="paintCheck = !paintCheck"
                    >
                        <div class="w-50 mx-auto invis-border" :class="{ highlight: paintCheck }">
                            <img class="imgSquare w-100 mx-auto" src="../img/paint.svg">
                            <label class="col-12" for="check4"> (2) Verven </label>
                        </div>
                    </div>
                    <div    class="col-6 m-0 p-0 mb-4 text-center"
                            @click="glueCheck = !glueCheck"
                    >
                        <div class="w-50 mx-auto invis-border" :class="{ highlight: glueCheck }">
                            <img class="imgSquare w-100 mx-auto" src="../img/repair.svg">
                            <label class="col-12" for="check3"> (3) Lijmen </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-none">
                <p>1. CONTROLE   Damage Check & Update ( load checkboxes , ... yes/no ) </p>
                <p>2. GEMAAKT    Repaired: update db ( soles laces verven glue status )</p>
                <p>3. CONFIRMBOX Confirm Box: Ben je zeker? </p>
            </div>
            <div id="REPAIR VERKEERDE" class="rounded row text-start d-none">
                <div class="row m-0 p-0 pb-2 mx-auto text-light">
                    <div class="col-6 m-0 p-0 mb-4 text-center row vh-15">
                        <img class="vh-15 mx-auto" src="../img/laces.svg">
                        <div class="col-12 text-center"><input id="check1" type="checkbox" name="check1" v-model="laces" @click="lacesCheckbox()"@keyup.enter="saveSneaker"></div>
                        <label class="col-12" for="check1"> Geen veters  </label>
                    </div>
                    <div class="col-6 m-0 p-0 mb-4 text-center row vh-15">
                        <img class="vh-15 imgSquare mx-auto" src="../img/soles.svg">
                        <div class="col-12 text-center"><input id=""check2 type="checkbox" name="check2" v-model="soles" @click="solesCheckbox()"@keyup.enter="saveSneaker"></div>
                        <label class="col-12" for="check2"> Geen binnenzool</label>
                    </div>
                </div>
                <div class="row m-0 p-0 pb-2 mx-auto text-light mt-5">
                    <div class="col-6 mx-auto m-0 p-0 text-center row vh-15">
                        <img class="vh-15 imgSquare mx-auto" src="../img/paint.svg">
                        <div class="col-12 text-center"><input id="check4" type="checkbox" name="check4" v-model="paint" @click="paintCheckbox"@keyup.enter="saveSneaker"></div>
                        <label class="col-12" for="check4"> Verven </label>
                    </div>
                    <div class="col-6 m-0 p-0 text-center row vh-15">
                        <img class="vh-15 imgSquare mx-auto" src="../img/repair.svg">
                        <div class="col-12 text-center"><input id="check3" type="checkbox" name="check3" v-model="glue" @click="statusCheckbox()"@keyup.enter="saveSneaker"></div>
                        <label class="col-12" for="check3"> Lijmen </label>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import SneakerService from '@/services/SneakerService';

  export default {
    name: 'Repair_View',
    data(){
        return{
            sneaker: null,
            id: null,
            colorlabel: 1,
            date: "",
            brand: "",
            model: "",
            extra: "",
            size: 0, 
            colors: [],
            supplier: 1,
            laces: 1,
            soles: 1,
            paint: 1,
            glue: 1,
            status: 1,
            shoeLace: 0,
            lacesCheck: false,
            solesCheck: false,
            paintCheck: false,
            glueCheck: false
        }
    },
    props: {
  
    },
    methods: {
        search(){            
            SneakerService.get(this.id)
                .then(response => {
                    this.sneaker = response.data;
                    this.sneaker.colors = this.sneaker.colors.split(" ");
                    this.sneaker.colors.pop();
                    
                    console.log(this.sneaker);
                })
                .catch(error => {
                    error = "Sneaker niet gevonden";
                    console.error(error);
                    alert(error);
               })
        }
    }
  }
</script>
  
<style scoped>
    .imgSquare{
        max-height: 20vh !important;
    }

    #REPAIR *{
        font-size: 20px;
        font-weight: 900;
    }

    .invis-border {
        border: 5px solid transparent;
    }

    .highlight {
        background-color: rgba(0,159,253,0.5);
        border: 5px solid rgb(0,159,253);
        border-radius: 0.375rem;
    }
    
    #search{
        width: 100%;
        max-width: 400px !important;
        height: 66px;
        font-size: 50px;
    }

    .labelBlue{
       background-color: rgb(100, 150, 250);
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
</style>