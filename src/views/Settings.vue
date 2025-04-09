<template>
    <div class="settings row m-0 p-0 text-center bg-Gered">
      <div class="row text-white">
        
        <div class="col-4 px-2 mt-3 mx-auto">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">ADD LEVERANCIER</div>
          </div>
          <div class="w-100 text-center vh-15 valign borderz border-blue rounded-bottom bg-blue">
            <div class="mx-auto">
              <input type="text" class="text-center mb-2 w-90" placeholder="Leverancier"><br>
              <!--<input type="button" id="loadFileXml" value="ADD IMG" @click="document.getElementById('imgLeverancier').click();" class="mx-auto mb-2 rounded" />-->
              <input type="file" id="imgLeverancier" class="mx-auto d-none"><br>
              <button class="mb-2 rounded">OK</button>
            </div>
          </div>
        </div>

        <div class="col-4 px-2 mt-3 mx-auto">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">ADD BRAND</div>
          </div>
          <div class="w-100 text-center vh-15 valign borderz border-blue rounded-bottom bg-blue">
            <div class="mx-auto">
              <input type="text" id="brandName" class="text-center mb-2 w-90" placeholder="BRAND"><br>
              <input type="button" id="brandButton" value="ADD IMG" @click="document.getElementById('imgBrand').click();" class="mx-auto mb-2 rounded" />
              <input type="file" id="imgBrand" class="mx-auto d-none"><br>
              <button class="mb-2 rounded">OK</button>
            </div>
          </div>
        </div>

        <div class="col-4 px-2 mt-3 mx-auto d-none">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">ADD LABELCOLOR</div>
          </div>
          <div class="w-100 text-center vh-15 valign borderz border-blue rounded-bottom bg-blue">
            <div class="mx-auto">
              <input type="text" class="text-center mb-2 w-90" placeholder="COLORNAME"><br>
              <input type="text" class="text-center mb-2 w-90"placeholder="#ffffff"><br>
              <button class="mb-2 rounded">OK</button>
            </div>
          </div>
        </div>

        <div class="col-4 px-2 mt-3 mx-auto">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">ADD WERKNEMER</div>
          </div>
          <div class="w-100 text-center vh-15 valign borderz border-blue rounded-bottom bg-blue">
            <div class="mx-auto">
              <input 
                type="text" 
                class="text-center mb-2 w-90" 
                v-model="user" 
                placeholder="werknemer">
              <br>
              <input 
                type="password" 
                class="text-center mb-2 w-90" 
                v-model="pass" 
                placeholder="password">
              <br>
              <div class="error" v-html="error"></div>
              <button class="mb-2 rounded" @click="addUser">OK</button>
              
            </div>
          </div>
        </div>

        <div class="col-4 px-2 mt-3 mx-auto d-none">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">SEE HISTORY</div>
          </div>
          <div class="w-100 text-center vh-15 borderz border-blue rounded-bottom bg-blue">
            <textarea class="w-90 h-90 rounded"></textarea>
          </div>
        </div>

        <div class="col-4 px-2 mt-3 mx-auto d-none">
          <div class="w-100 valign rounded-top bg-blue text-white vh-10">
            <div class="mx-auto subTitle">EXPORT CSV</div>
          </div>
          <div class="w-100 text-center vh-15 borderz border-blue rounded-bottom bg-blue">
            <div>xxx</div>
          </div>
        </div>

        <div class="col-6 col-xxl-4 px-2 mt-3 mx-auto">
          <div class="mb-3">
            <div class="w-100 valign rounded-top bg-blue text-white vh-10">
              <div class="mx-auto subTitle">WERKNEMERS</div>
            </div>
            <div class="row m-0 p-0 pb-3 text-center rounded-bottom bg-blue">
              <Werknemer v-for="l in WerknemersList"
                :name="l.name"
              ></Werknemer>

            </div>
          </div>
          <div class="mb-3">
            <div class="w-100 valign rounded-top bg-blue text-white vh-10">
              <div class="mx-auto subTitle">LEVERANCIERS</div>
            </div>
            <div class="row m-0 p-0 px-3 pb-3 text-center rounded-bottom bg-blue">
              <Leverancier v-for="l in LeveranciersList"
                :name="l.name"
              ></Leverancier>
            </div>
          </div>
        </div>

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

    export default{
      data() {
        return {
          user: "",
          pass: "",
          error: null,

          LeveranciersList: [],
          WerknemersList: []

        }
      },
      methods: {
        getLeveranciers(){
            LeverancierService.getAll()
                .then(response => {
                  this.LeveranciersList = response.data;
                  console.log(this.LeveranciersList);
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

  </style>
  