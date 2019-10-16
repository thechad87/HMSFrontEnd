import { Component, OnInit } from '@angular/core';
import { Diagnosis } from './diagnosis';
import { DiagnosisService } from './diagnosis.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {

  displayDialog: boolean;
  cols: { field: string; header: string }[];
  car = true;
  diagnosisTableData = [];
  diagnosisObj: Diagnosis = new Diagnosis();
  selectedDiagnosis : Diagnosis;
  newDiagnosis: boolean;

  constructor(private diagnosisService: DiagnosisService,private mesgService: MessageService) { }

  ngOnInit() {
    this.populateCols();

    this.getDataInDiagnosisTable();
  }

  populateCols() {
    this.cols = [
      { field: "diagnosisId", header: "Id" },
      { field: "diagnosisType", header: "Treatment Type" },
      { field: "diagnosisDescription", header: "Treatment Description" },
    ];
  }

  getDataInDiagnosisTable() {
    let obj={};
    this.diagnosisTableData = [];
    this.diagnosisService.getDiagnosis().subscribe(response => {
      console.log(response);
      obj = response;
      Object.values(obj['response']).map(d => {
        this.diagnosisTableData.push({
          diagnosisId:d['diagnosisId'],
          diagnosisType: d['diagnosisType'],
          diagnosisDescription: d['diagnosisDescription']
        });
      });
      console.log(this.diagnosisTableData);
    });
  }

  saveDiagnosis(){
    if(this.newDiagnosis){
    this.diagnosisService.postDiagnosis(this.diagnosisObj).subscribe(d=>{
      this.getDataInDiagnosisTable();
      this.displayDialog = false;
      this.mesgService.add({
        severity: "success",
        summary: "Successfull",
        detail: "Diagnosis Saved successfully"
      });
    },  error => {
      this.mesgService.add({
        severity: "error",
        summary: "Error",
        detail: "Error Saving Diagnosis"
      });
    }
    
  );
}
  else{
    let id = this.diagnosisTableData[this.diagnosisTableData.indexOf(this.selectedDiagnosis)]['diagnosisId'];
    this.diagnosisService.updateDiagnosisById(id,this.diagnosisObj).subscribe(d=>{
      this.getDataInDiagnosisTable();
      this.displayDialog = false;
      this.mesgService.add({
        severity: "success",
        summary: "Successfull",
        detail: "Diagnosis Updated successfully"
      });
    },  error => {
      this.mesgService.add({
        severity: "error",
        summary: "Error",
        detail: "Error updating Diagnosis"
      });
    })
  }
  }

  deleteDiagnosis(){
    let id = this.diagnosisTableData[this.diagnosisTableData.indexOf(this.selectedDiagnosis)]['diagnosisId'];
    this.diagnosisService.deleteDiagnosis(id).subscribe(d=>{
      this.getDataInDiagnosisTable();
      this.displayDialog = false;
      this.mesgService.add({
        severity: "success",
        summary: "Successfull",
        detail: "Diagnosis Deleted successfully"
      });
    },  error => {
      this.mesgService.add({
        severity: "error",
        summary: "Error",
        detail: "Error Deleting Diagnosis"
      });
    })
  }

  onRowSelect(event){
    this.newDiagnosis = false;
    this.diagnosisObj = event.data;
    this.displayDialog = true;

    //taking id of selected row
    console.log(this.diagnosisTableData[this.diagnosisTableData.indexOf(this.selectedDiagnosis)]['diagnosisId'])

  }

  showDialogToAdd() {
    this.newDiagnosis = true;
    this.displayDialog = true;
    this.diagnosisObj.diagnosisType = null;
    this.diagnosisObj.diagnosisDescription = null;
  
  }




}
