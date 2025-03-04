<template>
    <div class="settings">
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
    </div>
  </template>
  
  <script setup>
    import Brands from '@/assets/brands.json';
    import Brand from '@/components/BrandList.vue';

    import Leveranciers from '@/assets/leveranciers.json';
    import Leverancier from '@/components/Leverancier.vue';
    
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


  input[type=text],select{
    width: 200px;
    height: 30px;
  }

  input[type=checkbox]{
    width: 30px !important;
    height: 30px !important;
  }

  .mw-200{
    max-width: 200px;
  }

  .red, .red::before{
    accent-color: var(--red);
    background-color: var(--red);
    border: 3px solid var(--red);
  }

  .green, .green::before{
    accent-color: var(--green);
    background-color: var(--green);
    border: 3px solid var(--green);
  }

  .blue, .blue::before{
    accent-color: var(--blue);
    background-color: var(--blue);
    border: 3px solid var(--blue);
  }

  .yellow, .yellow::before{
    accent-color: var(--yellow);
    background-color: var(--yellow);
    border: 3px solid var(--yellow);
  }

  .grey, .grey::before{
    accent-color: var(--grey);
    background-color: var(--grey);
    border: 3px solid var(--grey);
  }
  
  .black, .black::before{
    accent-color: var(--black);
    background-color: var(--black);
    border: 3px solid var(--black);
  }
  
  .white, .white::before{
    accent-color: var(--white);
    background-color: var(--white);
    border: 3px solid var(--white);
  }
  
  .purple, .purple::before{
    accent-color: var(--purple);
    background-color: var(--purple);
    border: 3px solid var(--purple);
  }
  
  .darkgreen, .darkgreen::before{
    accent-color: var(--darkgreen);
    background-color: var(--darkgreen);
    border: 3px solid var(--darkgreen);
  }
  
  .navy, .navy::before{
    accent-color: var(--navy);
    background-color: var(--navy);
    border: 3px solid var(--navy);
  }
  
  .orange, .orange::before{
    accent-color: var(--orange);
    background-color: var(--orange);
    border: 3px solid var(--orange);
  }
  
  .pink, .pink::before{
    accent-color: var(--pink);
    background-color: var(--pink);
    border: 3px solid var(--pink);
  }
  
  .lightgreen, .lightgreen::before{
    accent-color: var(--lightgreen);
    background-color: var(--lightgreen);
    border: 3px solid var(--lightgreen);
  }
  
  .lightblue, .lightblue::before{
    accent-color: var(--lightblue);
    background-color: var(--lightblue);
    border: 3px solid var(--lightblue);
  }
  
  .beige, .beige::before{
    accent-color: var(--beige);
    background-color: var(--beige);
    border: 3px solid var(--beige);
  }

  .multi, .multi::before{
    accent-color: var(--yellow);
    background-color: var(--multi);
    background-image: var(--multi);
    border: 3px solid transparent;
  }
  
  </style>
  