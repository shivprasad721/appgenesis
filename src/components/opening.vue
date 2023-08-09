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
                            <v-btn v-if="head.value=='apply'" color="green" class="text-white">Apply</v-btn>
                        </td>
                    </tr>
                </tbody>
            </table>
            </v-card>

            <v-row align="center" justify="center" class="my-3">
            <v-col cols="12" md="3" v-for="card of courses" :key="card.title">
                <v-card elevation="4" rounded="lg"
                        class="mx-auto"
                    >   
                            <v-img
                            :src="card.icon" width="100%"
                            cover height="200px"
                            ></v-img>
                            <v-card-title>
                                {{card.title}}
                            </v-card-title>

                            <v-card-subtitle>
                            1,000 miles of wonder
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
                    internship: 'Backend Web Development',
                    time: '3 Months',
                    date: '3/08/2023',
                    location: 'Online',
                },
                {
                    internship: 'Frontend Web Development',
                    time: '3 Months',
                    date: '25/08/2023',
                    location: 'Online',
                },
                {
                    internship: 'Fullstack Web Development',
                    time: '3 Months',
                    date: '30/08/2023',
                    location: 'Online',
                },
            ],
            courses:[
            {
                title:'1. Requirement Gathering',
                show:false,
                icon: require("@/assets/img/icons/required.svg"),
                des:'We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.'
            },
            {
                title:'2. UI/UX Design',
                show:false,
                icon: require("@/assets/img/icons/UIUX.svg"),
                des:'We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience.'
            },
            {
                title:'3. Prototype',
                show:false,
                icon: require("@/assets/img/icons/prototype.svg"),
                des:'After designing, you will get your prototype, which will be sent ahead for the development process for the product.'
            },
            {
                title:'4. Development',
                show:false,
                icon: require("@/assets/img/icons/development.svg"),
                des:'Development of mobile application/web/blockchain started using latest tools and technologies with transparency.'
            },
            {
                title:'5. Quality Assurance',
                show:false,
                icon: require("@/assets/img/icons/quality.svg"),
                des:'Hyperlink values quality and provides 100% bug free application with no compromisation in it.'
            },
            {
                title:'6. Deployment',
                show:false,
                icon: require("@/assets/img/icons/deployment.svg"),
                des:'After trial and following all processes, your app is ready to launch on the App store or Play Store.'
            },
            {
                title:'7. Support & Maintenance',
                show:false,
                icon: require("@/assets/img/icons/supportmaintain.svg"),
                subtitle:'Our company offers you all support and the team is always ready to answer every query after deployment.'
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
  