<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'Leverancier_View',
        data(){
          return{
          }
        },
        props:{
         	name:{
         		type: String,
         		required: true
         	},
            img:{
                type: String,
                required: true
            },
    modelValue: String
  },
  emits: ['update:modelValue'],
  methods: {

  },
  computed: {
    resolvedImgPath(){
      return new URL(`/src/img/leveranciers/${this.img}`, import.meta.url).href;
    }
  }
}
</script>

<template>
    <div class="col-3 mx-auto"> 
      <img class="w-100 bg-light grow rounded" :src="resolvedImgPath" :title="name"><br>
      <!--<div class="text-center">{{ name }}</div>-->
    </div>
</template>

<style scoped>
  
</style>