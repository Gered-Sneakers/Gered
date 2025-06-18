<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
export default {
    name: 'Labelcolor_View',
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
        colorCode:{
            type: String,
            required: true
        },
        isActive:{
            type: Boolean,
            required: true
        },
        //modelValue: String
    },
    emits: ['activate'],//['update:modelValue'],
    methods: {
    },
    computed: {
    }
}
</script>

<template>
    <div  class="col-12 row m-0 p-0 mb-2 rounded" 
          v-if="isActive"
          @mouseover="hover=true" 
          @mouseleave="hover=false"
    > 
      <div class="col-md-3 col-lg-2 valign justify-content-center">
          <div class="rect rounded" :style="{backgroundColor: colorCode}"></div>
      </div>
      <div class="col-md-6 col-lg-8 valign justify-content-center">
        {{ name }} <br> {{ colorCode }}
        
      </div>
      <div class="col-md-3 col-lg-2 rounded valign justify-content-center">
        <span v-if="hover" class="ms-2 text-danger rounded" style="cursor:pointer;" @click="$emit('delete', id)">
        ❌
        </span>
      </div>
    </div>
</template>

<style scoped>
  div:hover{
    color: var(--gYellow) !important;
    background-color: grey;
  }

  .rect{
    width: 25px;
    height: 25px;
  }
</style>