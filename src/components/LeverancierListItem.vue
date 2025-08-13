<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'LeverancierListItem_View',
        data(){
          return{
          }
        },
        props:{
            id:{
                type: Number
            },
         	name:{
         		type: String,
         		required: true
         	},
    modelValue: String
  },
  methods: {

  },
  computed: {
  }
}
</script>

<template>
    <option :value="id">({{ id }}) {{ name }}</option>
</template>

<style scoped>
  
</style>