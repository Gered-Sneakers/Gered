<template>
    <div class="">
    <div class="max-1200 row mx-auto bg-blue text-white text-center rounded-top py-2">
        <div id="id" class="col-1 borders mb-1"><img src="../img/barcode.svg"></div>
        <div id="merk" class="col-2 borders mb-1"><img src="../img/tag.svg"></div>
        <div id="maat" class="col-1 borders mb-1"><img src="../img/ruler.svg"></div>
        <div id="price" class="col-2 borders mb-1"><img src="../img/sell.svg"></div>
        <div id="price" class="col-2 borders mb-1"><img src="../img/sell.svg"></div>
        <div id="img" class="col-1 borders mb-1"><img src="../img/img.svg"></div>
        <div id="retailDate" class="col-2 borders mb-1"><img src="../img/clock.svg"></div>
        <div id="publish" class="col-1 borders mb-1"><img src="../img/publish.svg"></div>
        <!-- IMAG ROW -->
         <div id="xx" class="col-1 borders">id</div>
         <div id="brand" class="col-2 borders">brand</div>
         <div id="size" class="col-1 borders">size</div>
         <div id="retailPrice" class="col-2 borders">retailPrice</div>
         <div id="shopPrice" class="col-2 borders">shopPrice</div>
         <div id="imgUrl" class="col-1 borders">imgUrl</div>
         <div id="uitgebracht" class="col-2 borders">uitgebracht</div>
         <div id="publish" class="col-1 borders">publish</div>
    </div>
    <div class="max-1200  vh-70 mx-auto ">
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
    <div class="w-50 mx-auto mt-2 vh-10 rounded valign bg-green grow">

      <!--<router-link :to="{ name: 'csvdownload' }" class="grow col h-100 valign rounded">-->
        <div class="w-100 text-center fw-bold text-light">
          <a id="download" class="w-100 h-100 bg-warning" @click="goDownload">
            DOWNLOAD CSV
          </a>
        </div>
      <!--</router-link>-->
        
    </div>
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
          "variant price": i.price,
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
    .max-1200{
        width: 1200px;
        overflow-x: hidden;
    }

    

</style>