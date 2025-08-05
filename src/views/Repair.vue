<template>
    <div class="h-100 valign bg-blue text-light px-5">
        <div class="targets row w-100 m-0 p-0" v-if="sneaker == null">
                <img class="vh-15 mb-4 d-block mx-auto" src="../img/repair.svg">
                <div class="w-100 text-center d-flex justify-content-center">
                    <input type="text" size="14" 
                        id="search"
                        class="w-100 text-center border-blue rounded mx-auto mb-1" 
                        maxlength="4"
                        placeholder="labelnr" 
                        v-model="id"
                        @change="exist"
                        @click="showSelected"

                    >
                </div>
                <div class="w-100 text-center d-flex justify-content-center">
                    <input type="text" size="9"
                        id="bakNr"
                        class="w-100 text-center border-blue rounded mx-auto mb-1" 
                        maxlength="9"
                        placeholder="baknummer"
                        v-model="baknr"
                        @focus="moveCursorToEnd"
                        @keyup.enter="search"
                        @click="showConfirmUpdate"
                    >
                </div>
                <div class="w-100 text-center d-flex justify-content-center">
                    <div @click="search" id="nextButton" class="nextButton grow pointer boxShadow-blue square valign text-center h-100 mt-3">
                        <img class="vh-15 mx-auto selectDisable" src="../img/next.svg" title="Je kan ook [ENTER] duwen.">
                    </div>
                </div>
        </div>
        <div class="targets row w-100 m-0 p-0" v-if="sneaker != null">
            <div class="col-3 col-xxl-3">
            <div class="sneakerPreview fw-bold w-100 valign m-0 p-0 d-flex borderzz bg-blue text-light border-light rounded">
                <div class="container position-relative">
                    <div class="row m-0 p-0 mt-4 mb-3">
                        <div class="col-12 text-center">
                            <span class="px-3 py-2 h3 fw-bold rounded invis-border" :class="sneaker.colorlabel">{{ stringId }}</span>
                        </div>
                    </div>
                    <div class="row m-0 p-0 border-2 border-bottom border-light">
                        <div class="col-12 m-0 p-0 pb-1 fw-bold text-center">
                            <span class="align-middle text-center">Overzicht</span>
                        </div>
                    </div>
                    <div class="row m-0 p-0 pt-2">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/tag.svg"></div>
                        <div class="col-9 text-end">{{ sneaker.brand }}{{ " " }}<span v-if="sneaker.model">{{ sneaker.model = sneaker.model.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') }}</span></div>
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
                        <div class="col-9 text-end fw-1000" v-if="sneaker.laces"><span v-if="shoeLace && shoeLace.length > 0">{{ shoeLace + "cm " }}</span><span class="text-success">✔</span></div>
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
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/stock.svg"></div>
                        <div class="col-9 text-end fw-1000">{{baknr}}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/warning.svg"></div>
                        
                        <div class="col-9 text-end fw-1000" v-if="sneaker.status==1">Cleaning</div>
                        <div class="col-9 text-end fw-1000" v-else-if="sneaker.status==2">Repair</div>
                        <div class="col-9 text-end fw-1000" v-else-if="sneaker.status==3">Stock</div>
                        <div class="col-9 text-end fw-1000" v-else-if="sneaker.status==4">Verkoop</div>
                        <div class="col-9 text-end fw-1000" v-else> - </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-4 valign justify-content-start grow"><img class="smallz whiteIcons" src="@/img/delivery.svg" :title="leveranciersList[sneaker.supplier-1].name"></div>
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
                    <div class="col-6 m-0 p-0 mb-4 text-center">
                        <div class="w-50 mx-auto invis-border pointer growz" :class="{ highlight: !sneaker.laces }">
                            <img class="imgSquare w-100 mx-auto" @click="addLaces();showLaces = true" src="../img/laces.svg">
                            <label class="col-12" for="check1">(1) Geen veters  </label>
                        </div>
                        <input v-if="showLaces" v-model="shoeLace" class="text-center" placeholder="Veterlengte">
                    </div>
                    <div class="col-6 m-0 p-0 mb-4 text-center">
                        <div class="w-50 mx-auto invis-border pointer growz" :class="{ highlight: !sneaker.soles }">
                            <img class="imgSquare w-100 mx-auto" @click="addSoles" src="../img/soles.svg">
                            <label class="col-12" for="check2"> (1) Geen binnenzool</label>
                        </div>
                    </div>
                </div>
                <div class="row m-0 p-0 mx-auto text-light">
                    <div class="col-6 m-0 p-0 mb-4 text-center">
                        <div class="w-50 mx-auto invis-border pointer growz" :class="{ highlight: !sneaker.paint }">
                            <img class="imgSquare w-100 mx-auto" @click="addPaint" src="../img/paint.svg">
                            <label class="col-12" for="check4"> (2) Verven </label>
                        </div>
                    </div>
                    <div class="col-6 m-0 p-0 mb-4 text-center">
                        <div class="w-50 mx-auto invis-border pointer growz" @click="addGlue" :class="{ highlight: !sneaker.glue }">
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
                         <span class="text-end growz">❌</span>
                    </div>
                </div>
                <div @click="showConfirmUpdate = !showConfirmUpdate" id="nextButton" class="nextButton grow pointer boxShadow-blue square valign text-center h-100">
                    <img class="w-50 mx-auto selectDisable" src="../img/next.svg">
                </div>
            </div>
        </div>

        <div class="full m-0 p-0" id="confirmAnnuleren" v-show="showConfirmAnnuleren == true">
            <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
              <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
                  <p class="d-flex align-items-center justify-content-center my-5"><span>Ben je zeker dat je terug wil <span class="text-warning">zonder opslaan</span>?</span>
</p>
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

        <div class="full m-0 p-0" id="confirm" v-show="showConfirmUpdate">
            <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
              <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
                  <p class="d-flex align-items-center justify-content-center my-5">Ben je zeker dat je <span class="text-yellow mx-2">{{stringId}}</span> in <span class="text-yellow mx-2">{{ baknr}}</span> wil updaten?</p>
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

        <div class="full m-0 p-0" id="confirm" v-show="showConfirm == true">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
              <p class="d-flex align-items-center justify-content-center my-5">Deze id bestaat niet.</p>
              <div class="row m-0 p-0">
                <div class="col-12 m-0 p-0">
                  <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="showConfirm = false;id = '';">JA</button> 
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
import RepairsService from '@/services/RepairsService';
import LeverancierService from '@/services/LeverancierService';


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
            shoeLace: "",
            lacesCheck: false,
            solesCheck: false,
            paintCheck: false,
            glueCheck: false,
            baknr: "IN-2-",
            price: 0,

            showConfirmUpdate: false,
            showConfirmAnnuleren: false,
            showConfirm: false,

            showLaces: false,

            repairList: [],
            leveranciersList: [],

            counter: 0

            
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
                    console.log("LACES" + this.sneaker.laces);
                    console.log("SOLES" + this.sneaker.soles);
                    console.log("PAINT" + this.sneaker.paint);
                    console.log("GLUE" + this.sneaker.glue);
                    console.log("STATUS" + this.sneaker.status)
                    this.sneaker.colors = this.sneaker.colors.split(" ");
                    this.sneaker.colors.pop();
                    //price = this.sneaker.price;
                    //console.log(price);
                })
                .catch(error => {
                    error = "Sneaker niet gevonden";
                    console.error(error);
                    alert(error);
               })
        },
        async exist(){
            try{
                await SneakerService.get(this.id)
                    .then(result => {
                      //const bakNr = result.data.bakNr;
                      // You can store it somewhere if needed
                      //this.baknr = bakNr;
                    })

                return;
            }catch(err){
                this.showConfirm = true;              
            }
        },
        update(){
            console.log("SNEAKY");
            console.log(this.sneaker);

            console.log("ID");
            console.log(this.sneaker.id);

            if(this.sneaker.id){
                var updateData = {};

                console.log("SALAMI HEPS BABY");

                if(this.sneaker.laces == true && this.sneaker.soles == true && this.sneaker.paint === true && this.sneaker.glue === true){
                    this.sneaker.status = 1
                    this.sneaker.bakNr = "Atel-J"
                } 
                else this.sneaker.status = 2

                console.log("STATUS" + this.sneaker.status);
                console.log("VETERLENGTE:" + this.shoeLace);

                if(this.baknr){
                    updateData = { laces: this.sneaker.laces , soles: this.sneaker.soles , paint: this.sneaker.paint , glue: this.sneaker.glue , status: this.sneaker.status, price: this.sneaker.price , bakNr: this.baknr, shoeLace: this.shoeLace}

                }else{
                    updateData = { laces: this.sneaker.laces , soles: this.sneaker.soles , paint: this.sneaker.paint , glue: this.sneaker.glue , status: this.sneaker.status, price: this.sneaker.price, shoeLace: this.shoeLace }
                }

                SneakerService.update(this.id,{ laces: this.sneaker.laces , soles: this.sneaker.soles , paint: this.sneaker.paint , glue: this.sneaker.glue , status: this.sneaker.status, price: this.sneaker.price , bakNr: this.baknr, shoeLace: this.shoeLace })
                .then( () => {
                    console.log("yolo baby update , check db bro");
                    this.showConfirmUpdate = ! this.showConfirmUpdate;
                    this.annuleren();
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
        },
        async next(){
            if(this.counter == 0){
                console.log("COUNTER IS 0");
                try{
                    await SneakerService.get(id.value);
                    alert("Deze ID bestaat al");
                    id.value = "";
                    counter = 0;
                    return;
                }catch(err){
                    console.log("Gucci baby let the app go");
                }
            }
            
            //CURRENT
            targets[counter].classList.remove("d-inline");
            targets[counter].classList.add("d-none");

            counter = counter + 1;

            //NEXT
            targets[counter].classList.remove("d-none");
            targets[counter].classList.add("d-inline");
            targets[counter].focus();

            //COUNTER NEXT
            if(counter == 1){
                document.getElementsByClassName("returnButton")[0].classList.remove("d-none");
                document.getElementsByClassName("returnButton")[0].classList.add("d-flex");
            }
            if(counter == targets.length-1){
                document.getElementsByClassName("nextButton")[0].classList.remove("d-flex");
                document.getElementsByClassName("nextButton")[0].classList.add("d-none");

                document.getElementsByClassName("addButton")[0].classList.remove("d-none");
                document.getElementsByClassName("addButton")[0].classList.add("d-flex");
            }
            
            //console.log("COUNTER NEXT: ")
            //console.log(counter);
        },
        /*
        handleBaknrInput(event) {
           const input = event.target.value;

           // Remove "R." if user tries to backspace
           let raw = input.startsWith('R.') ? input.slice(2) : input;

           // Capitalize first character only
           if (raw.length > 0) {
             raw = raw.charAt(0).toUpperCase() + raw.slice(1);
           }
       
           this.baknr = raw;
         },*/
         moveCursorToEnd(event) {
          const el = event.target;
          const value = el.value;

          // Set the cursor at the end
          requestAnimationFrame(() => {
            el.selectionStart = el.selectionEnd = value.length;
          });
        },
        getRepairs(){
            RepairsService.getAll()
            .then(x => {
                this.repairList = x.data;
                console.log(this.repairList);
            })
            .catch(err =>{
                error = "fuck it eroor";
                console.error(err);
            })
        },
        show(){
            console.log(this.sneaker.price);
            console.log(this.sneaker.laces);
            console.log(this.sneaker.soles);
            console.log(this.sneaker.paint);
            console.log(this.sneaker.glue);
        },
        addLaces(){
            if(!this.sneaker.laces){
                if(!this.lacesCheck){
                    this.sneaker.price = this.sneaker.price + this.repairList[0].price;
                    this.lacesCheck = true;
                } 
            } 
            this.sneaker.laces = !this.sneaker.laces;
            this.show();
        },
        addSoles(){
            if(!this.sneaker.soles){
                if(!this.solesCheck){
                    this.sneaker.price = this.sneaker.price + this.repairList[1].price;
                    this.solesCheck = true;
                } 
            }
            this.sneaker.soles = !this.sneaker.soles;
            this.show();
        },
        addPaint(){
            if(!this.sneaker.paint){
                if(!this.paintCheck) { 
                    this.sneaker.price = this.sneaker.price + this.repairList[2].price; 
                    this.paintCheck = true;
                }
            }
            this.sneaker.paint = !this.sneaker.paint;
            this.show();
        },
        addGlue(){
            if(!this.sneaker.glue){
                if(!this.glueCheck) { 
                    this.sneaker.price = this.sneaker.price + this.repairList[3].price; 
                    this.glueCheck = true;
                }
            }
            this.sneaker.glue = !this.sneaker.glue;
            this.show();
        },
        getLeveranciers(){
            LeverancierService.getAll()
            .then(x => {
                this.leveranciersList = x.data;
                console.log(this.leveranciersList);
            })
            .catch(err =>{
                console.log(err);
            })
        }
    },
    watch: {
        baknr(newVal) {
            if (!newVal) return;

            // Force uppercase and remove anything not A-Z or 0-9
            let val = newVal.toUpperCase().replace(/[^A-Z0-9]/g, '');

            // Remove IN2 if user typed it
            if (val.startsWith('IN2')) {
              val = val.slice(3);
            } else if (val.startsWith('IN-2')) {
              val = val.slice(4);
            }

            const prefix = 'IN-2-';

            // Extract valid segments
            let letter = '';
            let digit = '';

            if (val.length >= 1 && /[A-Z]/.test(val[0])) {
              letter = val[0];
            }

            if (val.length >= 2 && /[0-9]/.test(val[1])) {
              digit = val[1];
            }

            // Build formatted string
            let formatted = prefix;
            if (letter) formatted += letter;
            if (letter && !digit) formatted += '-';
            if (digit) formatted += `-${digit}`;

            // Prevent infinite loop
            if (this.baknr !== formatted) {
              this.baknr = formatted;
            }
        }
    },
    computed:{
        stringId(){
            return String(this.id).padStart(4, '0')
        }
    },
    components: {
        KleurPreview
    },
    mounted(){
        this.getRepairs();
        this.getLeveranciers();

        this.$nextTick(() => {
            document.getElementById('search').focus();
        })
        
        //this.getSneakers();
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