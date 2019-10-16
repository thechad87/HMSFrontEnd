import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { HambergerMenuComponent } from './hamberger-menu/hamberger-menu.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';


const routes: Routes = [
  
  {path:"doctors",component:DoctorsComponent},
  {path:"patients",component:PatientsComponent},

  {path:'appointments',component:AppointmentsComponent},

  {path:"diagnosis",component:DiagnosisComponent},
  {path:'' ,component:TreatmentComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
