import { Component, OnInit } from '@angular/core';
import { Patients } from './patients';
import { PatientserviceService } from './patientservice.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patientObj:Patients=new Patients();
  cols:any[];
  patientdata:any[];
  displayform:boolean;
  newpatientstatus:boolean;
  selectedpatient:Patients;
  car:boolean=true;
  medication:any[];
  operation:any[];
  patientprogress:any[];
  personeldetails:any[];
  diagnosis:any[];



  

  constructor(private patientservice:PatientserviceService,private messageservice:MessageService) { }

  ngOnInit() {
    this.getallpatients();
    this.getallmedications();
    this.getalloperation();
    this.getallpatientprogress();
    this.getalldiagnosis();
    this.getallpersoneldetails();
  }
  addtodisplayform(){
    this.newpatientstatus=true;
    this.displayform=true;
    this.patientObj.diagnosis=null;
    this.patientObj.medications=null;
    this.patientObj.patientProgress=null;
    this.patientObj.personalDetails=null;
    this.patientObj.operation=null;
  }
  getallmedications(){
this.medication=[];
this.patientservice.getmedications().subscribe(data => {
  console.log("medications", data);

  if (data) {
    data.response.forEach(e => {
      this.medication.push({
        label: e.medicationType,
        value: {
          medicationType:e.medicationType,
          medicationQuantity:e.medicationQuantity,
          medicationDescription:e.medicationDescription
        }
      });
    });
  }
});

  }
  getalloperation(){
    this.operation=[];
    this.patientservice.getoperation().subscribe(data => {
      console.log("operation", data);
    
      if (data) {
        data.response.forEach(e => {
          this.operation.push({
            label: e.operationType,
            value: {
              operationType:e.operationType,
              operationDate:e.operationDate,
              operationDescription:e.operationDescription

            }
          });
        });
      }
    });

  }
  getallpatientprogress(){
    this.patientprogress=[];
    this.patientservice.getpatientProgress().subscribe(data => {
      console.log("patientprogress", data);
    
      if (data) {
        data.forEach(e => {
          this.patientprogress.push({
            label: e.patientDescription,
            value: {
              patientDescription:e.patientDescription,
             diagnosis:{
              diagnosisType:e.diagnosis.diagnosisType,
              diagnosisDescription:e.diagnosis.diagnosisDescription
             }
            }
          });
        });
      }
    });


  }
  

  getallpersoneldetails(){
    this.personeldetails=[];
    this.patientservice.getpersonalDetails().subscribe(data => {
      console.log("personeldetails", data);
    
      if (data) {
        data.response.forEach(e => {
          this.personeldetails.push({
            label: e.name,
            value: {
              name:e.name,
              surname:e.surname,
              cellPhoneNumber:e.cellPhoneNumber,
              telephoneNumber:e.telephoneNumber,
              emailAddress:e.emailAddress
            }
          });
        });
      }
    });

  }

  getalldiagnosis(){
    this.diagnosis=[];
    this.patientservice.getdiagnosis().subscribe(data => {
      console.log("diagnosis", data);
    
      if (data) {
        data.response.forEach(e => {
          this.diagnosis.push({
            label: e.diagnosisType,
            value: {
              diagnosisType:e.diagnosisType,
              diagnosisDescription:e.diagnosisDescription,
              

            }
          });
        });
      }
    });


  }
  getallpatients(){
    this.cols = [
      { field: "patientId", header: "Id" },
      { field: "medications", header: "Medication Type" },
      { field: "operation", header: " Operation Type" },
      { field: "patientProgress", header: " Patient Description " },
      { field: "personalDetails", header: "Diagnosis Type" }
    ];

this.patientdata=[];
this.patientservice.getpatients().subscribe(response => {
  console.log(response);
  response.map(d => {
    this.patientdata.push({
      patientId:d.patientId,
      medications: d.medications.medicationType,
      operation: d.operation.operationType,
      patientProgress: d.patientProgress.patientDescription,
      personalDetails: d.personalDetails.name
    });
  });
 
});


  }
  
  onRowSelect(event){
    this.newpatientstatus = false;
    this.displayform = true;
  }
  savepatients(){
    if(this.newpatientstatus==true){
      this.patientservice.postpatients(this.patientObj).subscribe(d=>{
        this.getallpatients();
        this.displayform = false;
        this.messageservice.add({
          severity: "success",
          summary: "Successfull",
          detail: "Patient Saved successfully"
        });
      },  error => {
        this.messageservice.add({
          severity: "error",
          summary: "Error",
          detail: "Error Saving Patient"
        });
      }
      
    );
    
    
    
    }else{
    let id=this.patientdata[this.patientdata.indexOf(this.selectedpatient)]['patientId'];
    this.patientservice.updatepatientsById(id,this.patientObj).subscribe(d=>{
      this.getallpatients();
      this.displayform = false;
      this.messageservice.add({
        severity: "success",
        summary: "Successfull",
        detail: "patient  Updated successfully"
      });
    },  error => {
      this.messageservice.add({
        severity: "error",
        summary: "Error",
        detail: "Patient updating Treatment"
      });
    })
    
  }
}

deletepatient(){
  let id=this.patientdata[this.patientdata.indexOf(this.selectedpatient)]['patientId'];
  this.patientservice.deletepatients(id).subscribe(d=>{
    this.getallpatients();
    this.displayform = false;
    this.messageservice.add({
      severity: "success",
      summary: "Successfull",
      detail: "Appointment  Deleted successfully"
    });
  },  error => {
    this.messageservice.add({
      severity: "error",
      summary: "Error",
      detail: "Appiintment Deleting Treatment"
    });
  })
  
  
  }
  
}
