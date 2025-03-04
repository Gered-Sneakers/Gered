<template>
    <div class="h-100">
        <div class="row h-50">
            <div class="col-2 col-lg-4 h-100 valign"></div>
            <div class="col-8 col-lg-4 h-100 valign">
                <div @click="Brands" class="w-100 text-center">
                    <!--
                    <input @keyup.enter="next" v-model="id" type="text" placeholder="ID" class="targets roundedz borderz border-blue id text-center d-inline" minlength="4" maxlength="4">
                    <input @keyup.enter="next" v-model="brand" type="text" placeholder="BRAND" class="targets roundedz borderz border-blue brand text-center d-none">
                    <input @keyup.enter="next" v-model="model" type="text" placeholder="MODEL" class="targets roundedz borderz border-blue model text-center d-none" maxlength="30">
                    <input @keyup.enter="kleuren(color);next();" v-model="color" type="text" placeholder="COLOR" class="targets roundedz borderz border-blue color text-center d-none">
                    <input @keyup.enter="next" v-model="size" type="text" placeholder="SIZE" class="targets roundedz borderz border-blue size text-center d-none" minlength="2" maxlength="2">
                    <input @keyup.enter="done" v-model="leverancier" type="text" placeholder="LEVERANCIER" class="targets roundedz borderz border-blue leverancier text-center d-none">
                    -->
                    <!-- ----------------------------------------------------------------------------------------------------- -->
                    <!-- ID -->
                    <input @keyup.enter="next" v-model="id" type="text" placeholder="ID" class="targets roundedz borderz border-blue id text-center d-inline" minlength="4" maxlength="4">
                    <!-- BRAND -->
                    <!--
                    <select @keyup.enter="next" value="BRAND" v-model="brand" name="brand" id="brand" class="targets roundedz borderz border-blue brand text-center valign d-none">
                        <option selected="selected">BRAND</option>
                        <Brand v-for="brand in Brands"
                          :key="brand.name"
                          :name="brand.name"
                          :img="brand.img"
                        >
                        </Brand>
                    </select>
                    -->
                    <div @keyup.enter="next();" class="targets row mx-3 mx-auto mw-200 d-none">
                        <div class="row">
                            <Brand v-for="b in Brands"
                                :key="b.name"
                                :name="b.name"
                                :img="b.img"
                                v-model="brand"
                            >
                            </Brand>
                        </div>
                    </div>
                    <!-- MODEL -->
                    <input @keyup.enter="next" v-model="model" type="text" placeholder="MODEL" class="targets roundedz borderz border-blue model text-center d-none" maxlength="30">
                    <!-- SIZE -->
                    <input @keyup.enter="next" v-model="size" type="text" placeholder="SIZE" class="targets roundedz borderz border-blue size text-center d-none" minlength="2" maxlength="2">
                    <!-- COLORS -->
                    <div @keyup.enter="kleuren(color);next();" class="targets row mx-3 mx-auto mw-200 d-none">
                        <div class="row">
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
                    </div>
                    <!-- LEVERANCIER -->
                    <select @keyup.enter="next" v-model="leverancier" name="leverancier" id="leverancier" class="targets borderz border-blue rounded text-center d-none">
                        <option>LEVERANCIER</option>
                        <Leverancier v-for="leverancier in Leveranciers"
                          :key="leverancier.name"
                          :name="leverancier.name"
                          :img="leverancier.img"
                        >
                        </Leverancier>
                    </select>
                    <!-- LACES + SOLES -->
                     <div @keyup.enter="next" class="targets row d-none">
                        <div class="col-6">
                            <label>laces</label>
                            <input type="checkbox" v-model="laces">
                        </div>
                        <div class="col-6">
                            <label>soles</label>
                            <input type="checkbox" v-model="soles">
                        </div>
                     </div>
                    <input type="text" size="14" class="roundedz borderz border-blue model text-center d-none" placeholder="laces">
                    
                </div>
            </div>
            <div class="col-2 col-lg-4 h-100"></div>
        </div>
        <div class="row h-50">
            <div class="col-2 h-50 p-2">
                <div @click="back" id="returnButton" class="returnButton square valign text-center d-none">
                    <img class="w-50 mx-auto rota180" src="../img/next.png">
                </div>
            </div>
            <div class="col-8 h-100">
                <div class="preview w-75 mx-auto text-center rounded borderz border-blue bg-white">
                    <div class="col row m-0 p-0 bg-blue pb-2 fw-bold text-white">
                        <div class="col-4 m-0 p-0 ms-2 valign">
                            <div id="kleur" class="small border border-light"></div>
                        </div>    
                        <div class="col-4">{{ id }}</div>
                        <div class="col-4 text-end">{{ size }}</div>
                    </div>
                    <div class="col row m-0 p-0 text-center borderz-bottom border-blue">
                        <span><span class="fw-bold">{{ brand }}</span> &nbsp; <span>{{ model }}</span></span>
                    </div>
                    <div class="col h34 valign">
                        <img width="20px" height="20px" class="abso float-start ms-2" src="../img/delivery.png">
                        <span class="w-100 text-center">&nbsp;{{ leverancier }}&nbsp;</span>
                    </div>
                </div>
            </div>
            <div class="col-2 h-50 p-2">
                <div @click="next" id="nextButton" class="nextButton square valign text-center">
                    <img class="w-50 mx-auto" src="../img/next.png">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
    import Brands from '@/assets/brands.json';
    import Brand from '@/components/Brand.vue';

    import Leveranciers from '@/assets/leveranciers.json';
    import Leverancier from '@/components/Leverancier.vue';

    import { ref , watch } from 'vue'

    //const selectFields = document.getElementById("brand").addEventListener("keypress",preventDefault);

    const id = ref();
    const brand = ref();
    const model = ref();
    const size = ref();
    const colors = ref([]);
    const laces = ref();
    const soles = ref();
    const leverancier = ref();

    import { computed } from "vue";

    defineProps(["imgPath"]);

    const resolvedImagePath = computed(() => new URL(`/src/img/brands/${imgPath}`, import.meta.url).href);


    const targets = document.getElementsByClassName("targets");
    var counter = 0;

    function next(){
        console.log(counter);
        console.log(targets[counter]);
        //CURRENT
        targets[counter].classList.remove("d-inline");
        targets[counter].classList.add("d-none");
        //NEXT
        targets[counter+1].classList.remove("d-none");
        targets[counter+1].classList.add("d-inline");
        targets[counter+1].focus();
        //COUNTER NEXT
        counter = counter + 1;
        console.log(counter);
        console.log(targets[counter]);
        if(counter == 1){
            document.getElementsByClassName("returnButton")[0].classList.remove("d-none");
            document.getElementsByClassName("returnButton")[0].classList.add("d-flex");
        }
        if(counter == targets.length-1){
            document.getElementsByClassName("nextButton")[0].classList.remove("d-flex");
            document.getElementsByClassName("nextButton")[0].classList.add("d-none");
        } 
        
    }

    function back(){
        //CURRENT
        targets[counter].classList.remove("d-inline");
        targets[counter].classList.add("d-none");
        //PREVIOUS
        targets[counter-1].classList.remove("d-none");
        targets[counter-1].classList.add("d-inline");
        targets[counter-1].focus();
        if(counter == 1){
            document.getElementsByClassName("returnButton")[0].classList.remove("d-flex");
            document.getElementsByClassName("returnButton")[0].classList.add("d-none");
        }
        if(counter == targets.length-1) {
            document.getElementsByClassName("nextButton")[0].classList.remove("d-none")
            document.getElementsByClassName("nextButton")[0].classList.add("d-flex");
        }
        //COUNTER PREVIOUS
        counter = counter - 1;
        
    }

    function done(){
        //var id = document.getElementsByClassName("id")[0].value;
        //var brand = document.getElementsByClassName("brand")[0].value;
        //var model = document.getElementsByClassName("model")[0].value;
        //var color = document.getElementsByClassName("color")[0].value;
        //var size = document.getElementsByClassName("size")[0].value;
        //var leverancier = document.getElementsByClassName("leverancier")[0].value;

        console.log("ID: " + id.value);
        console.log("brand: " + brand.value);
        console.log("model: " + model.value);
        console.log("color: " + color.value);
        console.log("size: " + size.value);
        console.log("leverancier: " + leverancier.value);
    }

    function kleuren(kleur){
        var kleurDiv = document.getElementById("kleur");

        kleurDiv.style.backgroundColor = kleur;
    }

    function preventDefault(event){
        event.preventDefault();
    }
    //console.log(document.getElementById("returnButton"));
    //if(counter == 0) document.getElementById("returnButton").classList.add("d-none");

