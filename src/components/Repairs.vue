<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'Repairs',
        data(){
          return{
            hover: false
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
      //emits: //['delete'],//['update:modelValue']
      methods: {
    
      },
      computed: {
      }
    }
</script>

<template>
    <div class="col-12 row m-0 p-0 mb-2" 
          v-if="isActive === true || isActive === 1"
          @mouseover="hover=true" 
          @mouseleave="hover=false"
    > 
      <div class="col-2 m-0 p-0 fw-bold">
        {{ id }}
      </div>
      <div class="col-6 m-0 p-0 text-center fw-bold">
        {{ name }} 
      </div>
      <div class="col-2 m-0 p-0 fw-bold">
        {{ price }}
      </div>
      <div class="col-2 m-0 p-0">
        <span v-if="hover" class="ms-2 text-success" style="cursor:pointer;">
            🔨
        </span>
      </div>
      
    </div> 
</template>

<style scoped>
  div:hover{
    color: var(--gYellow) !important;
  }
</style>