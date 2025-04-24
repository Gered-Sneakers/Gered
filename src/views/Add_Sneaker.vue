<template>
    <!-- LOGIN -->
    <div class="row m-0 h-100 mainTargets d-flex">
        <div class="col-12 vh-10 rounded-top bg-blue text-white">
            <div class="title h-100 valign">
                <p class="w-100 text-center">Add Sneaker</p>
            </div>
        </div>

        <div class="row m-0 w-100 h-100 text-center">
            <div class="col-12 vh-80">
            <div class="h-100 valign text-center mx-auto">
            <div class="row m-0 valign">
                <div class="row m-0 p-0 mx-auto">
                    <input 
                        type="text" size="14" id="loginNaam" placeholder="naam"
                        class="text-center mx-auto borderz border-blue roundedz mb-3"  
                        v-model="creator"
                        @keyup.enter="document.getElementById('loginPass').focus()"
                        >
                </div>
                <div class="row m-0 p-0 mx-auto">
                    <input 
                        type="password" size="14" id="loginPass"  placeholder="pass"
                        class="text-center mx-auto borderz border-blue roundedz mb-3" 
                        v-model="pass"
                        @keyup.enter="login()" 
                        > <!-- GO() moet hier terugkome -->
                </div>
                <!--
                <div class="row m-0 p-0 mx-auto">
                  <div class="w-100 mx-auto text-center">
                    <img @click="go();testUser();" class="goButton rotate mx-auto" src="../img/gered_logo.png">
                  </div>
                </div>
                -->
            </div>
            </div>
            </div>
        </div>
    </div>
    <!-- LEVERANCIER -->
    <div class="row h-100 mainTargets d-flex">
        <div id="xxxxxxx" class="row mx-3 mx-auto">
            <div class="row mw-800 mx-auto valign">
                <div class="row">
                <select id="leveranciers" name="leveranciers"
                    class="col-3 m-1 valign mx-auto roundedz borderz border-blue"
                    v-model="leverancier" value="Leverancier" @change="go()"
                    >
                    <option disabled selected value="undefined"> Leverancier</option> 
                    <option v-for="l in Leveranciers"> {{ l.name }} </option>
                    <!--
                    <label class="w-100">
                      <input 
                        type="radio" 
                        :value=l.name
                        v-model="leverancier"
                        @click="go(),leverancierImg=l.img"
                        >
                    
                      <img class="w-100" :src="resolvedImgPath(l.img)" :title="l.name">
                    </label>-->
                </select>
                </div>
            </div>
        </div>
    </div>
    <div class="row h-100 mainTargets mx-auto text-Gered d-none">
        <div class=" mx-auto col-4 col-xxl-2 h-100 rounded-top d-flex align-items-center position-relative">
            <div class="sneakerPreview w-100 m-0 p-0 d-flex borderzz border-blue roundedz">
                <div class="container h-100 position-relative">
                    <div class="row m-0 p-0 mt-3 mb-5">
                        <div class="col-12 text-center">
                            <span class="px-3 py-2 h3 fw-bold" :class="labelColor">{{ id }}</span>
                        </div>
                    </div>
                    <div class="row m-0 p-0 border-2 border-bottom border-dark">
                        <div class="col-12 m-0 p-0 pb-1 fw-bold text-center">
                            <span class="align-middle text-center">Overzicht</span>
                        </div>
                    </div>
                    <div class="row m-0 p-0 pt-2">
                        <div class="col-3 valign"><img class="smallz blackIcons" src="@/img/tag.png"></div>
                        <div class="col-9 text-end">{{ brand }}{{ " " }}<span v-if="model">{{ model = model.charAt(0).toUpperCase() + model.substring(1) }}</span></div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz blackIcons" src="@/img/ruler.png"></div>
                        <div class="col-9 text-end">{{ size }}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz blackIcons" src="@/img/color.png"></div>
                        <div class="col-9 text-end">
                            <KleurPreview 
                                v-for="c in colors"
                                :color="c"
                            />
                        </div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz blackIcons" src="@/img/laces2.png"></div>
                        <div class="col-9 text-end">{{lacesz}}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz blackIcons" src="@/img/soles.png"></div>
                        <div class="col-9 text-end">{{solesz}}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz blackIcons" src="@/img/sneaker.png"></div>
                        <div class="col-9 text-end">{{statusz}}<br v-if="teRepareren">{{teRepareren}}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz blackIcons" src="@/img/delivery.png"></div>
                        <div class="col-9 text-end">{{leverancier}}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz blackIcons" src="@/img/login.png"></div>
                        <div class="col-9 text-end">{{ creator }}</div>
                    </div>
                    <hr class="w-90 mx-auto my-2 opacity-25">
                    <div class="row m-0 p-0">
                        <div class="col-3 valign"><img class="smallz blackIcons" src="@/img/clock.png"></div>
                        <div class="col-9 text-end">{{datum}}</div>
                    </div>
                    <div class="row m-0 p-0 mb-4"></div>
                </div>
            </div>
        </div>
        <div @keyup.enter="testUser()" class="FORM col-8 col-xxl-10">
            <div class="row h-100 valign">
                <div class="col-2 p-2">
                    <div @click="back" id="returnButton" class="returnButton grow boxShadow-blue square valign text-center d-none">
                        <img class="w-50 mx-auto rota180 selectDisable" src="../img/next.svg">
                    </div>
                </div>
                <div class="col-8">
                    <div class="w-100 text-center"> <!--@keyup.enter="next"-->
                        <!-- ID + LABELCOLOR  -->
                        <div id="IDLABEL" class="row w-100 targets" @keyup.enter="next">
                            <div class="row m-0 p-0">
                                <input id="ID" @keyup.enter="createDate();checkboxLimit();" v-model="id" type="text" placeholder="Label NR" class="roundedz borderz border-blue id text-center mx-auto d-inline " minlength="4" maxlength="4">
                            </div>
                            <div class="row mt-3 mx-auto mw-800">
                                <Label v-for="labelcolor in LabelColors"
                                :name="labelcolor"
                                class="mx-auto text-center"
                                v-model="labelColor"
                                ></Label>
                            </div>
                        </div>
                        <!-- BRAND -->                    
                        <div id="brands" class="targets row mx-3 mx-auto d-none">
                        <div class="row w-100">
                            <Brand id="brand"
                                v-for="b in Brands"
                                :key="b.name"
                                :name="b.name"
                                :img="b.img"
                                v-model="brand"
                                @keyup.enter="next"
                                />
                        </div>
                        </div>
                        <!-- MODEL -->
                        <input @keyup.enter="next" id="MODEL" v-model="model" type="text" placeholder="MODEL" class="targets roundedz borderz border-blue model text-center d-none" maxlength="30">
                        <!-- SIZE -->
                        <input @keyup.enter="next" id="SIZE" v-model="size" type="text" placeholder="SIZE" class="targets roundedz borderz border-blue size text-center d-none" minlength="2" maxlength="2">
                        <!-- COLORS -->
                        <div @keyup.enter="next" id="COLORS" class="targets row w-100 mx-3 mx-auto d-none">
                            <div class="row w-100 mw-800 mx-auto" id="checkboxgroup" @click="checkboxLimit">
                                <div class="col-3 m-1 valign mx-auto rounded colorSquare red"><div class="mx-auto"><input type="checkbox" class="colorz red" value="rood" v-model="colors"></div></div>
                                <div class="col-3 m-1 valign mx-auto rounded colorSquare green"><div class="mx-auto"><input type="checkbox" class="colorz green" value="groen" v-model="colors"></div></div>
                                <div class="col-3 m-1 valign mx-auto rounded colorSquare blue"><div class="mx-auto"><input type="checkbox" class="colorz blue" value="blauw" v-model="colors"></div></div>
                                <div class="col-3 m-1 valign mx-auto rounded colorSquare yellow"><div class="mx-auto"><input type="checkbox" class="colorz yellow" value="geel" v-model="colors"></div></div>
              
                                <div class="col-3 m-1 valign mx-auto rounded colorSquare purple"><div class="mx-auto"><input type="checkbox" class="colorz purple" value="paars" v-model="colors"></div></div>
                                <div class="col-3 m-1 valign mx-auto rounded colorSquare lightgreen"><div class="mx-auto"><input type="checkbox" class="colorz lightgreen" value="lichtgroen" v-model="colors"></div></div>
                                <div class="col-3 m-1 valign mx-auto rounded colorSquare lightblue"><div class="mx-auto"><input type="checkbox" class="colorz lightblue" value="lichtblauw" v-model="colors"></div></div>
                                <div class="col-3 m-1 valign mx-auto rounded colorSquare orange"><div class="mx-auto"><input type="checkbox" class="colorz orange" value="oranje" v-model="colors"></div></div>

                                <div class="col-3 m-1 valign mx-auto rounded colorSquare pink"><div class="mx-auto"><input type="checkbox" class="colorz pink" id="xx"value="roos" v-model="colors"></div></div>
                                <div class="col-3 m-1 valign mx-auto rounded colorSquare grey"><div class="mx-auto"><input type="checkbox" class="colorz grey" value="grijs" v-model="colors"></div></div>
                                <div class="col-3 m-1 valign mx-auto rounded colorSquare black"><div class="mx-auto"><input type="checkbox" class="colorz black" value="zwart" v-model="colors"></div></div>
                                <div class="col-3 m-1 valign mx-auto rounded colorSquare beige"><div class="mx-auto"><input type="checkbox" class="colorz beige" value="beige" v-model="colors"></div></div>
                                <div class="col-3 m-1 valign mx-auto rounded colorSquare white"><div class="mx-auto"><input type="checkbox" class="colorz white" value="wit" v-model="colors"></div></div>
                                <div class="col-3 m-1 valign mx-auto rounded colorSquare multi"><div class="mx-auto"><input type="checkbox" class="colorz multi" value="multi" v-model="colors"></div></div>
                            </div>
                        </div>
                        <!-- LACES + SOLES -->
                        <div id="REPAIR" class="targets row text-start d-none">
                        <div class="row m-0 p-0 mw-800 mx-auto">
                            <div class="col-4 my-3 d-inline-block text-center">
                                <input type="checkbox" name="check1" v-model="laces"  class="text-center" @click="lacesCheckbox()"@keyup.enter="saveSneaker"><br>
                                <img class="w-75 text-center blackIcons" src="../img/laces2.png" @click="lacesCheckbox()">
                                <label for="check1"> Geen veters  </label>
                            </div>
                            <div class="col-4 my-3 d-inline-block text-center">
                                <input type="checkbox" name="check2" v-model="soles" @click="solesCheckbox()"@keyup.enter="saveSneaker"><br>
                                <img class="w-75 text-center blackIcons" src="../img/soles.png">
                                <label for="check2"> Geen binnenzool</label>
                            </div>
                            <div class="col-4 my-3 d-inline-block text-center" >
                                <input type="checkbox" name="check3" v-model="status" @click="statusCheckbox()"@keyup.enter="saveSneaker"><br>
                                <img class="w-75 text-center blackIcons" src="../img/broken.png">
                                <label for="check3"> Beschadigd </label>
                            </div>
                            <div class="col-12 my-3 d-inline-block text-center">
                                <input type="text" placeholder="Beschrijf schade"
                                class="w-100 roundedz borderz border-blue mx-auto text-center" 
                                v-model="teRepareren"
                                @keyup.enter="saveSneaker"
                                >
                            </div>
                        </div>
                        </div>
                        <!--<input type="text" size="14" class="roundedz borderz border-blue model text-center d-none" placeholder="laces">-->
                    </div>
                </div>
                <div class="col-2 p-2">
                    <div @click="next" id="nextButton" class="nextButton grow boxShadow-blue square valign text-center">
                        <img class="w-50 mx-auto selectDisable" src="../img/next.svg">
                    </div>
                    <div @click="showConfirmBox" id="addButton" class="addButton grow boxShadow-blue square valign text-center d-none">
                        <img class="w-50 mx-auto selectDisable" src="../img/add.svg">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="full m-0 p-0 d-none"  id="confirm">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
            <div class="col-6 bg-dark text-light mx-auto roundedz p-5">
                <p>Ben je zeker dat je {{ id }} wil toevoegen?</p>
                <button class="bg-green" @click="saveSneaker">YES</button> 
                <button class="bg-red ms-2" @click="refuse">NO</button>
            </div>
        </div>
    </div>