/*
  export default {
    name: 'fullscreenform_View',
    data(){
        return{
            targets: document.getElementsByClassName("targets"),
            counter: 0,
            id: "",
            brand: "",
            model: "",
            color: "",
            size: "",
            leverancier:""
        }
    },
    props: {
  
    },
    methods: {
        next(targets){
            console.log(this.counter);
            console.log(targets[this.counter]);
            //console.log(targets);

            targets[this.counter].classList.remove("d-inline");
            targets[this.counter].classList.add("d-none");

            targets[this.counter+1].classList.remove("d-none");
            targets[this.counter+1].classList.add("d-inline");
            targets[this.counter+1].focus();

            this.counter = this.counter + 1;
            
            console.log(this.counter);
            console.log(targets[this.counter]);
        },
        back(targets,counter){
            targets[counter].classList.remove("d-inline");
            targets[counter].classList.add("d-none");
            targets[counter-1].classList.remove("d-none");
            targets[counter-1].classList.add("d-inline");

            return counter;
        },
        done(){
            var id = document.getElementsByClassName("id")[0].value;
            var brand = document.getElementsByClassName("brand")[0].value;
            var model = document.getElementsByClassName("model")[0].value;
            var color = document.getElementsByClassName("color")[0].value;
            var size = document.getElementsByClassName("size")[0].value;
            var leverancier = document.getElementsByClassName("leverancier")[0].value;

            console.log("ID: " + id);
            console.log("brand: " + brand);
            console.log("model: " + model);
            console.log("color: " + color);
            console.log("size: " + size);
            console.log("leverancier: " + leverancier);
        }
    }
  }
*/
</script>
  
<style scoped>
    .square{
        width: 100%;
        position: relative;
    }

    .square:after{
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    .preview{
        max-width: 600px;
    }

    .bottom{
        position: absolute !important;
        bottom: 150px;
    }

   .returnButton:hover, .nextButton:hover{
    /*background-color: #009ffd;*/
    background-color: rgba(255,255,255,0.66);
    border-radius: 50%;
    transform: scale(1.05);

   }
/*
   .returnButton, .nextButton{
    background-color: rgba(0,153,253,0.66);
    display: flex;
    justify-content: center !important;
   }
*/

   input[type=text],select,select option{
    width: 100%;
    height: 66px;
    font-size: 50px;
   }

   input[type=text]:focus{
    outline:none;
   }

   .big{
    font-size: 50px;
   }

   .rota180{
    transform: rotate(180deg);
   }

   .rota0{
    transform: rotate(0deg);
   }

   .small{
    width: 16px;
    height: 16px;
   }

   .smallz{
    width: 22px;
    height: 22px;
   }

   .h43{
    height: 34px !important;
   }

   .abso{
    position:absolute;
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