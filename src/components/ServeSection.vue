<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
           
            <v-col cols="12"  class="white--text text-left">
              <div class="font-weight-bold display-2 mb-2 text-center text-sm-h4 text-h6 ">Industries We Serve</div>
              <v-row align="center" justify="center" class="my-3">
              <v-col cols="12" md="3" v-for="card of processData" :key="card.title">
                <v-card  
                        class="mx-auto pa-3" rounded="lg"
                    > 
                        <div class=" d-flex justify-center">
                            <div  class="mt-1">
                              <div class="circle1">
                                <div class="circle2">
                                <v-img :src="card.icon" width="100%"></v-img>
                                </div>
                                </div>
                            </div>  
                        </div>  
                        <div class="d-flex justify-center text-sm-h6 text-subtitle-1 mt-2 mb-1">
                        {{card.title}}
                        </div>
                </v-card>
              </v-col>
            </v-row>
              
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>

export default {
 data:()=>({
  processData:[
            {
              icon: require("@/assets/img/icons/retail.svg"),
              title:'Retail, Ecommerce',
               
            },
            {   
              icon: require("@/assets/img/icons/education.svg"),
              title:'Education & e-learning',
               
            },
            {              
              icon: require("@/assets/img/icons/healthcare.svg"),
              title:'Healthcare & Fitness',
              
            },
            {
              icon: require("@/assets/img/icons/logistics.svg"),
              title:'Logistics & Distribution',
              
            },
            {
              icon: require("@/assets/img/icons/socialmedia.svg"),
              title:'Social Networking',
            },
            {
              icon: require("@/assets/img/icons/realestate.svg"),
              title:'Real Estate',
            },
            {
              icon: require("@/assets/img/icons/travel.svg"),
              title:'Travel & Hospitality',
            },
            {
              icon: require("@/assets/img/icons/food.svg"),
              title:'Food & Restaurant',
            },
            {
              icon: require("@/assets/img/icons/onDemandSolution.svg"),
              title:'On-Demand Solutions',
            },
            ],
 })
}
</script>

<style scoped>
#download {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
}

#download .container,
#download .row {
  height: 100%;
}
.circle1 {
  border-radius: 50%;
  width: 65px;
  height: 65px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #e0e8fc;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media only screen and (max-width: 768px) {
  #download {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 600px;
  overflow: scroll;
}
}
</style>