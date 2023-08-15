<template>
  <v-footer dark padless>
    
    <v-card flat tile class="secondary white--text text-center">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-card-text class="white--text pt-0">
              <v-row>
                <v-col cols="12" sm="3">
                  <div class="d-flex justify-center text-subtitle-1 font-weight-bold font-sm-weight-regular  text-sm-h6 mt-3">
                        Registered address 
                        </div>
                        <v-card-subtitle    align="center" class="font-weight-light" color="#efefef">
                        <div>4-60,NEAR WATER TANK, KUARUMADDALI,PAMARRU,<br/> VIJAYAWADA Krishna AP 521157 IN .</div>
                        </v-card-subtitle>
                </v-col>
                <v-col  cols="12" sm="3">
                  <div class="d-flex justify-center text-subtitle-1 font-weight-bold font-sm-weight-regular  text-sm-h6 mt-3">
                        Vijayawada, AP
                        </div>
                        <v-card-subtitle  align="center" class="font-weight-light" color="#efefef">
                        <div>2nd floor, Above Dr.Chala Hari Kumar Hospital, <br/> Chutugunta signals, Eluru Rd,<br/> Vijayawada, Andhra Pradesh 520004</div>
                        </v-card-subtitle>
                </v-col >
                <v-col  cols="12" sm="3">
                  <div class="d-flex justify-center text-subtitle-1 font-weight-bold font-sm-weight-regular  text-sm-h6 mt-3">
                        Hyderabad, TS
                        </div>
                        <v-card-subtitle    align="center" class="font-weight-light" color="#efefef">
                        <div>Flat no 194,5-3-299/1/2,<br/>Kukatpally,Hyderabad-500072</div>
                        </v-card-subtitle>
                </v-col>
                <v-col>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15300.726941396042!2d80.6426187!3d16.5169203!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35e544f5675675%3A0x9966a58b7a953502!2sApp%20Genesis%20Soft%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1692083966063!5m2!1sen!2sin" width="100%" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </v-col>
              </v-row>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-text class="white--text d-flex justify-space-between" >
              <v-row>
                <v-col cols="12" sm="4" class="mt-1"> &#169; {{ new Date().getFullYear() }} — <strong>APP GENESIS SOFT SOLUTIONS PRIVATE LIMITED</strong>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-btn text  color="white"  to="/privacy" class="pa-0 px-1">
                    <span>Privacy Policy</span>
                  </v-btn> |
                  <v-btn text  color="white"  to="/upi-payment" class="pa-0 px-1">
                    <span>Payment </span>
                  </v-btn> |
                  <v-btn text  color="white" to="/payment" class="pa-0 px-1">
                    <span  >Payment Policy</span>
                  </v-btn>
                </v-col>
                <v-col cols="12" sm="4">
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
                </v-col>
              </v-row>
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
        link: "https://www.facebook.com/people/App-Genesis/pfbid02UAfefSyqPhUtMa6Y1XQbMEHJNxbjg4t7NGum3vfKN16chyfEFxYGFkpdQso9VUVWl/",
      },
      {
        text: "mdi-twitter",
        link: "https://twitter.com/appgenesis2019/",
      },
      {
        text: "mdi-linkedin",
        link: "https://in.linkedin.com/company/appgenesis1",
      },
      {
        text: "mdi-instagram",
        link: "https://www.instagram.com/appgenesis2019/",
      }, 
      {
        text: "mdi-youtube",
        link: "https://www.youtube.com/@Appgenesis1",
      },
    ],
  }),
};
</script>
