<template>
  <div class="nav-main row m-0 p-0">
    <div class="col-1 col-xl-2"></div>
    <div class="col-10 col-xl-8 row p-0 m-0 text-start">
        <div class="m-0 p-0">
          <Nav></Nav>
        </div>
    </div>  
    <div class="col-1 col-xl-2"></div>  
  </div>

  <div class="main row m-0 p-0 bg-Gered">
    <div class="col-12 p-0 m-0 text-start">
      <router-view/><!--  @scroll.prevent @wheel.prevent -->
    </div>
  </div>
<!--
  <div class="footer-main row m-0 p-0 text-start bg-purple borderz-top border-purple">
    <div class="col-0 col-xl-1"></div>
    <div class="col-12 col-xl-10 p-0 m-0 ">
      <Footer></Footer>
    </div>
    <div class="col-0 col-xl-1"></div>
  </div>
  -->
</template>

<script>
import { ref , onMounted , provide } from 'vue'

import Nav from './views/Nav.vue'

/* DATABASE SERVICES */
import AuthService from './services/AuthService';
import BrandService from './services/BrandService';
import LabelcolorService from './services/LabelcolorService';
import LeverancierService from './services/LeverancierService';
import RepairsService from './services/RepairsService';
import SneakerService from './services/SneakerService';
import WerknemerService from './services/WerknemerService';
import Sneaker from './components/Sneaker.vue';


export default {
  name: 'App',
  components: {
    Nav,
    //Footer
  },
  data() {
    return {
      brands: [],
      labelColors: [],
      leveranciers: [],
      repairs: [],
      sneakers: [],
      werknemers: []
    }
  },
  async created() {
    try {
      const [brandRes,labelColorRes,leverancierRes,repairRes,sneakerRes,werknemerRes] = await Promise.all([
        BrandService.getAll(),
        LabelcolorService.getAll(),
        LeverancierService.getAll(),
        RepairsService.getAll(),
        SneakerService.getAll(),
        WerknemerService.getAll()
      ])

      this.brands = brandRes.data
      this.labelColors = labelColorRes.data
      this.leveranciers = leverancierRes.data
      this.repairs = repairRes.data
      this.sneakers = sneakerRes.data
      this.werknemers = werknemerRes.data

      console.log("APP.VUE DB IMPORT");
      console.log(this.brands);
      console.log(this.labelColors);
      console.log(this.leveranciers);
      console.log(this.repairs);
      console.log(this.werknemers);
      console.log(this.sneakers)
    } catch (err) {
      console.error('Fout bij ophalen van data:', err)
    }
  },
  provide() {
    return {
      brands: () => this.brands,
      labelColors: () => this.labelColors,
      leveranciers: () => this.leveranciers,
      repairs: () => this.repairs,
      sneakers: () => this.sneakers,
      werknemers: () => this.werknemers,
      
    }
  },
  mounted(){ 
    //this.fetchAll()
  },
  
}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  /*background-image: url("https://www.gered.be/svg/GERED_background.svg");*/
  background-color: var(--gWhite);
  background-repeat: no-repeat;
  background-size: cover;
  font-family: "Roboto", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--gText);
  cursor: 50px 50px !important;
  font-size: 1.1rem;
}

