<!-- eslint-disable no-mixed-spaces-and-tabs -->

<template>
    <div class="row">
        <div class="col">
            <div id="csv">
                {{ handle }},
                {{ title }},
                {{ vendor }},
                {{ type }},
                {{ model }},
                {{ maat }},
                {{ uitgave }},
                {{ price }},
                {{ amount }},
                {{ retailprice }},
                {{ id }},
                {{ imgSrc }},
                {{ imgPos }},
                {{ imgAlt }},
                {{ published }}
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Csv_component',
        data(){
          return{

          }
        },
        props:{
         	handle:{
         		type: String
         	},
            title:{
         		type: String
         	},
            vendor:{
         		type: String
         	},
            type:{
         		type: String
         	},
            model:{
         		type: String
         	},
            maat:{
         		type: Number
         	},
            uitgave:{
         		type: String
         	},
            price:{
         		type: String
         	},
            amount:{
         		type: String
         	},
            retailprice:{
         		type: String
         	},
            id:{
         		type: String
         	},
            imgSrc:{
         		type: String
         	},
            imgPos:{
         		type: String
         	},
            imgAlt:{
         		type: String
         	},
            published:{
         		type: String
         	}
                       
            
        },
        methods:{
        
        }
    }
</script>

<style scoped>

</style>