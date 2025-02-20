<script>

  import ShopListItem from '@/components/shop-list-item.vue';

  export default {
    name: 'Shop_View',
    data(){
      return{
        items: [
          {"id":1,"brand":"nike","model":"air max 1","size":46,"img":"https://woovin.com/wp-content/uploads/2022/08/1-4-768x461.webp","price":100},
          {"id":2,"brand":"adidas","model":"originals spezial","size":44,"img":"https://woovin.com/wp-content/uploads/2022/08/1-4-768x461.webp","price":80},
          {"id":3,"brand":"New Balance","model":"1000","size":43,"img":"https://woovin.com/wp-content/uploads/2022/08/1-4-768x461.webp","price":95}
        ],
        target: ""
      }
    },
    props: {},
    components:{
      ShopListItem
    }
        
  }
</script>

<template>
  <div class="shop row">
    <ShopListItem v-for="item in items"
          :key="item.id"
          :id="item.id"
          :brand="item.brand"
          :model="item.model"
          :size="item.size"
          :img="item.img"
          :price="item.price"
          @click="target=item.name"
      ></ShopListItem> 
  </div>
</template>
  
  
  <style scoped>
  
  </style>
  