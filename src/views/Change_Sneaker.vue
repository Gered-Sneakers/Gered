<template>
    <div class="row m-0 p-0 h-100 bg-blue">
      <div class="col-3 m-0 p-0"></div>
      <div class="col-6 m-0 p-0 vh-10 bg-blue text-light">
            <div class="title h-100 valign">
                <p class="w-100 text-center">Wijzigen</p>
            </div>
      </div>
      <div class="col-3">
        <div id="navToevoegen" class="vh-7 valign mt-3">
          <div class="text-danger h-100 valign justify-content-end hover mt-2 fs-1">
            <span @click="showConfirmReturnz" class="text-end growz">❌</span>
          </div>
        </div>
      </div>
      <div class="col-12 m-0 p-0 h-100 justify-content-center align-content-center">
        <div class="" v-if="sneaker">
          <Sneaker 
              :id="sneaker.id"
              :labelid="sneaker.labelid"
              :colorlabel="sneaker.colorlabel"
              :date="sneaker.date"
              :brand="sneaker.brand"
              :model="sneaker.model"
              :size="sneaker.size"
              :colors="sneaker.colors"
              :supplier="getLeverancierName(sneaker.supplier)"
              :laces="sneaker.laces"
              :soles="sneaker.soles"
              :status="getStatusName(sneaker.status)"
              :teRepareren="sneaker.teRepareren"
              :creator="sneaker.creator"
              :verkoop="sneaker.verkoop"
              :csv="sneaker.csv"
              :extra="sneaker.extra"
              :bakNr="sneaker.bakNr"
              @repair="repair"
              @update="update"
      
          ></Sneaker>
        </div>
      </div>
    </div>
    <div class="full m-0 p-0 d-none" id="confirmz">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
              <p class="d-flex align-items-center justify-content-center my-5">Ben je zeker dat je terug wil zonder opslaan?</p>
              <div class="row m-0 p-0">
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="saveSneaker">JA</button> 
                </div>
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="refusez">NEE</button>
                </div>
              </div>
          </div>
        </div>
    </div>
</template>
  
<script>
import Sneaker from '../components/SneakerChange.vue';

  export default {
    name: 'Change_Sneaker_View',
    data(){
        return{
        }
    },
    props: {
    },
    inject: ["brands","labelColors","leveranciers","sneakers","werknemers"],
    computed: {
      sneaker() {
        console.log("SNEAKY BWOI");
        
        return this.sneakers().find(s => s.id == this.$route.params.id);
      },
      statusName(){
        return this.getStatusName();
      }
    },
    methods: {
      getLeverancierName(id){
          id = parseInt(id);
          const found = this.leveranciers().find(l => l.id === id)
          return found ? found.name : "???"
      },
      getStatusName(){
           var status = this.sneaker.status;
            
            console.log("STATUS: " + status);
            var name = "Cleaning";
            switch(status){
                case 1:
                    name = "Cleaning"
                    break;
                case 2:
                    name = "Repair"
                    break;
                case 3:
                    name = "Stock"
                    break;
                case 4: 
                    name = "Verkoop"
                    break;
                case 5: 
                    name = "Verkocht"
                    break;
                case 6:
                    name = "CSV"
                    break;
                default:
                    name = "Cleaning"
                    break;
            }
            return name;
        },
      repair(data) {
        console.log("Repair event:", data);
      },
      update(data) {
        console.log("Update event:", data);
      },
      saveSneaker(){
        this.$router.go(-1)
      },
      showConfirmReturnz(){
          document.getElementById("confirmz").classList.remove("d-none");
      },
      refusez(){
          document.getElementById("confirmz").classList.add("d-none");
      }
    },
    mounted() {
    },
    components: {
      Sneaker
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
</style>