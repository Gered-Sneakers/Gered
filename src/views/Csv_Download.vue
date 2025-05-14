<template>
    <div class="row">
        <div class="col">
            handle,title,vendor,type,option1 name,option1 value,option2 name,option2 value,option3 name,option3 value,variant price,variant inventory qty,variant compare at price,variant barcode,image src,image position,image alt text,published
            <div id="csv" v-for="c in sneakerList">
                <Csv
                    v-if="c.csv == 1"
                    :handle="c.brand + '-' + c.model + '-' + c.id"
                    :title="c.brand + ' ' + c.model + ' '"
                    :vendor="c.brand"
                    :type="'sneaker'"
                    :model="c.model"
                    :maat="c.size"
                    :uitgave="''"
                    :price="''"
                    :amount="1"
                    :retailprice="''"
                    :id="c.id"
                    :imgSrc="c.ImgSrc"
                    :imgPos="c.ImgPos"
                    :imgAlt="c.imgAlt"
                    :published="'FALSE'"
                ></Csv>
            </div>
        </div>
    </div>
</template>
  
<script>
    import Csv from "../components/Csv.vue"
    import SneakerService from "@/services/SneakerService";

  export default {
    name: 'Csv_Download_View',
    data(){
        return{
            sneakerList: []
        }
    },
    props: {
        csvList: {
            type: Array
        }
    },
    methods:{
        getSneakers(){
            SneakerService.getAll()
            .then(response => {
                this.sneakerList = response.data;
                console.log(this.sneakerList);
            })
            .catch(err => {
                console.log(err);
            })
        }
    },
    mounted(){
        this.getSneakers();
    },
    components:{
        Csv
    }
  }
</script>
  
<style scoped>

</style>