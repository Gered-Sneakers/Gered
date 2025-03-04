<template>
  <!--<option :value="name">{{name}}</option>-->
  <div class="col-3 m-1 valign mx-auto rounded">
    <label>
      <input 
        type="radio" 
        :value="name" 
        name="brand"
        :checked="modelValue === name"
        @change="$emit('update:modelValue')"
        @click="console.log(name)"
        v-model="brand"
        >
      <img width="80px" height="80px" :src="resolvedImgPath" :alt="name">
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
  
    [type=radio] { 
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

   
    [type=radio] + img {
      cursor: pointer;
    }

    
    [type=radio]:checked + img {
      background-color: rgba(0,159,253,0.5);
      border: 5px solid rgb(0,159,253);
      border-radius: 25%;
    }
  
</style>
