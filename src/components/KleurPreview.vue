<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'kleurpreview',
        data(){
          return{

          }
        },
        props:{
         	color:{
         		type: String,
         		required: true
         	}
        }
    }
</script>

<template>
    <div :class="color" class="small d-inline-block align-middle border border-light me-1"></div>
</template>

<style scoped>
/*
    .labelBlue{
      background-color: rgb(120, 142, 254);
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
*/
</style>