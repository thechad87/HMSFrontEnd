import { Component, OnInit } from '@angular/core';
import { Appointments } from './appointments';
import { AppointmentserviceService } from './appointmentservice.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  appointmentsObj:Appointments=new Appointments();
  displayform:boolean=false;
  cols:any[];
  appointmentData:any[];
  selectedAppointment:Appointments;
  NewAppointmentStatus:boolean;
  car:boolean=true;



  constructor( private appointmentservice:AppointmentserviceService,private messageservice:MessageService) { }

  ngOnInit() {
    this.getallappointments();
  }

  addtodisplayform(){
    this.NewAppointmentStatus=true;
    this.displayform=true;
    this.appointmentsObj.appointmentTime=null;
    this.appointmentsObj.appointmentDate=null;
    this.appointmentsObj.appointmentDescription=null;
  }
  getallappointments(){
    this.cols = [
      { field: "appointmentId", header: "Id" },
      { field: "appointmentDate", header: "Appointment Date" },
      { field: "appointmentTime", header: "Appointment Time" },
      { field: "appointmentDescription", header: "Appointment Description " }
    
    ];

    this.appointmentData = [];
    let obj ={};
    this.appointmentservice.getappointments().subscribe(response=>{
      console.log(response);
      obj = response;
      Object.values(obj['response']).map(d=>{

        this.appointmentData.push({
          appointmentId:d['appointmentId'],
          appointmentDescription: d['appointmentDescription'],
          appointmentDate: new Date( d['appointmentDate']).toString().substr(0,9),
          appointmentTime: new Date( d['appointmentTime']).toString().substr(15,10)
        
        });
      });

    
      });
      
  }

  onRowSelect(event){
    this.NewAppointmentStatus = false;
    this.appointmentsObj.appointmentDescription=event.data['appointmentDescription'];
    this.appointmentsObj.appointmentTime=event.data['appointmentTime'];
    this.appointmentsObj.appointmentDate=event.data['appointmentDate'];
this.displayform=true;
console.log(this.appointmentsObj,"====================")
console.log(this.selectedAppointment);

  }

saveappointment(){
   
if(this.NewAppointmentStatus==true){
  this.appointmentservice.postappointments(this.appointmentsObj).subscribe(d=>{
    this.getallappointments();
    this.displayform = false;
    this.messageservice.add({
      severity: "success",
      summary: "Successfull",
      detail: "Appointment Saved successfully"
    });
  },  error => {
    this.messageservice.add({
      severity: "error",
      summary: "Error",
      detail: "Error Saving appointment"
    });
  }
  
);



}else{

let id=this.appointmentData[this.appointmentData.indexOf(this.selectedAppointment)]['appointmentId'];
this.appointmentservice.updateappointmentsById(id,this.appointmentsObj).subscribe(d=>{
  this.getallappointments();
  this.displayform = false;
  this.messageservice.add({
    severity: "success",
    summary: "Successfull",
    detail: "Appointment  Updated successfully"
  });
},  error => {
  this.messageservice.add({
    severity: "error",
    summary: "Error",
    detail: "Appointment updating Treatment"
  });
})


}

}

deleteappointment(){
let id=this.appointmentData[this.appointmentData.indexOf(this.selectedAppointment)]['appointmentId'];
this.appointmentservice.deleteappointments(id).subscribe(d=>{
  this.getallappointments();
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
