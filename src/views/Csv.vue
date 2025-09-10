<template>
    <div class="m-0 p-0 vh-80 scroll">
      <div class="row m-0 p-0 mx-auto bg-blue text-white text-center rounded-top py-2 sticky">
          <div id="id" class="col-1 borders py-1" @click="toggleSort('id')"><img src="../img/barcode.svg" class="navImg"></div>
          <div id="merk" class="col-3 borders py-1"><img src="../img/tag.svg" class="navImg"></div>
          <div id="maat" class="col-1 borders py-1" @click="toggleSort('size')"><img src="../img/ruler.svg" class="navImg"></div>
          <!--<div id="price" class="col-1 borders py-1"><img src="../img/sell.svg" class="navImg"></div>-->
          <div id="price" class="col-1 borders py-1"><img src="../img/sell.svg" class="navImg"></div>
          <div id="img" class="col-2 borders py-1"><img src="../img/img.svg" class="navImg"></div>
          <!--<div id="retailDate" class="col-2 borders py-1"><img src="../img/clock.svg" class="navImg"></div>-->
          <div id="publish" class="col-1 borders py-1"><img src="../img/publish.svg" class="navImg"></div>
          <div id="delete" class="col-1 borders py-1"><img src="../img/undo.svg" class="navImg"></div>

          <!-- IMAG ROW -->
           <!--
           <div id="id" class="col-1 borders py-1" @click="toggleSort('id')">id</div>
           <div id="brand" class="col-2 borders py-1">brand</div>
           <div id="size" class="col-1 borders py-1" @click="toggleSort('size')">size</div>
           <div id="retailPrice" class="col-1 borders py-1">retailPrice</div>
           <div id="shopPrice" class="col-2 borders py-1">shopPrice</div>
           <div id="locatie" class="col-1 borders py-1">locatie</div>
           <div id="imgUrl" class="col-1 borders py-1">imgUrl</div>
           <div id="uitgebracht" class="col-2 borders py-1">uitgebracht</div>
           <div id="publish" class="col-1 borders py-1">publish</div>
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
        console.log(this.filteredSneakers);
        
        if(!this.filteredSneakers.length) return;

        const headers = ["handle","title","vendor","type","status","published","option1 name","option1 value","option2 name","option2 value","variant sku","variant price","variant inventory tracker","variant inventory qty","variant inventory policy","variant barcode"]
        const shopifyData = this.filteredSneakers.map(i =>{

          const ean13 = this.makeEAN13FromSneaker(i);
          const title = i.brand + " " + i.model + " " + i.size
          const handle = i.brand + "-" + i.model + "-" + i.id

          return{
            handle,
            title,
            vendor: i.brand,
            type: "Sneaker",
            status: "active",
            "option1 name":"Model",
            "option1 value": i.model,
            "option2 name":"Size",
            "option2 value":i.size,
            "variant sku": ean13,
            "variant price": i.price,
            "variant inventory tracker": "shopify",
            "variant inventory qty": 1,
            "variant inventory policy": "deny",
            "variant barcode": ean13,
            published: "TRUE"
          }
          
          
        })

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

          
        this.$router.push('/shopify')
        
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
      },
      ean13CheckDigit(body12) {
        const s = String(body12).replace(/\D/g,'');
        if (s.length !== 12) throw new Error('EAN-13 body moet 12 cijfers hebben');
        let sum = 0;
        for (let i = 0; i < 12; i++) sum += (i % 2 === 0) ? +s[i] : 3 * +s[i];
        return (10 - (sum % 10)) % 10;
      },
      makeBody12FromSneaker(s) {
        const pad = (n,l) => String(n).padStart(l,'0');
        // 1) Datum: eerst s.date (indien aanwezig), anders createdAt, anders vandaag
        let ymd = null;
        if (s.date) {
          const ds = String(s.date).replace(/\D/g,'');
          if (ds.length >= 8) ymd = ds.slice(0,8); // YYYYMMDD
        }
        if (!ymd && s.createdAt) {
          const d = new Date(s.createdAt);
          if (!isNaN(d)) ymd = `${d.getFullYear()}${pad(d.getMonth()+1,2)}${pad(d.getDate(),2)}`;
        }
        if (!ymd) {
          const d = new Date();
          ymd = `${d.getFullYear()}${pad(d.getMonth()+1,2)}${pad(d.getDate(),2)}`;
        }
        // 2) UniqueId: neem laatste 4 cijfers van s.id (of s.uniqueId)
        const raw = (s.uniqueId ?? s.id ?? 0).toString().replace(/\D/g,'');
        const uid4 = raw.slice(-4).padStart(4,'0');
        return ymd + uid4; // 12 cijfers
      },
      makeEAN13FromSneaker(s) {
        const body12 = this.makeBody12FromSneaker(s);
        return body12 + this.ean13CheckDigit(body12);
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
      //this.getSneakers();
      
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

   @media (min-width: 1600px) { 
    * {
      font-size: 30px;
    }
    #brandButton{
      height: 51px !important;
    }
    .medz, .navImg{
      width: 50px !important;
      height: 50px !important;
    }
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