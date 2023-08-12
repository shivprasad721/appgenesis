<template>
    <div>
    <section id="achievement">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row align="center" justify="center">
             
              <v-col cols="12"  class="white--text text-left">
                <div class="font-weight-bold display-2 mb-2 text-center text-sm-h4 text-h6 ">Our Achievements</div>
                <v-row align="center" justify="center" class="my-3">
                <v-col cols="12" md="2" v-for="card of processData" :key="card.title" >
                  <v-card  
                          class=" pa-3" align='center' rounded="lg" color="rgb(20 1 55)" style="min-height:230px"
                      > 
                          <div class=" d-flex justify-center ">
                              <div  class="mt-1">
                                <div class="circle1">
                                  <div class="circle2">
                                   <v-icon style="color:#250361; font-size:2rem">{{ card.icon }}</v-icon>
                                  </div>
                                  </div>
                              </div>  
                          </div>  
                          <div class="d-flex justify-center text-subtitle-1 mt-2 mb-1 white--text" >
                          {{card.title}}
                          </div>
                          <div class="d-flex justify-center font-weight-bold text-subtitle-1 text-sm-h3 mt-2 mb-1 white--text" color="white">
                            {{card.Subtitle}}
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
    <section>
        <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row align="center" justify="center">
              <v-col cols="12"  class="text-left">
                <div class="font-weight-bold display-2 my-2 text-center text-sm-h5 text-h6 ">How learners like you are achieving their goals</div>
                <div class="swiper mySwiper" >
                    <div align="center" justify="center" class="my-3 swiper-wrapper px-3 pr-3" > 
                    <v-card v-for="card of reviewData" :key="card.name" class="swiper-slide"  style="border:1px solid rgb(82, 122, 255)">
                      <div 
                              class="pa-3 " rounded="lg"  
                          >  
                          <!-- <div class="comman">&#8216;&#8216;</div> -->
                              <div class="d-flex justify-center font-weight-bold mt-2 mb-2 " >
                              {{card.Feedback}}
                              </div><hr>
                              <div class="mt-3">
                                <div class="d-flex justify-center font-weight-bold text-subtitle-2 align-center" >
                                    <div class="iconCircle white--text mr-2">{{card.Student[0]}}</div>
                                        {{card.Student}}, {{ card.group }}
                                </div>
                                <div class=" font-weight-light text-subtitle-2 align-center items-center" >
                                    <div class="d-flex justify-center">Guided by- {{ card.GUIDE }}</div>
                                    <div  class="d-flex justify-center">Principal Name- {{ card["PRINCIPAL "]  }} </div>
                                    <div  class="d-flex justify-center">{{ card.college }}
                                    </div>
                                </div>
                            </div>
                      </div>
                    </v-card>
                  </div>
                  <!-- <div class="swiper-button-next"></div>
                  <div class="swiper-button-prev"></div> -->
               </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </section>
</div>
  </template>
  <script>
  import reviewData from './comment.json'
  export default {
   data:()=>({
    processData:[
              {
                icon: 'mdi-account-multiple',
                title:'Total Students',
                Subtitle:'3800+'

              },
              {   
                icon: 'mdi-file',
                title:'Total Course',
                Subtitle:'23'
 
              },
              {              
                icon: 'mdi-star',
                title:'Average Rating',
                Subtitle:'4.8'

              },
              {
                icon: 'mdi-help',
                title:'Total Doubts Solve',
                Subtitle:'50,000'

              },
              {
                icon: 'mdi-message-processing',
                title:'Average Response Time',
                Subtitle:'5 min'

              },
              {
                icon: 'mdi-vector-combine',
                title:'Awesome Projects made by Students',
                Subtitle:'6,300+'
              }
    ],
    reviewData:[]
   }),
   mounted(){
    this.reviewData = reviewData.Data
    this.insilize();
   },
   methods:{
    insilize(){
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            200: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    })
    }
   }
  }
  </script>
  
  <style scoped>
  #achievement {
    background-image: url("~@/assets/img/bgHero.jpg");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 350px;
  }
  
  #achievement .container,
  #achievement .row {
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
  .iconCircle {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background-color: #4b4b4b;
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
  .comman{
    font-size:2rem;
  }
  @media only screen and (max-width: 768px) {
    #achievement {
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
  <style>

  </style>