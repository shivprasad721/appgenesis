<template>
  <v-app>
    <navigation :color="color" :flat="flat" />
    <v-main class="pt-0">
      <HomePage/>
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <div class="whatsappIcon">
      <div class="mb-2">
      <v-btn
        dark
        color="green"
       href="https://api.whatsapp.com/send?phone=9492030195&text=Hi%20I%20would%20like%20to%20know%20more%20about%20your%20services."
       target="_blank"
      >
        <v-icon>mdi-whatsapp</v-icon>Whatsapp
      </v-btn>
      </div>
      <v-btn
        dark
        width="100%"
        color="primary"
        href="tel:9492030195"
      >
        <v-icon>mdi-phone</v-icon>Call now
      </v-btn>
    </div>
    <foote />

  </v-app>
</template>

<style scoped>
.v-main {
  background-image: url("~@/assets/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
.whatsappIcon{
  position: fixed;
  bottom:40vh;
  right:0
}

</style>

<script>
import navigation from "./components/Navigation";
import foote from "./components/Footer";
import home from "./components/HomeSection";
import about from "./components/AboutSection";
// import download from "./components/DownloadSection";
import client from "./components/Client";
import contact from "./components/ContactSection";
import technology from "./components/Technology.vue";
import serveSection from "./components/ServeSection.vue";
import ServeSection from './components/ServeSection.vue';
import HomePage from './Pages/homePage.vue'

export default {
  name: "App",

  components: {
    navigation,
    foote,
    home,
    about,
    serveSection,
    // download,
    HomePage,
    client,
    contact,
    technology,
    ServeSection
},

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    gottoWhatsapp(){

    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
