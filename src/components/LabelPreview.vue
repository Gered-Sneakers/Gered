<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'labelpreview',
        data(){
          return{

          }
        },
        props:{
            id:{
                type: String,
                required: true
            },
         	color:{
         		type: String,
         		required: true
         	}
        }
    }
</script>

<template>
    <span :class="color">{{ id }}</span>
</template>

<style scoped>
    .labelBlue{
        background-color: rgb(65, 96, 252);
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