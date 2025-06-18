<template>
    <div class="settings row w-100 m-0 p-0 text-center">
      <div class="toggleButton">
        <div class="row m-0 p-0 vh-5"></div>
        <div class="row vh-5 pb-3 w-100 sticky">
          <div class="col-4 col-xxl-3 mx-auto">
            <button @click="toggleContent(1)" id="toggleButton" class="w-100 h-100 px-2 mx-auto rounded bg-green hover">Sneakers</button>
          </div>
          <div class="col-4 col-xxl-3 mx-auto">
            <button @click="toggleContent(2)" id="csvButton" class="w-100 h-100 px-2 mx-auto rounded bg-green hover">CSV</button>
          </div>
          <div class="col-4 col-xxl-3 mx-auto">
            <button @click="toggleContent(3)" id="settingsButton" class="w-100 h-100 px-2 mx-auto rounded bg-green hover">Settings</button>
          </div>
        </div>
      </div>
      <div id="main" class="d-block">
        <div class="row text-white">
        <!-- INPUT LEVERANCIER -->
        <div class="col-4 col-xxl-3 px-2 mb-3 mx-auto">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">+ LEVERANCIER</div>
          </div>
          <div class="w-100 text-center valign rounded-bottom bg-blue">
            <div class="w-100 m-0 p-0 mx-auto">
              <input type="text" class="text-center mb-2 w-90" placeholder="Leverancier" v-model="leverancierName"><br>
              <input type="text" class="visibility mb-2">
              <!--<input type="button" id="loadFileXml" value="+ IMG" @click="document.getElementById('imgLeverancier').click();" class="mx-auto mb-2 rounded" />-->
              <input type="file" id="imgLeverancier" class="mx-auto d-none"><br>
              <button class="w-100 mt-2 py-3 rounded-bottom bg-green hover" @click="addLeverancier">OK</button>
            </div>
          </div>
        </div>
        <div class="full m-0 p-0" v-if="leverancierCheck">
          <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
            <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded" id="confirm">
                <p class="my-5">Ben je zeker dat je <span class="text-yellow">{{  }}</span> wil verwijderen?</p>
                <div class="row m-0 p-0">
                  <div class="col-6 m-0 p-0">
                    <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="deleteWerknemer(werknemerId)">JA</button> 
                  </div>
                  <div class="col-6 m-0 p-0">
                    <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="refuseDeleteWerknemer">NEE</button>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <!-- INPUT BRAND -->
        <div class="col-4 col-xxl-3 px-2 mb-3 mx-auto">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">+ BRAND</div>
          </div>
          <div class="w-100 text-center valign rounded-bottom bg-blue">
            <div class="w-100 m-0 p-0 mx-auto">
              <input type="text" id="brandName" class="text-center mb-2 w-90" placeholder="Merk"
                v-model="brandName"
              ><br>
              <input type="button" id="brandButton" class="w-90 mx-auto mb-2 roundedz" value="+ Foto" 
                    @click="triggerFileInput"
                     />
              <input  @change="handleImageUpload" type="file" id="imgBrand" class="mx-auto d-none"><br>
              <button class="w-100 mt-2 py-3 rounded-bottom bg-green hover" @click="addBrand">OK</button>
            </div>
          </div>
        </div>

        <!-- INPUT WERKNEMER -->
        <div class="col-4 col-xxl-3 px-2 mb-3 mx-auto">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">+ WERKNEMER</div>
          </div>
          <div class="w-100 text-center valign rounded-bottom bg-blue">
            <div class="w-100 m-0 p-0 mx-auto">
              <input 
                type="text" 
                class="text-center mb-2 w-90" 
                v-model="werknemerName" 
                placeholder="Werknemer">
              <br>
              <input 
                type="password" 
                class="text-center mb-2 w-90" 
                v-model="werknemerPass" 
                placeholder="Wachtwoord">
              <br>
              <!--<div class="error" v-html="error"></div>-->
              <button class="w-100 mt-2 py-3 rounded-bottom bg-green hover" @click="addWerknemer">OK</button>
            </div>
          </div>
        </div>
        <div class="full m-0 p-0" v-if="werknemerCheck">
          <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
            <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded" id="confirm">
                <p class="my-5">Ben je zeker dat je <span class="text-yellow">{{  }}</span> wil verwijderen?</p>
                <div class="row m-0 p-0">
                  <div class="col-6 m-0 p-0">
                    <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="deleteWerknemer(werknemerId)">JA</button> 
                  </div>
                  <div class="col-6 m-0 p-0">
                    <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="refuseDeleteWerknemer">NEE</button>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <!-- INPUT LABELCOLOR -->
        <div class="col-4 col-xxl-3 px-2 mb-3 mx-auto">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">+ LABELKLEUR</div>
          </div>
          <div class="w-100 text-center valign rounded-bottom bg-blue">
            <div class="w-100 m-0 p-0 mx-auto">
              <input 
                id="labelName"
                type="text"  
                class="text-center mb-2 w-90"
                v-model="labelcolorName"
                placeholder="KLEURNAAM"><br>
              <input 
                id="labelCode"
                type="text" 
                class="text-center mb-2 w-90"
                v-model="labelcolorCode"
                placeholder="#ffffff"><br>
              <button class="w-100 mt-2 py-3 rounded-bottom bg-green hover" @click="addLabelColor">OK</button>
            </div>
          </div>
        </div>
        </div>
        <div class="row text-light">
        
        <!-- LEVERANCIERS -->
        <div class="col-4 col-xxl-3 px-2 mb-3 mx-auto">
          <div class="mb-3">
            <div class="w-100 valign rounded-top bg-blue text-white vh-10">
              <div class="mx-auto subTitle">LEVERANCIERS</div>
            </div>
            <div class="row m-0 p-0 px-3 pb-3 text-center rounded-bottom bg-blue">
              <Leverancier v-for="l in LeveranciersList"
                @delete="confirmDeleteLeverancier(l.id,l.name)"
                :name="l.name"
                :isActive="l.isActive"
              ></Leverancier>
              <!-- DELETE LEVERANCIER -->
              <div class="full m-0 p-0" v-if="leverancierId > 0">
                <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
                    <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded" id="confirm">
                        <p class="my-5">Ben je zeker dat je <span class="text-yellow">{{ leverancierName }}</span> wil verwijderen?</p>
                        <div class="row m-0 p-0">
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="deleteLeverancier(leverancierId)">JA</button> 
                          </div>
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="refuseDeleteLeverancier">NEE</button>
                          </div>
                        </div>
                        
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- BRANDS -->
        <div class="col-4 col-xxl-3 mb-3 px-2 mb-3 mx-auto">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">BRANDS</div>
          </div>
          <div class="row m-0 p-0 px-3 pb-3 text-center rounded-bottom bg-blue">
            <Brand v-for="l in BrandsList"
              :name="l.name"
              :img="l.img"
            ></Brand>
          </div>
        </div>

        <!-- WERKNEMERS -->
        <div class="col-4 col-xxl-3 px-2 mb-3 mx-auto">
          <div class="mb-3">
            <div class="w-100 valign rounded-top bg-blue text-white vh-10">
              <div class="mx-auto subTitle">WERKNEMERS</div>
            </div>
            <div class="row m-0 p-0 pb-3 text-center rounded-bottom bg-blue">
                <Werknemer v-for="l in WerknemersList"
                  :id="l.id"
                  :name="l.name"
                  :pass="l.pass"
                  :isActive="l.isActive"
                  @activate="confirmDeleteWerknemer(l.id,l.name)"
                  @update="confirmUpdateWerknemer(l.id,l.name,l.pass)"
                
                ></Werknemer>
              <!-- DELETE WERKNEMER -->
              <div class="full m-0 p-0" v-if="werknemerId > 0">
                <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
                    <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded" id="confirm">
                        <p class="my-5">Ben je zeker dat je <span class="text-yellow">{{ werknemerName }}</span> wil verwijderen?</p>
                        <div class="row m-0 p-0">
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="deleteWerknemer(werknemerId)">JA</button> 
                          </div>
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="refuseDeleteWerknemer">NEE</button>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
              <!-- UPDATE WERKNEMER-->
              <div class="full m-0 p-0" v-if="updateId > 0">
                <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
                    <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded" id="updateWerknemer">
                          <p class="my-5">Wil je <span class="text-yellow">{{ updateId }}</span> wijzigen? </p>
                          <!--<span>{{ updateId }}</span>-->
                          <div><input class="d-block mx-auto text-center" v-model="updateName"></div>
                          <div><input class="text-center" v-model="updatePass"></div>
                          <div class="row m-0 p-0 mt-5">
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="updateWerknemer()">JA</button> 
                          </div>
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="refuseUpdateWerknemer">NEE</button>
                          </div>
                        </div>
                        
                        
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- LABELKLEUR -->
        <div class="col-4 col-xxl-3 mb-3 px-2 mb-3 mx-auto">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">LABELKLEUREN</div>
          </div>
          <div class="row m-0 p-0 px-3 pb-3 text-center rounded-bottom bg-blue">
            <Labelcolor v-for="l in LabelcolorList"
              :id="l.id"
              :name="l.name"
              :colorCode="l.colorCode"
              :isActive="l.isActive"
            ></Labelcolor>
          </div>
        </div>

        </div>
        <div class="row text-light">
        <!-- HISTORY -->
        <div class="col-4 col-xxl-3 px-2 mb-3 mx-auto d-none">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">SEE HISTORY</div>
          </div>
          <div class="w-100 text-center vh-15 borderz border-blue rounded-bottom bg-blue">
            <textarea class="w-90 h-90 rounded"></textarea>
          </div>
        </div>
        <!-- EXPORT CSV -->
        <div class="col-4 col-xxl-3 px-2 mb-3 mx-auto d-none">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">EXPORT CSV</div>
          </div>
          <div class="w-100 text-center vh-15 borderz border-blue rounded-bottom bg-blue">
            <div>xxx</div>
          </div>
        </div>
        </div>
      </div>
      <div id="sneaks" class="d-none m-0 p-0">
        <div class="row m-0 p-0 text-light">
          <ShowSneakers></ShowSneakers>
        </div>
      </div>
      <div id="csv" class="d-none m-0 p-0">
        <div class="row m-0 p-0 text-light">
          <CsvSneakers></CsvSneakers>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Leverancier from '@/components/LeverancierSettings.vue';
  import LeverancierService from '@/services/LeverancierService';

  import Brand from '@/components/BrandSettings.vue';
  import Brands from '@/assets/brands.json';
  import BrandService from '@/services/BrandService';

  import Werknemer from '@/components/Werknemer.vue';
  import WerknemerService from '@/services/WerknemerService';

  import Labelcolor from '@/components/Labelcolor.vue';
  import LabelcolorList from '@/assets/labelColors.json';
  import LabelcolorService from '@/services/LabelcolorService';

  import ShowSneakers from './ShowSneakers.vue';
  import CsvSneakers from './Csv.vue';

  import { ref } from "vue"
  import ConfirmBox from '@/components/ConfirmBox.vue';
  import Csv from './Csv.vue';
  
  import axios from 'axios';

    export default{
      data() {
        return {
          user: "",
          pass: "",
          error: null,

          LeveranciersList: [],
          WerknemersList: [],
          LabelcolorList: [],
          
          werknemerCheck: false,
          werknemerId: null,
          werknemerName: '',
          werknemerPass: '',

          updateId: null,
          updateName: '',
          updatePass: '',

          leverancierCheck: false,
          leverancierId: null,
          leverancierName: '',

          labelcolorCheck: false,
          labelcolorId: null,
          labelcolorName: '',
          labelcolorCode: '',

          selectedFile: null,

          brandCheck: false,
          brandId: null,
          brandName: '',
      
        }
      },
      methods: {
        toggleContent(nr){
          var main = document.getElementById("main").classList;
          var sneakers = document.getElementById("sneaks").classList;
          var csv = document.getElementById("csv").classList;
          //var btnSneakers = document.getElementById("toggleButton");
          //var btnCsv = document.getElementById("toggleButton2");
          //var btnSettings = document.getElementById("toggleButton3");

          switch(nr){
            case 1:
            main.remove("d-block");
            main.add("d-none");

            csv.remove("d-block");
            csv.add("d-none");
            
            sneakers.remove("d-none");
            sneakers.add("d-block");
            break;
            case 2:
            main.remove("d-block");
            main.add("d-none");

            csv.remove("d-none");
            csv.add("d-block");
            
            sneakers.remove("d-block");
            sneakers.add("d-none");
            break;
            case 3:
            main.remove("d-none");
            main.add("d-block");

            csv.remove("d-block");
            csv.add("d-none");

            sneakers.remove("d-block");
            sneakers.add("d-none");
            break;
          }
        },
        handleImageUpload(event) {
          this.selectedFile = event.target.files[0];
          console.log(this.selectedFile);
        },
        triggerFileInput() {
          document.getElementById("imgBrand").click();
        },
        getLeveranciers(){
            LeverancierService.getAll()
                .then(response => {
                  this.LeveranciersList = response.data;
                })
                .catch(error => {
                    error = "Leveranciers niet gevonden";
                    console.error(error);
                    alert(error);
               })
        },
        addLeverancier(){
          var data = {
            name: this.leverancierName,
            isActive: 1
          }

          LeverancierService.create(data)
          .then(response => {
            console.log(response);
            this.getLeveranciers();
          })
          .catch( error => {
              console.log(error);
          });
        },
        confirmDeleteLeverancier(id,name){
          this.leverancierId = id
          this.leverancierName = name
        },
        refuseDeleteLeverancier(){
          this.leverancierId = null
          this.leverancierName = ''
        },
        deleteLeverancier(id){
          const updateData = { isActive: 0 };
          LeverancierService.update(id,updateData)
            .then(() => {
              this.getLeveranciers();
              this.refuseDeleteLeverancier();
            })
            .catch(error=>{
              console.error("Update failed", error);
            })
        },
        getBrands(){
          BrandService.getAll()
          .then(response => {
            this.BrandsList = response.data;
            console.log(this.BrandsList);
          })
        },
        async addBrand(){

          var data = {
            name: this.brandName,
            img: this.selectedFile.name
          }

          if (!this.selectedFile) return alert("No image selected");

          const form = new FormData();
                form.append("image", this.selectedFile);
                form.append("brandName", this.brandName);
              //form.append("image",form.value.media);

      
          BrandService.create(data)
          .then(response => {

          })
          try{
            //await axios.post("http:localhost:8080/api/upload-image", form , {
            await axios.post("http://localhost:8080/api/uploadBrand", form , {
              headers:{"Content-Type": "multipart/form-data"},
            });
            console.log("✅ Upload successful");
            alert("Image uploaded!");
          } catch (error) {
            console.error("❌ Upload failed:", error);
            alert("Upload failed!");
          }
        },
        getWerknemers(){
          WerknemerService.getAll()
            .then(response => {
              this.WerknemersList = response.data;
              console.log(this.WerknemersList);
            })
            .catch(error => {
              error = "Werknemers niet gevonden";
              console.error(error);
              alert(error);
            })
        },
        addWerknemer(){
          var data = {
            name: this.werknemerName,
            pass: this.werknemerPass
          }
          WerknemerService.create(data)
            .then(response => {
                this.getWerknemers();
            })
            .catch( error => {
                console.log(error);
            });
        },
        confirmDeleteWerknemer(id,name){
          this.werknemerId = id
          this.werknemerName = name
          this.ShowWerknemer = true
        },
        refuseDeleteWerknemer(){
          this.werknemerId = null
          this.werknemerName = ''
          this.showWerknemer = false
        },
        deleteWerknemer(id){
          const updateData = { isActive: 0 };
          WerknemerService.update(id,updateData)
            .then(()=> {
              this.getWerknemers();
              this.refuseDeleteWerknemer();
            })
            .catch(error=>{
              console.error("Update failed" , error);
            })
        },
        confirmUpdateWerknemer(id,name,pass){
           this.updateId = id
           this.updateName = name
           this.updatePass = pass
        },
        refuseUpdateWerknemer(){
          this.updateId = null
          this.updateName = ''
          this.updatePass = ''
        },
        updateWerknemer(){
          const updateData = { name: this.updateName , pass: this.updatePass };
          WerknemerService.update(this.updateId,updateData)
            .then(()=> {
              this.getWerknemers();
              this.updateId = null,
              this.updateName = '',
              this.updatePass = ''
          })
            .catch(error=>{
              console.error("Update failed" , error);
            })
        },
        getLabelColors(){
          LabelcolorService.getAll()
          .then(response => {
            console.log(response);
            this.LabelcolorList = response.data;
            console.log("LABELCOLORS LIST");
            console.log(this.LabelcolorList);
          })
          .catch(error => {
            error = " LabelColors niet gevonden";
            console.error(error);
            alert(error);
          })
        },
        addLabelColor(){
          var data = {
            name: this.labelcolorName,
            code: this.labelcolorCode
          }

          LabelcolorService.create(data)
          .then(response => {
            this.getLabelColors();
            this.resetInputLabel();
          })
        },
        resetInputLabel(){
          //document.getElementById("labelName").value = "";
          //document.getElementById("labelCode").value = "";
          this.labelcolorName = "";
          this.labelcolorCode = "";
        }
      },
      mounted () {
        this.getLeveranciers();
        this.getWerknemers();
        this.getLabelColors();
        this.getBrands();
      },
      computed: {/*
        LeveranciersList(){
          return Leveranciers
        },*/
        BrandsList(){
          return Brands;
        },/*
        WerknemersList(){
          return Werknemers
        }        */
      },
      components: {
        Leverancier,
        Brand,
        Werknemer,
        Labelcolor,
        ShowSneakers,
        CsvSneakers
      }
    }
  </script>

  <style scoped>
    .full{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(247,247,247,0.5);
        z-index: 99999;
    }

    .sticky{
      position: fixed !important;
      background-color: var(--gWhite);
      top: 10vh !important;
      width: 100%;
      height: 5vh;
      overflow: hidden;
      
    }

    .settings{
      position: absolute;
      top: 10vh;
      left: 0;
      /*overflow-y: scroll !important;*/
    }

    [type=file]{
      color: transparent;
      width: 168px;
    }

    .vh-10{
      min-height: 120px !important;
    }

    input{
      border-radius: 25rem;
      max-width: 800px !important;
      min-width: 200px !important;
    }

    .error{
      color:var(--gpurple);
    }

    img{
      border: 0px solid transparent;
      border-radius: 25rem !important;
    }

    .visibility{
      visibility: hidden;
    }

    .hover{
      font-weight: bold;
    }

    .hover:hover{
      color: var(--gWhite);
      filter: brightness(125%);
    }

    #flip{
      transform: scaleX(-1);
    }

  </style>
  