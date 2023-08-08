<template>
  <v-footer dark padless>
    
    <v-card flat tile class="secondary white--text text-center">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-card-text class="white--text pt-0">
              <v-row>
                <v-col>
                  <div class="d-flex justify-center text-subtitle-1 font-weight-bold font-sm-weight-regular  text-sm-h6 mt-3">
                        Registered address 
                        </div>
                        <v-card-subtitle    align="center" class="font-weight-light" color="#efefef">
                        <div>4-60,NEAR WATER TANK, KUARUMADDALI,PAMARRU,<br/> VIJAYAWADA Krishna AP 521157 IN .</div>
                        </v-card-subtitle>
                </v-col>
                <v-col>
                  <div class="d-flex justify-center text-subtitle-1 font-weight-bold font-sm-weight-regular  text-sm-h6 mt-3">
                        Vijayawada, AP
                        </div>
                        <v-card-subtitle  align="center" class="font-weight-light" color="#efefef">
                        <div>2nd floor, Above Dr.Chala Hari Kumar Hospital, <br/> Chutugunta signals, Eluru Rd,<br/> Vijayawada, Andhra Pradesh 520004</div>
                        </v-card-subtitle>
                </v-col>
                <v-col>
                  <div class="d-flex justify-center text-subtitle-1 font-weight-bold font-sm-weight-regular  text-sm-h6 mt-3">
                        Hyderabad, TS
                        </div>
                        <v-card-subtitle    align="center" class="font-weight-light" color="#efefef">
                        <div>Flat no 194,5-3-299/1/2,<br/>Kukatpally,Hyderabad-500072</div>
                        </v-card-subtitle>
                </v-col>
              </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text d-flex justify-space-between">
              <div> &#169; {{ new Date().getFullYear() }} — <strong>APP GENESIS SOFT SOLUTIONS PRIVATE LIMITED</strong>
              </div>

              <div>
              <v-btn
                v-for="(icon, i) in icons"
                :key="i"
                class="mx-4 white--text"
                :href="icon.link"
                target="_blank"
                icon
              >
                <v-icon size="24px">{{ icon.text }}</v-icon>
              </v-btn>
            </div>

            </v-card-text>
          </v-col>
        </v-row>
      </v-container>

    </v-card>
  </v-footer>
</template>

<style scoped>
.v-card {
  width: 100%;
}
</style>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-facebook",
        link: "",
      },
      {
        text: "mdi-twitter",
        link: "",
      },
      {
        text: "mdi-linkedin",
        link: "",
      },
      {
        text: "mdi-instagram",
        link: "https://instagram.com/joabson_arley/",
      },
    ],
  }),
};
</script>
