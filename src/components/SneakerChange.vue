<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
import KleurPreview from './KleurPreview.vue';
import Brand from './BrandList.vue';
import Leverancier from './LeverancierListItem.vue';
import Werknemer from './WerknemerList.vue';
import Label from '@/components/Label.vue';
import LabelcolorService from '@/services/LabelcolorService';

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
            _extra: this.extra, 

            
            labels: [],
            labelColor: "",

            _colors: [],
            maxColors: 3,

            displayLabelColor: false,
            displayColor: false,
            
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
            },
            saveSneaker(){
                console.log(creator.value);
                console.log("LEVERANCIER: " + leverancier.value)
                //if(size.value >= 36) price = 25;
                //else price = 20;
                var data = {
                    id: _id.value,
                    colorlabel: this._colorlabel,
                    date: datum,
                    brand: brand.value,
                    model: model.value,
                    size: size.value,
                    colors: this.serializeColors(this._colors),//colorsToString(),
                    supplier: leverancier.value,
                    laces: laces.value ? 1 : 0,
                    soles: soles.value ? 1 : 0,
                    paint: paint.value ? 1 : 0,
                    glue: glue.value ? 1 : 0,
                    status: this.getStatusName,
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

                
                SneakerService.create(data)
                .then(response => {
                    //id = response.data.id;
                    resetSneaker();
                    resetTargets();
                    refuse();
                })
                .catch( error => {
                    console.log(error);
                });

            },
            showConfirmSave(){
                document.getElementById("confirm").classList.remove("d-none");
            },
            refuse(){
                document.getElementById("confirm").classList.add("d-none");
            },
            formatBakNr(e) {
              // Uppercase + strip everything except A–Z and 0–9
              let raw = (e.target.value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');

              // Default: show what they typed (uppercased) until we recognize IN/OUT
              let formatted = raw;

              // Detect prefix
              let prefix = '';
              if (raw.startsWith('IN')) {
                prefix = 'IN';
                raw = raw.slice(2);
              } else if (raw.startsWith('OUT')) {
                prefix = 'OUT';
                raw = raw.slice(3);
              }

              if (prefix) {
                // Pick next tokens in order: digit, letter, digit (first of each)
                let d1 = '', L = '', d2 = '';
                for (const c of raw) {
                  if (!d1 && /[0-9]/.test(c)) { d1 = c; continue; }
                  if (!L  && /[A-Z]/.test(c)) { L  = c; continue; }
                  if (!d2 && /[0-9]/.test(c)) { d2 = c; break; }
                }

                // Build with auto dashes at each stage
                formatted = prefix + '-'
                          + (d1 ? d1 + '-' : '')
                          + (L  ? L  + '-' : '')
                          + (d2 ? d2 : '');
              }

              this._bakNr = formatted;     // update your model
              e.target.value = formatted;  // keep the input in sync
            },
            showWerknemers(){
                console.log(this.werknemerList);
            },
            capWords(s) {
              s = s || '';
              // If you also want the rest lowercased, uncomment the next line:
              // s = s.toLowerCase();
              return s.replace(/(^|\s)([a-zA-ZÀ-ÖØ-öø-ÿ])/g, (_, p1, p2) => p1 + p2.toUpperCase());
            },
            async getLabelColors() {
              try {
                const { data } = await LabelcolorService.getAll()   // axios call
                // pas aan als jouw API andere structuur heeft:
                this.labels = Array.isArray(data) ? data : (data?.rows || [])
              } 
              catch (e) {
                console.error(e)
                this.labels = []
              }
            },
            checkboxLimit() {
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
            },
            parseColors(val) {
              if (!val) return [];
              if (Array.isArray(val)) return val;
              const str = String(val).trim();
              // ondersteunt JSON array, komma- of spatie-gescheiden
              if (str.startsWith('[')) {
                try { return JSON.parse(str); } catch { /* fallthrough */ }
              }
              return str.split(/[\s,]+/).filter(Boolean);
            },
            serializeColors(arr) {
              return Array.isArray(arr) ? arr.join(' ') : '';
            },       
        },
        inject: ["sneakers","leveranciers","brands","werknemers"],
        computed:{
            stringId(){
                return String(this.id).padStart(4, '0')
            },
            colorArray() {
                return this._colors; // <-- direct de interne array gebruiken
                /*
                try {
                  // Als colors een JSON array string is zoals '["rood","blauw"]'
                  if (this.colors.startsWith('[')) {
                    return JSON.parse(this.colors);
                  }
                  // Als het een gewone komma-gescheiden string is
                  return this.colors.split(',').map(c => c.trim());
                } catch (e) {
                  return [];
                }*/
            },
            brandList() {
                return typeof this.brands === 'function' ? this.brands() : this.brands;
            },
            extra(){
                return this.extra
            },
            leverancierList(){
                return typeof this.leveranciers === 'function' ? this.leveranciers() : this.leveranciers;
            },
            werknemerList(){
                return typeof this.werknemers === 'function' ? this.werknemers() : this.werknemers;
            }
        },
        watch:{
            model: {
              immediate: true,
              handler(n) {
                this._model = this.capWords(n);
              }
            },
            // Enforce rule while typing
            _model(n) {
              const capped = this.capWords(n);
              if (n !== capped) this._model = capped;
            },
            colors: {
              immediate: true,
              handler(v) {
                this._colors = this.parseColors(v);
              }
            },
            // optioneel: sluit modal zodra er 3 zijn
            _colors(newVal) {
              if (newVal.length >= this.maxColors) {
                // bijv. modal dichtklappen:
                // this.displayColor = false
              }
            }
        },
        mounted(){
            this.getLabelColors();
        },
        components: {
            KleurPreview,
            Brand,
            Leverancier,
            Werknemer,
            Label
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
                    <!--<span class="px-3 py-2 h3 fw-bold rounded cardSize" :class="colorlabel">{{ stringId }}</span>-->
                    <input class="px-3 py-2 h3 fw-bold rounded cardSize text-center" :class="_colorlabel" height="80px" :value="stringId">
                    <div @click="displayLabelColor = !displayLabelColor" class="d-inline-block rounded grow" :class="_colorlabel">
                        <img  class="flip " src="@/img/downarrow.svg"/>
                    </div>
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
                    <div id="nextButton" class="nextButton success grow boxShadow-blue square valign text-center h-100">
                        <img @click="showConfirmSave" class="h-100 pointer mx-auto selectDisable success" src="../img/next.svg" title="Je kan ook [ENTER] duwen.">
                    </div>
                </div>
                <hr class="w-100 mx-auto my-2 opacity-25">
                
                <div class="row w-100 m-0 p-0 pt-2">
                <div class="col-6 m-0 p-0">
                    <div class="sizeRow row m-0 p-0">
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
                    <hr class="w-95 mx-auto my-2 opacity-25">
                </div>
                <div class="col-6 m-0 p-0">
                    <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/tag.svg"></div>
                    <div class="col-9 text-end pe-5"><input class="w-50 float-end text-end" :value="_model" @input="_model = capWords($event.target.value)"></div>
                    </div>
                    <hr class="w-95 mx-auto my-2 opacity-25">
                </div>
                
                <div class="col-15 valign ps-5"></div>
                </div>
                
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
                            @click="displayColor = !displayColor"
                        /> 
                    </div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/laces.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center text-success" @click="_laces = !_laces" v-if="_laces"><span class="pointer">✔</span></div>
                    <div class="col-9 text-end pe-5 align-content-center text-danger" @click="_laces = !_laces"v-else><span class="pointer">❌</span></div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/soles.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center text-success" @click="_soles = !_soles" v-if="_soles"><span class="pointer">✔</span></div>
                    <div class="col-9 text-end pe-5 align-content-center text-danger" @click="_soles = !_soles" v-else><span class="pointer">❌</span></div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/paint.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center text-success" @click="_paint = !_paint" v-if="_paint"><span class="pointer">✔</span></div>
                    <div class="col-9 text-end pe-5 align-content-center text-danger" @click="_paint = !_paint" v-else><span class="pointer">❌</span></div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/broken.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center text-success" @click="_glue = !_glue" v-if="_glue"><span class="pointer">✔</span></div>
                    <div class="col-9 text-end pe-5 align-content-center text-danger" @click="_glue = !_glue" v-else><span class="pointer">❌</span></div>
                </div>
                </div>
                <div class="col-6 border-light m-0 p-0">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/baknr.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center">
                        <input class="w-50 text-end" placeholder="BAKNUMMER" :value="_bakNr" @input="formatBakNr($event)">
                    </div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/warning.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center">
                        <!-- INJECT STATUS HIER -->
                         <select class="float-end w-50 text-end" v-model="_status">
                            <option class="fst-italic text-secondary" :value="status">{{ status }}</option>
                            <option value="Cleaning">(1) Cleaning</option>
                            <option value="Repair">(2) Repair</option>
                            <option value="Stock">(3) Stock</option>
                            <option value="Verkoop">(4) Verkoop</option>
                            <option value="Verkocht">(5) Verkocht</option>
                            <option value="CSV">(6) CSV</option>
                         </select>
                    </div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/extra.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center">
                        <input class="w-50 text-end" placeholder="EXTRA" :value="_extra" @input="_extra = ($event.target.value || '').toUpperCase()">
                    </div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/delivery.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center">
                        <select class="float-end w-50 text-end" v-model="_supplier">
                            <option class="fst-italic text-secondary" :value="_supplier">{{ _supplier }}</option>
                            <Leverancier v-for="l in leverancierList"
                                :key="l.id"
                                :id="l.id"
                                :name="l.name"
                            >
                            </Leverancier>
                        </select>
                    </div>
                </div>
                <hr class="w-95 mx-auto my-2 opacity-25">
                <div class="sizeRow row m-0 p-0">
                    <div class="col-3 valign ps-5"><img class="medz whiteIcons" src="@/img/login.svg"></div>
                    <div class="col-9 text-end pe-5 align-content-center">
                        <select class="float-end w-50 text-end" v-model="_creator" @click="showWerknemers">
                            <option class="fst-italic text-secondary" :value="_creator">{{ _creator }}</option>
                            <Werknemer v-for="w in werknemerList"
                                :key="w.id"
                                :id="w.id"
                                :name="w.name"
                                :isActive="w.isActive"
                            >
                            </Werknemer>
                        </select>
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

    <div class="full m-0 p-0" v-if="displayColor" id="confirm">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">

            <div class="row w-100 mw-800 h-500 mx-auto" id="checkboxgroup" @click="checkboxLimit">
                <div class="row m-0 p-0">
                <div class="col m-1 valign mx-auto rounded colorSquare red"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer red" value="rood" v-model="_colors"></div></div>
                <div class="col m-1 valign mx-auto rounded colorSquare green"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer green" value="groen" v-model="_colors"></div></div>
                <div class="col m-1 valign mx-auto rounded colorSquare blue"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer blue" value="blauw" v-model="_colors"></div></div>
                <div class="col m-1 valign mx-auto rounded colorSquare yellow"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer yellow" value="geel" v-model="_colors"></div></div>
                </div>
                <div class="row m-0 p-0">
                <div class="col m-1 valign mx-auto rounded colorSquare pink"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer pink" id="xx" value="roos" v-model="_colors"></div></div>
                <div class="col m-1 valign mx-auto rounded colorSquare purple"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer purple" value="paars" v-model="_colors"></div></div>
                <div class="col m-1 valign mx-auto rounded colorSquare brown"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer brown" value="bruin" v-model="_colors"></div></div>
                <div class="col m-1 valign mx-auto rounded colorSquare orange"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer orange" value="oranje" v-model="_colors"></div></div>
                </div>
                <div class="row m-0 p-0">
                <div class="col m-1 valign mx-auto rounded colorSquare grey"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer grey" value="grijs" v-model="_colors"></div></div>
                <div class="col m-1 valign mx-auto rounded colorSquare black"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer black" value="zwart" v-model="_colors"></div></div>
                <div class="col m-1 valign mx-auto rounded colorSquare white"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer white" value="wit" v-model="_colors"></div></div>
                <div class="col m-1 valign mx-auto rounded colorSquare beige"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer beige" value="beige" v-model="_colors"></div></div>
                
                </div>
                <div class="row m-0 p-0">
                    <div class="col-3 m-1 valign mx-auto rounded colorSquare goud"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer goud" value="goud" v-model="_colors"></div></div>
                    <div class="col-3 m-1 valign mx-auto rounded colorSquare zilver"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer zilver" value="zilver" v-model="_colors"></div></div>
                    <div class="col-3 m-1 valign mx-auto rounded colorSquare bronze"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer bronze" value="bronze" v-model="_colors"></div></div>
                    <div class="col-3 m-1 valign mx-auto rounded colorSquare multi"><div class="mx-auto"><input type="checkbox" class="colorz growz pointer multi" value="multi" v-model="_colors"></div></div>
                </div>
            </div>

            <div class="row m-0 p-0">
              <div class="col-12 m-0 p-0">
                <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="displayColor = !displayColor">JA</button> 
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="full m-0 p-0" v-if="displayLabelColor" id="confirmLabelColor">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
              <div class="row mw-800 mx-auto valign justify-content-center">
                  <div id="IDLABEL" class="row w-100" @keyup.enter="go()">
                      <div class="row mt-3 mx-auto mw-800">
                          <h1 class="text-center text-light fw-bold mb-3">Labelkleur</h1>
                          <Label v-for="labelcolor in labels"
                            :name="labelcolor.name"
                            :isActive="labelcolor.isActive"
                            class="mx-auto text-center text-dark growz"
                            v-model="_colorlabel"
                            @change="go()"
                          ></Label>
                      </div>
                  </div>
              </div>
              <div class="row m-0 p-0">
                <div class="col-12 m-0 p-0">
                  <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="displayLabelColor = !displayLabelColor">JA</button> 
                </div>
              </div>
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

    .flip{
        transform:rotate(90deg)
    }

    .full{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(247,247,247,0.5);
    }

    input,select{
        border-radius: 0.5rem !important;
        height: 30px;
    }

    .cardSize{
        font-size: 3rem;
        width: 33%;
        height: 80px !important;
    }

    .rect{
        width: 10% !important;
        height: 10% !important;
    }
    
    .medz{
        width: 2rem;
        height: 2rem;
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