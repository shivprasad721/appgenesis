<template>
    <section id="about" style="margin-top:90px">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="10">
            <div class="font-weight-bold display-2 text-sm-h4 text-h6  mb-2" align="center" >Daily Work Report of Interns</div>
            <v-btn  color="blue" class="white-text mb-2" to="/report/1FAIpQLSeIa6qzdt_rDwwdV3oi4GiUoyq_k91MywdQCQZUSyQCyxjcvA"  style="color:white" target="_blank" >Apply for Offer Letter</v-btn>
            <v-btn  color="primary" class="white-text mb-2 ml-2 " to="/offer-letter"  style="color:white" target="_blank" >Download Offer Letter</v-btn>
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
                                <div v-if="head.value=='internship' ">{{ internrow[head.value] }}</div>
                                <v-btn v-if="head.value!=='internship' && head.value!=='DailyTask'" color="green" class="white-text" style="color:white" :to="'/report/'+internrow[head.value]" target="_blank">{{head.value=='DailyReport'||head.value=='DailyExam'?'Start':'Download'}}</v-btn>
                                <v-btn v-if="head.value=='DailyTask'" color="green" class="white-text" style="color:white" :href="internrow[head.value]" target="_blank">Start</v-btn>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </v-card>               
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
            headers: [
                {
                    title: 'Internship with course', value: 'internship'
                },
                // { title: 'Daily Task', value: 'DailyTask' },
                { title: 'Complete LogBook', value: 'DailyReport' },
                // { title: 'Daily Exams', value: 'DailyExam' },
                // { title: 'Request for Certificate', value: 'certificate' },
                // { title: 'Request for work done Report', value: 'workDone' },

               
            ],
            internship: [
                {
                    internship: 'Web Development',
                    DailyTask:'https://youtu.be/FAOmOCEdVCo',
                    DailyReport: '1FAIpQLSdHlU3Rd_XWK7VJmcJWP_p8VbsE8wCmdkRcI8sczqMto4sdIw',
                    DailyExam: '1FAIpQLSf83IOxUzndSP7r3W8dG4Gu5AgsDb8Uig2FQYwepfaLJDFk6Q',
                    certificate: '',
                    workDone:''
                },
                {
                    internship: 'Python with Flask',
                    DailyTask:'https://youtu.be/FAOmOCEdVCo',
                    DailyReport: '1FAIpQLSdHlU3Rd_XWK7VJmcJWP_p8VbsE8wCmdkRcI8sczqMto4sdIw',
                    DailyExam: '1FAIpQLSf83IOxUzndSP7r3W8dG4Gu5AgsDb8Uig2FQYwepfaLJDFk6Q',
                    certificate: '',
                    workDone:''
                },
                {
                    internship: 'Business Analyst & Advanced Excel',
                    DailyTask:'https://youtu.be/FAOmOCEdVCo',
                    DailyReport: '1FAIpQLSdHlU3Rd_XWK7VJmcJWP_p8VbsE8wCmdkRcI8sczqMto4sdIw',
                    DailyExam: '1FAIpQLScHkyXR-Dra0ge8w8yhdMkdqKrs_t6ZEH3qefX5-qnwetg2Ug',
                    certificate: '',
                    workDone:''
                },
                {
                    internship: 'Database Developer',
                    DailyTask:'https://youtu.be/FAOmOCEdVCo',
                    DailyReport: '1FAIpQLSdHlU3Rd_XWK7VJmcJWP_p8VbsE8wCmdkRcI8sczqMto4sdIw',
                    DailyExam: '1FAIpQLSf83IOxUzndSP7r3W8dG4Gu5AgsDb8Uig2FQYwepfaLJDFk6Q',
                    certificate: '',
                    workDone:''
                },
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
  