<!--
    <ConfirmBox
        id="confirm"
        ref="confirmBoxRef"
        class="d-none"
        :id="id"
        :parentConfirm="saveSneaker"
        :parentRefuse="refuse"
    >
    </ConfirmBox>
-->

</template>
  
<script setup>
    import Brands from '@/assets/brands.json';
    import Brand from '@/components/Brand.vue';

    import Leveranciers from '@/assets/leveranciers.json';
    import Leverancier from '@/components/Leverancier.vue';

    import LabelColors from '@/assets/labelColors.json';
    import Label from '@/components/Label.vue';

    import KleurPreview from '@/components/KleurPreview.vue';
    import LabelPreview from '@/components/LabelPreview.vue';

    import ConfirmBox from '@/components/ConfirmBox.vue';

    import SneakerService from '@/services/SneakerService';

    import { ref } from 'vue'
    import WerknemerService from '@/services/WerknemerService';

    var id = ref();
    var labelColor = ref();
    var brand = ref();
    var model = ref();
    var size = ref();
    var colors = ref([]);
    var laces = ref(0);
    var soles = ref(0);
    var leverancier = ref();
    var status = ref(0);
    var teRepareren = ref();

    var lacesz = "aanwezig";
    var solesz = "aanwezig";
    var statusz = "cleaning";
    
    var datum = createDate();
    var creator = ref();
    var pass = ref();

    const mainTargets = document.getElementsByClassName("mainTargets");
    const targets = document.getElementsByClassName("targets");

    //const previewImg = document.getElementsByClassName("previewImg");

    var mainCounter = 0;
    var counter = 0;

    
    
    //----------------------
    //      FRONTEND
    //----------------------
    function login(){
        console.log(creator.value);
        console.log(pass.value);

        WerknemerService.login({name:creator.value,password:pass.value})
        .then(res => {
            go();
        })
        .catch(error=>{
            //console.error(error);
            alert("Je gegevens klopte niet.");
        })
    }

    function go(){
        mainTargets[mainCounter].classList.remove("d-flex");
        mainTargets[mainCounter].classList.add("d-none");
        mainCounter += 1;
        console.log(mainCounter);
        mainTargets[mainCounter].classList.remove("d-none");
        mainTargets[mainCounter].classList.add("d-flex");

        //var idlabel = 
        document.getElementById("ID").focus();
        //console.log(idlabel);
    }

    function next(){
        //console.log("NEXT");
        //console.log("COUNTER START: " + counter);
        //console.log(targets[counter]);

        //CURRENT
        targets[counter].classList.remove("d-inline");
        targets[counter].classList.add("d-none");

        counter = counter + 1;

        //NEXT
        targets[counter].classList.remove("d-none");
        targets[counter].classList.add("d-inline");
        targets[counter].focus();

        //COUNTER NEXT
        if(counter == 1){
            document.getElementsByClassName("returnButton")[0].classList.remove("d-none");
            document.getElementsByClassName("returnButton")[0].classList.add("d-flex");
        }
        if(counter == targets.length-1){
            document.getElementsByClassName("nextButton")[0].classList.remove("d-flex");
            document.getElementsByClassName("nextButton")[0].classList.add("d-none");

            document.getElementsByClassName("addButton")[0].classList.remove("d-none");
            document.getElementsByClassName("addButton")[0].classList.add("d-flex");
        }
        
        //console.log("COUNTER NEXT: ")
        //console.log(counter);
    }

    function back(){
        //console.log("BACK");
        //console.log("COUNTER START: " + counter);
        //console.log(targets[counter]);

        //CURRENT
        targets[counter].classList.remove("d-inline");
        targets[counter].classList.add("d-none");

        counter = counter - 1;

        //PREVIOUS
        targets[counter].classList.remove("d-none");
        targets[counter].classList.add("d-inline");
        targets[counter].focus();

        if(counter == 0){
            document.getElementsByClassName("returnButton")[0].classList.remove("d-flex");
            document.getElementsByClassName("returnButton")[0].classList.add("d-none");
        }

        if(counter == targets.length-1) {
            document.getElementsByClassName("addButton")[0].classList.remove("d-flex");
            document.getElementsByClassName("addButton")[0].classList.add("d-none");

            document.getElementsByClassName("nextButton")[0].classList.remove("d-none")
            document.getElementsByClassName("nextButton")[0].classList.add("d-flex");
        }

        if(counter == targets.length-2) {
            document.getElementsByClassName("addButton")[0].classList.remove("d-flex");
            document.getElementsByClassName("addButton")[0].classList.add("d-none");

            document.getElementsByClassName("nextButton")[0].classList.remove("d-none")
            document.getElementsByClassName("nextButton")[0].classList.add("d-flex");            
        }
        
    }

    function resetTargets(){
        // HIDE LAST PAGE
        targets[counter].classList.remove("d-inline");
        targets[counter].classList.add("d-none");

        counter = 0;

        // SHOW FIRST PAGE
        targets[counter].classList.remove("d-none");
        targets[counter].classList.add("d-inline");

        // RESET ADD BUTTON
        document.getElementsByClassName("addButton")[0].classList.remove("d-flex");
        document.getElementsByClassName("addButton")[0].classList.add("d-none");

        // RESET BACK BUTTON
        document.getElementsByClassName("returnButton")[0].classList.remove("d-flex");
        document.getElementsByClassName("returnButton")[0].classList.add("d-none");

        // RESET NEXT BUTTON
        document.getElementsByClassName("nextButton")[0].classList.remove("d-none");
        document.getElementsByClassName("nextButton")[0].classList.add("d-flex");
    }

    function createDate(){
        var now = new Date();

        var hour = now.getHours();
        var minut = now.getMinutes();
        var time = hour+":"+minut;

        var day = now.getDate();
        var month = now.getMonth()+1;
        var year = now.getFullYear();
        var today = day+"-"+month+"-"+year;


        console.log(time);
        console.log(today);

        return today;
    }

    function checkboxLimit() {
	    var checkboxgroup = document.getElementById('checkboxgroup').getElementsByClassName("colorz");
        //console.log(checkboxgroup);
        
        //Note #2 Change max limit here as necessary
        var limit = 3;
        
	    for (var i = 0; i < checkboxgroup.length; i++) {
	    	checkboxgroup[i].onclick = function() {
	    		var checkedcount = 0;
	    			for (var i = 0; i < checkboxgroup.length; i++) {
	    			checkedcount += (checkboxgroup[i].checked) ? 1 : 0;
	    		}
	    		if (checkedcount > limit) {
	    			alert("Je kan maximaal " + limit + " kleuren kiezen.");
	    			this.checked = false;
	    		}
	    	}
	    }
    }

    function colorCheck(){
        if(colors.value.length >= 0) return true;
        else alert("Je moet een kleur kiezen");
    }

    function statusCheckbox(){
        if(status.value == false) statusz = "repair";
        else statusz = "cleaning";
    }

    function lacesCheckbox(){
        if(laces.value == false) lacesz = "geen";
        else lacesz = "aanwezig";
    }

    function solesCheckbox(){
        if(soles.value == false) solesz = "geen";
        else solesz = "aanwezig";
    }

    function saveSneaker(){
        //if(id.value.length == 4) 
        /*
            console.log("ID is good");
            console.log("LABEL: " + labelColor.value.length);
            console.log("BRAND: " + brand.value.length);
            console.log("MODEL: " + model.value.length);
            console.log("SIZE: " + size.value.lenght);
            console.log("COLORS: " + colorsToString());
            console.log("LEVERANCIER: " + leverancier.value.lenght);
            console.log("LACES: " + lacesz.length);
            console.log("SOLES: " + solesz.length);
            console.log("STATUS: " + statusz.length + " " + teRepareren.value.lenght);
            */
        console.log(creator.value);
        var data = {
            id: id.value,
            colorlabel: labelColor.value,
            date: datum,
            brand: brand.value,
            model: model.value,
            size: size.value,
            colors: colorsToString(),
            supplier: leverancier.value,
            laces: lacesz,
            soles: solesz,
            status: statusz,
            teRepareren: teRepareren.value,
            //verkoop: verkoop,
            creator: creator.value
        };

        console.log(data);

        SneakerService.create(data)
        .then(response => {
            id = response.data.id;
        })
        .catch( error => {
            console.log(error);
        });

        resetSneaker();
        resetTargets();
        refuse();

    }

    function resetSneaker(){
        id.value = "";
        labelColor.value = "";
        brand.value = "";
        model.value = "";
        size.value = "";
        colors.value = [];
        laces.value = "";
        soles.value = "";
        status.value = "";
        teRepareren.value = "";

    }

    function colorsToString(){
        var colorsString = "";
        for(var x=0;x<colors.value.length;x++){
            colorsString = colorsString + colors.value[x] + " ";
        }

        return colorsString;
    }

    function capitalize(string){
        const firstLetter = string.charAt(0);
        const rest = string.substring(1);

        firstLetter = firstLetter.toUpperCase();

        //console.log(firstLetter+rest);
        return firstLetter+rest;
    }
