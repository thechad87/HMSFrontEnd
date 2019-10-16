import { Component, OnInit } from "@angular/core";
import { TreatmentService } from "./treatment.service";
import { Treatment } from './treatment';
import { MessageService } from 'primeng/api';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: "app-treatment",
  templateUrl: "./treatment.component.html",
  styleUrls: ["./treatment.component.css"]
})
export class TreatmentComponent implements OnInit {
  displayDialog: boolean;
  cols: { field: string; header: string }[];
  car = true;
  treatmentTableData = [];
  treatmentObj: Treatment = new Treatment();
  selectedTreatment : Treatment;
  newTreatment: boolean;
  constructor(private treatmentService: TreatmentService,private mesgService: MessageService,
    ) {}

  ngOnInit() {
    this.populateCols();

    this.getDataInTreatmentTable();
  }

  populateCols() {
    this.cols = [
      { field: "treatmentId", header: "Id" },
      { field: "treatmentType", header: "Treatment Type" },
      { field: "treatmentDescription", header: "Treatment Description" },
      { field: "treatmentPeriod", header: "Treatment Period" },
      { field: "prescription", header: "Prescription" }
    ];
  }

  getDataInTreatmentTable() {
    this.treatmentTableData = [];
    this.treatmentService.getTreatments().subscribe(response => {
      console.log(response);
      response.map(d => {
        this.treatmentTableData.push({
          treatmentId:d.treatmentId,
          treatmentType: d.treatmentType,
          treatmentDescription: d.treatmentDescription,
          treatmentPeriod: d.treatmentPeriod,
          prescription: d.prescription
        });
      });
      console.log(this.treatmentTableData);
    });
  }

  saveTreatments(){
    console.log("in save treatments")
    if(this.newTreatment){
    this.treatmentService.postTreatments(this.treatmentObj).subscribe(d=>{
      this.getDataInTreatmentTable();
      this.displayDialog = false;
      this.mesgService.add({
        severity: "success",
        summary: "Successfull",
        detail: "Treatment Saved successfully"
      });
    },  error => {
      this.mesgService.add({
        severity: "error",
        summary: "Error",
        detail: "Error Saving Treatment"
      });
    }
    
  );
}
  else{
    let id = this.treatmentTableData[this.treatmentTableData.indexOf(this.selectedTreatment)]['treatmentId'];
    this.treatmentService.updateTreatmentById(id,this.treatmentObj).subscribe(d=>{
      this.getDataInTreatmentTable();
      this.displayDialog = false;
      this.mesgService.add({
        severity: "success",
        summary: "Successfull",
        detail: "Treatment Updated successfully"
      });
    },  error => {
      this.mesgService.add({
        severity: "error",
        summary: "Error",
        detail: "Error updating Treatment"
      });
    })
  }
  }

  deleteTreatment(){
    let id = this.treatmentTableData[this.treatmentTableData.indexOf(this.selectedTreatment)]['treatmentId'];
    this.treatmentService.deleteTreatment(id).subscribe(d=>{
      this.getDataInTreatmentTable();
      this.displayDialog = false;
      this.mesgService.add({
        severity: "success",
        summary: "Successfull",
        detail: "Treatment Deleted successfully"
      });
    },  error => {
      this.mesgService.add({
        severity: "error",
        summary: "Error",
        detail: "Error Deleting Treatment"
      });
    })
  }

  onRowSelect(event){
    this.newTreatment = false;
    this.treatmentObj = event.data;
    this.displayDialog = true;

    //taking id of selected row
    console.log(this.treatmentTableData[this.treatmentTableData.indexOf(this.selectedTreatment)]['treatmentId'])

  }

  showDialogToAdd() {
    this.newTreatment = true;
    this.displayDialog = true;
    this.treatmentObj.prescription = null;
    this.treatmentObj.treatmentDescription = null;
    this.treatmentObj.treatmentPeriod = null;
    this.treatmentObj.treatmentType = null;
  }
}
