<template>
    <div class="contact w-100 m-0 roundedz text-blue">
        <div class="row h-100 m-0">
            
            <div class="col-12 mt-3 pt-4 text-center"> <!-- class="col-12 col-xl-6 mt-3 mt-xl-5 pt-4 pt-xl-0 text-center" -->
                <h1 class="w-100 fw-bold"> Nood aan een gesprek?</h1>
                <h2 class="w-100 fw-bold mt-3"> Contacteer ons! </h2>
            </div>
            <div class="spacer"></div>
            <div class="col-0 col-xl-2"></div>
            <div class="col-12 col-xl-8 mx-auto m-0 m-0 p-0 mt-2 mt-xl-3 pt-2 bg-green roundedz"> <!-- class="col-12 col-xl-6 mx-auto m-0" -->         
              <div class="mx-auto text-center text-muted choice mt-3">
                <input class="me-1" type="radio" id="choice1" name="choice" value="Aankoop">
                <label class="" for="choice1">Aankoop</label>
                <input class="ms-3 me-1" type="radio" id="choice2" name="choice" value="Stage">
                <label class="" for="choice2">Stage</label>
                <input class="ms-3 me-1" type="radio" id="choice3" name="choice" value="Vraag">
                <label class="" for="choice1">Vraag</label>
                <div class="w-50 d-block d-xl-none border-no mx-auto mt-0 pt-1"></div>
                <div class="w-25 d-none d-xl-block border-no mx-auto mt-0 pt-1"></div>
              </div>
              <div class="w-75 mx-auto text-center mt-2 mt-xl-3">
                <input id="name" class="w-100 text-center border-no d-inline-block mx-auto pb-1 rounded" type="text" size="20" maxlength="20" placeholder="Naam">
              </div>
              <div class="w-75 mx-auto text-center mt-2 mt-xl-3">                
                <input id="email" class="w-100 text-center border-no d-inline-block mx-auto pb-1 rounded" type="e-mail" size="33" maxlength="60" placeholder="Jouw e-mailadres">
              </div>
              <div class="w-75 mx-auto text-center mt-2 mt-xl-3">
                <textarea id="msg" class="w-100 border-no d-block mx-auto p-4 text-center rounded" type="text" placeholder="Jouw bericht"></textarea>
              </div>  
              <div class="mx-auto text-center mt-2 mt-xl-3 mb-2 mb-xl-3">
                <img class="rotate d-block mx-auto mt-2" src="../img/gered_logo.png" width="50px" height="50px">
              </div>
            </div>
            <div class="col-0 col-xl-2"></div>
            <div class="spacerr w-75"><div class="arrow-down float-end"></div></div>
        </div>
    </div>
        
  </template>
  
  <script>
  export default {
    name: 'Contact_View',
    props: {
  
    },
    methods:{
      
    }
  }
  </script>
  
  
  <style scoped>

  .contact{
  }
 
  .spacer{
    height: 10vh;
  }

  .spacerr{
    height: 15vh;
  }


  .border-no{
    border: none !important;
    /*border-bottom: 3px solid #009ffd !important;*/
    outline: none;
  }

  textarea{
    height: 75px;
  }

  .arrow-down {
    width: 0; 
    height: 0; 
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-top: 40px solid #4ecdc4;
  }

  </style>
