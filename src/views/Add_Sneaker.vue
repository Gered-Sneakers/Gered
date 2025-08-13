<template>
   <div class="h-100 bg-blue">
    <!-- LEVERANCIER -->
    <div class="row h-100 mainTargets bg-blue">
        <div id="navToevoegen" class="row vh-7 valign">
                <div class="text-danger h-100 valign justify-content-end mt-2 fs-1">
                    <span @click="showAnnuleren()" class="text-end hover growz">❌</span>
                </div>
        </div>
        <div id="xxxxxxx" class="row mx-3 mx-auto">
            <div class="row mw-800 mx-auto valign">
                <div class="row text-light" v-for="l in leveranciers">
                    <div class="col-4 leverancier border text-center rounded growz pointer mx-auto justify-content-center align-content-center" 
                        v-if="l.isActive"
                        @click="go();prevLeverancier = l.id;leverancier = l.id;chosenLeverancier = l.id"
                        >
                        {{ l.name }}
                    </div>
                <!--
                <select id="leveranciers" name="leveranciers"
                    class="col-3 m-1 valign mx-auto rounded border-blue bg-blue text-light"
                    v-model="leverancier" value="Leverancier" @change="go()" @input="prevLeverancier = $event.target.value;"
                    >
                    <option disabled selected value="undefined"> Leverancier</option> 
                    
                    <div v-for="l in leveranciers">
                        <option v-if="l.isActive" :key="l.id" :value="l.id"> {{ l.name }} </option>
                    </div>
                </select>
                -->
                </div>
            </div>
        </div>
        <div class="vh-5"></div>
    </div>
    <!-- LABELKLEUR -->
    <div class="row h-100 mainTargets d-none bg-blue">
        <div id="navToevoegen" class="row vh-7 valign">
                <div @click="showAnnuleren()" class="text-danger h-100 valign justify-content-end hover mt-2 fs-1">
                    <span class="text-end growz">❌</span>
                </div>
        </div>
        <!-- LABELKLEUR -->
        <div id="xxxxxxx" class="row mx-3 mx-auto">
            <div class="row mw-800 mx-auto valign">
                <div id="IDLABEL" class="row w-100" @keyup.enter="go()">
                    <div class="row mt-3 mx-auto mw-800">
                        <h1 class="text-center text-light fw-bold mb-3">Labelkleur</h1>
                        <Label v-for="labelcolor in labels"
                        :name="labelcolor.name"
                        :isActive="labelcolor.isActive"
                        class="mx-auto text-center text-dark growz"
                        v-model="labelColor"
                        @change="go()"
                        ></Label>
                    </div>
                </div>
            </div>
        </div>
        <div class="vh-5"></div>
    </div>
    <div class="row h-100 mainTargets mx-auto text-Gered d-none">        
        <div class="mx-auto col-4 col-xxl-3 h-100 rounded-top d-flex align-items-center position-relative" v-if="showPreviewz">
            <div class="sneakerPreview fw-bold w-100 valign m-0 p-0 d-flex borderzz bg-blue text-light border-light rounded">
                <div class="container position-relative">
                    <div class="row m-0 p-0 mt-4 mb-3">
                        <div class="col-12 text-center">
                            <span class="px-3 py-2 h3 fw-bold rounded" :class="labelColor">{{ stringId }}</span>
                        </div>
                    </div>
                    <div class="row m-0 p-0 border-2 border-bottom border-light mb-2">
                        <div class="col-12 m-0 p-0 fw-bold text-center">
                            <span class="align-middle text-center">Overzicht</span>
                        </div>
                    </div>
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" title="merk + model" src="@/img/tag.svg"></div>
                        <div class="col-9 text-end">{{ brand }}{{ " " }}<span v-if="model">{{ model }}</span></div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" title="xx" src="@/img/ruler.svg"></div>
                        <div class="col-9 text-end">{{ size }}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/color.svg"></div>
                        <div class="col-9 text-end py-0 my-0">
                            <KleurPreview 
                                v-for="c in colors"
                                :color="c"
                            />
                        </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/laces.svg"></div>
                        <div class="col-9 text-end fw-1000 text-success" v-if="laces == 1">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/soles.svg"></div>
                        <div class="col-9 text-end fw-1000 text-success" v-if="soles == 1">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/paint.svg"></div>
                        <div class="col-9 text-end fw-1000 text-success" v-if="paint == 1">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/repair.svg"></div>
                        <div class="col-9 text-end fw-1000 text-success" v-if="glue == 1">✔</div>
                        <div class="col-9 text-end fw-1000" v-else> ❌ </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/warning.svg"></div>
                        <div class="col-9 text-end">{{statusz}}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/stock.svg"></div>
                        <div class="col-9 text-end">{{bakNr}}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/delivery.svg"></div>
                        <div class="col-9 text-end">{{ getLeverancierName(leverancier) }}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/login.svg"></div>
                        <div class="col-9 text-end" v-if="creator">{{ creator = creator.charAt(0).toUpperCase() + creator.slice(1) }}</div>
                    </div>
                    <hr class="w-90 mx-auto mt-2 mb-1 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz whiteIcons" src="@/img/clock.svg"></div>
                        <div class="col-9 text-end">{{datum}}</div>
                    </div>
                    
                    <div class="row m-0 p-0"></div>
                </div>
            </div>
        </div>
        <div class="FORM col-8 col-xxl-9 bg-blue rounded-top-left">
            <div id="navToevoegen" class="row vh-7 valign me-3">
                <div @click="showPreview()" class="w-50 h-100 valign justify-content-start hover mt-2 fs-1"> <img class="hideArrow grow hover" style="width:50px;height:50px;" src="@/img/downarrow.svg"> </div>
                <div @click="showAnnuleren()" class="w-50 text-danger h-100 valign justify-content-end hover mt-2 fs-1">
                    <span class="text-end growz">❌</span>
                </div>
            </div>
            <div class="row h-100 valign rounded-top-left">
                
                <div class="">
                <div class="mx-auto  row m-0 p-0 h-500  rounded">
                <div class="col-2 p-2">
                    <div @click="back" id="returnButton" class="returnButton grow boxShadow-blue square valign text-center d-none h-100">
                        <img class="w-50 mx-auto rota180 selectDisable pointer" src="../img/next.svg">
                    </div>
                </div>
                <div class="col-8 valign">
                    <div class="w-100 text-center"> <!--@keyup.enter="next"-->
                        <!-- ID -->
                        <div id="IDLABEL" class="row w-100 targets" @keyup.enter="next">
                            <div class="row m-0 p-0">
                                <input id="ID" @keyup.enter="createDate();checkboxLimit();" v-model="id" :autocomplete="'off'" type="text" placeholder="Label NR" class="rounded border-blue id text-center mx-auto d-inline " minlength="4" maxlength="4">
                            </div>
                            <!--
                            <div class="row mt-3 mx-auto mw-800">
                                <Label v-for="labelcolor in LabelColors"
                                :name="labelcolor"
                                class="mx-auto text-center text-dark"
                                v-model="labelColor"
                                ></Label>
                            </div>
                            -->
                        </div>
                        <!-- BRAND -->                    
                        <div id="brands" class="targets rounded row mx-3 mx-auto d-none">
                        <div class="row w-100">
                            <Brand id="brand"
                                v-for="b in brands"
                                :key="b.name"
                                :name="b.name"
                                :img="b.img"
                                :isActive="b.isActive"
                                v-model="brand"
                                @keyup.enter="next"
                                />
                        </div>
                        </div>
                        <!-- MODEL -->
                        <input @keyup.enter="next" id="MODEL" v-model="model" :autocomplete="'off'" type="text" placeholder="MODEL" class="targets rounded border-blue model text-center d-none" maxlength="30">
                        <!-- EXTRA -->
                        <input @keyup.enter="next" id="EXTRA" v-model="extra" :autocomplete="'off'" type="text" placeholder="EXTRA" class="targets rounded border-blue model text-center d-none" maxlength="25">
                        <!-- SIZE -->
                        <input @keyup.enter="next" id="SIZE" v-model="size" :autocomplete="'off'" type="number" placeholder="MAAT" class="targets rounded border-blue size text-center d-none" minlength="2" maxlength="2">
                        <!-- COLORS -->
                        <div @keyup.enter="next" id="COLORS" class="targets rounded row w-100 mx-3 mx-auto d-none">
                            <div class="row w-100 mw-800 h-500 mx-auto" id="checkboxgroup" @click="checkboxLimit">
                                <div class="row m-0 p-0">
                                <div class="col m-1 valign mx-auto rounded colorSquare red"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer red" value="rood" v-model="colors"></div></div>
                                <div class="col m-1 valign mx-auto rounded colorSquare green"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer green" value="groen" v-model="colors"></div></div>
                                <div class="col m-1 valign mx-auto rounded colorSquare blue"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer blue" value="blauw" v-model="colors"></div></div>
                                <div class="col m-1 valign mx-auto rounded colorSquare yellow"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer yellow" value="geel" v-model="colors"></div></div>
                                </div>
                                <div class="row m-0 p-0">
                                <div class="col m-1 valign mx-auto rounded colorSquare pink"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer pink" id="xx" value="roos" v-model="colors"></div></div>
                                <div class="col m-1 valign mx-auto rounded colorSquare purple"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer purple" value="paars" v-model="colors"></div></div>
                                <div class="col m-1 valign mx-auto rounded colorSquare brown"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer brown" value="bruin" v-model="colors"></div></div>
                                <div class="col m-1 valign mx-auto rounded colorSquare orange"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer orange" value="oranje" v-model="colors"></div></div>
                                </div>
                                <div class="row m-0 p-0">
                                <div class="col m-1 valign mx-auto rounded colorSquare grey"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer grey" value="grijs" v-model="colors"></div></div>
                                <div class="col m-1 valign mx-auto rounded colorSquare black"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer black" value="zwart" v-model="colors"></div></div>
                                <div class="col m-1 valign mx-auto rounded colorSquare white"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer white" value="wit" v-model="colors"></div></div>
                                <div class="col m-1 valign mx-auto rounded colorSquare beige"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer beige" value="beige" v-model="colors"></div></div>
                                
                                </div>
                                <div class="row m-0 p-0">
                                    <div class="col-3 m-1 valign mx-auto rounded colorSquare goud"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer goud" value="goud" v-model="colors"></div></div>
                                    <div class="col-3 m-1 valign mx-auto rounded colorSquare zilver"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer zilver" value="zilver" v-model="colors"></div></div>
                                    <div class="col-3 m-1 valign mx-auto rounded colorSquare bronze"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer bronze" value="bronze" v-model="colors"></div></div>
                                    <div class="col-3 m-1 valign mx-auto rounded colorSquare multi"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer multi" value="multi" v-model="colors"></div></div>
                                </div>
                            </div>
                        </div>
                        <!-- LACES + SOLES -->
                        <div id="REPAIR" class="targets rounded row text-start d-none">
                        <div class="row m-0 p-0 pb-2 mx-auto text-light">
                            <div class="col-6 m-0 p-0 mb-4 text-center row pointer invisBorders" :class="{ highlight: !laces }">
                                <img class="col-6 imgSquare mx-auto growz" src="../img/laces.svg" @click="laces = !laces;statusCheckbox();fillBakNr()">
                                <label class="col-12" for="check1"> Geen veters  </label>
                            </div>
                            <div class="col-6 m-0 p-0 mb-4 text-center row pointer invisBorders" :class="{ highlight: !soles }">
                                <img class="col-6 imgSquare mx-auto growz" src="../img/soles.svg" @click="soles = !soles;statusCheckbox();fillBakNr()">
                                <label class="col-12" for="check2"> Geen binnenzool</label>
                            </div>
                            <div class="col-6 mx-auto m-0 p-0 text-center row pointer invisBorders" :class="{ highlight: !paint }">
                                <img class="col-6 imgSquare mx-auto growz" src="../img/paint.svg" @click="paint = !paint;statusCheckbox();fillBakNr()">
                                <label class="col-12" for="check4"> Verven </label>
                            </div>
                            <div class="col-6 mx-auto m-0 p-0 text-center row pointer invisBorders" :class="{ highlight: !glue }">
                                <img class="col-6 imgSquare mx-auto growz" src="../img/repair.svg" @click="glue = !glue;statusCheckbox();fillBakNr()">
                                <label class="col-12" for="check3"> Lijmen </label>
                            </div>

                        </div>
                        </div>
                        <!-- LOCATIE -->
                        <!--<input @keyup.enter="saveSneaker" id="LOCATIE" v-model="bakNr" @focus="if (!bakNr) bakNr = (status === 2 ? 'IN-2-' : 'IN-1-')" :autocomplete="'off'" type="text" placeholder="LOCATIE" class="targets rounded border-blue model text-center d-none" maxlength="30">-->
                        <input
                          v-model="bakNr"
                          id="LOCATIE"
                          autocomplete="off"
                          type="text"
                          placeholder="LOCATIE"
                          class="targets rounded border-blue model text-center d-none"
                          maxlength="30"
                        />
                    </div>
                </div>
                <div class="col-2 p-2">
                    <div @click="next" id="nextButton" class="nextButton grow boxShadow-blue square valign text-center h-100">
                        <img class="w-50 mx-auto selectDisable pointer" src="../img/next.svg" title="Je kan ook [ENTER] duwen.">
                    </div>
                    <div @click="showConfirmBox" id="addButton" class="addButton grow boxShadow-blue square valign text-center d-none h-100">
                        <img class="w-50 mx-auto selectDisable pointer" src="../img/add.svg">
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </div>

    <div class="full m-0 p-0 d-none" id="confirm">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
              <p class="d-flex align-items-center justify-content-center my-5">Ben je zeker dat je <span class="text-yellow mx-2">{{ id }}</span> wil toevoegen?</p>
              <div class="row m-0 p-0">
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="saveSneaker">JA</button> 
                </div>
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="refuse">NEE</button>
                </div>
              </div>
          </div>
        </div>
    </div>

    <div class="full m-0 p-0 d-none" id="confirmAnnuleren">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
              <p class="d-flex align-items-center justify-content-center my-5">Ben je zeker dat je opnieuw wil beginnen?</p>
              <div class="row m-0 p-0">
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="annuleren">JA</button> 
                </div>
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="refuseAnnuleren">NEE</button>
                </div>
              </div>
          </div>
        </div>
    </div>

    <div class="full m-0 p-0 d-none" id="confirmColor">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
              <p class="d-flex align-items-center justify-content-center my-5">Je kan maximaal 3 kleuren kiezen.</p>
              <div class="row m-0 p-0">
                <div class="col-12 m-0 p-0">
                  <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="closeConfirmColor()">JA</button> 
                </div>
              </div>
          </div>
        </div>
    </div>
