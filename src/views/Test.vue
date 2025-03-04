<template>
    <div @click="console.log(Brands)" class="row w-100 h-100 bg-danger">
    <Brand  v-for="b in Brands"
            :key="b.name"
            :name="b.name"
            :img="b.img"
            v-model="brand"
    >
    </Brand>
    </div>
</template>
  
<script>
import Brand from '@/components/Brand.vue';
import Brands from '@/assets/brands.json';

  export default {
    name: 'Test_View',
    props: {
        name:{
            type: String,
            required: true
        },
        img:{
            type: String,
            required: true
        }
    }
  }
</script>
  
<style scoped>

</style>