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
          },
    modelValue: String
  },
  emits: ['delete'],//['update:modelValue']
  methods: {

  },
  computed: {
  }
}
</script>

<template>
    <div  class="col-12 mb-2" 
          v-if="isActive"
          @mouseover="hover=true" 
          @mouseleave="hover=false"
    > 
      {{ name }}
      <span v-if="hover" class="ms-2 text-danger" style="cursor:pointer;" @click="$emit('delete', id)">
      ❌
      </span>
    </div>
</template>

<style scoped>
  div:hover{
    color: var(--gYellow) !important;
  }
</style>