</div>
</template>
  
<script setup>
    import { inject } from 'vue'
    
    import Brand from '@/components/Brand.vue';

    import Leverancier from '@/components/Leverancier.vue';

    import Label from '@/components/Label.vue';

    import KleurPreview from '@/components/KleurPreview.vue';
    //import LabelPreview from '@/components/LabelPreview.vue';

    import ConfirmBox from '@/components/ConfirmBox.vue';

    import SneakerService from '@/services/SneakerService';

    import { ref, watch } from 'vue'
    import { onMounted } from 'vue';
    import { computed } from 'vue'

    import BrandService from '@/services/BrandService';
    import WerknemerService from '@/services/WerknemerService';
    import LeverancierService from '@/services/LeverancierService';
    import LabelcolorService from '@/services/LabelcolorService';

    var id = ref();
    var labelColor = ref();
    var brand = ref();
    var model = ref();
    var size = ref();
    var colors = ref([]);
    var laces = ref(true);
    var soles = ref(true);
    var paint = ref(true);
    var glue = ref(true);
    var broken = ref(true);
    var leverancier = ref();
    var status = ref(0);
    var datum = createDate();
    var creator = ref();
    var extra = ref();
    var price = 25;
    var bakNr = ref("IN-1-");
    var chosenLeverancier = "";

    var statusz = "Cleaning";

    var showPreviewz = ref(true);
    
    var prevLeverancier = ref(0);
    var repairs = [];

    var leveranciers = ref([]);
    var brands = [];
    var labels = [];

    const enterEvent = new KeyboardEvent('keyup', {
      key: 'Enter',
      keyCode: 13,        // deprecated but sometimes needed
      code: 'Enter',
      which: 13,
      bubbles: true
    });

    const mainTargets = document.getElementsByClassName("mainTargets");
    const targets = document.getElementsByClassName("targets");

    //const previewImg = document.getElementsByClassName("previewImg");
    

    var mainCounter = 0;
    var counter = 0;

    onMounted(()=>{
        getBrands();
        getLeveranciers();
        getLabelColors();
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.name)  creator.value = user.name;
  
    })

    const stringId = computed(() => {
        return (id?.value ? String(id.value).padStart(4, '0') : '0000')
    })

    watch(model, (newVal, oldVal) => {
        model.value = newVal
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    })

    watch(extra, (newVal, oldVal) => {
        extra.value = newVal.toUpperCase()
    })

    watch(bakNr, (newVal) => {
      if (newVal == null) return

      const prefixStr = status.value === 2 ? 'IN-2-' : 'IN-1-'

      // Uppercase + strip junk
      let val = String(newVal).toUpperCase().replace(/[^A-Z0-9-]/g, '')

      // Strip any manual IN1/IN-1/IN2/IN-2 typed at the start
      const bare = val.replace(/-/g, '')
      val = (bare.startsWith('IN1') || bare.startsWith('IN2')) ? bare.slice(3) : bare

      // Take letter + digit
      const letter = /[A-Z]/.test(val[0] || '') ? val[0] : ''
      const digit  = /[0-9]/.test(val[1] || '') ? val[1] : ''

      // Build
      let formatted = prefixStr
      if (letter) formatted += `${letter}-`
      if (digit)  formatted += digit

      if (formatted !== bakNr.value) bakNr.value = formatted
    })

    
    const fillBakNr = () => {
      if (!bakNr.value) {
        bakNr.value = (status.value === 2 ? 'IN-2-' : 'IN-1-')
      }
    }
    
    //----------------------
    //      FRONTEND
    //----------------------
    function go(){

        //if(leverancier.value) console.log(leverancier.value);

        mainTargets[mainCounter].classList.remove("d-flex");
        mainTargets[mainCounter].classList.add("d-none");
        mainCounter += 1;
        console.log(mainCounter);
        mainTargets[mainCounter].classList.remove("d-none");
        mainTargets[mainCounter].classList.add("d-flex");

        //var idlabel = 
        document.getElementById("ID").focus();
        //console.log(idlabel);
        //console.log(leverancier.value);
    }

    function annuleren(){
        window.location.reload();
    }

    function openConfirmColor(){
        document.getElementById("confirmColor").classList.remove("d-none");
    }

    function closeConfirmColor(){
        document.getElementById("confirmColor").classList.add("d-none");
    }

    async function next(){
        if(counter == 0){
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
    }

    function back(){

        //CURRENT
        targets[counter].classList.remove("d-inline");
        targets[counter].classList.add("d-none");

        counter = counter - 1;

        //PREVIOUS
        targets[counter].classList.remove("d-none");
        targets[counter].classList.add("d-inline");
        targets[counter].focus();

        if(counter == 0){
            document.getElementsByClassName("returnButton")[0].classList.remove("d-flex");
            document.getElementsByClassName("returnButton")[0].classList.add("d-none");
        }

        if(counter == targets.length-1) {
            document.getElementsByClassName("addButton")[0].classList.remove("d-flex");
            document.getElementsByClassName("addButton")[0].classList.add("d-none");

            document.getElementsByClassName("nextButton")[0].classList.remove("d-none")
            document.getElementsByClassName("nextButton")[0].classList.add("d-flex");
        }

        if(counter == targets.length-2) {
            document.getElementsByClassName("addButton")[0].classList.remove("d-flex");
            document.getElementsByClassName("addButton")[0].classList.add("d-none");

            document.getElementsByClassName("nextButton")[0].classList.remove("d-none")
            document.getElementsByClassName("nextButton")[0].classList.add("d-flex");            
        }
        
    }

    function resetTargets(){
        // HIDE LAST PAGE
        targets[counter].classList.remove("d-inline");
        targets[counter].classList.add("d-none");

        counter = 0;

        // SHOW FIRST PAGE
        targets[counter].classList.remove("d-none");
        targets[counter].classList.add("d-inline");

        // RESET ADD BUTTON
        document.getElementsByClassName("addButton")[0].classList.remove("d-flex");
        document.getElementsByClassName("addButton")[0].classList.add("d-none");

        // RESET BACK BUTTON
        document.getElementsByClassName("returnButton")[0].classList.remove("d-flex");
        document.getElementsByClassName("returnButton")[0].classList.add("d-none");

        // RESET NEXT BUTTON
        document.getElementsByClassName("nextButton")[0].classList.remove("d-none");
        document.getElementsByClassName("nextButton")[0].classList.add("d-flex");
    }

    function createDate(){
        var now = new Date();

        var hour = now.getHours();
        var minut = now.getMinutes();
        var time = hour+":"+minut;

        var day = now.getDate();
        var month = now.getMonth()+1;
        var year = now.getFullYear();
        var today = day+"-"+month+"-"+year;


        console.log(time);
        console.log(today);

        return today;
    }

    function checkboxLimit() {
	    var checkboxgroup = document.getElementById('checkboxgroup').getElementsByClassName("colorz");
        //console.log(checkboxgroup);
        
        //Note #2 Change max limit here as necessary
        var limit = 3;
        
	    for (var i = 0; i < checkboxgroup.length; i++) {
	    	checkboxgroup[i].onclick = function() {
	    		var checkedcount = 0;
	    			for (var i = 0; i < checkboxgroup.length; i++) {
	    			checkedcount += (checkboxgroup[i].checked) ? 1 : 0;
	    		}
	    		if (checkedcount > limit) {
	    			//alert("Je kan maximaal " + limit + " kleuren kiezen."); 
                    console.log("brapapapaa");
                    //this.showConfirmboxColors = true;
                    openConfirmColor();
	    			this.checked = false;
                   
	    		}
	    	}
	    }
    }

    function colorCheck(){
        if(colors.value.length >= 0) return true;
        else alert("Je moet een kleur kiezen");
    }

    function statusCheckbox(){
        console.log("laces" + laces.value);
        console.log("soles" + soles.value);
        console.log("paint" + paint.value);
        console.log("glue" + glue.value);

        if(laces.value == true && soles.value == true && paint.value == true && glue.value == true ){
            status.value = 1;
            bakNr.value = "IN-1-";
            statusz = "Cleaning";
            
            leverancier.value = prevLeverancier.value;
        }
        else {
            status.value = 2;
            bakNr.value = "IN-2-"
            statusz = "Repair";
            leverancier.value = 1;
        }
    }
    
    async function saveSneaker(){
        console.log(creator.value);
        console.log("LEVERANCIER: " + leverancier.value)
        if(size.value >= 36) price = 25;
        else price = 20;
        var data = {
            id: id.value,
            colorlabel: labelColor.value,
            date: datum,
            brand: brand.value,
            model: model.value,
            size: size.value,
            colors: colorsToString(),
            supplier: leverancier.value,
            laces: laces.value ? 1 : 0,
            soles: soles.value ? 1 : 0,
            paint: paint.value ? 1 : 0,
            glue: glue.value ? 1 : 0,
            status: 1,
            //verkoop: verkoop,
            //csv: csv,
            creator: creator.value,
            extra: extra.value,
            //shoeLace: shoelace,
            //updatedBy: creator,
            price: price,
            bakNr: bakNr.value,
            //createdAt: '',
            //updatedAt: ''
        };

        console.log(data);

        
        await SneakerService.create(data)
        .then(response => {
            //id = response.data.id;
            resetSneaker();
            resetTargets();
            refuse();
        })
        .catch( error => {
            console.log(error);
        });

    }

    function resetSneaker(){
        id.value = "";
        brand.value = "";
        model.value = "";
        size.value = "";
        colors.value = [];
        extra.value = "";
        bakNr.value = "";
        laces.value = true;
        soles.value = true;
        status.value = 1;
        paint.value = true;
        glue.value = true;
        broken.value = true;
        leverancier.value = chosenLeverancier;
        //statusz = "Cleaning";
    }

    function colorsToString(){
        var colorsString = "";
        for(var x=0;x<colors.value.length;x++){
            colorsString = colorsString + colors.value[x] + " ";
        }

        return colorsString;
    }

    function capitalize(string){
        var firstLetter = string.charAt(0);
        const rest = string.substring(1);

        firstLetter = firstLetter.toUpperCase();

        //console.log(firstLetter+rest);
        return firstLetter+rest;
    }

    function getLeverancierName(id) {
        return leveranciers.value.find(l => l.id === id)?.name ?? "???";
    }

    function getBrands(){
        BrandService.getAll()
        .then( response => { brands = response.data; })
        .catch( err => { console.log(err)})
    }

    function getLeveranciers(){
        LeverancierService.getAll()
        .then( response =>{ leveranciers.value = response.data; } )
        .catch( err => {console.log(err);})
    }

    function getLabelColors(){
        LabelcolorService.getAll()
        .then(response => { labels = response.data;console.log(labels); })
        .catch(err => console.log(err));
    }

    function showPreview(){        
        const form = document.getElementsByClassName("FORM")[0];
        const arrow = document.getElementsByClassName("hideArrow")[0];

        if(showPreviewz.value === true){
            form.classList.remove("col-8", "col-xxl-9");
            form.classList.add("col-12");

            arrow.style.transform = 'rotate(270deg)';
        }else{
            form.classList.remove("col-12");
            form.classList.add("col-8", "col-xxl-9");

            arrow.style.transform = 'rotate(90deg)';
        }
        showPreviewz.value = !showPreviewz.value;
    }

    function showAnnuleren(){
        document.getElementById("confirmAnnuleren").classList.remove("d-none");
    }

    function refuseAnnuleren(){
        document.getElementById("confirmAnnuleren").classList.add("d-none");
    }

    function showConfirmBox(){
        document.getElementById("confirm").classList.remove("d-none");
    }

    function refuse(){
        document.getElementById("confirm").classList.add("d-none");
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

    .hideArrow{
        transition: transform 0.3s ease;
        transform:rotate(90deg)
    }

    .imgSquare{
        max-width: 200px;
        max-height: 200px;
    }

    #loginNaam{
        width: 50vw;
        height: 10vh;
        font-size: 4em;
        max-width: inherit !important;
    }

    #loginPass{
        width: 50vw;
        height: 10vh;
        font-size: 4em;
        max-width: inherit !important;
    }

    .selectDisable {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    .whiteIcons{
        filter: brightness(0) invert(1);
    }

    .blackIcons{
        filter: brightness(0) !important;
    }

    .square{
        width: 100%;
        position: relative;
    }

    .square:after{
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    .colorSquare input[type=checkbox]{

    }


    .colorSquare{
        width: 25% !important;
        position: relative;
    }

    .colorSquare:after{
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    .input{
        max-width: 300px;
    }

    .w-90{
        width: 90% !important;
    }

    #BRANDS #BRANDS:checked,label:has(#brand:checked){
      /*background-color: rgba(0,159,253,0.5);*/
      background-color:blueviolet;
      border: 5px solid var(--gblue) !important;
      border-radius: 25%;
    }

    .preview{
        max-width: 600px;
        z-index: 10;
    }

    .bottom{
        position: absolute !important;
        bottom: 150px;
    }

   input[type=text],select,select option,#SIZE{
    width: 100%;
    max-width: 400px !important;
    height: 66px;
    font-size: 50px;
   }

   input[type=text]:focus{
    outline:none;
   }

   .big{
    font-size: 50px;
   }

   .rota180{
    transform: rotate(180deg);
   }

   .rota0{
    transform: rotate(0deg);
   }

   .small{
    width: 16px;
    height: 16px;
   }

   .smallz{
    width: 22px;
    height: 22px;
   }

   .medium{
    width: 66px;
    height: 66px;
   }

   .h34{
    height: 34px !important;
   }

   .abso{
    position:absolute;
   }
   
  input[type=checkbox]{
    width: 30px !important;
    height: 30px !important;
  }

  .mw-200{
    max-width: 200px;
  }

  .mw-800{
    max-width: 800px;
  }

  [type=radio]{
    position: absolute;
    width: 0;
    height: 0;
  }

  [type=radio] + img{
    cursor: pointer;
  }

  [type=radio]:checked + img, .leverancier:hover{
    background-color: rgba(0,159,253,0.5) !important;
    border: 5px solid rgb(0,159,253) !important;
    border-radius: 0.375rem !important;
  }

  .leverancier{
    font-size: 28px;
    height: 80px;
    border: 5px solid transparent !important;
  }

  #leveranciers{
    height: auto !important;
  }

  .centered{
    display: flex;
    justify-content: center;
    align-items: center;
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
  
  .h-500{
    height: 500px !important;
  }

  .colorSquare{
    max-width: 100px;
    max-height: 100px;
  }

  .fw-1000{
    font-weight: 1000;
  }

  .sneakerPreview .row:not(:nth-child(1)):not(:nth-child(2)) {
    height: 26.39px !important;
  }

  @media (min-width: 1600px) {
    .sneakerPreview{
        margin-left: 25px !important;
    } 

  .sneakerPreview div{
    padding-left: 30px;
    padding-right: 30px;
    font-size: 26px;
  }

  .smallz{
    width: 40px !important;
    height: 40px !important;
  }

  .navToevoegen div{
    width: 50px !important;
    height: 50px !important;
  }
  

  .full .row .col-6 p{
    height: 30vh;
    font-size: 25px;
    font-weight: bold;
  }

  .full button{
    font-size: 25px;
    font-weight: bold;
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .rect{
    width: 120px !important;
    height: 120px !important;
  }

}

</style>