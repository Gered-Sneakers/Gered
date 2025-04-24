<template>
    <div class="loggen row m-0 p-0 text-center fw-bold">
        <div class="col-12 vh-10 rounded-top bg-blue text-light">
            <div class="title h-100 valign">
                <p class="w-100 text-center">Zoeken</p>
            </div>
        </div>
        <div class="col-12 vh-80 pt-3">
            <div class="h-25 valign centered">
                <div class="row mx-auto">
                    <div class="row m-0 p-0 mx-auto">
                        <input type="text" size="14" 
                            class="text-center borderz border-blue roundedz mx-auto" 
                            maxlength="4"
                            placeholder="labelnr" 
                            v-model="searchId"
                            @keyup.enter="search"
                            ><br>
                    </div>
                    <!--
                    <div class="row m-0 p-0 mt-2">
                        <div class="grow">
                            <img @click="search" class="goButton rotate mx-auto" src="../img/gered_logo.png">
                        </div>
                    </div>
                    -->
                </div>
            </div>
            <div class="h-75" v-if="sneaker">
                <div class="w-50 mx-auto row">
                    <div class="col-4 grow">
                        <img class="medium p-3" src="../img/repair.svg" title="Repair">
                        <br>
                        <span class="repair">Repair</span>
                    </div>
                    <div class="col-4 grow">
                        <img class="medium p-3" src="../img/edit.svg" title="Wijzigen">
                        <br>
                        <span class="wijzig">Wijzigen</span>
                    </div>
                    <div class="col-4 grow" @click="verwijder">
                        <img class="medium p-3" src="../img/delete.svg" title="Verwijderen">
                        <br>
                        <span class="verwijder">Verwijderen</span>
                    </div>
                </div>
                <Sneaker 
                    :id="sneaker.id"
                    :labelid="sneaker.labelid"
                    :colorlabel="sneaker.colorlabel"
                    :date="sneaker.date"
                    :brand="sneaker.brand"
                    :model="sneaker.model"
                    :size="sneaker.size"
                    :colors="sneaker.colors"
                    :supplier="sneaker.supplier"
                    :laces="sneaker.laces"
                    :soles="sneaker.soles"
                    :status="sneaker.status"
                    :teRepareren="sneaker.teRepareren"
                    :creator="sneaker.creator"
                    :verkoop="sneaker.verkoop"

                ></Sneaker>
            </div>
        </div>
        <!--
        <ConfirmBox
            :id ="searchId"
            class="d-none"
        >
        </ConfirmBox>
        -->
        <div id="confirm" class="full d-none">
            <div id="confirmBox" class="col-6 bg-dark text-light rounded p-5">
                <p>Ben je zeker dat je {{ searchId }} wil verwijderen?</p>
                <button class="bg-green border-green rounded confirmbutton grow" @click="remove">YES</button> <button class="bg-red border-red rounded confirmbutton grow" @click="refuse">NO</button>
            </div>
        </div>
    </div>
  </template>
  
  <script>
    import KleurPreview from '@/components/KleurPreview.vue';
    import SneakerService from '@/services/SneakerService';
    import Sneaker from '@/components/Sneaker.vue'
    import ConfirmBox from '@/components/ConfirmBox.vue';

    //import { sneakers } from '@/models';

  export default {
    name: 'Search_View',
    data() {
        return{
            searchId: "",
            sneaker: null,
            error: null
        }
    },
    props: {
  
    },
    methods:{
         search(){
            this.error = null;
            console.log("Search method started");
            
            if(!this.searchId){
                this.error = "ID verwacht";
                return;
            }

            SneakerService.get(this.searchId)
                .then(response => {
                    this.sneaker = response.data;
                    this.sneaker.colors = this.sneaker.colors.split(" ");
                    this.sneaker.colors.pop();
                    
                    //console.log(this.sneaker.colors);
                    console.log(this.sneaker);
                })
                .catch(error => {
                    error = "Sneaker niet gevonden";
                    console.error(error);
                    alert(error);
               })
        },
        confirm(){
            document.getElementById("confirm").classList.remove("d-none");
        },
        refuse(){
            document.getElementById("confirm").classList.add("d-none");
        },
        remove(){
            if(!this.searchId){
                this.error = "ID verwacht";
                return;
            }

            SneakerService.delete(this.searchId)
                .then(response => {
                    this.confirm();
                    console.log(`✅ Sneaker ${this.searchId} deleted.`, response.data);
                })
                .catch(error => {
                    error = "Sneaker niet gevonden";
                    console.error(error);
                    alert(error);
                })
        }
    },
    computed: {
    },
    components: {
        KleurPreview,
        Sneaker,
        ConfirmBox
    }
  }
  </script>
  
  
  <style scoped>
    .full{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(247,247,247,0.5);
    }

    #confirmBox{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .confirmbutton{
        width: 45px;
    }

    hr{
        color: white;
    }

    .whiteIcons{
        filter: brightness(0)invert(1);
    }

    .blackIcons{
        filter: brightness(0) !important;
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

   input[type=text]{
       width: 50vw;
       height: 10vh;
       font-size: 4em;
   }

   .grow:hover span{
        color: #1F2937;
   }

   .grow .wijzig{
        color: #FACC15;
        transform: 1.05%;
   }

   .grow .verwijder{
        color: #EF4444;
        transform: 1.05%;
   }


  </style>
  