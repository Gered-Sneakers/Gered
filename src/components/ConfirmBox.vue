

<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'template',
        data(){
          return{
          }
        },
        props:{
         	id:{
         		type: Number,
         		required: true
         	}
        },
        methods:{
            confirm(){
                document.getElementById("confirm").classList.remove("d-none");
            },
            refuse(){
                document.getElementById("confirm").classList.add("d-none");
            },
        
        }
    }
</script>

<template>
    <div class="full m-0 p-0">
        <div class="row centered">
            <div id="confirm" class="col-6 d-none bg-dark text-light roundedz p-5">
                <p>Ben je zeker dat je {{ searchId }} wil verwijderen?</p>
                <button @click="remove">YES</button> <button @click="">NO</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .full{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(247,247,247,0.5);
    }

    #confirm{
        position: absolute;
        top: 250px;
        left: 250px;
    }
</style>