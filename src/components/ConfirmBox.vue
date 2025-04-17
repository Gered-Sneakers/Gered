

<!-- eslint-disable no-mixed-spaces-and-tabs -->
<script>
    export default {
        name: 'ConfirmBox',
        data(){
          return{
          }
        },
        props:{
         	id:{
         		type: Number,
         	},
            msg:{
                type: String,
            },
            parentConfirm:{
                type: Function,
            },
            parentRefuse:{
                type: Function
            }
        },
        methods:{/*
            confirm(){
                document.getElementById("confirm").classList.remove("d-none");
            },
            refuse(){
                document.getElementById("confirm").classList.add("d-none");
            },
            */
        }
    }
</script>

<template>
    <div class="full m-0 p-0">
        <div class="row m-0 p-0 w-100 h-100 d-flex align-items-center text-center">
            <div class="col-6 bg-dark text-light mx-auto roundedz p-5" id="confirm">
                <p v-if="id > 0">Ben je zeker dat je {{ id }} wil verwijderen?</p>
                <p v-else> Ben je zeker? </p>
                <button class="bg-green" @click="parentConfirm()">YES</button> 
                <button class="bg-red ms-2" @click="parentRefuse()">NO</button>
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
    }
</style>