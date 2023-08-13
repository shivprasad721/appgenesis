<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/logoIcon.jpg" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">App Genesis</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          :to="link"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="white"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title >
        <v-img src="@/assets/img/mainlogo.jpg" max-width="170px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        color="black"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text color="black" to="/">
          <span class="mr-2" >Home</span>
        </v-btn>
        <v-btn text  color="black" @click="$vuetify.goTo('#about')">
          <span class="mr-2">Services</span>
        </v-btn>
        <v-btn text  color="black" to="/intern">
          <span class="mr-2" >Internship</span>
        </v-btn>
        <!-- <v-btn text  color="black" @click="$vuetify.goTo('#pricing')">
          <span class="mr-2"></span>
        </v-btn> -->
        <v-btn rounded outlined text  style="color:black" @click="$vuetify.goTo('#contact')">
          <span class="mr-2">Contact us</span>
        </v-btn>
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "/"],
      ["mdi-information-outline", "Services", "#about"],
      ["mdi-download-box-outline", "Internship", "/intern"],
      ["mdi-email-outline", "Contact us", "#contact"],
    ],
  }),
  props: {
    color: String,
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
  },
};
</script>
