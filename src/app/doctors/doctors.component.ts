import { Component, OnInit } from '@angular/core';
import { DoctorsService } from './doctors.service';
import { MessageService } from 'primeng/api';
import { Doctors } from './doctors';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  displayDialog: boolean;
  cols: { field: string; header: string }[];
  car = true;
  doctorTableData = [];
  doctorObj:Doctors = new Doctors();
  selectedDoctor : Doctors;
  newDoctor: boolean;
  obj: any[];
  obj2:any[];
  personalDetailsDropdownData: any = [];
  specialistDropdownData: any = [];

  constructor(private doctorsService: DoctorsService,private mesgService: MessageService) { }

  ngOnInit() {
    this.populateCols();
    
    this.getDataInDiagnosisTable();
    this.getSpecialistDropdown();
    this.getPersonalDetailsDropdown()
  }

  populateCols() {
    this.cols = [
      { field: "doctorId", header: "Id" },
      { field: "doctorDescription", header: "Doctor Description" },
      { field: "specialistType", header: "Specialist Type" },
      { field: "specialistDescription", header: "Specialist Description" },
      { field: "name", header: "Name" },
      { field: "surname", header: "Surname" },
      { field: "cellPhoneNumber", header: "Cell Phone No." },
      { field: "telephoneNumber", header: "Telephone Number" },
      { field: "emailAddress", header: "Email Address" },

    ];
  }

  getDataInDiagnosisTable() {
    this.doctorTableData = [];
    this.doctorsService.getDoctors().subscribe(response => {
      console.log(response);
      response.map(d => {
        this.doctorTableData.push({
          doctorId:d.doctorId,
          doctorDescription: d.doctorDescription,
          specialistType: d.specialist.specialistType,
          specialistDescription:d.specialist.specialistDescription,
          name:d.personalDetails.name,
          surname:d.personalDetails.surname,
          cellPhoneNumber:d.personalDetails.cellPhoneNumber,
          telephoneNumber:d.personalDetails.telephoneNumber,
          emailAddress:d.personalDetails.emailAddress
          
        });
      });
      console.log(this.doctorTableData);
    });
  }

  getSpecialistDropdown(){
    this.obj = [];
    this.doctorsService.getSpecialists().subscribe(data => {
      data.map(d => {
        this.specialistDropdownData.push({
          label: d.specialistType,
          value: {specialistType:d['specialistType'],specialistDescription:d['specialistDescription']}
        });
        this.obj.push(d);
      });

      console.table("yohho",this.specialistDropdownData)
    });
  }

  getPersonalDetailsDropdown(){
    this.obj2 = [];
    this.doctorsService.getPersonalDetails().subscribe(data => {
      let d = data;
      console.log(data)
      Object.values(d['response']).map(d => {
        this.personalDetailsDropdownData.push({
          label: d['name'],
          value: {name:d['name'],surname:d['surname'],cellPhoneNumber:d['cellPhoneNumber'],telephoneNumber:d['telephoneNumber'],emailAddress:d['emailAddress']}
          
        });
        this.obj2.push(d);
        console.table(this.obj2)
      });
    });
  }
  saveDoctors(){
    if(this.newDoctor){
      console.log(this.doctorObj)
    this.doctorsService.postDoctors(this.doctorObj).subscribe(d=>{
      this.getDataInDiagnosisTable();
      this.displayDialog = false;
      this.mesgService.add({
        severity: "success",
        summary: "Successfull",
        detail: "Doctors Saved successfully"
      });
    },  error => {
      this.mesgService.add({
        severity: "error",
        summary: "Error",
        detail: "Error Saving Doctors"
      });
    }
    
  );
}
  else{
    let id = this.doctorTableData[this.doctorTableData.indexOf(this.selectedDoctor)]['doctorId'];
    this.doctorsService.updateDoctorsById(id,this.doctorObj).subscribe(d=>{
      this.getDataInDiagnosisTable();
      this.displayDialog = false;
      this.mesgService.add({
        severity: "success",
        summary: "Successfull",
        detail: "Doctor Updated successfully"
      });
    },  error => {
      this.mesgService.add({
        severity: "error",
        summary: "Error",
        detail: "Error updating Doctor"
      });
    })
  }
  }

  deleteDoctors(){
    let id = this.doctorTableData[this.doctorTableData.indexOf(this.selectedDoctor)]['doctorId'];
    this.doctorsService.deleteDoctors(id).subscribe(d=>{
      this.getDataInDiagnosisTable();
      this.displayDialog = false;
      this.mesgService.add({
        severity: "success",
        summary: "Successfull",
        detail: "Doctors Deleted successfully"
      });
    },  error => {
      this.mesgService.add({
        severity: "error",
        summary: "Error",
        detail: "Error Deleting Doctors"
      });
    })
  }

  onRowSelect(event){
    this.newDoctor = false;
    this.doctorObj = event.data;
    this.displayDialog = true;

    //taking id of selected row
    // console.log(this.doctorTableData[this.doctorTableData.indexOfdoctorthis.selectedDoctor)]['doctorId'])

  }

  showDialogToAdd() {
    this.newDoctor = true;
    this.displayDialog = true;
    this.doctorObj.doctorDescription = null;
    this.doctorObj.specialist = {};
    this.doctorObj.personalDetails = {};
  
  }










}
