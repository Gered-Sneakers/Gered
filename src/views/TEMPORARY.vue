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