<template>
    <div class="h-100 valign bg-blue text-light px-5">
        <div class="targets row w-100 m-0 p-0" v-if="sneaker == null">
            <img class="vh-15 mb-4" src="../img/repair.svg">
            <div class="w-100 text-center d-flex justify-content-center">
                <input type="text" size="14" 
                    id="search"
                    class="w-100 text-center border-blue rounded mx-auto mb-1" 
                    maxlength="4"
                    placeholder="labelnr" 
                    v-model="id"
                    @update="search()"
                    @click="showSelected"
                >
            </div>
            <div class="w-100 text-center d-flex justify-content-center">
                <input type="text" size="4"
                    id="bakNr"
                    class="w-100 text-center border-blue rounded mx-auto mb-1" 
                    maxlength="5"
                    placeholder="baknummer" 
                    v-model="baknr"
                    @keyup.enter="showConfirmUpdate = true"
                    @click="showConfirmUpdate"
                >
            </div>
        </div>
        <div class="targets row w-100 m-0 p-0" v-if="sneaker != null">
            <div class="col-3 col-xxl-3">
            <div class="sneakerPreview fw-bold w-100 valign m-0 p-0 d-flex borderzz bg-blue text-light border-light rounded">
                <div class="container position-relative">
                    <div class="row m-0 p-0 mt-4 mb-5">
                        <div class="col-12 text-center">
                            <span class="px-3 py-2 h3 fw-bold rounded invis-border" :class="sneaker.colorlabel">{{ sneaker.id }}</span>
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
                        <div class="col-9 text-end text-success fw-1000" v-if="sneaker.laces">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/soles.svg"></div>
                        <div class="col-9 text-end text-success fw-1000" v-if="sneaker.soles">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/paint.svg"></div>
                        <div class="col-9 text-end text-success fw-1000" v-if="sneaker.paint">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/repair.svg"></div>
                        <div class="col-9 text-end text-success fw-1000" v-if="sneaker.glue">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/warning.svg"></div>
                        <div class="col-9 text-end fw-1000">{{sneaker.status}}</div>
                        <div class="col-9 text-end fw-1000" v-if="sneaker.status==1">Cleaning</div>
                        <div class="col-9 text-end fw-1000" v-else-if="sneaker.status==2">Repair</div>
                        <div class="col-9 text-end fw-1000" v-else-if="sneaker.status==3">Stock</div>
                        <div class="col-9 text-end fw-1000" v-else-if="sneaker.status==4">Verkocht</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-4 valign justify-content-start grow"><img class="smallz whiteIcons" src="@/img/delivery.svg" :title="sneaker.supplier"></div>
                        <div class="col-4 valign justify-content-center grow"><img class="smallz whiteIcons" src="@/img/login.svg" :title="sneaker.creator"></div>
                        <div class="col-4 valign justify-content-end grow"><img class="smallz whiteIcons" src="@/img/clock.svg" :title="sneaker.date"></div>
                    </div>
                    <div class="row m-0 p-0 mb-4"></div>
                </div>
            </div>
            </div>
            <div class="col-7 col-xxl-7 justify-content-center">
            <div id="REPAIR" class="targets rounded row d-flex flex-column h-100 text-start justify-content-center align-items-center">
            <div class="">
                <div class="row m-0 p-0 mx-auto text-light">
                    <div class="col-6 m-0 p-0 mb-4 text-center"
                            @click="sneaker.laces = !sneaker.laces"
                    >
                        <div class="w-50 mx-auto invis-border" :class="{ highlight: !sneaker.laces }">
                            <img class="imgSquare w-100 mx-auto" src="../img/laces.svg">
                            <label class="col-12" for="check1">(1) Geen veters  </label>
                        </div>
                    </div>
                    <div class="col-6 m-0 p-0 mb-4 text-center"
                            @click="sneaker.soles = !sneaker.soles"
                    >
                        <div class="w-50 mx-auto invis-border" :class="{ highlight: !sneaker.soles }">
                            <img class="imgSquare w-100 mx-auto" src="../img/soles.svg">
                            <label class="col-12" for="check2"> (1) Geen binnenzool</label>
                        </div>
                    </div>
                </div>
                <div class="row m-0 p-0 mx-auto text-light">
                    <div class="col-6 m-0 p-0 mb-4 text-center"
                            @click="sneaker.paint = !sneaker.paint"
                    >
                        <div class="w-50 mx-auto invis-border" :class="{ highlight: !sneaker.paint }">
                            <img class="imgSquare w-100 mx-auto" src="../img/paint.svg">
                            <label class="col-12" for="check4"> (2) Verven </label>
                        </div>
                    </div>
                    <div class="col-6 m-0 p-0 mb-4 text-center"
                            @click="sneaker.glue = !sneaker.glue"
                    >
                        <div class="w-50 mx-auto invis-border" :class="{ highlight: !sneaker.glue }">
                            <img class="imgSquare w-100 mx-auto" src="../img/repair.svg">
                            <label class="col-12" for="check3"> (3) Lijmen </label>
                        </div>
                    </div>

                </div>
            </div>
            </div>
            <div class="d-none">
                <p>1. CONTROLE   Damage Check & Update ( load checkboxes , ... yes/no ) </p>
                <p>2. GEMAAKT    Repaired: update db ( soles laces verven glue status )</p>
                <p>3. CONFIRMBOX Confirm Box: Ben je zeker? </p>
            </div>
            </div>
            <div class="col-2 col-xxl-2 m-0 p-0">
                <div class="w-100 m-0 p-0 vh-7">
                    <div @click="showConfirmAnnuleren = ! showConfirmAnnuleren" class="text-danger text-end h-100 valign justify-content-end hover mt-2 fs-1">
                        ❌
                    </div>
                </div>
                <div @click="showConfirmUpdate = !showConfirmUpdate" id="nextButton" class="nextButton grow boxShadow-blue square valign text-center h-100">
                        <img class="w-50 mx-auto selectDisable" src="../img/next.svg">
                </div>
            </div>
        </div>

        <div class="full m-0 p-0" id="confirmAnnuleren" v-show="showConfirmAnnuleren == true">
            <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
              <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
                  <p class="d-flex align-items-center justify-content-center my-5">Ben je zeker dat je terug wil zonder opslaan?</p>
                  <div class="row m-0 p-0">
                    <div class="col-6 m-0 p-0">
                      <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="annuleren">JA</button> 
                    </div>
                    <div class="col-6 m-0 p-0">
                      <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="showConfirmAnnuleren = !showConfirmAnnuleren">NEE</button>
                    </div>
                  </div>
              </div>
            </div>
        </div>

        <div class="full m-0 p-0" id="confirm" v-show="showConfirmUpdate == true">
            <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
              <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
                  <p class="d-flex align-items-center justify-content-center my-5">Ben je zeker dat je <span class="text-yellow mx-2">{{id}}</span> in <span class="text-yellow mx-2">{{"R." + baknr}}</span> wil updaten?</p>
                  <div class="row m-0 p-0">
                    <div class="col-6 m-0 p-0">
                      <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="update">JA</button> 
                    </div>
                    <div class="col-6 m-0 p-0">
                      <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="showConfirmUpdate = !showConfirmUpdate">NEE</button>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import SneakerService from '@/services/SneakerService';
