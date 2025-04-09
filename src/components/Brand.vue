<template>
  <div id="brander" 
    :class="{highlight: modelValue === name}" 
    class="brand invisBorder col-3 p-2 valign mx-auto rounded">
    <label class="mx-auto w-100">
      <input 
        type="radio" 
        :value="name" 
        name="brand"
        :checked="modelValue === name"
        @change="$emit('update:modelValue',name)"
        >
      <img width="80px" height="80px" class="blackIcons" :src="resolvedImgPath" :title="name">
    </label>
  </div>
</template>

<script>
export default {
  name: 'Brand_Component',
  data(){
    return{
    }
  },
  props: {
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
      return new URL(`/src/img/brands/${this.img}`, import.meta.url).href;
    }
  }
}
</script>

<style scoped>

    .blackIcons{
        filter: brightness(0) !important;
    }
  
    [type=radio] { 
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

   
    [type=radio] + img {
      cursor: pointer;
    }

    .invisBorder{
      border: 5px solid transparent;
    }

    
    .highlight {
      background-color: rgba(0,159,253,0.5);
      border: 5px solid rgb(0,159,253);
      border-radius: 0.375rem !important;
    }

    #brand{
        position: relative;
    }

    #brand:after{
        content: "";
        display: block;
        padding-bottom: 25%;
    }

</style>
