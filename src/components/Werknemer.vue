<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
export default {
    name: 'Werknemer_View',
    data(){
      return{
        hover: false,
        idd: null
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
      isAdmin:{
        type: Number
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
    <div class="col-12 row m-0 p-0 mb-2" 
        v-if="isActive==1"
        @mouseover="hover=true" 
        @mouseleave="hover=false"
    >
      <span class="col-3 m-0 p-0 fw-bold">{{ id  }}</span>
      <span class="col-6 text-center text-light fw-bold"> {{ name }} </span>
     
      <div class="col-3 row m-0 p-0" v-if="hover">
        
        <div v-if="id !== 1" class="col-6 text-danger text-center" @click="$emit('update', id,name,pass,isAdmin)">
        <span class="pointer">🔨</span>
        </div>
        <div v-if="id !== 1" class="col-6 text-success text-center fw-bold" style="cursor:pointer;" @click="$emit('activate', id,name,activate)">
        <span class="pointer">{{ icon }}</span>
        </div>
      </div>
  </div>

</template>

<style scoped>
  div:hover , div > *:hover{
    color: var(--gYellow) !important;
  }
</style>