:root{
  /* LABEL COLORS */
    --labelGrey: 	#a3a3a3;
    --labelRed: #DB7093;
    --labelPink: #FFB6C1;
    --labelViolet: #9370DB;
    --labelYellow: #FFFF66;
    --labelBrown: #8a6a12;
    --labelDGreen: #29AB87;
    --labelOrange: #FF7F50;
    --labelBlue: #6496fa;
    --labelWhite: #f0f0f0;
    --labelGreen: #88E788;

  /* SHOE COLORS */ 
    --red: #FF0000;
    --green: #008000;
    --blue: #0000FF;
    --yellow: #FFf100;
    
    --grey: #808080;
    --black: #000000;
    --white: #FFFFFF;
    --brown: #7B3F00;

    --purple: #9D00FF;
    --darkgreen: #06402B;
    --navy: #000080;
    --orange: #ff7400;
    
    --pink: #ff69b4;
    --lightgreen: #00ff00;
    --lightblue: #00ffff;
    --beige: #C8AD7F;

    --multi: linear-gradient(45deg, var(--yellow) 0%, var(--red) 25%,var(--green) 50% , var(--blue) 75% , var(--yellow) 95%);
    --goud: linear-gradient(45deg,#FFFFAC 5%,#FEDB37 10%,#9f7928 30%,#FFFFAC  50%,#9f7928 70%,#FEDB37 80%,#FFFFAC 95%);
    --zilver: linear-gradient(45deg,#999 5%,#fff 10%,#999 30%,#fff 50%,#999 70%,#fff 80%,#999 95%);
    --bronze: linear-gradient(45deg, #ca7345 5%, #ffdeca 10%, #ca7345 30%, #ffdeca 50%, #ca7345 70%, #ffdeca 80%, #ca7345 95%);

    /* MAIN COLORS */
    --gBlack: #1F2937;
    --gWhite: #FFFFFF;
    --gGrey: #F4F6F7;

    /* SUCCES OK */
    --gGreen: #10B981;
    /* DANGER NO */
    --gRed: #EF4444;
    /* WARNING UPDATE */
    --gYellow: #F59E0B;
    /* INFO */
    --gBlue: #38BDF8;

    --gText: #2A3439;
    --gTextLight: #4B575C;

  }

  .col-12 > .title{
    min-height: 100px !important;
  }

  img[src$=".svg"]{
  
  }

  .sticky{
    position: sticky;
    top: 0;
    z-index: 999;
    

  }

.bg-Gered{
  background-color: var(--gBg);
}

.bg-red{
  background-color: var(--gRed);
}
/*
.bg-gold{
  background-color: var(--goud);
}
*/
.border-Gered{
  border-color: var(--gBlack);
}

.text-yellow{
  color: var(--gYellow);
}

.text-Gered{
  color: var(--gText);
}

.text-purple{
  color: var(--purple);
  text-shadow: 2px 2px black;
}

.nav-main{
  height: 10vh !important;
  position: sticky;
  top: 0;
  left: 0;
  
  background-color: #FFFFFF;
  z-index: 9999999999999999999999999;
}

.main{
  height: 90vh !important;
  overflow: hidden !important;
}

.title{
  font-size: 4em;
  font-weight: bold;
  z-index: 10 !important;
}

.subTitle{
  font-size: 2em;
  font-weight: bold;
}

.h-65{
  height: 65% !important;
}

.h-35{
  height: 35% !important;
}

.h-10{
  height: 10% !important;
}

.h-90{
  height: 90% !important;
}

.vh-7{
  height: 7.5vh;
}

.vh-15{
  height: 15vh;
}

.vh-70{
  height: 70vh;
}

.vh-75{
  height: 75vh;
}

.vh-80{
  height: 80vh;
}

.scroll{
  overflow-y: scroll !important;
}

.w-90{
  width: 90%;
}

.w-85{
  width: 85%;
}

.w-80{
  width: 80%;
}

.max-1800{
  max-width: 1800px !important;
}

.valign{
  display: flex;
  align-items: center;
  /*flex-direction: column;*/
  /*justify-content: center;*/
}

.valignz{
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.border-blue{
  border-width: 4px;
  border-color: var(--gBlack) !important;
}

.bg-blue{
  background-color: var(--gBlack);
}

.bg-red{
  background-color: var(--gRed);
}

.bg-green{
  background-color: var(--gGreen);
}

.border-red{
  border-color: var(--gRed);
}

.border-green{
  border-color: var(--gGreen);
}


.text-blue{
  color: var(--gblue);
}

.textShadow-blue{
  text-shadow: var(--gblueShadow);
}

.roundedz{
  border-top-left-radius: 5rem;
  border-top-right-radius: 5rem;
  border-bottom-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
}

.roundedz-top{
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
}

.rounded-left{
  border-top-left-radius:  50rem;
  border-bottom-left-radius: 50rem;
}

.rounded-right{
  border-bottom-right-radius: 50rem;
  border-top-right-radius: 50rem;
}

.rounded-top-left{
  border-top-left-radius: .25rem;
}

.rounded-top-right{
  border-top-right-radius: .25rem;
}

.rounded-bottom-left{
  border-bottom-left-radius: .25rem;
}

.rounded-bottom-right{
  border-bottom-right-radius: .25rem;
}

.borderz{
  border: 10px solid;
}

.borderzz{
  border: 4px solid;
}

.border-right{
  border-right: 10px solid var(--gblue);
}

.borderz-top{
  border-top: 10px solid var(--gblue);
}

.borderz-bottom{
  border-bottom: 10px solid var(--gblue);
}

.border-left{
  border-left: 10px solid var(--gblue);
}

.border-right-rounded{
  border-top-right-radius: 50rem;
  border-bottom-right-radius: 50rem;
}

.border-left-rounded{
  border-top-left-radius: 50rem;
  border-bottom-left-radius: 50rem;
}

.border-top-rounded{
  border-top-left-radius: 50rem;
  border-top-right-radius: 50rem;
}

.rotate:hover{
  animation: rotater 0.66s infinite !important;
  transition: 150ms ease;
}

.rotateFast:hover{
  animation: rotater 0.5s infinite !important;
}

.rotateSlow:hover{
  animation: rotator 0.75s infinite !important;
}

.grow:hover img{
  filter:brightness(0.75) !important;
}

.grow:hover{ 
  transform:scale(1.05);
}

.grow{
  transform:scale(0.95);
}

.growz:hover{
  transform:scale(1.05);
}

.hover:hover{
  color: var(--gWhite);
  filter: brightness(125%);
}

.hover-dark:hover{
  color: var(--gGreen);
}

.hover-dark:hover svg {
  fill: var(--gGreen);
}

.highlight {
  background-color: rgba(0,159,253,0.5);
  border: 5px solid rgb(0,159,253);
  border-radius: 0.375rem !important;
}

@keyframes rotater{
  0%  {transform:rotate(0)}
  25% {transform:rotate(-90deg)}
  50% {transform:rotate(-180deg)}
  75% {transform:rotate(-270deg)}
  100% {transform:rotate(-360deg)}
}

a{
  color: var(--gblue) !important;
  text-decoration: none !important;
}

.vzw{
  color: white;
  text-decoration: none;
}

.text-area{
  height: 20vh;
}

.w-283{
  width:283px;
}

.w-60{
  width:60%;
}

.vh-5{
  height: 5vh !important;
}

.vh-10{
  height: 10vh !important;
}

.vh-65{
  height: 65vh !important;
}

.vh-70{
  height: 70vh !important;
}

.vh-80{
  height:  80vh !important;
}

.title{
  min-height: 100px !important;
  font-size: 4em;
  z-index: 12 !important;
}

.goButton{
  width: 100px !important;
  height: 100px !important;        
}

.invert{
  filter: invert(1);
}

.whiteIcons{
  filter: brightness(0) invert(1);
}

.blackIcons{
  filter: brightness(0) !important;
}

.rounded-top-left{

}



/* EXTEND BOOTSTRAP GRID */

/* Add custom breakpoint: xxxl (≥1800px) */
@media (min-width: 1800px) {
  .container-xxxl {
    max-width: 1760px;
  }

  /* 12-column system like Bootstrap */
  .col-xxxl-1  { flex: 0 0 auto; width: 8.333333%; }
  .col-xxxl-2  { flex: 0 0 auto; width: 16.666667%; }
  .col-xxxl-3  { flex: 0 0 auto; width: 25%; }
  .col-xxxl-4  { flex: 0 0 auto; width: 33.333333%; }
  .col-xxxl-5  { flex: 0 0 auto; width: 41.666667%; }
  .col-xxxl-6  { flex: 0 0 auto; width: 50%; }
  .col-xxxl-7  { flex: 0 0 auto; width: 58.333333%; }
  .col-xxxl-8  { flex: 0 0 auto; width: 66.666667%; }
  .col-xxxl-9  { flex: 0 0 auto; width: 75%; }
  .col-xxxl-10 { flex: 0 0 auto; width: 83.333333%; }
  .col-xxxl-11 { flex: 0 0 auto; width: 91.666667%; }
  .col-xxxl-12 { flex: 0 0 auto; width: 100%; }

  /* Custom sizes beyond the 12-grid system */
  .col-xxxl-24 { flex: 0 0 auto; width: 20%; }  /* 1/5 of 100% */
  .col-xxxl-48 { flex: 0 0 auto; width: 40%; }
  .col-xxxl-33 { flex: 0 0 auto; width: 33.3333%; } /* 1/3 */
  .col-xxxl-66 { flex: 0 0 auto; width: 66.6666%; } /* 2/3 */
}


/* LABEL COLORS */

.labelGrey{
  background-color: var(--labelGrey);
}

.labelRed{
  background-color: var(--labelRed);
}

.labelPink{
  background-color: var(--labelPink);
}

.labelViolet{
  background-color: var(--labelViolet);
}

.labelYellow{
  color: black !important;
  background-color: var(--labelYellow);
}

.labelBrown{
  background-color: var(--labelBrown);
}

.labelDGreen{
  background-color: var(--labelDGreen);
}

.labelOrange{
  background-color: var(--labelOrange);
}

.labelBlue{
  background-color: var(--labelBlue);
}

.labelWhite{
  color: black !important;
  background-color: var(--labelWhite);
}

.labelGreen{
  color: black !important;
  background-color: var(--labelGreen);
}

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

/* LOGO GERED */
#gered-logo{
  height: 75px;
  z-index: 10;
}

.cls-1 {
  fill: #fff;
}

.cls-1,.cls-2 {
  stroke-width: 0px;
}

.cls-2 {
  fill: var(--gblue);
}

[type=text],[type=password],.btn-big,.defaultInput{
  max-width: 800px !important;
  min-width: 400px !important;
}


 @media (min-width: 1600px) {
    .sneakerPreview{
        margin-left: 25px !important;
    } 

  .sneakerPreview div{
    font-size: 30px;
  }

  .smallz{
    width: 40px !important;
    height: 40px !important;
  }

  .navToevoegen div{
    width: 50px !important;
    height: 50px !important;
  }
  

  .full .row .col-6 p{
    height: 30vh;
    font-size: 25px;
    font-weight: bold;
  }

  .full button{
    font-size: 25px;
    font-weight: bold;
    padding-top: 40px !important;
    padding-bottom: 40px !important;
  }

  .rect{
    width: 120px !important;
    height: 120px !important;
  }
}

</style>
