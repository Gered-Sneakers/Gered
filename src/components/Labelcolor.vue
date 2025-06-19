<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
export default {
    name: 'Labelcolor_View',
    data(){
      return{
        hover: false
      }
    },
    props:{
        id:{
          type: Number,
          required: true
        },
        name:{
     	    type: String,
     		  required: true
     	},
        colorCode:{
            type: String,
            required: true
        },
        isActive:{
            type: Boolean,
            required: true
        },
        //modelValue: String
    },
    emits: ['activate'],//['update:modelValue'],
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
            
        }
      }
    },
    computed: {
    }
}
</script>

<template>
    <div  class="col-12 row m-0 p-0 mb-2 rounded" 
          v-if="isActive"
          @mouseover="hover=true" 
          @mouseleave="hover=false"
          :style="{backgroundColor: colorCode}"
    > <div class="col-2"></div>
      <div class="col-8 valign justify-content-center rounded text-dark">
        <!--{{ translate(name.replace("label", "")) }} <br> {{ colorCode }}-->
        {{ translate(name.replace("label", "")) }}
      </div>
      <div class="col-2 rounded valign justify-content-center">
        <span v-if="hover" class="ms-2 text-danger rounded" style="cursor:pointer;" @click="$emit('delete', id)">
        ❌
        </span>
      </div>
    </div>
</template>

<style scoped>
  div:hover{
    color: var(--gYellow) !important;
    background-color: grey;
  }

  .rect{
    width: 25px;
    height: 25px;
  }
</style>