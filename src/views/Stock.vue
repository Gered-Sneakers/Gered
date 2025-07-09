<template>
    <div class="h-100 valign bg-blue text-light px-5">
        <div class="targets row w-100 m-0 p-0" v-if="sneaker == null">
            <img class="vh-15 mb-4" src="../img/stock.svg">
            <div class="w-100 text-center d-flex justify-content-center">
                    <input type="text" size="14" 
                        id="search"
                        class="w-100 text-center border-blue rounded mx-auto mb-1" 
                        maxlength="4"
                        placeholder="labelnr" 
                        v-model="id"
                        @keyup.enter="showConfirmUpdate = true"
                        @click="showConfirmUpdate"
                    >
            </div>
            <div class="w-100 text-center d-flex justify-content-center">
                <input type="text" size="4"
                    id="bakNr"
                    class="w-100 text-center border-blue rounded mx-auto mb-1" 
                    maxlength="5"
                    placeholder="baknummer" 
                    v-model="baknr"
                    @keyup.enter="showConfirmUpdate = true"
                    @click="showConfirmUpdate"
                >
            </div>
        </div>
    </div>

    <div class="full m-0 p-0" id="confirm" v-show="showConfirmUpdate == true">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
          <div class="col-6 col-xl-4 bg-dark m-0 p-0 text-light mx-auto rounded">
              <p class="d-flex align-items-center justify-content-center my-5">Ben je zeker dat <span class="text-yellow mx-2">{{id}}</span> naar stock moet?</p>
              <div class="row m-0 p-0">
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-green rounded-bottom-left hover" @click="update">JA</button> 
                </div>
                <div class="col-6 m-0 p-0">
                  <button class="w-100 py-3 bg-red rounded-bottom-right hover" @click="showConfirmUpdate = !showConfirmUpdate">NEE</button>
                </div>
              </div>
          </div>
        </div>
    </div>

</template>
<script>
import SneakerService from '@/services/SneakerService';
import KleurPreview from '@/components/KleurPreview.vue';

  export default {
    name: 'Repair_View',
    data(){
        return{
            sneaker: null,
            id: null,
            baknr: null,
            
            showConfirmUpdate: false,
            showConfirmAnnuleren: false
        }
    },
    props: {
  
    },
    methods: {
        
        search(){  
            SneakerService.get(this.id)
                .then(response => {
                    this.sneaker = response.data;
                    this.sneaker.colors = this.sneaker.colors.split(" ");
                    this.sneaker.colors.pop();
                    console.log(this.sneaker);
                })
                .catch(error => {
                    error = "Sneaker niet gevonden";
                    console.error(error);
                    alert(error);
               })

            
            
        },
        update(){
            const updateData = { status: 4 }
            SneakerService.update(this.id,updateData)
            .then( () => {
                console.log("yolo baby update , check db bro");
                this.showConfirmAnnuleren = ! this.showConfirmAnnuleren;
                
            })
            .catch(error => {
                    error = "Sneaker upodate nope bra";
                    console.error(error);
                    alert(error);
            })
            
        },
        annuleren(){
            window.location.reload();
        }
    },
    components: {
        KleurPreview
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

    .imgSquare{
        max-height: 20vh !important;
    }

    #REPAIR *{
        font-size: 20px;
        font-weight: 900;
    }

    .invis-border {
        border: 5px solid transparent;
    }

    .highlight {
        background-color: rgba(0,159,253,0.5);
        border: 5px solid rgb(0,159,253);
        border-radius: 0.375rem;
    }
    
    #search,#bakNr{
        width: 100%;
        max-width: 400px !important;
        height: 66px;
        font-size: 50px;
    }

    .smallz{
    width: 30px;
    height: 30px;
   }

   .sneakerPreview{
    font-size: 22px;
   }

</style>