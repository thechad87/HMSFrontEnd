import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HambergerMenuComponent } from './hamberger-menu/hamberger-menu.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { PatientsComponent } from './patients/patients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { DiagnosisComponent } from './diagnosis/diagnosis.component';
import { TreatmentComponent } from './treatment/treatment.component';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { FormsModule } from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ToastModule} from 'primeng/toast';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import {CalendarModule} from 'primeng/calendar';




@NgModule({
  declarations: [
    AppComponent,
    HambergerMenuComponent,
    DoctorsComponent,
    PatientsComponent,
    AppointmentsComponent,
    DiagnosisComponent,
    TreatmentComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ButtonModule,
    CardModule,
    CalendarModule,
    TableModule,
    ProgressSpinnerModule,
    FormsModule,
    ToastModule,
    DropdownModule,
    RadioButtonModule,
    MultiSelectModule,
    DialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
  
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
