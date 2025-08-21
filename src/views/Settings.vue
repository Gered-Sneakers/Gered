<template>
    <div class="settings row w-100 m-0 p-0 text-center ">
      <div class="toggleButton mt-0 pt-0">
        <div class="row m-0 p-0 vh-5"></div>
        <div class="row vh-5 pb-3 w-100 sticky">
          <div class="col mx-auto">
            <button @click="toggleContent(1)" id="toggleButton" class="w-100 h-100 px-2 mx-auto rounded bg-green hover">
              <!--Sneakers-->
              <img alt="Sneakers" class="h-100 m-0 p-0 growz justify-content-center" src="../img/stock.svg"/>
            </button>
          </div>
          <div class="col mx-auto">
            <button @click="toggleContent(6)" id="kidsButton" class="w-100 h-100 px-2 mx-auto rounded bg-green hover">
              <!--Skiddels-->
              <img alt="Kids" class="h-100 m-0 p-0 growz justify-content-center" src="../img/kid.svg"/>
            </button>
          </div>
          <div class="col mx-auto">
            <button @click="toggleContent(2)" id="csvButton" class="w-100 h-100 px-2 mx-auto rounded bg-green hover">
              <!--Shopify-->
              <img alt="Shopify" class="h-100 m-0 p-0 growz justify-content-center whiteIcons" src="../img/shopify.svg"/>
            </button>
          </div>
          <div class="col mx-auto">
            <button @click="toggleContent(4)" id="verkoopButton" class="w-100 h-100 px-2 mx-auto rounded bg-green hover">
              <!--Sales-->
              <img alt="Sales" class="h-100 m-0 p-0 growz justify-content-center" src="../img/sell.svg"/>
            </button>
          </div>
          <div class="col mx-auto">
            <button @click="toggleContent(7)" id="stockButton" class="w-100 h-100 px-2 mx-auto rounded bg-green hover">
              <!--Stockinfo-->
              <img alt="Stockinfo" class="h-100 m-0 p-0 growz justify-content-center" src="../img/info.svg"/>
            </button>
          </div>
          <div class="col mx-auto">
            <button @click="toggleContent(3)" id="settingsButton" class="w-100 h-100 px-2 mx-auto rounded bg-green hover">
              <!--Settings-->
              <img alt="Settings" class="h-100 m-0 p-0 growz justify-content-center" src="../img/settings.svg"/>
            </button>
          </div>
        </div>
      </div>
      <div id="main" v-show="activeTab == 3" class="max-1800 mx-auto mb-5">
          <div id="inputFields" class="row text-white">
            <!-- INPUT LEVERANCIER -->
            <div class="col-4 col-xl-3 px-2 mb-3 mx-auto">
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

            <!-- INPUT BRAND -->
            <div class="col-4 col-xl-3 px-2 mb-3 mx-auto">
            <div class="w-100 valign rounded-top bg-blue text-white vh-10">
              <div class="mx-auto subTitle">+ BRAND</div>
            </div>
            <div class="w-100 text-center valign rounded-bottom bg-blue">
              <div class="w-100 m-0 p-0 mx-auto">
                <input type="text" id="brandName" class="text-center mb-2 w-90" placeholder="Merk"
                  v-model="brandName"
                ><br>
                <button id="brandButton" height="32.39px" class="w-90 mx-auto mb-2 roundedz border border-dark bg-green fw-bold" value="+ Foto" 
                      @click="triggerFileInput"
                >
                <div class="w-100 h-100 m-0 p-0 invertColor">+ <img class="blackIcons " src="../img/img.svg"/></div>
                </button>
                <input @change="handleImageUpload" type="file" id="imgBrand" class="mx-auto d-none"><br>
                <button class="w-100 mt-2 py-3 rounded-bottom bg-green hover" @click="addBrand">OK</button>
              </div>
            </div>
            </div>

            <!-- INPUT WERKNEMER -->
            <div class="col-4 col-xl-3 px-2 mb-3 mx-auto">
            <div class="w-100 valign rounded-top bg-blue text-white vh-10">
              <div class="mx-auto subTitle">+ WERKNEMER</div>
            </div>
            <div class="w-100 text-center valign rounded-bottom bg-blue">
              <div class="w-100 m-0 p-0 mx-auto">
                <input 
                  type="text" 
                  class="text-center mb-2 w-90" 
                  v-model="werknemerName" 
                  placeholder="Werknemer"
                  @change="checkWerknemer"
                  >
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

            <!-- INPUT LABELCOLOR -->
            <div class="col-4 col-xl-3 px-2 mb-3 mx-auto greyOut">
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
                  placeholder="Kleurnaam"><br>
                <input 
                  id="labelCode"
                  type="text" 
                  class="text-center mb-2 w-90"
                  v-model="labelcolorCode"
                  placeholder="#ffffff"><br>
                <button class="w-100 mt-2 py-3 rounded-bottom bg-green hover" @click="addLabelColor" disabled>OK</button>
              </div>
            </div>
          </div>
      </div>
        <div id="isActive" class="row text-light">

          <!-- LEVERANCIERS -->
          <div class="col-4 col-xl-3 px-2 mb-3 mx-auto">
            <div class="mb-3">
              <div @click="showLeverancier = !showLeverancier" class="w-100 valign rounded-top bg-blue text-white vh-10">
                <div class="mx-auto subTitle">LEVERANCIERS</div>
              </div>
              <div v-if="showLeverancier"
              class="row m-0 p-0 px-3 pb-3 text-center rounded-bottom bg-blue">
                <Leverancier 
                  v-for="l in LeveranciersList.filter(l => l.isActive === true || l.isActive === 1)"
                  :id="l.id"
                  :name="l.name"
                  :isActive="l.isActive"
                  :icon="'❌'"
                  @delete="confirmDeleteLeverancier"
                ></Leverancier>

                <div class="full m-0 p-0" v-if="leverancierCheck">
                  <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
                    <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded" id="confirm">
                        <p class="my-5">Ben je zeker dat je <span class="text-yellow">{{ leverancierName }}</span> wil verwijderen?</p>
                        <div class="row m-0 p-0">
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="deleteLeverancier(leverancierId)">JA</button> 
                          </div>
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="resetLeverancier">NEE</button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- BRANDS -->
          <div class="col-4 col-xl-3 mb-3 px-2 mb-3 mx-auto">
            <div class="w-100 valign rounded-top bg-blue text-white vh-10">
              <div @click="showBrand = !showBrand" class="mx-auto subTitle">BRANDS</div>
            </div>
            <div v-if="showBrand"
            class="row m-0 p-0 px-3 pb-3 text-center rounded-bottom bg-blue">
              <Brand 
                v-for="l in BrandsList"
                :name="l.name"
                :img="l.img"
                :isActive="l.isActive"
                @update="confirmUpdateBrand(l.id,l.name,l.active)"
              ></Brand>
              <!-- UPDATE BRAND vindme -->
              <div class="full m-0 p-0" v-if="brandId > 0">
                  <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
                      <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded" id="updateBrand">
                            <p class="my-5">Wil je <span class="text-yellow">{{ brandName }}</span> verwijderen? </p>
                            <div class="row m-0 p-0 mt-5">
                            <div class="col-6 m-0 p-0">
                              <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="updateBrand(this.brandId)">JA</button> 
                            </div>
                            <div class="col-6 m-0 p-0">
                              <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="resetBrand()">NEE</button>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>

          <!-- WERKNEMERS -->
          <div class="col-4 col-xl-3 px-2 mb-3 mx-auto">
            <div class="mb-3">
              <div class="w-100 valign rounded-top bg-blue text-white vh-10">
                <div @click="showWerknemer = !showWerknemer" class="w-100 mx-auto subTitle">WERKNEMERS</div>
              </div>
              <div v-if="showWerknemer"
                class="row m-0 p-0 pb-3 text-center rounded-bottom bg-blue" style="cursor:'default'">
                  <Werknemer v-for="l in WerknemersList"
                    :id="l.id"
                    :name="l.name"
                    :pass="l.pass"
                    :isActive="l.isActive"
                    :icon="'❌'"
                    @activate="confirmDeleteWerknemer(l.id,l.name)"
                    @update="confirmUpdateWerknemer(l.id,l.name,l.pass,l.isAdmin,l.isActive)"

                  ></Werknemer>
                <!-- DELETE WERKNEMER -->
                <div class="full m-0 p-0" v-if="werknemerCheck">
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
                          <div class="h-100">
                            <div class="h-100 align-items-center justify-content-center">
                            <div><input class="d-block mx-auto text-center" v-model="updateName"></div>
                            <div><input type="password" class="text-center" v-model="updatePass"></div>
                            <div class="mt-2 defaultInput mx-auto" v-show=" idd === 1">
                              <span>is Admin: </span>
                              <img
                                @click="updateAdmin = !updateAdmin"
                                :class="['rounded-circle', updateAdmin ? 'bg-success' : 'bg-danger']"
                                src="../img/admin.svg"
                              >
                            </div>
                          </div>
                          </div>
                          <div class="row m-0 p-0 mt-5">
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="updateWerknemer()">JA</button> 
                          </div>
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="resetWerknemer">NEE</button>
                          </div>
                        </div>
                    </div>
                </div>
                </div>
              </div>
            </div>
          </div>

          <!-- LABELKLEUR -->
          <div class="col-4 col-xl-3 mb-3 px-2 mb-3 mx-auto">
            <div class="w-100 valign rounded-top bg-blue text-white vh-10">
              <div @click="showLabelkleur = !showLabelkleur" class="mx-auto subTitle">LABELKLEUREN</div>
            </div>
            <div v-if="showLabelkleur"
            class="row m-0 p-0 px-3 pb-3 text-center rounded-bottom bg-blue">
              <Labelcolor v-for="l in LabelcolorList"
                :id="l.id"
                :name="l.name"
                :colorCode="l.colorCode"
                :isActive="l.isActive"
                :icon="'❌'"
                @activate="confirmDeleteLabelcolor(l.id,l.name)"
              ></Labelcolor>
              <div class="full m-0 p-0" v-if="labelcolorCheck">
                <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
                    <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded" id="confirm">
                        <p class="my-5">Ben je zeker dat je <span class="text-yellow">{{ labelcolorName }}</span> wil verwijderen?</p>
                        <div class="row m-0 p-0">
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="deleteLabelColor(labelcolorId)">JA</button> 
                          </div>
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="resetInputLabel">NEE</button>
                          </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div id="inActive" class="row text-light">
          <!-- INACTIEVE STUFF -->
          <!-- LEVERANCIERS -->
          <div class="col-4 col-xl-3 px-2 mb-3 mx-auto">
            <div class="mb-3">
              <div class="w-100 valign rounded-top bg-red text-white vh-10">
                <div class="mx-auto subTitle">DELETED <br> LEVERANCIERS</div>
              </div>
              <div class="row m-0 p-0 px-3 py-3 text-center rounded-bottom bg-blue">
                <Leverancier v-for="l in LeveranciersList"
                  :id="l.id"
                  :name="l.name"
                  :isActive="!l.isActive"
                  :icon="'✔'"
                  @delete="confirmRecoverLeverancier(l.id,l.name)"
                ></Leverancier>
                <div class="full m-0 p-0" v-if="leverancierCheckReco">
                  <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
                    <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded" id="confirm">
                        <p class="my-5">Ben je zeker dat <span class="text-yellow">{{ leverancierName }}</span> terugkomt?</p>
                        <div class="row m-0 p-0">
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="recoverLeverancier(leverancierId)">JA</button> 
                          </div>
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="resetLeverancier">NEE</button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- BRANDS -->
          <div class="col-4 col-xl-3 mb-3 px-2 mb-3 mx-auto">
          <div class="w-100 valign rounded-top bg-red text-white vh-10">
            <div class="mx-auto subTitle">DELETED <br> BRANDS</div>
          </div>
          <div class="row m-0 p-0 px-3 py-3 text-center rounded-bottom bg-blue">
            <Brand v-for="l in BrandsList"
              :name="l.name"
              :img="l.img"
              :isActive="!l.isActive"
              @update="confirmRecoverBrand(l.id,l.name)"
            ></Brand>
            <div class="full m-0 p-0" v-if="brandCheckReco">
                <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
                    <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded" id="confirm">
                        <p class="my-5">Ben je zeker dat <span class="text-yellow">{{ brandName }}</span> terugkomt?</p>
                        <div class="row m-0 p-0">
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="recoverBrand(brandId)">JA</button> 
                          </div>
                          <div class="col-6 m-0 p-0">
                            <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="resetBrand">NEE</button>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          </div>

          <!-- WERKNEMERS -->
          <div class="col-4 col-xl-3 px-2 mb-3 mx-auto">
            <div class="mb-3">
              <div class="w-100 valign rounded-top bg-red text-white vh-10">
                <div @click="test" class="mx-auto subTitle">DELETED <br> WERKNEMERS</div>
              </div>
              <div class="row m-0 p-0 py-3 text-center rounded-bottom bg-blue">
                  <Werknemer v-for="l in WerknemersList"
                    :id="l.id"
                    :name="l.name"
                    :pass="l.pass"
                    :isActive="!l.isActive"
                    :icon="'✔'"
                    @activate="confirmRecoverWerknemer(l.id,l.name,l.isActive)"
                    @update="confirmUpdateWerknemer(l.id,l.name,l.pass)"

                  ></Werknemer>
                <!-- DELETE WERKNEMER -->
                <div class="full m-0 p-0" v-if="werknemerRecover">
                  <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
                      <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded" id="confirm">
                          <p class="my-5">Ben je zeker dat <span class="text-yellow">{{ werknemerName }}</span> terugkomt?</p>
                          <div class="row m-0 p-0">
                            <div class="col-6 m-0 p-0">
                              <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="recoverWerknemer(werknemerId)">JA</button> 
                            </div>
                            <div class="col-6 m-0 p-0">
                              <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="refuseDeleteWerknemer">NEE</button>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- LABELKLEUR -->
          <div class="col-4 col-xl-3 mb-3 px-2 mb-3 mx-auto">
            <div class="w-100 valign rounded-top bg-red text-white vh-10">
              <div class="mx-auto subTitle">DELETED <br> LABELKLEUREN</div>
            </div>
            <div class="row m-0 p-0 px-3 py-3 text-center rounded-bottom bg-blue">
              <Labelcolor v-for="l in LabelcolorList"
                :id="l.id"
                :name="l.name"
                :colorCode="l.colorCode"
                :isActive="!l.isActive"
                :icon="'✔'"
                @activate="confirmRecoverLabelcolor(l.id,l.name,l.isActive)"
              ></Labelcolor>
              <div class="full m-0 p-0" v-if="labelcolorCheckReco">
                  <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
                      <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded" id="confirm">
                          <p class="my-5">Ben je zeker dat je <span class="text-yellow">{{ labelcolorName }}</span> terugkomt?</p>
                          <div class="row m-0 p-0">
                            <div class="col-6 m-0 p-0">
                              <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="recoverLabelcolor(labelcolorId)">JA</button> 
                            </div>
                            <div class="col-6 m-0 p-0">
                              <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="resetInputLabel">NEE</button>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>

        </div>
        <div id="extra" v-if="creator = 2" class="row text-light"> <!-- SUPER ADMIN ONLY -->
            <!--<div class="col-15"></div>-->
            <!--
            <div class="col-3 col-xl-3 px-2 mb-3 mx-auto">
              <div class="w-100 valign rounded-top goud text-white vh-10">
                <div class="mx-auto subTitle text-purple h-100 valign"> STOCK: IN </div>
              </div>
              <div class="row m-0 p-0 px-4 pb-3 pt-3 fw-bold rounded-bottom bg-blue">
                  <div class="col-6 text-start mb-1"> Wash </div><div class="col-6 text-end"> {{ cleaningCount }} </div>
                  <div class="col-6 text-start mb-1"> Repair </div><div class="col-6 text-end"> {{ repairCount }} </div>
                  <div class="col-6 text-start mb-1"> Kids Wash </div><div class="col-6 text-end"> {{ kidsWash }} </div>
                  <div class="col-6 text-start mb-1"> Kids Repair </div><div class="col-6 text-end"> {{ kidsRepair }} </div>
              </div>
            </div>

            <div class="col-3 col-xl-3 px-2 mb-3 mx-auto">
              <div class="w-100 valign rounded-top goud text-white vh-10">
                <div class="mx-auto subTitle text-purple h-100 valign"> STOCK: OUT </div>
              </div>
              <div class="row m-0 p-0 px-4 pb-3 pt-3 fw-bold rounded-bottom bg-blue">
                  <div class="col-6 text-start mb-1"> Stock </div><div class="col-6 text-end"> {{ stockCount }} </div>
                  <div class="col-6 text-start mb-1"> Online </div><div class="col-6 text-end"> {{ csvCount }} </div>
                  <div class="col-6 text-start mb-1"> Kids Stock </div><div class="col-6 text-end"> {{ kidsStock }} </div>
                  <div class="col-6 text-start mb-1"> Kids Online </div><div class="col-6 text-end"> {{ kidsOnline }} </div>
              </div>
            </div>

            <div class="col-3 col-xl-3 px-2 mb-3 mx-auto">
              <div class="w-100 valign rounded-top goud text-white vh-10">
                <div class="mx-auto subTitle text-purple h-100 valign"> STOCK: TOTALS </div>
              </div>
              <div class="row m-0 p-0 px-4 pb-3 pt-3 fw-bold rounded-bottom bg-blue">
                  <div class="col-6 text-start mb-1"> In Progress </div><div class="col-6 text-end"> {{ totalStockIn }} </div>
                  <div class="col-6 text-start mb-1"> Stock </div><div class="col-6 text-end"> {{ totalStockOut }} </div>
                  <div class="col-6 text-start mb-1"> Online </div><div class="col-6 text-end"> {{ totalOnline }} </div>
                  <div class="col-6 text-start mb-1"> Verkocht </div><div class="col-6 text-end"> {{ totalVerkocht }} </div>
              </div>
            </div>
            -->
            <div class="col-3 col-xl-3 px-2 mb-3 mx-auto">
              <div class="w-100 valign rounded-top goud text-white vh-10">
                <div class="mx-auto subTitle text-purple">REPAIRS</div>
              </div>
              <div
                class="row m-0 p-0 pb-3 pt-3 text-center rounded-bottom bg-blue">
                    <div class="col-1 fw-bold text-center m-0 p-0 pb-1 mb-1"></div>
                    <div class="col-2 fw-bold text-center m-0 p-0 border-bottom border-light pb-1 mb-1">id</div>
                    <div class="col-6 fw-bold text-center m-0 p-0 border-bottom border-light pb-1 mb-1">naam</div>
                    <div class="col-2 fw-bold text-center m-0 p-0 border-bottom border-light pb-1 mb-1">€</div>
                    <div class="col-1 fw-bold text-center m-0 p-0  pb-1 mb-1"></div>
                    <div class="col-12 m-0 p-0"  v-for="l in RepairsList">
                    <Repairs 
                      :id="l.id"
                      :name="l.name"
                      :price="l.price"
                      @activate=""
                      @update="confirmUpdateRepairs(l.id,l.name,l.price)"
                    ></Repairs>
                    </div>
                    <!-- UPDATE REPAIRS-->
                    <div class="full m-0 p-0" v-if="repairId > 0">
                    <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
                        <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded" id="updateWerknemer">
                              <p class="my-5">Wil je <span class="text-yellow">{{ repairId }}</span> wijzigen? </p>
                              <div><input class="d-block mx-auto text-center" v-model="repairName"></div>
                              <div><input class="text-center" v-model="repairPrice"></div>
                              <div class="row m-0 p-0 mt-5">
                              <div class="col-6 m-0 p-0">
                                <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="updateRepairs()">JA</button> 
                              </div>
                              <div class="col-6 m-0 p-0">
                                <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="resetRepairs()">NEE</button>
                              </div>
                            </div>


                        </div>
                    </div>
                    </div>
              </div>
            </div>

            <!--<div class="col-15"></div>-->

            <div class="col-3 col-xl-3 px-2 mb-3 mx-auto">
              <div class="w-100 valign rounded-top goud text-white vh-10">
                <div class="mx-auto subTitle text-purple">ADMINS</div>
              </div>
              <div v-if="showWerknemer"
                class="row m-0 p-0 pb-3 pt-3 text-center rounded-bottom bg-blue">
                <div v-for="l in WerknemersList">
                  <Werknemer 
                    v-if="l.isAdmin"
                    :id="l.id"
                    :name="l.name"
                    :pass="l.pass"
                    :isActive="l.isActive"
                    @update="confirmUpdateWerknemer(l.id,l.name,l.pass,l.isActive,l.isAdmin)"

                  ></Werknemer>    
                </div>            
              </div>
            </div>

            <div class="col-3 col-xl-3 mx-auto greyOut">
              <div class="w-100 valign rounded-top goud text-white vh-10">
                <div class="mx-auto subTitle text-purple h-100 valign"> SNEAK PRIJS </div>
              </div>
              <div class="row m-0 p-0 px-4 pb-3 pt-3 fw-bold rounded-bottom bg-blue">
                  <div class="col-6 text-start mb-1"> Sneaker 36+ </div><div class="col-6 text-end"> 25 </div>
                  <div class="col-6 text-start mb-1"> Sneaker Kids </div><div class="col-6 text-end"> 20 </div>
              </div>
            </div>

            <!--
            <div class="col-4 col-xl-3 px-2 mb-3 mx-auto d-none">
              <div class="w-100 valign rounded-top goud text-white vh-10">
                <div class="mx-auto subTitle text-purple">+ ADMIN</div>
              </div>
              <div class="w-100 text-center valign rounded-bottom bg-blue">
                <div class="w-100 m-0 p-0 pt-3 mx-auto">
                  <input type="text" class="text-center mb-1 w-90 bg-danger" placeholder="Admin"><br>
                  <input type="text" class="visibility">
                  <button class="w-100 mt-2 py-3 rounded-bottom bg-green hover" @click="addLeverancier">OK</button>
                </div>
              </div>
            </div>
          -->
          <!-- BOTTOM row -->
          </div>
        
      </div>
      <div id="sneaks" v-show="activeTab == 1" class="m-0 p-0">
        <div class="row m-0 p-0 text-light">
          <ShowSneakers ref="sneakerComponent"></ShowSneakers>
        </div>
      </div>
      <div id="kids" v-show="activeTab == 6" class="m-0 p-0">
        <div class="row m-0 p-0 text-light">
          <ShowKids ref="kidsComponent"></ShowKids>
        </div>
      </div>
      <div id="csv" v-show="activeTab == 2" class="m-0 p-0">
        <div class="row m-0 p-0 text-light">
          <CsvSneakers ref="csvComponent" :key="csvKey"></CsvSneakers>
        </div>
      </div>
      <div id="verkoop" v-show="activeTab == 4" class="m-0 p-0">
        <div class="m-0 p-0 text-light">
          <Verkoop ref="verkoopComponent" @switch-tab="toggleContent"></Verkoop>
        </div>
      </div>
      <div id="verkocht" v-show="activeTab == 5" class="m-0 p-0">
        <div class="m-0 p-0 text-light">
          <Verkocht ref="verkochtComponent"></Verkocht>
        </div>
      </div>
      <div id="stock" v-show="activeTab == 7" class="m-0 p-0">
        <div class="m-0 p-0 text-light">
          <Stock ref="stockComponent"></Stock>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Leverancier from '@/components/LeverancierSettings.vue';
  import LeverancierService from '@/services/LeverancierService';

  import Brand from '@/components/BrandSettings.vue';
  import BrandService from '@/services/BrandService';

  import Werknemer from '@/components/Werknemer.vue';
  import WerknemerService from '@/services/WerknemerService';

  import Repairs from '@/components/Repairs.vue'
  import RepairsService from '@/services/RepairsService';

  import Labelcolor from '@/components/Labelcolor.vue';
  import LabelcolorService from '@/services/LabelcolorService';

  import ShowSneakers from './ShowSneakers.vue';
  import ShowKids from './ShowKids.vue';
  import CsvSneakers from './Csv.vue';
  import Verkoop from './Verkoop.vue';
  import Verkocht from './Verkocht.vue';
  import Stock from './SettingsStock.vue';

  import { authState } from '@/stores/auth';
  import { nextTick } from 'vue'

  import ConfirmBox from '@/components/ConfirmBox.vue';
  
  import axios from 'axios';

    export default{
      data() {
        return {
          idd: null,
          user: "",
          pass: "",
          error: null,

          LeveranciersList: [],
          WerknemersList: [],
          LabelcolorList: [],
          BrandsList: [],
          RepairsList: [],
          
          werknemerCheck: false,
          werknemerRecover: false,
          werknemerId: null,
          werknemerName: '',
          werknemerPass: '',
          
          updateId: null,
          updateName: '',
          updatePass: '',
          updateAdmin: 0,

          leverancierCheckReco: false,
          leverancierCheck: false,
          leverancierId: null,
          leverancierName: '',

          labelcolorCheckReco: false,
          labelcolorCheck: false,
          labelcolorId: null,
          labelcolorName: '',
          labelcolorCode: '',

          selectedFile: null,

          brandCheckReco: false,
          brandCheck: false,
          brandId: null,
          brandName: '',
          brandActive: '',

          repairId: null,
          repairName: '',
          repairPrice: null,

          showLeverancier: true,
          showBrand: true,
          showWerknemer: true,
          showLabelkleur: true,
          showRepairs: true,

          csvKey: 0,

          activeTab: this.initialTab 
      
        }
      },
      props: { 
        initialTab: { type: Number, default: 3 } 
      },
      methods: {
        setTabFromRoute() {
          const t = Number(this.$route.query.tab)
          if (!Number.isNaN(t)) this.activeTab = t
        },
        test(){
          console.log(this.inactieveWerknemers);
        },
        toggleContent(nr) {
          this.activeTab = nr;

          this.$nextTick(() => {
            switch (nr) {
              case 1:
                this.$refs.sneakerComponent?.getSneakers?.();
                break;
              case 2:
                this.$refs.csvComponent?.getSneakers?.();
                break;
              case 6:
                this.$refs.kidsComponent?.getSneakers?.();
                break;
              case 4:
                this.$refs.verkoopComponent?.getSneakers?.();
                break;
              case 5:
                this.$refs.verkochtComponent?.getSneakers?.();
                break;
              case 7:
                 this.$refs.stockComponent;
                 break;
              // no action for 3 (main)
            }
          });
        },
        handleImageUpload(event) {
          this.selectedFile = event.target.files[0];
        },
        triggerFileInput() {
          document.getElementById("imgBrand").click();
        },
        showInfo(){
          console.log(this.updateAdmin);
        },

        /* LEVERANCIERS */
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
            this.resetInputLeverancier();
          })
          .catch( error => {
              console.log(error);
          });
        },
        confirmDeleteLeverancier(leverancier){
          console.log("CONFIRM DELETE LEVER");
          this.leverancierId = leverancier.id
          this.leverancierName = leverancier.name
          this.leverancierCheck = true
        },
        resetLeverancier(){
          this.leverancierId = null
          this.leverancierName = ''
          this.leverancierCheck = false
          this.leverancierCheckReco = false
        },
        deleteLeverancier(id) {
          console.log("🗑️ Deactivating leverancier ID:", id);

          const leverancier = this.LeveranciersList.find(l => l.id === id);
          if (!leverancier) {
            console.error(`❌ Leverancier with ID ${id} not found`);
            return;
          }
        
          const updateData = { ...leverancier, isActive: false };
          console.log(updateData);
          LeverancierService.update(id, updateData)
            .then(() => {
              console.log("✅ Leverancier gedeactiveerd");
              this.getLeveranciers();
              this.resetLeverancier();
            })
            .catch(error => {
              console.error("❌ Fout bij deactivatie:", error.response || error);
              alert("Deactivatie mislukt");
            });
        },
        resetInputLeverancier(){
          this.leverancierName = "";
        },
        confirmRecoverLeverancier(id,name){
          this.leverancierId = id
          this.leverancierName = name
          this.leverancierCheckReco = true
        },
        recoverLeverancier(id) {
          console.log("🗑️ Deactivating leverancier ID:", id);

          const leverancier = this.LeveranciersList.find(l => l.id === id);
          if (!leverancier) {
            console.error(`❌ Leverancier with ID ${id} not found`);
            return;
          }
        
          const updateData = { ...leverancier, isActive: true };
          console.log(updateData);
          LeverancierService.update(id, updateData)
            .then(() => {
              console.log("✅ Leverancier gedeactiveerd");
              this.getLeveranciers();
              this.resetLeverancier();
            })
            .catch(error => {
              console.error("❌ Fout bij deactivatie:", error.response || error);
              alert("Deactivatie mislukt");
            });
        },

        /* BRANDS */
        getBrands(){
          BrandService.getAll()
          .then(response => {
            this.BrandsList = response.data;
            console.log("BRANDLISTS");
            console.log(this.BrandsList);
          })
          .catch(error => {
              error = "Brands niet gevonden";
              console.error(error);
              alert(error);
          })
        },
        async addBrand(){
          /*
          var data = {
            name: this.brandName,
            img: this.selectedFile.name,
            isActive: 1
          }
          */
          if (!this.selectedFile) return alert("No image selected");

          const form = new FormData();
                form.append("image", this.selectedFile);
                form.append("brandName", this.brandName);
              //form.append("image",form.value.media);
  
            //await axios.post("http:localhost:8080/api/upload-image", form , {
            const { data } = await axios.post('http://localhost:8080/api/uploadBrand', form); // await axios.post("http://localhost:8080/api/uploadBrand", form /*, { headers:{"Content-Type": "multipart/form-data"}, }*/);
            console.log("✅ Upload successful");
            alert("Image uploaded!");
        
            await BrandService.create({
              name: this.brandName,
              img: data.filename,
              isActive: 1
              //this.getBrands();
              //this.resetInputBrand();
            })
          
        },
        updateBrand(id){
          const updateData = { isActive: 0 };
          BrandService.update(id,updateData)
            .then(() => {
              this.getBrands();
              this.resetBrand();
            })
            .catch(error=>{
              console.error("Update failed", error);
            })
        },
        confirmUpdateBrand(id,name,active){
          this.brandId = id
          this.brandActive = active
          this.brandName = name
          console.log("UPDATE BRAND ID");
          console.log(this.brandId);
        },
        resetInputBrand(){
          this.brandName = ""
          this.selectedFile = ""
        },
        resetBrand(){
          this.brandId = ""
          this.brandName = ""
          this.brandActive = ""
          this.brandCheck = false
          this.brandCheckReco = false
        },
        confirmRecoverBrand(id,name){
          this.brandId = id
          this.brandName = name
          this.brandCheckReco = true
        },
        recoverBrand(id){
          console.log("🗑️ Recovering brand ID:", id);

          const brand = this.BrandsList.find(l => l.id === id);
          if (!brand) {
            console.error(`❌ Brand with ID ${id} not found`);
            return;
          }
        
          const updateData = { ...brand, isActive: true };
          BrandService.update(id, updateData)
            .then(() => {
              console.log("✅ Brand gedeactiveerd");
              this.getBrands();
              this.resetBrand();
            })
            .catch(error => {
              console.error("❌ Fout bij deactivatie:", error.response || error);
              alert("Deactivatie mislukt");
            });
        },

        /* WERKNEMERS */
        getWerknemers(){
          WerknemerService.getAll()
            .then(response => {
              this.WerknemersList = response.data;
              console.log("WERKNEMERSLIST");
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
            this.resetInputWerknemer();
          })          
          .catch (err => {
            console.log(err);
          })
          //}

          /*
          WerknemerService.create(data)
            .then(response => {
                this.getWerknemers();
                this.resetInputWerknemer();
            })
            .catch( error => {
                console.log(error);
            });
            */
        },
        confirmDeleteWerknemer(id,name){
          this.werknemerId = id
          this.werknemerName = name
          this.werknemerCheck = true
        },
        refuseDeleteWerknemer(){
          this.werknemerId = null
          this.werknemerName = ''
          this.werknemerCheck = false
          this.werknemerRecover = false
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
        confirmUpdateWerknemer(id,name,pass,isAdmin){
           this.updateId = id
           this.updateName = name
           this.updatePass = pass
           this.updateAdmin = isAdmin
        },
        resetWerknemer(){
          this.werknemerId = null
          this.werknemerName = ''
          this.werknemerPass = ''
          this.updateId = null
          this.updateName = ''
          this.updatePass = ''
          this.werknemerCheck = false
          this.werknemerRecover = false
        },
        updateWerknemer(){
          const updateData = { name: this.updateName , pass: this.updatePass , isAdmin: this.updateAdmin };
          WerknemerService.update(this.updateId,updateData)
            .then(()=> {
              this.getWerknemers();
              this.updateId = null,
              this.updateName = '',
              this.updatePass = '',
              this.updateAdmin = ''
          })
            .catch(error=>{
              console.error("Update failed" , error);
            })
        },
        resetInputWerknemer(){
          this.werknemerName = "";
          this.werknemerPass = "";
        },
        confirmRecoverWerknemer(id,name){
          this.werknemerId = id
          this.werknemerName = name
          this.werknemerRecover = true
        },
        recoverWerknemer(id){
          console.log("🗑️ Recovering werknemer ID:", id);

          const werknemer = this.WerknemersList.find(l => l.id === id);
          if (!werknemer) {
            console.error(`❌ Werknemer with ID ${id} not found`);
            return;
          }
        
          const updateData = { ...werknemer, isActive: true };
          WerknemerService.update(id, updateData)
            .then(() => {
              console.log("✅ Werknemer geactiveerd");
              this.getWerknemers();
              this.resetWerknemer();
            })
            .catch(error => {
              console.error("❌ Fout bij deactivatie:", error.response || error);
              alert("Deactivatie mislukt");
            });
        },
        toggleAdmin(){
          
        },
        async checkWerknemer(){
          try{
            await WerknemerService.findByName(this.werknemerName)
            alert('Deze naam bestaat al.');
            this.werknemerName = '';
            //id.value = "";
            counter = 0;
            //return;
          }catch (err) {
          }
        },

        /* LABELS  */
        getLabelColors(){
          LabelcolorService.getAll()
          .then(response => {
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
        deleteLabelColor(id){
          const updateData = { isActive: 0 };
          LabelcolorService.update(id,updateData)
            .then(()=> {
              this.getLabelColors();
              this.resetInputLabel();
            })
            .catch(error=>{
              console.error("Update failed" , error);
            })
        },
        confirmDeleteLabelcolor(id,name){
          this.labelcolorId = id
          this.labelcolorName = name
          this.labelcolorCheck = true
        },
        resetInputLabel(){
          this.labelcolorName = ""
          this.labelcolorCode = ""
          this.labelcolorCheck = false
          this.labelcolorCheckReco = false
        },
        recoverLabelcolor(id){
          const updateData = { isActive: 1 };
          LabelcolorService.update(id,updateData)
            .then(()=> {
              this.getLabelColors();
              this.resetInputLabel();
            })
            .catch(error=>{
              console.error("Update failed" , error);
            })
        },
        confirmRecoverLabelcolor(id,name,active){
          this.labelcolorId = id
          this.labelcolorName = name
          this.labelcolorCheckReco = true
        },

        /* REPAIRS */
        async getRepairs(){
          RepairsService.getAll()
          .then(response => {
            this.RepairsList = response.data;
            console.log("REPAIRS LIST");
            console.log(this.RepairsList);
          })
          .catch(error => {
            error = " Repairs niet gevonden";
            console.error(error);
            alert(error);
          })
        },
        updateRepairs(){
            const updateData = { price: this.repairPrice }
            RepairsService.update(this.repairId,updateData)
            .then(()=> {
              this.getRepairs();
              this.repairId = null,
              this.repairName = '',
              this.repairPrice = ''
          })
            .catch(error=>{
              console.error("Update failed" , error);
            })
        },
        resetRepairs(){
          this.repairId = null,
          this.repairName = '',
          this.repairPrice = null
        },
        confirmUpdateRepairs(id,name,price){
          this.repairId = id
          this.repairName = name
          this.repairPrice = price
        },
        toNumber(v) {
          if (v == null) return NaN;
          if (typeof v === 'number') return v;
          const n = Number(String(v).trim().replace(',', '.'));
          return Number.isFinite(n) ? n : NaN;
        }

      },
      watch: {
        kidsWash: {
            immediate: true,
            handler(val, oldVal) {
              console.log('KIDS COUNT:', val)
            }
        },
      },
      mounted () {
        this.getLeveranciers();
        this.getWerknemers();
        this.getLabelColors();
        this.getBrands();
        this.getRepairs();
        console.log(this.WerknemersList);
        console.log("REPAIR BRO");
        console.log(this.RepairsList);
        
        this.idd = JSON.parse(localStorage.getItem("id"));
        console.log("USER ID:", this.idd); // should show the number

        this.$nextTick(()=> {
          console.log("KIDS COUNT: ")
          console.log(this.kidsWash);
          //console.log(this.kidsRepair);
          
        })

      },
      inject: ["sneakers"],
      computed: {
        actieveLeveranciers() {
          return this.LeveranciersList.filter(l => l.isActive === true || l.isActive === 1);
        },
        inactieveLeveranciers() {
          return this.LeveranciersList.filter(l => l.isActive === false || l.isActive === 0);
        },
        cleaningCount() {
          return this.sneakers().filter(s => parseFloat(s.size) > 36).filter(s => s.status === 1).length;
        },
        repairCount() {
          return this.sneakers().filter(s => parseFloat(s.size) > 36).filter(s => s.status === 2).length;
        },
        stockCount() {
          return this.sneakers().filter(s => parseFloat(s.size) > 36).filter(s => s.status === 3 || s.status === 4).length;
        },/*
        verkoopCount() {
          return this.sneakers().filter(s => parseFloat(s.size) > 36).filter(s => s.status === 4).length;
        },*/
        verkochtCount() {
          return this.sneakers().filter(s => parseFloat(s.size) > 36).filter(s => s.status === 5).length;
        },
        csvCount(){
          return this.sneakers().filter(s => parseFloat(s.size) > 36).filter(s => s.status === 6).length;
        },
        kidsWash(){
          return this.sneakers().filter(s => parseFloat(s.size) < 36).filter(s => s.status === 1).length
        },
        kidsRepair(){
          return this.sneakers().filter(s => parseFloat(s.size) < 36).filter(s => s.status === 2).length
        },
        kidsStock(){
          return this.sneakers().filter(s => parseFloat(s.size) < 36).filter(s => s.status === 3 || s.status === 4).length
        },
        kidsOnline(){
          return this.sneakers().filter(s => parseFloat(s.size) < 36).filter(s => s.status === 6).length
        },
        kidsVerkocht()     {
          return this.sneakers().filter(s => parseFloat(s.size) < 36).filter(s => s.status === 5).length
        },
        totalStockIn(){
          return this.cleaningCount + this.repairCount + this.kidsWash + this.kidsRepair;
        },
        totalStockOut(){
          return this.stockCount + this.kidsStock;
        },
        totalOnline(){
          return this.csvCount + this.kidsOnline;
        },
        totalVerkocht(){
          return this.verkochtCount + this.kidsVerkocht;
        }
      },
      components: {
        Leverancier,
        Brand,
        Werknemer,
        Labelcolor,
        Repairs,
        ShowSneakers,
        ShowKids,
        CsvSneakers,
        Stock,
        Verkoop,
        Verkocht
      }
    }
  </script>

  <style scoped>
    .full{
      position: fixed ; /* absolute */
      top: 0;
      left: 0;
      /*width: 100%;
      height: 100%;*/
      width: 100%;
      height: 100%;
      background-color: rgba(247,247,247,0.5);
      z-index: 99999;
    }

    #main{
    }

    #brandButton{
      height: 32.39px !important;
    }

    .invertColor:hover{
      filter: brightness(0) invert(1) !important;
    }

    .subTitle {
      position: relative;
      display: inline-block;
    }

    .valign{
      display: flex;
      align-items: center;  /* vertical align */
      justify-content: center; /* horizontal align (optioneel) */
    }

    .navArrow {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 100%; /* places it just below the title */
    }

    .bg-gold{
      background-color: linear-gradient(45deg,#FFFFAC 5%,#FEDB37 10%,#9f7928 30%,#FFFFAC  50%,#9f7928 70%,#FEDB37 80%,#FFFFAC 95%) !important;
    }

    .purpleFilter{
      filter: brightness(0) saturate(100%) invert(14%) sepia(97%) saturate(7482%) hue-rotate(276deg) brightness(95%) contrast(90%);
    }

    .arrowIcon {
      width: 20px; /* Adjust as needed */
      margin-top: 5px;
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
      overflow-x: hidden;
    }

    [type=file]{
      color: transparent;
      width: 168px;
    }

    .vh-10{
      min-height: 120px !important;
    }

    input,.defaultInput{
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

    .greyOut{
      filter:grayscale(100%);
    }

  </style>
  