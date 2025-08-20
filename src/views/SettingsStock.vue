<template>
      <div id="stock" class="m-0 p-0 max-1800 mx-auto">
        <div id="extra" v-if="creator = 2" class="row pt-3 text-light"> <!-- SUPER ADMIN ONLY -->
            <!--<div class="col-15"></div>-->
            <div class="col-3 col-xl-3 px-2 mb-3 mx-auto">
              <div class="w-100 valign rounded-top goud text-white vh-10">
                <div class="mx-auto subTitle text-purple h-100 valign"> IN </div>
              </div>
              <div class="row m-0 p-0 px-4 pb-3 pt-3 fw-bold rounded-bottom bg-blue">
                  <div class="col-6 text-start mb-1"> Wash </div><div class="col-6 text-end"> {{ cleaningCount }} </div>
                  <div class="col-6 text-start mb-1"> Repair </div><div class="col-6 text-end"> {{ repairCount }} </div>
                  <div class="col-6 text-start mb-1"> Kids Wash </div><div class="col-6 text-end"> {{ kidsWash }} </div>
                  <div class="col-6 text-start mb-1"> Kids Repair </div><div class="col-6 text-end"> {{ kidsRepair }} </div>
              </div>
            </div>

            <div class="col-3 col-xl-3 px-2 mb-3 mx-auto">
              <div class="w-100 valign rounded-top goud text-white vh-10">
                <div class="mx-auto subTitle text-purple h-100 valign"> OUT </div>
              </div>
              <div class="row m-0 p-0 px-4 pb-3 pt-3 fw-bold rounded-bottom bg-blue">
                  <div class="col-6 text-start mb-1"> Stock </div><div class="col-6 text-end"> {{ stockCount }} </div>
                  <div class="col-6 text-start mb-1"> Online </div><div class="col-6 text-end"> {{ csvCount }} </div>
                  <div class="col-6 text-start mb-1"> Kids Stock </div><div class="col-6 text-end"> {{ kidsStock }} </div>
                  <div class="col-6 text-start mb-1"> Kids Online </div><div class="col-6 text-end"> {{ kidsOnline }} </div>
              </div>
            </div>

            <div class="col-3 col-xl-3 px-2 mb-3 mx-auto">
              <div class="w-100 valign rounded-top goud text-white vh-10">
                <div class="mx-auto subTitle text-purple h-100 valign"> TOTALS </div>
              </div>
              <div class="row m-0 p-0 px-4 pb-3 pt-3 fw-bold rounded-bottom bg-blue">
                  <div class="col-6 text-start mb-1"> In Progress </div><div class="col-6 text-end"> {{ totalStockIn }} </div>
                  <div class="col-6 text-start mb-1"> Stock </div><div class="col-6 text-end"> {{ totalStockOut }} </div>
                  <div class="col-6 text-start mb-1"> Online </div><div class="col-6 text-end"> {{ totalOnline }} </div>
                  <div class="col-6 text-start mb-1"> Verkocht </div><div class="col-6 text-end"> {{ totalVerkocht }} </div>
              </div>
            </div>

        </div>
      </div>
  </template>
  
  <script>
    export default{
      data() {
        return {
      
        }
      },
      props: { 
      },
      methods: {
      },
      watch: {
        kidsWash: {
            immediate: true,
            handler(val, oldVal) {
              console.log('KIDS COUNT:', val)
            }
        },
      },
      mounted () {
        this.$nextTick(()=> {
          console.log("KIDS COUNT: ")
          console.log(this.kidsWash);
        })
      },
      inject: ["sneakers"],
      computed: {
        cleaningCount() {
          return this.sneakers().filter(s => parseFloat(s.size) > 36).filter(s => s.status === 1).length;
        },
        repairCount() {
          return this.sneakers().filter(s => parseFloat(s.size) > 36).filter(s => s.status === 2).length;
        },
        stockCount() {
          return this.sneakers().filter(s => parseFloat(s.size) > 36).filter(s => s.status === 3 || s.status === 4).length;
        },/*
        verkoopCount() {
          return this.sneakers().filter(s => parseFloat(s.size) > 36).filter(s => s.status === 4).length;
        },*/
        verkochtCount() {
          return this.sneakers().filter(s => parseFloat(s.size) > 36).filter(s => s.status === 5).length;
        },
        csvCount(){
          return this.sneakers().filter(s => parseFloat(s.size) > 36).filter(s => s.status === 6).length;
        },
        kidsWash(){
          return this.sneakers().filter(s => parseFloat(s.size) < 36).filter(s => s.status === 1).length
        },
        kidsRepair(){
          return this.sneakers().filter(s => parseFloat(s.size) < 36).filter(s => s.status === 2).length
        },
        kidsStock(){
          return this.sneakers().filter(s => parseFloat(s.size) < 36).filter(s => s.status === 3 || s.status === 4).length
        },
        kidsOnline(){
          return this.sneakers().filter(s => parseFloat(s.size) < 36).filter(s => s.status === 6).length
        },
        kidsVerkocht()     {
          return this.sneakers().filter(s => parseFloat(s.size) < 36).filter(s => s.status === 5).length
        },
        totalStockIn(){
          return this.cleaningCount + this.repairCount + this.kidsWash + this.kidsRepair;
        },
        totalStockOut(){
          return this.stockCount + this.kidsStock;
        },
        totalOnline(){
          return this.csvCount + this.kidsOnline;
        },
        totalVerkocht(){
          return this.verkochtCount + this.kidsVerkocht;
        }
      },
      components: {

      }
    }
  </script>

  <style scoped>
    .full{
      position: fixed ; /* absolute */
      top: 0;
      left: 0;
      /*width: 100%;
      height: 100%;*/
      width: 100%;
      height: 100%;
      background-color: rgba(247,247,247,0.5);
      z-index: 99999;
    }

    #brandButton{
      height: 32.39px !important;
    }

    .invertColor:hover{
      filter: brightness(0) invert(1) !important;
    }

    .subTitle {
      position: relative;
      display: inline-block;
    }

    .valign{
      display: flex;
      align-items: center;  /* vertical align */
      justify-content: center; /* horizontal align (optioneel) */
    }

    .navArrow {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 100%; /* places it just below the title */
    }

    .bg-gold{
      background-color: linear-gradient(45deg,#FFFFAC 5%,#FEDB37 10%,#9f7928 30%,#FFFFAC  50%,#9f7928 70%,#FEDB37 80%,#FFFFAC 95%) !important;
    }

    .purpleFilter{
      filter: brightness(0) saturate(100%) invert(14%) sepia(97%) saturate(7482%) hue-rotate(276deg) brightness(95%) contrast(90%);
    }

    .arrowIcon {
      width: 20px; /* Adjust as needed */
      margin-top: 5px;
    }

    .sticky{
      position: fixed !important;
      background-color: var(--gWhite);
      top: 10vh !important;
      width: 100%;
      height: 5vh;
      overflow: hidden;
      
    }

    .settings{
      position: absolute;
      top: 10vh;
      left: 0;
    }

    [type=file]{
      color: transparent;
      width: 168px;
    }

    .vh-10{
      min-height: 120px !important;
    }

    input,.defaultInput{
      border-radius: 25rem;
      max-width: 800px !important;
      min-width: 200px !important;
    }

    .error{
      color:var(--gpurple);
    }

    img{
      border: 0px solid transparent;
      border-radius: 25rem !important;
    }

    .visibility{
      visibility: hidden;
    }

    .hover{
      font-weight: bold;
    }

    .hover:hover{
      color: var(--gWhite);
      filter: brightness(125%);
    }

    #flip{
      transform: scaleX(-1);
    }

    .greyOut{
      filter:grayscale(100%);
    }

  </style>
  