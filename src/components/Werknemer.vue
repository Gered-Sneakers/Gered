<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
export default {
    name: 'Werknemer_View',
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
      pass:{
        type: String,
        required: true
      },
      isActive:{
        type: Number,
        required: true
      },
      //modelValue: String
    },
    //emits: ['update:modelValue'],
    methods: {
    },
    computed: {
    }
}
</script>

<template>
    <div class="col-12 mb-2" 
        v-if="isActive==1"
    @mouseover="hover=true" 
    @mouseleave="hover=false">
      
      {{ name }} 
      <span v-if="hover"> - {{ pass }}</span> 
      <span v-if="hover" class="ms-2 text-danger" style="cursor:pointer;" @click="$emit('deactivate', id)">
      ❌
      </span>
  
  </div>

</template>

<style scoped>
  div:hover{
    color: var(--gYellow) !important;
  }
</style>