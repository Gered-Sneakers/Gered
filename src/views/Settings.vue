<template>
    <div class="settings row m-0 p-0 text-center">
      <div class="row text-white">
        <!-- INPUT LEVERANCIER -->
        <div class="col-4 px-2 mt-3 mx-auto">
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
        <div class="col-4 px-2 mt-3 mx-auto">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">+ BRAND</div>
          </div>
          <div class="w-100 text-center valign rounded-bottom bg-blue">
            <div class="w-100 m-0 p-0 mx-auto">
              <input type="text" id="brandName" class="text-center mb-2 w-90" placeholder="BRAND"><br>
              <input type="button" id="brandButton" class="w-90 mx-auto mb-2 roundedz" value="+ IMG" 
                    @click="addBrandImg"  />
              <input type="file" id="imgBrand" class="mx-auto d-none"><br>
              <button class="w-100 mt-2 py-3 rounded-bottom bg-green hover" @click="addBrand">OK</button>
            </div>
          </div>
        </div>

        <div class="col-4 px-2 mt-3 mx-auto d-none">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">+ LABELCOLOR</div>
          </div>
          <div class="w-100 text-center vh-15 valign rounded-bottom bg-blue">
            <div class="mx-auto">
              <input type="text" class="text-center mb-2 w-90" placeholder="COLORNAME"><br>
              <input type="text" class="text-center mb-2 w-90"placeholder="#ffffff"><br>
              <button class="mb-2 rounded grow">OK</button>
            </div>
          </div>
        </div>
        <!-- INPUT WERKNEMER -->
        <div class="col-4 px-2 mt-3 mx-auto">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">+ WERKNEMER</div>
          </div>
          <div class="w-100 text-center valign rounded-bottom bg-blue">
            <div class="w-100 m-0 p-0 mx-auto">
              <input 
                type="text" 
                class="text-center mb-2 w-90" 
                v-model="werknemerName" 
                placeholder="werknemer">
              <br>
              <input 
                type="password" 
                class="text-center mb-2 w-90" 
                v-model="werknemerPass" 
                placeholder="password">
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

        <!-- HISTORY -->
        <div class="col-4 px-2 mt-3 mx-auto d-none">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">SEE HISTORY</div>
          </div>
          <div class="w-100 text-center vh-15 borderz border-blue rounded-bottom bg-blue">
            <textarea class="w-90 h-90 rounded"></textarea>
          </div>
        </div>
        <!-- EXPORT CSV -->
        <div class="col-4 px-2 mt-3 mx-auto d-none">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">EXPORT CSV</div>
          </div>
          <div class="w-100 text-center vh-15 borderz border-blue rounded-bottom bg-blue">
            <div>xxx</div>
          </div>
        </div>
        <!-- WERKNEMERS & LEVERANCIERS -->
        <div class="col-6 col-xxl-4 px-2 mt-3 mx-auto">
          <!-- WERKNEMERS -->
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
          <!-- LEVERANCIERS -->
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
        <div class="col-6 col-xxl-4 mb-3 px-2 mt-3 mx-auto">
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

  import { ref } from "vue"
  import ConfirmBox from '@/components/ConfirmBox.vue';

    export default{
      data() {
        return {
          user: "",
          pass: "",
          error: null,

          LeveranciersList: [],
          WerknemersList: [],
          
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


        }
      },
      methods: {
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
        addBrand(){
          const imageInput = document.getElementById('imgBrand');
          const file = imageInput.files[0];
          console.log(file);
        },
        async addBrandImg(){
          document.getElementById("imgBrand").click();

          const form = new FormData();
                form.append("image",form.value.media);

          try{
            const response = await axios.post("http:localhost:8080/api/upload-image", form , {
              headers:{
                "Content-Type": "multipart/form-data",
              },
            });
            console.log("✅ Upload successful:", response.data);
            alert("Image uploaded!");
          } catch (error) {
            console.error("❌ Upload failed:", error);
            alert("Upload failed!");
          }

          const imgSrc= ref();
        }
      },
      watch: {
      },
      mounted () {
        this.getLeveranciers();
        this.getWerknemers();
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
        Werknemer
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

    .blackIcons{
        filter: brightness(0) !important;
    }

  </style>
  