/*
    async function login(){
        try{
            await authenticateService.login({
                name: this.name,
                pass: this.pass
            })
        }
        catch(error){
            this.error = error.response.data
        }
    }
*/
    function showConfirmBox(){
        document.getElementById("confirm").classList.remove("d-none");
    }

    function refuse(){
        document.getElementById("confirm").classList.add("d-none");
    } 

    function testUser(){
        console.log("TEST");
        console.log(creator.value);
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
    }

    #loginNaam{
        width: 50vw;
        height: 10vh;
        font-size: 4em;
        max-width: inherit !important;
    }

    #loginPass{
        width: 50vw;
        height: 10vh;
        font-size: 4em;
        max-width: inherit !important;
    }

    .selectDisable {
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    .whiteIcons{
        filter: brightness(0) invert(1);
    }

    .blackIcons{
        filter: brightness(0) !important;
    }

    .square{
        width: 100%;
        position: relative;
    }

    .square:after{
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    .colorSquare input[type=checkbox]{

    }


    .colorSquare{
        width: 25% !important;
        position: relative;
    }

    .colorSquare:after{
        content: "";
        display: block;
        padding-bottom: 100%;
    }

    .input{
        max-width: 300px;
    }

    .w-90{
        width: 90% !important;
    }

    #BRANDS #BRANDS:checked,label:has(#brand:checked){
      /*background-color: rgba(0,159,253,0.5);*/
      background-color:blueviolet;
      border: 5px solid var(--gblue) !important;
      border-radius: 25%;
    }

    .preview{
        max-width: 600px;
        z-index: 10;
    }

    .bottom{
        position: absolute !important;
        bottom: 150px;
    }

   input[type=text],select,select option{
    width: 100%;
    max-width: 400px;
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

   .medium{
    width: 66px;
    height: 66px;
   }

   .h34{
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

  .mw-800{
    max-width: 800px;
  }

  [type=radio]{
    position: absolute;
    width: 0;
    height: 0;
  }

  [type=radio] + img{
    cursor: pointer;
  }

  [type=radio]:checked + img{
    background-color: rgba(0,159,253,0.5);
    border: 5px solid rgb(0,159,253);
    border-radius: 0.375rem !important;
  }

  #leveranciers{
    height: auto !important;
  }

  .centered{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .labelBlue{
    background-color: rgb(100, 125, 250);
  }

  .labelPink{
    background-color: rgb(250, 168, 241);
  }

  .labelGreen{
    background-color: rgb(146, 250, 146);
  }

  .labelGrey{
    background-color: rgb(163, 163, 163);
  }

  .labelYellow{
    background-color: rgb(249, 249, 125);
  }

  .rood, .red, .red::before{
    accent-color: var(--red);
    background-color: var(--red);
    border: 3px solid var(--red);
  }

  .groen, .green, .green::before{
    accent-color: var(--green);
    background-color: var(--green);
    border: 3px solid var(--green);
  }

  .blauw, .blue, .blue::before{
    accent-color: var(--blue);
    background-color: var(--blue);
    border: 3px solid var(--blue);
  }

  .geel, .yellow, .yellow::before{
    accent-color: var(--yellow);
    background-color: var(--yellow);
    border: 3px solid var(--yellow);
    color: black;
  }

  .grijs,.grey, .grey::before{
    accent-color: var(--grey);
    background-color: var(--grey);
    border: 3px solid var(--grey);
  }
  
  .zwart, .black, .black::before{
    accent-color: var(--black);
    background-color: var(--black);
    border: 3px solid var(--black);
  }
  
  .wit, .white, .white::before{
    accent-color: var(--white);
    background-color: var(--white);
    border: 3px solid var(--white);
  }
  
  .paars, .purple, .purple::before{
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
  
  .oranje,.orange, .orange::before{
    accent-color: var(--orange);
    background-color: var(--orange);
    border: 3px solid var(--orange);
  }
  
  .roos, .pink, .pink::before{
    accent-color: var(--pink);
    background-color: var(--pink);
    border: 3px solid var(--pink);
  }
  
  .lichtgroen, .lightgreen, .lightgreen::before{
    accent-color: var(--lightgreen);
    background-color: var(--lightgreen);
    border: 3px solid var(--lightgreen);
  }
  
  .lichtblauw, .lightblue, .lightblue::before{
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