<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'shop-list-item',
        data(){
          return{
          }
        },
        props:{
         	id:{
         		type: Number,
         		required: true
         	},
            brand:{
         		type: String,
         		required: true
         	},
            model:{
                type: String,
         		required: true
            },
            size:{
         		type: Number,
         		required: true
         	},
            img:{
                type: String,
         		required: true
            },
            price:{
                type: Number,
         		required: true
            }
        },
        methods:{
        
        }
    }
</script>

<template>
    <div class="col-4">
        <div class="row m-0 p-0 mx-1">
            <div class="col-12 rounded-top">
                <img class="w-100" :src="img">
            </div>
        </div>
        <div class="row rounded-bottom mx-1 px-2 pt-2 bg-blue snap text-white fw-bold">
            <div class="col-12 text-center"> {{ brand }} {{ model }} </div>
            <div class="col ps-5 text-start"> {{ size }} </div>        
            <div class="col pe-5 text-end"> €{{ price }} </div>
        </div>
    </div>
</template>

<style scoped>
.snap{
    font-size: 17px;
    height: 90px;
}

</style>