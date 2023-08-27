<template>
    <div style="margin-top:100px; background-color:white">  
      <v-container class="d-flex justify-center">
        <v-row>
        <div class="px-12 customWidth mt-2" > 
          <v-text-field label="Enter your intern id" v-model="selectedInternID"></v-text-field>    
        </div>
        <div class="customButton">
        <v-btn class="mt-3 " @click="getTemplateData()" color="green">Submit</v-btn>
      </div>
        <v-btn class="mt-3 " @click="downloadPdf()" v-if="templateData" color="primary ml-2">Download PDF</v-btn>
        </v-row>
      </v-container >
      <div class="d-flex justify-center red--text text-h6">{{ errorMessage }}</div>

       <v-container  v-if="templateData"  id="pdfDown" >
        <div  class="logo" >
          <img src="../assets/img/oldLogo.jpg" width="15%">
        </div>
        <div class="register" >
          <div class="" style="font-size:14px; font-weight:bold">
            APP GENESIS INTERN ID: {{templateData.APPGenesid}}
          </div>
          <div style="font-size:14px; font-weight:bold">
            Date: {{ templateData.offerdate }}
          </div>
        </div>
        <h3 style="margin-top:15px">
          {{ templateData.Studentname }},
        </h3>
        <div>{{ templateData.gmail }}.</div>

        <div>{{ templateData.address }}.</div>
        <h3 style="margin: 10px 0px 20px 0px ">Dear {{ templateData.Studentname }},</h3>
        <p>We are delighted to extend an offer of an internship at <span style="font-size:16px; font-weight:bold; ">App Genesis Soft Solutions Pvt Ltd</span> for
          the position of <span style="font-size:16px; font-weight:bold; ">{{ templateData.JobTitle }} Intern</span>. We believe that your skills
          and enthusiasm will greatly contribute to our organization's goals. This internship will be
          conducted online from {{ templateData.StartDate }} to{{ templateData.EndDate }}.</p>
          <p>We were particularly impressed by your academic achievements and recommendation from your
          mentor <span style="font-size:16px; font-weight:bold; ">{{ templateData.mentorname }}</span>, at <span style="font-size:16px; font-weight:bold; ">{{ templateData.collegeName }}</span>.</p>
          <p> Your dedication and potential have made you a standout candidate for this
          internship opportunity. During your internship, you will be reporting to Mr. Venkat, our Manager,
          who will provide guidance and mentorship throughout your internship period. Please find the
          details of your internship offer below:</p>
          <p>Internship Position: {{ templateData.JobTitle }} Intern<br>
          Internship Duration: {{ templateData.StartDate }} to {{ templateData.EndDate }}<br>
          Internship Location: Online<br>
          Reporting Manager: <span style="font-size:16px; font-weight:bold; "> Mr. Venkat</span><br>
          Employee ID: AG006</p>
          As an intern, you will have the opportunity to gain hands-on experience and enhance your skills
          in web development and Python programming. We believe that this internship will be a valuable
          stepping stone toward your professional growth. We look forward to having you as part of our
          team at App Genesis Soft Solutions Pvt Ltd and wish you a successful and rewarding internship.</p>
          <div >
            <p>Respectfully,</p>
            <p  style="font-size:16px; font-weight:bold; margin-bottom:0px">Prabhakar Viswanadhapalli<br>
            HR Manager<br>
            Phone: 7799531111<br>
            Email: prabhakar.hr@appgenesis.in</p>
            <div class="">
              <img src="../assets/img/whologram.jpg"   width="15%">
            </div>
          </div>
          <div style="display:flex; justify-content:center">
            <div>
              <p style="margin-top:0px">I accept the above terms and conditions of service.</p>
              <p style="font-size:16px; font-weight:bold; ">Sign:______________________________________</p>
              <p style="font-size:16px; font-weight:bold; ">Name:_______________________________________</p>
            </div>
        </div>
        <div class="footer" style="background-color:rgb(246 243 255); ">
          <div style="font-size:14px; font-weight:bold; margin-right:10px "><v-icon style="color:blue; font-size:16px; margin-right:10px">mdi-map-marker</v-icon ><span >App Genesis Soft Solutions Pvt Ltd</span> <br>
            CIN : U72900AP2021PTC118998
          </div>
          <div  style="font-size:14px; font-weight:bold; "> <v-icon style="color:blue; font-size:14px; margin-right:10px" >mdi-phone</v-icon > +919492030195 <br>
            <v-icon style="color:blue; font-size:14px; margin-right:10px" >mdi-email</v-icon>Email: info@appgenesis.in</div>
          <div style="font-size:14px; font-weight:bold;  margin-right:10px"> <v-icon style="color:blue; font-size:14px" >mdi-web</v-icon> www.appgenesis.in</div>
        </div>

       </v-container>
    </div>

  </template>
  
 
  
  <script>

  import VueHtml2pdf from "vue-html2pdf";
  import html2canvas from 'html2canvas';
  import navigation from "../components/Navigation";
  import foote from "../components/Footer";
  import home from "../components/HomeSection";
  import about from "../components/AboutSection";
  // import download from "../components/DownloadSection";
  import client from "../components/Client";
  import contact from "../components/ContactSection";
  import internshipTechno from "../components/InternshipTechnology.vue";
  import serveSection from "../components/ServeSection.vue";
  import ServeSection from '../components/ServeSection.vue';
