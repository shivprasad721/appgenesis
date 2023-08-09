<template>
    <section id="about">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <v-row align="center" justify="center">
              <v-col cols="12" md="12">
                <div class="font-weight-bold display-2 text-sm-h4 text-h6 " align="center" > Technologies We Work On</div>
                <div class="mt-5 d-flex justify-center" style="border-bottom:1px solid rgb(198, 198, 198)">
                    <div v-for="tab of tabsData" :key="tab.title" class="px-5" :class="activeTab==tab.title?'activeTab':'deactiveTab'" @click="switchTab(tab.title)" >
                        <span >{{ tab.title }}</span> 
                    </div>
                </div>
                <div v-for="tab of tabsData" :key="tab.title" class="mt-3">
                    <v-expand-transition>
                    <v-row v-if="activeTab == tab.title" >
                        <v-col v-for="language of tab.languages" :key="language.language" cols="6" sm="2" class="d-flex justify-center">
                            <div style="width:25%" class="my-8">
                                <img :src="language.icon" width="100%">
                                <div class="d-flex justify-center text-caption">{{ language.language }}</div>
                            </div>
                          </v-col>
                    </v-row>
                </v-expand-transition>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>  
        </v-row>
     
        <v-row>
            
        </v-row>
      </v-container>
    </section>
  </template>
  <script>
  export default {
        data: () => ({
            tab: null,
            tabsData:[
            {
                title:'Mobile',
                languages:[
                    {
                        language:'Android',
                        icon: require("@/assets/mobile/android.svg")
                    }, {
                        language:'iOS',
                        icon: require("@/assets/mobile/apple-icon.svg")
                    },
                    {
                        language:'Flutter',
                        icon: require("@/assets/mobile/flutter.svg")
                    },
                    {
                        language:'Kotlin',
                        icon: require("@/assets/mobile/kotlin.svg")
                    },
                    {
                        language:'React Native',
                        icon: require("@/assets/mobile/react-native.svg")
                    },
                    {
                        language:'Swift',
                        icon: require("@/assets/mobile/swift-icon.svg")
                    },
                    {
                        language:'Windows',
                        icon: require("@/assets/mobile/windows.svg")
                    }
                ]
            },{
                title:'Frontend',
                languages:[ 
                    {
                        language:'Vue JS',
                        icon: require("@/assets/frontend/vuejs.svg")
                    },
                    {
                        language:'Angular',
                        icon: require("@/assets/frontend/angular.svg")
                    },
                    {
                        language:'Golang',
                        icon: require("@/assets/frontend/golang.svg")
                    },
                    {
                        language:'Javascript',
                        icon: require("@/assets/frontend/javascript.svg")
                    },{
                        language:'Ract JS',
                        icon: require("@/assets/frontend/react-js.svg")
                    },{
                        language:'Senchatouch',
                        icon: require("@/assets/frontend/senchatouch.svg")
                    },{
                        language:'Typescript',
                        icon: require("@/assets/frontend/typescript.svg")
                    },
                    ]
            },
            {
                title:'Backend',
                languages:[{
                    language:'Codeigniter',
                    icon: require("@/assets/backend/codeigniter.svg")
                },
                {
                    language:'Django',
                    icon: require("@/assets/backend/django.svg")
                },
                {
                    language:'Graphql API',
                    icon: require("@/assets/backend/graphqlapi.svg")
                },
                {
                    language:'Node JS',
                    icon: require("@/assets/backend/nodejs.svg")
                },
                {
                    language:'PHP',
                    icon: require("@/assets/backend/php.svg")
                },
                {
                    language:'Python',
                    icon: require("@/assets/backend/python.svg")
                }
                ]
            },
          
            
            ],
            activeTab:''
        }),
        mounted(){
            this.activeTab= this.tabsData[0].title
        },
        methods:{
            switchTab(activeTab){
                this.activeTab=activeTab
            }
        }
    }
  </script>
  <style scoped>
  #about {
    background-color: #fff;
  }
  .activeTab{
    color: black  !important;
    border-bottom: 2px solid #250361;
    cursor: pointer;
    font-size: 18px;
  }
  .deactiveTab{
    color:gray !important;
    cursor: pointer;
    font-weight: 400 !important;
    font-size: 18px;

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
  </style>
  