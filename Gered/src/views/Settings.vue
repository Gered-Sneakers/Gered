<template>
    <div class="settings">
        <div class="row text-center fw-bold text-white">
          <div class="col mt-4">
            <div class="mx-1 rounded-top bg-blue">+ Werknemer</div>
            <div class="mx-1 pt-3 rounded-bottom borderzz border-blue bg-green">
            <input type="text" size="14" class="border border-blue rounded text-center" placeholder="id"><br>
            <input type="text" size="14" class="border border-blue rounded text-center" placeholder="brand"><br>
            <img @click="intikken" class="rotate mx-auto" src="../img/gered_logo.png" style="width: 40px;height: 40px;">
          </div>
          </div>
          <div class="col mt-4">
            <div class="mx-1 rounded-top bg-blue">+ Sneaker</div>
            <div class="mx-1 pt-3 rounded-bottom borderzz border-blue bg-purple">
            <!--<input type="file" size="14" class="border border-blue rounded text-center" accept="image/png, image/jpeg"><br>-->
            <input type="text" size="14" class="border border-blue rounded text-center" placeholder="id"><br>
            <select name="brand" id="brand" class="border border-blue rounded text-center">
              <option>BRAND</option>
              <option value="Adidas">Adidas</option>
              <option value="Asics">Asics</option>
              <option value="Champion">Champion</option>
              <option value="Diadora">Diadora</option>
              <option value="Fila">Fila</option>
              <option value="Jordan">Jordan</option>
              <option value="New Balance">New Balance</option>
              <option value="Nike">Nike</option>
              <option value="Puma">Puma</option>
              <option value="Reebok">Reebok</option>
              <option value="Vans">Vans</option>
            </select><br>
            <input type="text" size="14" class="border border-blue rounded text-center" placeholder="model"><br>
            <select name="leverancier" id="leverancier" class="border border-blue rounded text-center">
              <option>LEVERANCIER</option>
              <option value="Oco">Opnieuw & Co</option>
              <option value="Kringloop">Kringloop</option>
              <option value="Gered">Gered</option>
            </select><br>
            <input type="text" size="14" class="border border-blue rounded text-center" placeholder="size"><br>
            <input type="text" size="14" class="border border-blue rounded text-center" placeholder="COLOR"><br>
            <input type="text" size="14" class="border border-blue rounded text-center" placeholder="laces"><br>
            <input type="text" size="14" class="border border-blue rounded text-center" placeholder="soles"><br>
            <input type="text" size="14" class="border border-blue rounded text-center" placeholder="price"><br>
            <select name="status" id="status" class="border border-blue rounded text-center">
              <option>STATUS</option>
              <option value="Clean1">Clean1</option>
              <option value="Clean2">Clean2</option>
              <option value="Repair">Repair</option>
              <option value="Done">Done</option>
            </select><br>
            
            <img @click="uittikken" class="rotate mx-auto" src="../img/gered_logo.png" style="width: 40px;height: 40px;">
        </div>
          </div>
          <div class="col mt-4">
            <div class="mx-1 rounded-top bg-blue text-white">ADMIN</div>
            <div class="mx-1 pt-3 rounded-bottom borderzz border-blue">
              <input id="adminName" type="text" size="14" class="border border-blue rounded" v-model="adminName"><br>
              <input id="adminPass" type="password" size="14" class="border border-blue rounded" v-model="adminPass"><br>
              <img @click="adminLogin" class="rotate mx-auto loginBtn" src="../img/gered_logo.png" style="width: 40px;height: 40px;">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Settings_View',
    props: {
      repair: "no",

    },
    methods:{
      yesno(){
        if(this.repair == "no") this.repair = "yes"
        else this.repair = "no"
      }
    }
  }
  </script>
  
  
  <style scoped>
  input,select{
    width: 200px;
    height: 30px;
  }
  </style>
  