import Opening from '../components/opening.vue';
import Achievements  from "../components/Achievements.vue";
import Data from '../components/JSONData/InternshipOfferLetterData.json'
  export default {
    name: "report",
  
    components: {
      navigation,
      foote,
      home,
      about,
      serveSection,
      // download,
      client,
      contact,
      internshipTechno,
      Opening,
      ServeSection,
      Achievements,
      VueHtml2pdf,
      html2canvas
  },
  
    data: () => ({
      fab: null,
      color: "",
      flat: null,
      routerLink:'',
      OfferData:'',
      Dropdown:[],
      templateData:'',
      selectedInternID:'',
      errorMessage:''
    }),
    mounted(){
      this.routerLink = this.$route.params.link
      this.OfferData = Data
    },
    created() {
      const top = window.pageYOffset || 0;
      if (top <= 60) {
        this.color = "transparent";
        this.flat = true;
      }
    },
  
    watch: {
      fab(value) {
        if (value) {
          this.color = "secondary";
          this.flat = false;
        } else {
          this.color = "transparent";
          this.flat = true;
        }
      },
    },
  
    methods: {
      downloadPdf(){
        const invoice = document.getElementById("pdfDown");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: .5,
                filename: 'offer-letter.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
      },
      getTemplateData(){
        this.templateData='';
        this.errorMessage='';
        for(let data of this.OfferData.Sheet1){
          if(this.selectedInternID == data.APPGenesid)
          {
            this.templateData = data
          }
        }
        if(!this.templateData){
          this.errorMessage = 'Your Intern Id is incorrect Pls correct'
        }
      },
      onScroll(e) {
        if (typeof window === "undefined") return;
        const top = window.pageYOffset || e.target.scrollTop || 0;
        this.fab = top > 60;
      },
      gottoWhatsapp(){
  
      },
      toTop() {
        this.$vuetify.goTo(0);
      },
    },
  };
  </script>
  <style scoped>
  .v-main {
    background-image: url("~@/assets/img/bgMain.png");
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }
  .whatsappIcon{
    position: fixed;
    bottom:40vh;
    right:0
  }
  .phoneIcon{
    position: fixed;
    bottom:35vh;
    right:0
  }
  .gram{
    position: absolute;
    bottom:5px;
    left: 15%;
}
.register{
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  margin-top:30px;
  padding-bottom:10px;
}
.logo{
  display: flex;
  justify-content: end;
}
.footer{
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
  margin-bottom:0px;
}
p{
  margin: 10px 0px 10px 0px;
}
.customWidth{
  width:30%;
}
@media only screen and (max-width: 600px)
{
  .customWidth{
    width:100%
  }
  .customButton{
    margin-left: 44px !important;
    margin-bottom: 10px;
  }
}
  </style>