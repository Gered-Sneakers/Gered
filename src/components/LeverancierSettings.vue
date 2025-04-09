<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'LeverancierSettings_View',
        data(){
          return{
          }
        },
        props:{
         	name:{
         		type: String,
         		required: true
         	},
    modelValue: String
  },
  emits: ['update:modelValue'],
  methods: {

  },
  computed: {
  }
}
</script>

<template>
    <div class="col-12 mb-2"> {{ name }} </div>
</template>

<style scoped>
  
</style>