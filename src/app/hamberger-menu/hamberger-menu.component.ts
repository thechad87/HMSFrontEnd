import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamberger-menu',
  templateUrl: './hamberger-menu.component.html',
  styleUrls: ['./hamberger-menu.component.css']
})
export class HambergerMenuComponent implements OnInit {
  sideBarWidth: string;

  constructor(private router:Router ) { }

  ngOnInit() {
  }
  
  gotoappointments(){
    this.router.navigate(['appointments']);
  }

  gotodoctors(){
    this.router.navigate(['doctors']);

  }
  gotopatients(){
    this.router.navigate(['patients']);
  }

  goToDiagnosis(){
    this.router.navigate(['diagnosis'])
  }

  routeToTreatment(){
    this.router.navigate(['']);
  }

  openNavBar() {
    this.sideBarWidth = "250px";
  }

  closeNavBar() {
    this.sideBarWidth = "0px";
  }

}