import KleurPreview from '@/components/KleurPreview.vue';

  export default {
    name: 'Repair_View',
    data(){
        return{
            sneaker: null,
            
            id: null,
            labelColor: "",
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
            glueCheck: false,
            baknr: "",
            showConfirmUpdate: false,
            showConfirmAnnuleren: false
            
        }
    },
    props: {
  
    },
    methods: {
        
        search(){  
        /*     
            try{
                const response = await SneakerService.get(this.id);
                this.sneaker = response.data;
                if(this.sneaker.colors){
                    this.sneaker.colors = this.sneaker.colors.split(" ");
                    this.sneaker.colors.pop();
                }
                console.log(this.sneaker);
            }
            catch(error){
                console.error("Sneaker niet gevonden: " , error);
                alert(error);
            }
        */
            SneakerService.get(this.id)
                .then(response => {
                    
                    this.sneaker = response.data;
                    console.log(this.sneaker);
                    this.sneaker.colors = this.sneaker.colors.split(" ");
                    this.sneaker.colors.pop();
                    console.log(this.sneaker);
                })
                .catch(error => {
                    error = "Sneaker niet gevonden";
                    console.error(error);
                    alert(error);
               })
        },
        update(){
            console.log(this.sneaker);
            if(this.sneaker){
                const updateData = {};
                if(this.baknr){
                    updateData = { laces: this.sneaker.laces , soles: this.sneaker.soles , paint: this.sneaker.paint , glue: this.sneaker.glue , bakNr: "R." + this.baknr}

                }else{
                    updateData = { laces: this.sneaker.laces , soles: this.sneaker.soles , paint: this.sneaker.paint , glue: this.sneaker.glue }
                }
                SneakerService.update(this.id,updateData)
                .then( () => {
                    console.log("yolo baby update , check db bro");
                    this.showConfirmAnnuleren = ! this.showConfirmAnnuleren;

                })
                .catch(error => {
                        error = "Sneaker upodate nope bra";
                        console.error(error);
                        alert(error);
                })
            }
        },
        annuleren(){
            window.location.reload();
        }
    },
    watch: {
      baknr(newVal) {
        if (newVal) {
          this.baknr = newVal.charAt(0).toUpperCase() + newVal.slice(1);
        }
      }
    },
    components: {
        KleurPreview
    }
  }
</script>
  
<style scoped>
    .full{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(247,247,247,0.5);
    }

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
    
    #search,#bakNr{
        width: 100%;
        max-width: 400px !important;
        height: 66px;
        font-size: 50px;
    }

    .smallz{
    width: 30px;
    height: 30px;
   }

   .sneakerPreview{
    font-size: 22px;
   }

    /* LABEL COLORS */

.labelGrey{
  background-color: var(--labelGrey);
}

.labelRed{
  background-color: var(--labelRed);
}

.labelPink{
  background-color: var(--labelPink);
}

.labelViolet{
  background-color: var(--labelViolet);
}

.labelYellow{
  color: black !important;
  background-color: var(--labelYellow);
}

.labelBrown{
  background-color: var(--labelBrown);
}

.labelDGreen{
  background-color: var(--labelDGreen);
}

.labelOrange{
  background-color: var(--labelOrange);
}

.labelBlue{
  background-color: var(--labelBlue);
}

.labelWhite{
  color: black !important;
  background-color: var(--labelWhite);
}

.labelGreen{
  color: black !important;
  background-color: var(--labelGreen);
}

</style>