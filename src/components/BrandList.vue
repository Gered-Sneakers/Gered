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
         	},
            isActive:{
                type: Boolean,

            }
        },
        methods:{
        
        }
    }
</script>

<template>
    <option v-if="isActive" :value="name">{{name}}</option>
</template>

<style scoped>

</style>