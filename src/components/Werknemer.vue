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
    <div class="col-12 row m-0 p-0 mb-2" 
        v-if="isActive==1"
        @mouseover="hover=true" 
        @mouseleave="hover=false"
    >
      <span class="col-3 m-0 p-0 fw-bold">{{ id  }}</span>
      <span class="col-6 text-center text-light"> {{ name }} </span>
     
      <div class="col-3 row m-0 p-0" v-if="hover">
        
        <div class="col-6 text-danger text-center" style="cursor:pointer;" @click="$emit('update', id,name,pass)">
        🔨
        </div>
        <div class="col-6 text-success text-center fw-bold" style="cursor:pointer;" @click="$emit('activate', id,name,activate)">
        {{ icon }}
        </div>
      </div>
  </div>

</template>

<style scoped>
  div:hover{
    color: var(--gYellow) !important;
  }
</style>