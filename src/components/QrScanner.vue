<template>

</template>

<script>
import { Html5Qrcode } from 'html5-qrcode';

export default {
  name: 'QrScanner_Component',
  data(){
    return{
    }
  },
  props: {
    qrbox: {
        type: Number,
        default: 250
    },
    fps: {
        type: Number,
        default: 10
    }
  },
  methods: {
    onScanSuccess(decodedText, decodedResult){
        this.$emit('result', decodedText, decodedResult);
    }

  },
  mounted (){
    const config = {
        fps: this.fps,
        qrbox: this.qrbox
    }
    const scanner = new Html5Qrcode("qr-code-full-region", config);
        scanner.render(this.onScanSuccess);
  },
  computed: {

  }
}
</script>

<style scoped>

    .blackIcons{
        filter: brightness(0) !important;
    }
  
    [type=radio] { 
      position: absolute;
      opacity: 0;
      width: 0;
      height: 0;
    }

   
    [type=radio] + img {
      cursor: pointer;
    }

    .invisBorder{
      border: 5px solid transparent;
    }

    
    .highlight {
      background-color: rgba(0,159,253,0.5);
      border: 5px solid rgb(0,159,253);
      border-radius: 0.375rem !important;
    }

    #brand{
        position: relative;
    }

    #brand:after{
        content: "";
        display: block;
        padding-bottom: 25%;
    }

</style>
