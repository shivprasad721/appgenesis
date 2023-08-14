<template>
    <section id="about">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <div class="font-weight-bold display-2 text-sm-h4 text-h6 " align="center" >Current Openings in Internship</div>
            <v-row align="center" justify="center" class="my-3">
              <v-col cols="12" md="3" v-for="(card,idx) of processData" :key="card.title">
                <v-card elevation="2" rounded="lg"
                        class="mx-auto pa-3 " variant="outlined"
                    >   <div class="d-flex justify-start font-weight-bold align-center ">
                            <div class=" d-flex justify-center mr-3">
                                <div  class="mt-1">
                                <div class="circle1">
                                    <div class="circle2">
                                        <span class="">{{idx+1}}</span>
                                    </div>
                                    </div>
                                </div>  
                            </div>  
                         <div  style="font-size:1.2rem !important">
                            
                            {{card.title}}
                        </div>
                        </div>
                </v-card>
              </v-col>
            </v-row>
            <v-card class="pa-0 overflowCustom" >
                <table  style="width:100%; " >
                    <thead  style="background-color: rgb(85, 84, 156); color:white">
                        <th v-for=" head of headers" :key="head.title" class="py-3">
                            {{ head.title }}
                        </th>
                    </thead>
                    <tbody>
                        <tr v-for="(internrow,idx) of  internship" :key="internrow.name" align="center" >
                            <td v-for="head of headers" :key="head.title" :style="idx%2?'background:white':'background:#F0F0F0'" class="py-2">
                                {{ internrow[head.value] }}
                                <v-btn v-if="head.value=='apply'" color="green" class="white-text" style="color:white" to="/apply" target="_blank">Apply</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </v-card>
            <div class="font-weight-bold display-2 text-sm-h4 text-h6 mt-8" align="center" >Certification courses</div>

            <v-row align="center" justify="center" class="my-3">
                
            <v-col cols="12" md="3" v-for="card of courses" :key="card.title">
                <v-card elevation="4" rounded="lg"
                        class="mx-auto"
                    >   

                            <v-img
                            :src="card.icon" width="100%"
                            cover height="200px"
                            ></v-img>
                            <v-card-subtitle class="pb-0 pt-1 mb-0">{{ card.duration }}</v-card-subtitle>
                            <v-card-title class="pt-0">
                                {{card.title}}
                            </v-card-title>

                            <v-card-subtitle class="d-flex items-center pb-0">
                                <v-icon style="color:#ffd500; font-size:1.2rem">mdi-star</v-icon><span class="ml-2">{{ card.Retting }}</span>
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn
                                    text  
                                    color="#250361"
                                    class="ml-2"
                                    @click="card.show = !card.show"
                                >
                                    Read more
                                </v-btn>
                                    <v-spacer></v-spacer>
                                <v-btn @click="card.show = !card.show" class="ml-2" text>  <v-icon >{{card.show ? 'mdi-chevron-up' : 'mdi-chevron-down'}}</v-icon></v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                            <div v-show="card.show">
                                <v-divider></v-divider>
                                <v-card-text>
                                    {{card.des}}
                                </v-card-text>
                            </div>
                            </v-expand-transition>
                </v-card>
            </v-col>
            </v-row>
               
          </v-col>
        </v-row>
      </v-container>
    </section>
  </template>
  <script>
  export default {
        data: () => ({
            tab: null,
            selected:'',
            itemsPerPage:'5',
            processData:[
            {
                title:'Application Submission',
               
            },
            {
                title:'Shorting',
               
            },
            {
                title:'Technical Interview',
               
            },
            {
                title:'HR Interview',
               
            },
            {
                title:'Decision and Offer',
               
            },
            {
                title:'Training',
            },
            {
                title:'Certification',
            },
            ],
            headers: [
                {
                    title: 'Internship with course', value: 'internship'
                },
                { title: 'Time Period', value: 'time' },
                { title: 'Date', value: 'date' },
                { title: 'Location', value: 'location' },
                { title: 'Apply', value: 'apply' },
               
            ],
            internship: [
                {
                    internship: 'Web Development',
                    time: '8 weeks or 16 weeks',
                    date: '23/08/2023',
                    location: 'Online',
                },
                {
                    internship: 'Python with Flask',
                    time: '8 weeks or 16 weeks',
                    date: '25/08/2023',
                    location: 'Online',
                },
                {
                    internship: 'Business Analyst & Advanced Excel',
                    time: '8 weeks or 16 weeks',
                    date: 'Ongoing',
                    location: 'Online',
                },
                {
                    internship: 'Database Developer',
                    time: '8 weeks or 16 weeks',
                    date: '30/08/2023',
                    location: 'Online',
                },
            ],
            courses:[
            {
                title:'Web Development',
                show:false,
                icon: require("@/assets/img/internship/web_development.webp"),
                Retting:'4.2',
                duration:'8 weeks or 16 weeks',
                des:'Learn Full Stack Web Development: HTML/CSS, MySQL, PHP, JavaScript, and React and build a website from scratch!'
            },
            {
                title:'Programming with Python',
                show:false,
                icon: require("@/assets/img/internship/python.webp"),
                Retting:'4.1',
                duration:'8 weeks or 16 weeks',
                des:'Learn Python to master one of the most popular programming languages of the 21st century!'
            },
            {
                title:'Digital Marketing',
                show:false,
                Retting:'4.1',
                duration:'8 weeks or 16 weeks',
                icon: require("@/assets/img/internship/digital_marketing.webp"),
                des:'Become an ace digital marketer - learn Google Analytics, Google Ads, SEO, social media marketing, email marketing, and more.'
            },
            {
                title:'Machine Learning',
                show:false,
                Retting:'4.5',
                duration:'8 weeks or 16 weeks',
                icon: require("@/assets/img/internship/machine_learning.webp"),
                des:'Learn Python and 6 most important Machine Learning algorithms to build predictive models'
            },
            {
                title:'Advanced Excel',
                show:false,
                Retting:'4.4',
                duration:'8 weeks or 16 weeks',
                icon: require("@/assets/img/internship/excel.webp"),
                des:'Learn Excel to become a pro at MS-Excel formulas & functions, data visualization, pivot tables, and more'
            },
            {
                title:'Data Science',
                show:false,
                show:false,
                Retting:'4.1',
                duration:'8 weeks or 16 weeks',
                icon: require("@/assets/img/internship/data_science.webp"),
                des:'Master the building blocks of Data Science - Python, Statistics, and Predictive Modeling'
            },
            {
                title:'SQL for Analytics',
                show:false,
                Retting:'4.0',
                duration:'8 weeks or 16 weeks',
                icon: require("@/assets/img/internship/sql-data-analytics.webp"),
                subtitle:'Learn about popular business models, probability distribution, linear programming, and predictive analytics to become a pro in analysing business data!'
            }
            ],
            items:[],
            activeTab:''
        }),

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
  @media only screen and (max-width: 600px) {
    .overflowCustom{
        overflow: scroll;
    }
  }
  .circle1 {
  border-radius: 50%;
  width: 55px;
  height: 55px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #d5deff;
  display: flex;
  align-items: center;
  justify-content: center;
}
  </style>
  