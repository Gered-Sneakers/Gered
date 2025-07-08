<template>
    <div
      v-if="isActive"
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
          <div class="rect justify-content-center rounded valign" :class="name">{{translate(name.replace("label", ""))}}</div>
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
      isActive:{
        type: Boolean,
        required: true
      },
      modelValue: String
    },
    emits: ['update:modelValue'],
    methods: {
      translate (name) {
        
        switch(name){
          case "Grey":
            name = "Grijs";
            return name;
            
          case "Red":
            name = "Rood";
            return name;
            
          case "Pink":
            name = "Roze";
            return name;
            
          case "Violet":
            name = "Paars";
            return name;
            
          case "Yellow":
            name = "Geel";
            return name;
            
          case "Brown":
            name = "Bruin";
            return name;
            
          case "DGreen":
            name = "D Groen";
            return name;
            
          case "Orange":
            name = "Oranje";
            return name;
            
          case "Blue":
            name = "Blauw";
            return name;
            
          case "White":
            name = "Wit";
            return name;
            
          case "Green":
            name = "Groen";
            return name;

          default:
            return name;
            
        }
      }
    },
    computed: {
    },
    mounted () {
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

  @media (min-width: 1600px) {
    .rect{
      width: 120px !important;
      height: 120px !important;
      font-size: 22px;
    }
  }
  
  </style>
  