<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'BrandSettings_View',
        data(){
          return{
            hover: false
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
          img:{
              type: String,
              required: true
          },
          isActive:{
            type: Boolean,
            required: true
          },
    modelValue: String
  },
  emits: ['update'],
  methods: {
    show(){
      console.log(this.name +" "+ this.isActive)
    }
  },
  computed: {
    resolvedImgPath(){
      return new URL(`/src/img/brands/${this.img}`, import.meta.url).href;
    }
  },
  mounted(){
    //this.show();
  }
}
</script>

<template>
    <div class="col-4 rounded mx-auto" v-if="isActive"> 
      <div class="bg-light m-2 rounded">
        <img @click="$emit('update', id,isActive)" class="w-100 grow blackIcons" :src="resolvedImgPath" :title="name">
      </div>
    </div> 
</template>

<style scoped>
  .bg-light:hover{
    border: 5px solid blue;
    cursor: pointer !important;
  }
</style>