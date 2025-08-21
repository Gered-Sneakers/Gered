<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'Repairs',
        data(){
          return{
            hover: false,
            idd: 0
          }
        },
        props:{
            id:{
              type: Number,
              required: true
            },
            name:{
                type: String,
         	    required: true
         	},
            price:{
                type: Number,
                required: true
            }
      },
      emits: ['update'],//['update:modelValue']
      methods: {
    
      },
      computed: {
      },
      mounted(){
        this.idd = sessionStorage.getItem("id");
      }
    }
</script>

<template>
    <div class="col-12 row m-0 p-0 mb-2" 
          @mouseover="hover=true" 
          @mouseleave="hover=false"
    > 
      <div class="col-3 m-0 p-0 fw-bold">
        {{ id }}
      </div>
      <div class="col-6 m-0 p-0 text-center fw-bold">
        {{ name }} 
      </div>
      <div class="col-2 m-0 p-0 fw-bold">
       {{ price }}
      </div>
      <div class="col-1 m-0 p-0">
        <span v-if="hover && idd == 1" class="ms-2 text-success" style="cursor:pointer;" @click="$emit('update',{id,name,price})">
            🔨
        </span>
      </div>
      
    </div> 
</template>

<style scoped>

</style>