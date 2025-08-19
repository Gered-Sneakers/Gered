<template>
    <div class="m-0 p-0 vh-80 scroll">
      <div class="row m-0 p-0 mx-auto bg-blue text-white text-center rounded-top py-2 sticky">
          <div id="id" class="col-1 borders mb-1" @click="toggleSort('id')"><img src="../img/barcode.svg"></div>
          <div id="merk" class="col-2 borders mb-1"><img src="../img/tag.svg"></div>
          <div id="maat" class="col-1 borders mb-1" @click="toggleSort('size')"><img src="../img/ruler.svg"></div>
          <div id="price" class="col-1 borders mb-1"><img src="../img/sell.svg"></div>
          <div id="price" class="col-1 borders mb-1"><img src="../img/sell.svg"></div>
          <div id="img" class="col-2 borders mb-1"><img src="../img/img.svg"></div>
          <div id="retailDate" class="col-2 borders mb-1"><img src="../img/clock.svg"></div>
          <div id="publish" class="col-1 borders mb-1"><img src="../img/publish.svg"></div>
          <div id="delete" class="col-1 borders mb-1"><img src="../img/undo.svg"></div>

          <!-- IMAG ROW -->
           <!--
           <div id="id" class="col-1 borders mb-1" @click="toggleSort('id')">id</div>
           <div id="brand" class="col-2 borders mb-1">brand</div>
           <div id="size" class="col-1 borders mb-1" @click="toggleSort('size')">size</div>
           <div id="retailPrice" class="col-1 borders mb-1">retailPrice</div>
           <div id="shopPrice" class="col-2 borders mb-1">shopPrice</div>
           <div id="locatie" class="col-1 borders mb-1">locatie</div>
           <div id="imgUrl" class="col-1 borders mb-1">imgUrl</div>
           <div id="uitgebracht" class="col-2 borders mb-1">uitgebracht</div>
           <div id="publish" class="col-1 borders mb-1">publish</div>
           -->
      </div>
      <div class="m-0 p-0 mx-auto">
        <div v-for="(s,index) in filteredSneakers" :key="s.id">
          <SneakerCsv
            :id="s.id"
            :colorlabel="s.colorlabel"
            :brand="s.brand"
            :model="s.model"
            :size="s.size"
            :colors="s.colors"
            :publish="s.publish"
            :createdAt="s.createdAt"
            :price="s.price"
            :bakNr="s.bakNr"
            @update="updateCsvList"
            @updated="getSneakers"
            @return="returnSneaker"
          >
          </SneakerCsv>

        </div>

      </div>
    </div>
    <div class="row mx-auto vh-5 bg-blue text-white valign">
      <div class="col-1 h-100 valign justify-content-center fw-bold" title="Totaal"> {{ csvList.length }} </div>
      <div class="col-8"></div>
      <div class="col-3 h-100 py-1 mx-auto">
          <button @click="goDownload" id="settingsButton" class="w-100 h-100 px-2 mx-auto rounded bg-green fw-bold hover">Download CSV</button>
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
          csvList: [],
          selectedBrand: null,
          selectedSize: null,
          sortAscending: true,
          sortKey: 'id'
        }
    },
    props: {
      
    },
    methods: {/*
      getSneakers(){
        this.sneakerList = this.sneakers();
      },
      */
      async getSneakers(){
          await SneakerService.getAll()
            .then(response => {
              this.sneakerList = response.data;

              this.sneakerList.forEach(s => {
                Object.defineProperty(s, "publish", { value: false });
              });

              console.log(this.sneakerList);
            })
            .catch(error =>{
              console.error(error);
            })
      },
      emptyList(){},
      updateCsvList(id,args){
        //this.csvList[index] = data;
        SneakerService.update(id,args)
        .then(res => {
          console.log(res);
        })
        .catch(err => {

        })
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

          

        
      },
      toggleSort(key) {
        if (this.sortKey === key) {
          this.sortAscending = !this.sortAscending;
        } else {
          this.sortKey = key;
          this.sortAscending = true;
        }
      },
      returnSneaker(id,updateData){
        SneakerService.update(id,updateData)
        .then (() => {
          this.getSneakers();
        })
        
        .catch(err => {
          console.log(err)
        })
      }

    },
    inject: ['sneakers'],
    computed: {
      //sortedSneakers(){ return this.sneakerList.filter(s => s.csv == 1 ).sort((a,b) => a.id - b.id)}//new Date(b.createdAt)- new Date(a.createdAt))}
      filteredSneakers() {
        let filtered = this.sneakerList; //this.sneakers();

        // Only allow sneakers with status == 6
        filtered = filtered.filter(s => s.status == "6");

        console.log("FILTERED: ");
        console.log(filtered);

        if (this.selectedBrand) {
          filtered = filtered.filter(s => s.brand === this.selectedBrand);
        }
      
        if (this.selectedSize) {
          filtered = filtered.filter(s => s.size === this.selectedSize);
        }
      
        return filtered.sort((a, b) => {
          const key = this.sortKey;
          return this.sortAscending ? a[key] - b[key] : b[key] - a[key];
        });
      },
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