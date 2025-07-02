<template>
    <div class="row h-100 valign bg-blue text-light px-5">
        <div class="col-4 col-xxl-2">
            <div class="sneakerPreview fw-bold w-100 valign m-0 p-0 d-flex borderzz bg-blue text-light border-light rounded">
                <div class="container position-relative">
                    <div class="row m-0 p-0 mb-5">
                        <div class="col-12 text-center">
                            <span class="px-3 py-2 h3 fw-bold rounded" :class="labelColor">{{ id }}</span>
                        </div>
                    </div>
                    <div class="row m-0 p-0 border-2 border-bottom border-light">
                        <div class="col-12 m-0 p-0 pb-1 fw-bold text-center">
                            <span class="align-middle text-center">Overzicht</span>
                        </div>
                    </div>
                    <div class="row m-0 p-0 pt-2">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/tag.svg"></div>
                        <div class="col-9 text-end">{{ brand }}{{ " " }}<span v-if="model">{{ model = model.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') }}</span></div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/ruler.svg"></div>
                        <div class="col-9 text-end">{{ size }}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/color.svg"></div>
                        <div class="col-9 text-end">
                            <KleurPreview 
                                v-for="c in colors"
                                :color="c"
                            />
                        </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/laces.svg"></div>
                        <div class="col-9 text-end fw-1000" v-if="lacesz=='Aanwezig'">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/soles.svg"></div>
                        <div class="col-9 text-end fw-1000" v-if="solesz=='Aanwezig'">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/paint.svg"></div>
                        <div class="col-9 text-end fw-1000" v-if="paintz=='Goed'">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/repair.svg"></div>
                        <div class="col-9 text-end">{{brokenz}}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/warning.svg"></div>
                        <div class="col-9 text-end">{{statusz}}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/delivery.svg"></div>
                        <div class="col-9 text-end">{{leverancier}}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/login.svg"></div>
                        <div class="col-9 text-end" v-if="creator">{{ creator = creator.charAt(0).toUpperCase() + creator.slice(1) }}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/clock.svg"></div>
                        <div class="col-9 text-end">{{datum}}</div>
                    </div>
                    <div class="row m-0 p-0 mb-4"></div>
                </div>
            </div>
        </div>
        <div class="col-8 col-xxl-10 justify-content-center">
            <div id="REPAIR" class="targets rounded row text-start">
                <div class="row m-0 p-0 pb-2 mx-auto text-light">
                    <div class="col-6 m-0 p-0 mb-4 text-center">
                        <div class="w-50 mx-auto">
                            <img class="imgSquare w-100 mx-auto" src="../img/laces.svg">
                            <label class="col-12" for="check1"> Geen veters  </label>
                        </div>
                    </div>
                    <div class="col-6 m-0 p-0 mb-4 text-center">
                        <div class="w-50 mx-auto">
                            <img class="imgSquare w-100 mx-auto" src="../img/soles.svg">
                            <label class="col-12" for="check2"> Geen binnenzool</label>
                        </div>
                    </div>
                </div>
                <div class="row m-0 p-0 pb-2 mx-auto text-light mt-4">
                    <div class="col-6 m-0 p-0 mb-4 text-center">
                        <div class="w-50 mx-auto">
                            <img class="imgSquare w-100 mx-auto" src="../img/paint.svg">
                            <label class="col-12" for="check4"> Verven </label>
                        </div>
                    </div>
                    <div class="col-6 m-0 p-0 mb-4 text-center">
                        <div class="w-50 mx-auto">
                            <img class="imgSquare w-100 mx-auto" src="../img/repair.svg">
                            <label class="col-12" for="check3"> Lijmen </label>
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
</template>
  
<script>
  export default {
    name: 'Repair_View',
    data(){
        return{
            laces: '',
            soles: '',
            paint: '',

        }
    },
    props: {
  
    },
    methods: {
  
    }
  }
</script>
  
<style scoped>
    .imgSquare{
        max-height: 20vh !important;
    }
</style>