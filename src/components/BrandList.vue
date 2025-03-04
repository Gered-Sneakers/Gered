<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'brandlist_view',
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
         	}
        },
        methods:{
        
        }
    }
</script>

<template>
    <option :value="name">{{name}}</option>
</template>

<style scoped>

</style>