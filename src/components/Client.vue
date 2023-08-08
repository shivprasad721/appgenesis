<template>
  <section id="pricing" class="pb-8">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-card style="width: 100%" >
            <div class="text-center pt-6 font-weight-light display-2 text-sm-h4 text-h6">Our Clients</div>
            <v-divider class="my-6"></v-divider>
            <marquee loop="INFINITE" >
            <v-row class="text-center">
             <v-col cols="2" sm="2">
              <div class=" d-flex justify-center">
                <div style="width:35%" class="mt-1">  
                   <v-img src="@/assets/clientlogo/trklogo (1).png" width="100%"></v-img>
                </div>                
              </div>  
             </v-col>
             <v-col cols="10" sm="2" class="d-flex align-center">
              <div align="center">
                <div style="width:75%" class="mt-1">  
                   <v-img src="@/assets/clientlogo/academy.jpg" width="100%"></v-img>
                </div>                
              </div>  
             </v-col>
             <v-col cols="10" sm="2" class="d-flex align-center">
              <div class="d-flex justify-center ">
                <div style="width:75%" class="mt-1">  
                   <v-img src="@/assets/clientlogo/shreerastu.jpg" width="100%"></v-img>
                </div>                
              </div>  
             </v-col>
             <v-col cols="10" sm="2" class="d-flex align-center">
              <div class="d-flex justify-center ">
                <div style="width:50%" class="mt-1">  
                   <img src="@/assets/clientlogo/jaihind.jpg" width="100%"/>
                </div>                
              </div>  
             </v-col>
             <v-col cols="10" sm="2" class="d-flex align-center">
              <div class="d-flex justify-center ">
                <div style="width:50%" class="mt-1">  
                   <img src="@/assets/clientlogo/realtime.jpg" width="100%"/>
                </div>                
              </div>  
             </v-col>
            </v-row>
          </marquee>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="svg-border-rounded text-light">
      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 144.54 17.34"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path
          d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"
        />
      </svg> -->
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
      >
        <path
            d="M0,64L80,90.7C160,117,320,171,480,181.3C640,192,800,160,960,138.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  </section>
</template>

<style lang="scss">
$main_color: #283e79;

ul {
  font-size: 13px;
  line-height: 1.5em;
  margin: 5px 0 15px;
  padding: 0;

  li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }

  li {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      width: 10px;
      height: 10px;
      background-color: $main_color;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-eeborder-radius: 50%;
    }
  }
}
</style>

<style scoped>
.header {
  background-color: #283e79;
  color: white;
}

.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #e0effc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f4f7f5;
  z-index: -1;
}

#pricing {
  z-index: 0;
}

.content {
  z-index: 1;
}

svg {
  overflow: hidden;
}

section {
  position: relative;
}
</style>

<script>
export default {
}
</script>