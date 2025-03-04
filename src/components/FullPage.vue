<template>
    <!-- :class="className" -->
    <div class="row m-0 p-0 text-center fw-bold">
        <div class="col-12 vh-10 rounded-top bg-blue text-white">
            <div class="title valign">
                <p class="w-100 text-center">{{ title }}</p>
            </div>
        </div>
        <div class="col-12 vh-70 pt-3 border-left border-right border-blue bg-green">
            <div class="h-100 centered">
                <input type="text" size="14" class="text-center border border-blue rounded" v-model="intikID"><br>
                <img @click="intikken" class="goButton rotate mx-auto" src="../img/gered_logo.png">
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'FullPage_View',
  props: {
    className: {
        type: String,
        required: False
    },
    title:{
        type: String,
        required: False
    }
  },
  methods:{

  }
}
</script>
<style scoped>

</style>