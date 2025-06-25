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
        type: Boolean,
        required: true
      },
      icon:{
        type: String
      }
      //modelValue: String
    },
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
      <span> ({{ id }}) </span>
      
      {{ name }} 
      <span v-if="hover">
        <span class="ms-2 text-danger" style="cursor:pointer;" @click="$emit('update', id,name,pass)">
        🔨
        </span>
        <span class="ms-2 text-success fw-bold" style="cursor:pointer;" @click="$emit('activate', id,name,activate)">
        {{ icon }}
        </span>
      </span>
  </div>

</template>

<style scoped>
  div:hover{
    color: var(--gYellow) !important;
  }
</style>