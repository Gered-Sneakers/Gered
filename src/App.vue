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
import Nav from './views/Nav.vue'
//import Footer from './views/Footer.vue'

export default {
  name: 'App',
  components: {
    Nav,
    //Footer
  }
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

.border-Gered{
  border-color: var(--gBlack);
}

.text-yellow{
  color: var(--gYellow);
}

.text-Gered{
  color: var(--gText);
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

[type=text],[type=password],.btn-big{
  max-width: 800px !important;
  min-width: 400px !important;
}
</style>
