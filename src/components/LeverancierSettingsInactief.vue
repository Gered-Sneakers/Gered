<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'LeverancierSettings_View',
        data(){
          return{
            hover: false
          }
        },
        props:{
         	name:{
         		type: String,
         		required: true
         	},
            isActive:{
              type: Boolean
            }
         },
         methods: { },
         computed: { }
}
</script>

<template>
    <!-- -->
    <div  class="col-12 mb-2" 
          v-if="isActive==true"
          @mouseover="hover=true" 
          @mouseleave="hover=false"
    > 
      {{ name }}
      <span v-if="hover" class="ms-2 text-success fw-bold" style="cursor:pointer;" @click="$emit('recover', {id , name , isActive})">
        ✔
      </span>
    </div> 
</template>

<style scoped>
  div:hover{
    color: var(--gYellow) !important;
  }
</style>