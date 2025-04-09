<template>
    <select name="status" id="status" class="border border-blue rounded text-center">
        <option>STATUS</option>
        <option value="Clean1">Clean1</option>
        <option value="Clean2">Clean2</option>
        <option value="Repair">Repair</option>
        <option value="Done">Done</option>
    </select><br>

    <input type="text" size="14" class="border border-blue rounded text-center" placeholder="price"><br>


    -----------------------------------------

    <div class="col mt-4">
        <div class="mx-1 rounded-top bg-blue">+ Werknemer</div>
        <div class="mx-1 pt-3 rounded-bottom borderzz border-blue bg-green">
          <input size="14" class="border border-blue rounded text-center" placeholder="id"><br>
          <input type="text" size="14" class="border border-blue rounded text-center" placeholder="brand"><br>
          <img @click="intikken" class="rotate mx-auto" src="../img/gered_logo.png" style="width: 40px;height: 40px;">
        </div>
    </div>
    
    -----------------------------------------

    <div class="col mt-4">
      <div class="mx-1 rounded-top bg-blue text-white">ADMIN</div>
      <div class="mx-1 pt-3 rounded-bottom borderzz border-blue">
        <input id="adminName" type="text" size="14" class="border border-blue rounded" v-model="adminName"><br>
        <input id="adminPass" type="password" size="14" class="border border-blue rounded" v-model="adminPass"><br>
        <img @click="adminLogin" class="rotate mx-auto loginBtn" src="../img/gered_logo.png" style="width: 40px;height: 40px;">
      </div>
    </div>

    --------------------------------------------
          PREHISTORIC ADD SNEAKER
    --------------------------------------------

    <div class="row text-center fw-valignd text-white">
          
          <div class="col mt-4">
            <div class="mx-1 rounded-top bg-blue">+ Sneaker</div>
            <div class="mx-1 pt-3 rounded-bottom borderzz border-blue bg-purple">
              <!--<input type="file" size="14" class="border border-blue rounded text-center" accept="image/png, image/jpeg"><br>-->
              <input type="text" size="14" class="border border-blue rounded text-center" placeholder="id" v-model="id"><br>
              <select name="brand" v-model="brand" id="brand" class="border border-blue rounded text-center">
                <option>BRAND</option>
                
                <Brand v-for="brand in Brands"
                  :key="brand.name"
                  :name="brand.name"
                  :img="brand.img"
                  
                >
                </Brand>
              </select><br>
              <input type="text" size="14" class="border border-blue rounded text-center" placeholder="model"><br>
              <select name="leverancier" id="leverancier" class="border border-blue rounded text-center">
                <option>LEVERANCIER</option>
                <Leverancier v-for="leverancier in Leveranciers"
                  :key="leverancier.name"
                  :name="leverancier.name"
                  :img="leverancier.img"
                >
                </Leverancier>
              </select><br>
              <input type="text" size="14" class="border border-blue rounded text-center" placeholder="size"><br>
              <!--<input type="text" size="14" class="border border-blue rounded text-center" placeholder="COLORS"><br>-->
              <div class="row mx-3 mx-auto mw-200">
              <div class="col-3 m-1 valign mx-auto rounded red"><input type="checkbox" class="red" value="rood" v-model="colors"></div>
              <div class="col-3 m-1 valign mx-auto rounded green"><input type="checkbox" class="green" value="groen" v-model="colors"></div>
              <div class="col-3 m-1 valign mx-auto rounded blue"><input type="checkbox" class="blue" value="blauw" v-model="colors"></div>
              <div class="col-3 m-1 valign mx-auto rounded yellow"><input type="checkbox" class="yellow" value="geel" v-model="colors"></div>
              
              <div class="col-3 m-1 valign mx-auto rounded purple"><input type="checkbox" class="purple" value="paars" v-model="colors"></div>
              <div class="col-3 m-1 valign mx-auto rounded lightgreen"><input type="checkbox" class="lightgreen" value="lichtgroen" v-model="colors"></div>
              <div class="col-3 m-1 valign mx-auto rounded lightblue"><input type="checkbox" class="lightblue" value="lichtblauw" v-model="colors"></div>
              <div class="col-3 m-1 valign mx-auto rounded orange"><input type="checkbox" class="orange" value="oranje" v-model="colors"></div>

              <div class="col-3 m-1 valign mx-auto rounded pink"><input type="checkbox" class="pink" id="xx"value="roos" v-model="colors"></div>
              <div class="col-3 m-1 valign mx-auto rounded grey"><input type="checkbox" class="grey" value="grijs" v-model="colors"></div>
              <div class="col-3 m-1 valign mx-auto rounded black"><input type="checkbox" class="black" value="zwart" v-model="colors"></div>
              <div class="col-3 m-1 valign mx-auto rounded beige"><input type="checkbox" class="beige" value="beige" v-model="colors"></div>
              <div class="col-3 m-1 valign mx-auto rounded white"><input type="checkbox" class="white" value="wit" v-model="colors"></div>
              <div class="col-3 m-1 valign mx-auto rounded multi"><input type="checkbox" class="multi" value="multi" v-model="colors"></div>
              <!--
              <div class="col-3 m-1 valign mx-auto rounded darkgreen"><input type="checkbox" class="darkgreen" value="donkergroen"></div>
              <div class="col-3 m-1 valign mx-auto rounded navy"><input type="checkbox" class="navy" value="donkerblauw"></div>
              -->
              <button class="col-12 multi" @click="show"> TEST </button>
              </div>
              <input type="text" size="14" class="border border-blue rounded text-center" placeholder="laces"><br>
              <input type="text" size="14" class="border border-blue rounded text-center" placeholder="soles"><br>

              <p>{{ id }}</p>
              <p>{{ colors }}</p>
              <p>{{ brand  }}</p>

              <img @click="uittikken" class="rotate mx-auto" src="../img/gered_logo.png" style="width: 40px;height: 40px;">
            </div>
          </div>
          
      </div>


    --------------------------------------------
                  FULL SCREEN FORM
    --------------------------------------------

    <!-- MAIN IDEA
      <input id="xxxxxxx" v-model="id" type="text" placeholder="ID" class="targets roundedz borderz border-blue id text-center d-inline" minlength="4" maxlength="4">
      <input id="xxxxxxx" v-model="brand" type="text" placeholder="BRAND" class="targets roundedz borderz border-blue brand text-center d-none">
      <input id="xxxxxxx" v-model="model" type="text" placeholder="MODEL" class="targets roundedz borderz border-blue model text-center d-none" maxlength="30">
      <input id="xxxxxxx" v-model="color" type="text" placeholder="COLOR" class="targets roundedz borderz border-blue color text-center d-none">
      <input id="xxxxxxx" v-model="size" type="text" placeholder="SIZE" class="targets roundedz borderz border-blue size text-center d-none" minlength="2" maxlength="2">
      <input @keyup.enter="done" v-model="leverancier" type="text" placeholder="LEVERANCIER" class="targets roundedz borderz border-blue leverancier text-center d-none">
    -->

    <!-- SELECT FIELD LEVERANCIER
      <select id="xxxxxxx" v-model="leverancier" name="leverancier" id="leverancier" class="targets borderz border-blue rounded text-center d-none">
          <option>LEVERANCIER</option>
          <Leverancier v-for="leverancier in Leveranciers"
            :key="leverancier.name"
            :name="leverancier.name"
            :img="leverancier.img"
          >
          </Leverancier>
      </select>         
    -->


</template>

<script setup>
import { ref } from 'vue'

const id = ref();
const brand = ref("");
const model = ref("");
const leverancier = ref("");
const size = ref();
const colors = ref([]);
const laces = ref("");
const soles = ref("");


function show(){   
  console.log(id);
  console.log(colors);
}
  
/*
export default {
name: 'Settings_View',
props: {

},
methods:{
  yesno(){
    if(this.repair == "no") this.repair = "yes"
    else this.repair = "no"
  },
  removeUndefined(){
    if(this.colors.includes("undefined")) this.colors = this.colors.replace("undefined","");
    console.log(this.colors);
  },
  red(){
    this.removeUndefined();
    if(this.colors.includes("rood")) this.colors = this.colors.replace("rood ", "");
    else                            this.colors = this.colors + "rood ";
    console.log(this.colors);
  },
  show(){
    console.log(this.colors);
  }
}
}
*/
</script>

<style scoped>

</style>