<template>
    <div class="add row m-0 p-0 text-center fw-bold text-white" @keyup.enter="count">
        <div class="col-12 vh-10 rounded-top bg-blue text-white">
            <div class="title valign">
                <p class="w-100 text-center">+ Sneaker</p>
            </div>
        </div>
        <div class="col-12 vh-70 pt-3 border-left border-right border-blue">
            <div class="row m-0 p-0 s1 sequence d-flex">
                <div class="col-12">
                    <input type="text" size="14" class="border border-blue rounded text-center" placeholder="id" v-model="id">
                </div>
            </div>
            <!-- *** DEFTIG UITWERKEN *** BRANDS ***
            <div class="row m-0 p-0 s2 d-flex">
                <div class="col-12" v-for="brand in Brands">
                    <label>
                        <p>{{ brand.img }}</p>
                        <input type="radio" name="test" :value="brand.name" v-model="picked" checked>
                        <img :src="publicUrl + brand.img" :alt="brand.name">
                    </label>
                    
                </div>
            </div>
            -->
            <div class="row m-0 p-0 w-50 mx-auto s2 sequence d-none">
                <div class="col">
                    <label class="rounded borderzz border-blue">
                        <input type="radio" name="test" value="Adidas" v-model="picked" checked>
                        <img width="50px" src="../img/brands/adidas.png" alt="Adidas">
                    </label>
                </div>
                <div class="col">
                    <label class="rounded borderzz border-blue">
                        <input type="radio" name="test" value="Asics" v-model="picked" checked>
                        <img width="50px" src="../img/brands/Asics.png" alt="Asics">
                    </label>
                </div>
                <div class="col">
                    <label class="rounded borderzz border-blue">
                        <input type="radio" name="test" value="Nike" v-model="picked" checked>
                        <img width="50px" src="../img/brands/Nike.png" alt="Nike">
                    </label>
                </div>
                <div class="col">
                    <label class="rounded borderzz border-blue">
                        <input type="radio" name="test" value="Adidas" v-model="picked" checked>
                        <img width="50px" src="../img/brands/adidas.png" alt="Adidas">
                    </label>
                </div>
            </div>
            <div class="row m-0 p-0 mx-auto s3 sequence d-none">
                <div class="col-12">
                    <input type="text" size="14" class="border border-blue rounded text-center" placeholder="model">
                </div>
            </div>
            <div class="row m-0 p-0 w-50 mx-auto s4 sequence d-none">
                <div class="col">
                    <label class="rounded borderzz border-blue">
                        <input type="radio" name="test" value="Opnieuw & Co" v-model="picked" checked>
                        <img width="50px" src="../img/leveranciers/oco.png" alt="Opnieuw & Co">
                    </label>
                </div>
                <div class="col">
                    <label class="rounded borderzz border-blue">
                        <input type="radio" name="test" value="kringwinkel" v-model="picked" checked>
                        <img width="50px" src="../img/leveranciers/kringwinkel.png" alt="De kringwinkel">
                    </label>
                </div>
                <div class="col">
                    <label class="rounded borderzz border-blue">
                        <input type="radio" name="test" value="Gered" v-model="picked" checked>
                        <img width="50px" src="../img/leveranciers/Gered.png" alt="Gered">
                    </label>
                </div>
            </div>
            <div class="row m-0 p-0 mx-auto s5 sequence d-none">
                <div class="col-12">
                    <input type="text" size="14" class="border border-blue rounded text-center" placeholder="size">
                </div>
            </div>
            <div class="row m-0 p-0 mx-auto mw-200 s6 sequence d-none">
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
            </div>
            <div class="row m-0 p-0 mx-auto s7 sequence d-none">
                <div class="col-12">
                    <input type="text" size="14" class="border border-blue rounded text-center" placeholder="laces">
                </div>
            </div>
            <div class="row m-0 p-0 mx-auto s8 sequence d-none">
                <div class="col-12">
                    <input type="text" size="14" class="border border-blue rounded text-center" placeholder="soles">
                </div>
            </div>
            <div class="row m-0 p-0 mx-auto d-none">
                <div class="col-12">
                    <button class="w-25 multi" @click="show"> TEST </button>
                </div>
            </div>
          <!--<input type="file" size="14" class="border border-blue rounded text-center" accept="image/png, image/jpeg"><br>-->
          <!--<input type="text" size="14" class="border border-blue rounded text-center" placeholder="id" v-model="id"><br>-->
          <!--<select name="brand" id="brand" class="border border-blue rounded text-center">
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
          </select><br>-->
          <!--<input type="text" size="14" class="border border-blue rounded text-center" placeholder="model"><br>-->
          <!--<select name="leverancier" id="leverancier" class="border border-blue rounded text-center">
            <option>LEVERANCIER</option>
            <option value="Oco">Opnieuw & Co</option>
            <option value="Kringloop">Kringloop</option>
            <option value="Gered">Gered</option>
          </select><br>-->
          <!--<input type="text" size="14" class="border border-blue rounded text-center" placeholder="size"><br>-->
          <!-- **COLORS**
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
          -->
          <!--
          <div class="col-3 m-1 valign mx-auto rounded darkgreen"><input type="checkbox" class="darkgreen" value="donkergroen"></div>
          <div class="col-3 m-1 valign mx-auto rounded navy"><input type="checkbox" class="navy" value="donkerblauw"></div>
          -->
          <!--
          </div>
          -->
          <!--<input type="text" size="14" class="border border-blue rounded text-center" placeholder="laces"><br>-->
          <!--<input type="text" size="14" class="border border-blue rounded text-center" placeholder="soles"><br>-->

          <p>{{ id }}</p>
          <p>{{ colors }}</p>

          

          <img @click="uittikken" class="goButton rotate mx-auto" src="../img/gered_logo.png">
        </div>
    </div>
