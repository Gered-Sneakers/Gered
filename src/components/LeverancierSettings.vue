<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'LeverancierSettings_View',
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
          isActive:{
            type: Boolean,
            required: true
          },
          icon:{
            type: String
          }
  },
  emits: ['delete'],//['update:modelValue']
  methods: {

  },
  computed: {
  }
}
</script>

<template>
    <div  class="col-12 mb-2" 
          v-if="isActive === true || isActive === 1"
          @mouseover="hover=true" 
          @mouseleave="hover=false"
    > 
      |{{ id }}|{{ " " + name }} 
      <span v-if="hover" class="ms-2 text-success" style="cursor:pointer;" @click="$emit('delete',{ id,name,isActive})">
        {{ icon }}
      </span>
    </div> 
</template>

<style scoped>
  div:hover{
    color: var(--gYellow) !important;
  }
</style>