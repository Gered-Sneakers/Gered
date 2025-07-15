<template>
    <div class="m-0 p-0 vh-80 scroll">
      <div class="row w-100 m-0 p-0 mx-auto bg-blue text-white text-center rounded-top py-2 sticky">
          <div id="id" class="col-1 borders mb-1"><img src="../img/barcode.svg"></div>
          <div id="merk" class="col-2 borders mb-1"><img src="../img/tag.svg"></div>
          <div id="maat" class="col-1 borders mb-1"><img src="../img/ruler.svg"></div>
          <div id="price" class="col-2 borders mb-1"><img src="../img/sell.svg"></div>
          <div id="price" class="col-2 borders mb-1"><img src="../img/sell.svg"></div>
          <div id="img" class="col-1 borders mb-1"><img src="../img/img.svg"></div>
          <div id="retailDate" class="col-2 borders mb-1"><img src="../img/clock.svg"></div>
          <div id="publish" class="col-1 borders mb-1"><img src="../img/publish.svg"></div>
          <!-- IMAG ROW -->
           <div id="id" class="col-1 borders mb-1">id</div>
           <div id="brand" class="col-2 borders mb-1">brand</div>
           <div id="size" class="col-1 borders mb-1">size</div>
           <div id="retailPrice" class="col-2 borders mb-1">retailPrice</div>
           <div id="shopPrice" class="col-2 borders mb-1">shopPrice</div>
           <div id="imgUrl" class="col-1 borders mb-1">imgUrl</div>
           <div id="uitgebracht" class="col-2 borders mb-1">uitgebracht</div>
           <div id="publish" class="col-1 borders mb-1">publish</div>
      </div>
      <div class="w-100 mx-auto ">
        <div v-for="(s,index) in sneakerList" :key="s.id">
          <SneakerCsv
            v-if="s.csv == 1"
            :id="s.id"
            :colorlabel="s.colorlabel"
            :brand="s.brand"
            :model="s.model"
            :size="s.size"
            :colors="s.colors"
            :csv="s.csv"
            :publish="s.publish"
            :createdAt="s.createdAt"
            @update="updateCsvList(index,$event)"
          >
          </SneakerCsv>

        </div>

      </div>
    </div>
    <div class="row mx-auto vh-5 bg-blue text-white py-2 valign">
      <div class="col-1 h-100 valign justify-content-center border-end border-light fw-bold"> Totaal <br> {{ csvList.length }} </div>
      <div class="col-3"></div>
      <div class="col-4 h-100 mx-auto">
          <button @click="goDownload" id="settingsButton" class="w-100 h-100 px-2 mx-auto rounded bg-green fw-bold hover">Download CSV</button>
      </div>
      <div class="col-4"></div>
    </div>
</template>
  
<script>

import SneakerCsv from '@/components/SneakerCsv.vue';
import SneakerService from '@/services/SneakerService';

  export default {
    name: 'Csv_View',
    data(){
        return{
          sneakerList: [],
          csvList: []
        }
    },
    props: {
      
    },
    methods: {
      getSneakers(){
        SneakerService.getAll()
          .then(response => {
            this.sneakerList = response.data;
            console.log(this.sneakerList);
            this.sneakerList.forEach(s => {
              Object.defineProperty(s,"publish",{value:false});
            });
            console.log(this.sneakerList);
            console.log("SORTING");
            this.sneakerList = this.sortedSneakers;
          })
          .catch(error =>{
            console.error(error);
          })
      },
      emptyList(){},
      updateCsvList(index,data){
        this.csvList[index] = data;
      },
      goDownload(){
        console.log("Broghetti hier uw codetti");
        console.log(this.csvList);

        

        if(!this.csvList.length) return;

        const headers = ["handle","title","vendor","type","option1 name","option1 value","option2 name","option2 value","option3 name","option3 value","variant price","variant inventory qty","variant compare at price","variant barcode","image src","image position","image alt text","published"]
        const shopifyData = this.csvList.map(i =>({
          
          handle: i.handle,
          title: i.title,
          vendor: i.vendor,
          type: i.type,
          "option1 name":"Model",
          "option1 value": i.model,
          "option2 name":"Size",
          "option2 value":i.size,
          "option3 name":"uitgave",
          "option3 value":i.uitgave,
          "variant price": (i.retail > 100 && i.retail < 125) ? i.prijs + 5 : i.prijs,
          "variant inventory qty": i.amount,
          "variant compare at price": i.retailprice,
          "variant barcode": i.barcode,
          
          "image src": i.imgSrc,
          "image position": i.imgPos || 1,
          "image alt text": i.imgAlt,
          published: i.published
        }))
        console.log("SHOPIFY");
        console.log(shopifyData);
        const csv = [
          headers.join(','),
          ...shopifyData.map( obj => headers.map(h => `"${(obj[h] ?? '').toString().replace(/"/g, '""')}"`).join(',')
        )
        ].join('\r\n');

        console.log("CSV BRAPAPA");
        console.log(csv);

        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;'});
        var link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.setAttribute('download','sneakers.csv');
            document.body.appendChild(link); // required for Firefox
            link.click();
            document.body.removeChild(link);

        
      }

    },
    computed: {
      sortedSneakers(){ return this.sneakerList.filter(s => s.csv == 1 ).sort((a,b) => new Date(b.createdAt)- new Date(a.createdAt))}

    },
    mounted () {
      this.getSneakers();
    },
    components:{
      SneakerCsv
    }
  }
</script>
  
<style scoped>

    .hover:hover{
      color: var(--gWhite);
      filter: brightness(125%);
    }

   .full{
     position: absolute;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     background-color: rgba(247,247,247,0.5);
   }
  
   svg{
     filter: brightness(1);
   }
  
   .max-1200{
     max-width: 1200px;
     overflow-x: hidden;
   }
  
   .max-1217{
     max-width: 1215px;
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