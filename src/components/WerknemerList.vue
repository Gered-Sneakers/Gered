<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>

export default {
    name: 'WerknemerList_View',
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
          type: Boolean
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<template>
    <option v-if="isActive" :value="name">({{ id }}) {{name}}</option>
</template>

<style scoped>

</style>