</template>
<script setup>
import Brands from '@/assets/brands.json';
import Brand from '@/components/Brand.vue';

import { ref } from 'vue'

const id = ref();
const brand = ref("");
const model = ref("");
const leverancier = ref("");
const size = ref();
const colors = ref([]);
const laces = ref("");
const soles = ref("");

var countSequence = 0;
const countArray = ["s1","s2","s3","s4","s5","s6","s7"];

const publicUrl = "http://localhost:5173/#/"
const chosenBrand = "";

var s1 = document.getElementsByClassName("s1");
var s2 = document.getElementsByClassName("s2");
var s3 = document.getElementsByClassName("s3");
var s4 = document.getElementsByClassName("s4");
var s5 = document.getElementsByClassName("s5");
var s6 = document.getElementsByClassName("s6");
var s7 = document.getElementsByClassName("s7");
var s8 = document.getElementsByClassName("s8");

var allSequence = document.getElementsByClassName("sequence");



function show(){   
  console.log(id);
  console.log(colors);
}

function count(){
    countSequence = countSequence+1;
    console.log(countSequence);
    switch(countSequence){
        case 0:
            clear();    
            s1.classList.remove("d-none");
            s1.classList.add("d-flex");
            break;
        case 1: 
            console.log("S1");
            console.log(s1);
            console.log("S2");
            console.log(s2);

            clear();
            s2.classList.remove("d-none");
            s2.classList.add("d-flex");

            console.log("S1");
            console.log(s1);
            console.log("S2");
            console.log(s2);
            break;/*
        case 2:
            if(s3.classList.contains("d-none")) s3.classList.add("d-flex");
            break;
        case 3:
            if(s1.classList.contains("d-none")) s1.classList.add("d-flex");
            break;
            */
    }
}

function clear(){
    console.log(allSequence);
    for(var x = 0; x < allSequence.length ; x++){
        if(allSequence[x].classList.contains("d-flex")){
            allSequence[x].classList.remove("d-flex");
            allSequence[x].classList.add("d-none");
        }
    }
}
</script>
<style scoped>
  .s1,.s2,.s3,.s4,.s5,.s6,.s7{
    height: 100%;
  }

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

    /* HIDE RADIO */
    [type=radio] { 
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

    /* IMAGE STYLES */
    [type=radio] + img {
      cursor: pointer;
    }

    /* CHECKED STYLES */
    [type=radio]:checked + img {
      border: 2px solid #f00;
      border-top-left-radius: .25rem;
      border-top-right-radius: .25rem;
      border-bottom-left-radius: .25rem;
      border-bottom-right-radius: .25rem;
    }
</style>