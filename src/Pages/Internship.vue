<template>
    <div>     
        <home />
        <internshipTechno/>
        <colleges/>
        <approvedby/>
        <opening/>
        <Achievements/>
        <!-- <download /> -->
        <contact />
    </div>

  </template>
  
 
  
  <script>
  import navigation from "../components/Navigation";
  import foote from "../components/Footer";
  import home from "../components/HomeSection";
  import about from "../components/AboutSection";
  // import download from "../components/DownloadSection";
  import client from "../components/Client";
  import contact from "../components/ContactSection";
  import internshipTechno from "../components/InternshipTechnology.vue";
  import serveSection from "../components/ServeSection.vue";
  import ServeSection from '../components/ServeSection.vue';
  import colleges from '../components/Colleges.vue'
import Opening from '../components/opening.vue';
import Achievements  from "../components/Achievements.vue";
import approvedby from '../components/ApprovedBy.vue'
  export default {
    name: "homePage",
  
    components: {
      navigation,
      foote,
      colleges,
      home,
      about,
      serveSection,
      // download,
      client,
      contact,
      internshipTechno,
      Opening,
      ServeSection,
      Achievements,
      approvedby
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
  .phoneIcon{
    position: fixed;
    bottom:35vh;
    right:0
  }
  </style>