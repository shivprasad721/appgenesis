<template>
  <section id="hero">
    <div>
      <div class="particalHeight">
          <vue-particles

        color="#250361"
        :particleOpacity="0.7"
        :particlesNumber="120"
        shapeType="circle"
        :particleSize="4"
        linesColor="#ffca58"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="150"
        :moveSpeed="7"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
        </div>
    </div>
    <div class="courselCustom">
    <v-carousel
    cycle
    height="750"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        style="background-color: transparent;"
        height="100%"
      >
      <div style="" class="fill-height d-flex justify-center">
        <v-row class="d-flex fill-height justify-space-between align-center " >
          <v-col cols="12" sm="6" align="center" class="marginMobile">
            <div class="text-sm-h2 text-h3 font-weight-bold" style="color:#250361" >
              <div >{{ slide.heading }} </div>
            </div>
            <div class="text-xs-h6 text-sm-h5 mt-3">
              {{ slide.desctiption }}
            </div>
            <div class="mt-3">
              <v-btn size="x-large " color="#ffca58" class="pa-5">Get Started </v-btn>
            </div>
          </v-col>
          <v-col cols="12" sm="6" align="center">
            <v-img :src="slide.imgLink" max-width="60vh"  />
          </v-col>
        </v-row>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</div>
    <!-- <v-container fluid id="features" class="mt-2">
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="space-around">
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="feature.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ feature.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ feature.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
     -->
    
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      colors: [
          
        ],
        slides: [
          {
            color:'250361',
            heading:'Web App',
            desctiption:'Development Company',
            imgLink: require("@/assets/img/web-development.png")
          },
          {
            heading:'Mobile App',
            desctiption:'Development Company',
            imgLink: require("@/assets/img/mobile-app-development.png")
          },
       
        ],
      videoId: "i8IvvHJssWE",
      features: [
        {
          img: require("@/assets/img/icon2.png"),
          title: "Design Limpo",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: require("@/assets/img/icon1.png"),
          title: "Dados Seguros",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: require("@/assets/img/icon3.png"),
          title: "Código Aberto",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    };
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.pause();
      }
    },
  },
  methods: {
    ready(event) {
      this.player = event.target;
    },
    playing(event) {
      // The player is playing a video.
    },
    change() {
      // when you change the value, the player will also change.
      // If you would like to change `playerVars`, please change it before you change `videoId`.
      // If `playerVars.autoplay` is 1, `loadVideoById` will be called.
      // If `playerVars.autoplay` is 0, `cueVideoById` will be called.
      this.videoId = "another video id";
    },
    stop() {
      this.player.stopVideo();
    },
    pause() {
      this.player.pauseVideo();
    },
  },
};
</script>

<style lang="css">
.courselCustom{
  position: absolute;
  top:0 !important;
  left:0 !important;
  width:100% !important;
}

</style>
  
<style>
.btn-play {
  transition: 0.2s;
}
.particalHeight{
  height:750px; 
  background:white
}
@media only screen and (max-width: 600px) {
  .marginMobile{
    margin-top: 150px !important;
  }
  .particalHeight{
    padding-top:150px !important;
  height:750px; 
  background:white
}
}
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
