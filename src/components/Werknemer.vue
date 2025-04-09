<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'Werknemer_View',
        data(){
          return{
          }
        },
        props:{
         	name:{
         		type: String,
         		required: true
         	},
          pass:{
            type: String,
            required: true
          },
    modelValue: String
  },
  emits: ['update:modelValue'],
  methods: {
    showPassword(){

    }
  },
  computed: {
  }
}
</script>

<template>
    <div class="col-12 mb-2"> {{ name }}{{ pass }} </div>
</template>

<style scoped>
</style>