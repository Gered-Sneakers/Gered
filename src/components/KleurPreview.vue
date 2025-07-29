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
    <div v-if="color" :class="color" class="small d-inline-block align-middle border border-dark me-1 p-0 m-0"></div>
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
.small{
  width: 16px;
  height: 16px;
}
/*
 @media (min-width: 1600px) {
  .small{
    width: 25px !important;
    height: 25px !important;
  }

 }
*/
/* SNEAKER COLORS */

  .rood, .red, .red::before{
    accent-color: var(--red);
    background-color: var(--red);
    /*border: 3px solid var(--red);*/
  }

  .groen, .green, .green::before{
    accent-color: var(--green);
    background-color: var(--green);
    /*border: 3px solid var(--green);*/
  }

  .blauw, .blue, .blue::before{
    accent-color: var(--blue);
    background-color: var(--blue);
    /*border: 3px solid var(--blue);*/
  }

  .geel, .yellow, .yellow::before{
    accent-color: var(--yellow);
    background-color: var(--yellow);
    /*border: 3px solid var(--yellow);*/
    color: black;
  }

  .grijs,.grey, .grey::before{
    accent-color: var(--grey);
    background-color: var(--grey);
    /*border: 3px solid var(--grey);*/
  }

  .bruin, .brown, .brown::before{
    accent-color: var(--brown);
    background-color: var(--brown);
    /*border: 3px solid var(--brown);*/
  }
  
  .zwart, .black, .black::before{
    accent-color: var(--black);
    background-color: var(--black);
    /*border: 3px solid var(--black);*/
  }
  
  .wit, .white, .white::before{
    accent-color: var(--white);
    background-color: var(--white);
    /*border: 3px solid var(--white);*/
  }
  
  .paars, .purple, .purple::before{
    accent-color: var(--purple);
    background-color: var(--purple);
    /*border: 3px solid var(--purple);*/
  }
  
  .darkgreen, .darkgreen::before{
    accent-color: var(--darkgreen);
    background-color: var(--darkgreen);
    /*border: 3px solid var(--darkgreen);*/
  }
  
  .navy, .navy::before{
    accent-color: var(--navy);
    background-color: var(--navy);
    /*border: 3px solid var(--navy);*/
  }
  
  .oranje,.orange, .orange::before{
    accent-color: var(--orange);
    background-color: var(--orange);
    /*border: 3px solid var(--orange);*/
  }
  
  .roos, .pink, .pink::before{
    accent-color: var(--pink);
    background-color: var(--pink);
    /*border: 3px solid var(--pink);*/
  }
  
  .lichtgroen, .lightgreen, .lightgreen::before{
    accent-color: var(--lightgreen);
    background-color: var(--lightgreen);
    /*border: 3px solid var(--lightgreen);*/
  }
  
  .lichtblauw, .lightblue, .lightblue::before{
    accent-color: var(--lightblue);
    background-color: var(--lightblue);
    /*border: 3px solid var(--lightblue);*/
  }
  
  .beige, .beige::before{
    accent-color: var(--beige);
    background-color: var(--beige);
    /*border: 3px solid var(--beige);*/
  }

  .multi, .multi::before{
    accent-color: var(--yellow);
    background-color: var(--multi);
    background-image: var(--multi);
    /*border: 3px solid transparent;*/
  }
  
  .goud, .goud::before{
    accent-color: var(--yellow);
    background: var(--goud);
    /*border: 3px solid transparent;*/
  }

  .zilver, .zilver::before{
    accent-color: var(--grey);
    background: var(--zilver);
    /*border: 3px solid transparent;*/
  }

  .bronze, .bronze::before{
    accent-color: var(--orange);
    background: var(--bronze);
    /*border: 3px solid transparent;*/
  }
</style>