<template>
    <div class="row max-800 mx-auto bg-blue text-white text-center">
        <div id="id" class="borders">ID</div>
        <div id="merk" class="borders"><img src="../img/tag.svg"></div>
        <div id="kleur" class="borders"><img src="../img/color.svg"></div>
        <div id="maat" class="borders"><img src="../img/ruler.svg"></div>
        <div id="status" class="borders"><img src="../img/warning.svg"></div>
        <div id="user" class="borders"><img src="../img/login.svg"></div>
        <div id="datum" class="borders"><img src="../img/clock.svg"></div>
        <div id="leverancier" class="borders"><img src="../img/delivery.svg"></div>
    </div>
    <div class="max-800 mx-auto scroll vh-80">
      <SneakerSmall
        v-if="sneakerList.length > 0"
        v-for="s in sneakerList"
        :id="s.id"
        :colorlabel="s.colorlabel"
        :date="s.date"
        :brand="s.brand"
        :model="s.model"
        :size="s.size"
        :colors="s.colors"
        :supplier="s.supplier"
        :status="s.status"
        :creator="s.creator"
      >

      </SneakerSmall>
    </div>
</template>
  
<script>

import SneakerSmall from '@/components/SneakerSmall.vue';
import SneakerService from '@/services/SneakerService';

  export default {
    name: 'ShowSneakers_View',
    data(){
        return{
          sneakerList: [],
        }
    },
    props: {
  
    },
    methods: {
      getSneakers(){
        SneakerService.getAll()
          .then(response => {
            this.sneakerList = response.data;
          })
          .catch(error =>{
            console.error(error);
          })

          console.log(this.sneakerList);
      }
    },
    mounted () {
      this.getSneakers();
    },
    components:{
      SneakerSmall
    }
  }
</script>
  
<style scoped>
  svg{
    filter: brightness(1);
  }

  .max-800{
    max-width: 800px;
    overflow-x: hidden;
  }

  .borders{
    border-top: 0px solid var(--gBlack);
    border-bottom: 2px solid var(--gBlack);
    border-left: 1px solid var(--gBlack);
    border-right: 2px solid var(--gBlack);
  }

  .row{
    overflow: visible !important;
  }

  #id{
    width: 7.5% !important;
  }
  
  #merk{
    width: 20% !important;
  }

  #kleur{
    width: 11% !important;
  }

  #maat{
    width: 7.5% !important;
  }

  #status{
    width: 7.5% !important;
  }

  #user{
    width: 15% !important;
  }

  #datum{
    width: 15% !important;
  }

  #leverancier{
    width: 10% !important;
  }

  .smallz{
    width: 22px;
    height: 22px;
  }

  .small{
    width: 16px;
    height: 16px;
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

  
</style>