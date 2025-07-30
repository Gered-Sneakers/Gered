<template>
    <div class="row h-100 bg-blue">
      <div class="col-12 vh-10 bg-blue text-light">
            <div class="title h-100 valign">
                <p class="w-100 text-center">Wijzigen</p>
            </div>
      </div>
        <div class="col h-100 justify-content-center align-content-center">
          
        
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
      }
    },
    methods: {
      getLeverancierName(id){
          id = parseInt(id);
          const found = this.leveranciers().find(l => l.id === id)
          return found ? found.name : "???"
      },
      getStatusName(id){
            id = parseInt(this.$route.params.id);
            var name = "Cleaning";
            switch(id){
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

</style>