<template>
    <div
      :class="{highlight: modelValue === name}" 
      class="brand invisBorder col-3 p-2 valign mx-auto rounded text-center">
      <label class="mx-auto rounded text-center" :class="name">
        <input 
          class="rounded"
          :class="name"
          type="radio" 
          :value="name" 
          name="brand"
          :checked="modelValue === name"
          @change="$emit('update:modelValue',name)"
          >
          <div class="rect mx-auto rounded" :class="name"></div>
      </label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Label_Component',
    data(){
      return{
      }
    },
    props: {
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
  
  <style scoped>
    
      [type=radio] { 
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
      }
  
     
      [type=radio] + .rect {
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

      .rect{
        width: 80px !important;
        height: 80px !important;
        border-radius: 0.375rem;
      }

      .labelBlue{
        background-color: rgb(100, 150, 250);
      }

      .labelPink{
        background-color: rgb(250, 168, 241);
      }

      .labelGreen{
        background-color: rgb(146, 250, 146);
      }

      .labelGrey{
        background-color: rgb(163, 163, 163);
      }

      .labelYellow{
        background-color: rgb(249, 249, 125);
      }
  
  </style>
  