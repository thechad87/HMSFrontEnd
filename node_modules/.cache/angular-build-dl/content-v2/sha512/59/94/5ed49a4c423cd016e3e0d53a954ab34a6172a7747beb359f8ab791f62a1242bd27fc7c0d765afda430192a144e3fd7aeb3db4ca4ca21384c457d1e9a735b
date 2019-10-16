(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointments/appointments.component.html": 
        /*!************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appointments/appointments.component.html ***!
          \************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-hamberger-menu></app-hamberger-menu>\r\n\r\n<br>\r\n<br>\r\n<br>\r\n<p-toast [showTransitionOptions]=\"'4ms'\"></p-toast>\r\n<p-card header=\"\" [style]=\"{  width: '90%',\r\n'font-size': '20px',\r\n'text-align': 'center',\r\ncolor: 'green',\r\n'margin-left':'5.5%',\r\n'margin-right':'5.5%'\r\n}\">\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n    <h2 style=\"font-weight:bold;color: rgb(22, 92, 124); text-align:left\"> Appointments </h2> \r\n     \r\n    </div>\r\n    </div>\r\n    <p-table #dt [columns]=\"cols\" [value]=\"appointmentData\" selectionMode=\"single\" [(selection)]=\"selectedAppointment\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" [rows]=\"15\">\r\n            <ng-template pTemplate=\"caption\">\r\n                \r\n             <h2>List of Appointments </h2>\r\n             <hr style=\"backdrop-filter: rgb(22, 92, 124);height:3px;background-color: rgb(22, 92, 124)  \">\r\n            \r\n             <div style=\"text-align: right\">\r\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\r\n                        (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:30%\" />\r\n                </div>\r\n             \r\n            </ng-template>\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n                        {{col.header}}\r\n                        <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                    </th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                <tr [pSelectableRow]=\"rowData\">\r\n                    <td *ngFor=\"let col of columns\">\r\n                        {{rowData[col.field]}}\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"summary\" let-rowData>\r\n                <div style=\"text-align:left\">\r\n                    <button type=\"button\" pButton (click)=\"addtodisplayform()\" label=\"Add\"></button>\r\n                </div>\r\n            </ng-template>    \r\n        </p-table>\r\n\r\n\r\n        <p-dialog header=\"Appointment\" [(visible)]=\"displayform\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"  [style]=\"{width: '700px', height: '70%'}\">\r\n            <div class=\"ui-g ui-fluid\" *ngIf=\"car\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label style=\"font-weight: bold;\">Appointment Time &nbsp;</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                            <p-calendar  [timeOnly]=\"true\" id=\"vin\" name=\"appointmentTime\" [(ngModel)]=\"appointmentsObj.appointmentTime\"></p-calendar>\r\n                        \r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label style=\"font-weight: bold;\">Appointment Date &nbsp;</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                            <p-calendar id=\"year\" name=\"appointmentDate\" required  [(ngModel)]=\"appointmentsObj.appointmentDate\" [monthNavigator]=\"true\" [yearNavigator]=\"true\" yearRange=\"2019:2090\" showButtonBar = \"true\"  placeholder=\"Filter By Date\">\r\n                                </p-calendar>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label style=\"font-weight: bold;\">Appointment Discription &nbsp;</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <input id=\"vin\" style=\"height: 35px;width:100% \" name=\"appointmentDescription\" [(ngModel)]=\"appointmentsObj.appointmentDescription\" pInputText id=\"brand\" name=\"treatmentPeriod\"  />\r\n                    </div>\r\n                </div>\r\n              \r\n            </div>\r\n            <p-footer>\r\n                <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                    <button type=\"button\" pButton  (click)=\"deleteappointment()\" label=\"Delete\"></button>\r\n                    <button type=\"button\" pButton  (click)=\"saveappointment()\" label=\"Save\"></button>\r\n                </div>\r\n            </p-footer>\r\n        </p-dialog>\r\n    \r\n           \r\n</p-card>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/diagnosis/diagnosis.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/diagnosis/diagnosis.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-hamberger-menu></app-hamberger-menu>\r\n\r\n<br>\r\n<br>\r\n<br>\r\n<p-toast [showTransitionOptions]=\"'4ms'\"></p-toast>\r\n<p-card header=\"\" [style]=\"{  width: '90%',\r\n'font-size': '20px',\r\n'text-align': 'center',\r\ncolor: 'green',\r\n'margin-left':'5.5%',\r\n'margin-right':'5.5%'\r\n}\">\r\n\r\n<div class=\"ui-g\">\r\n    \r\n    <h2 style=\"font-weight:bold;color: rgb(22, 92, 124);text-align: left \"> Diagnosis </h2>  \r\n      <!-- <hr style=\"background-color:rgb(22, 92, 124); height:3px;\" /> -->\r\n    <!-- </div> -->\r\n    </div>\r\n    <p-table #data [columns]=\"cols\" [value]=\"diagnosisTableData\" selectionMode=\"single\" [(selection)]=\"selectedDiagnosis\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" [rows]=\"15\">\r\n           \r\n            <ng-template pTemplate=\"caption\">\r\n                \r\n                    <div class=\"ui-g-12\">\r\n                            <h3 style=\"font-weight:bold;color: rgb(22, 92, 124);\"> LIST OF DIAGNOSIS</h3>\r\n                            <hr style=\"background-color:rgb(22, 92, 124);height:3px;\" />\r\n                        </div>\r\n                <div style=\"text-align: right\">\r\n                        <i  style=\"margin:4px 4px 0 0\"></i>\r\n                        <input type=\"text\" pInputText size=\"50\"  placeholder=\"Filter Here\"\r\n                            (input)=\"data.filterGlobal($event.target.value, 'contains')\" style=\"width:30%;height: 35px;\" />\r\n                    </div>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n                        {{col.header}}\r\n                        <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                    </th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                <tr [pSelectableRow]=\"rowData\">\r\n                    <td *ngFor=\"let col of columns\">\r\n                        {{rowData[col.field]}}\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"summary\" let-rowData>\r\n                <div style=\"text-align:left\">\r\n                    <button type=\"button\" pButton (click)=\"showDialogToAdd()\" label=\"Add\"></button>\r\n                </div>\r\n            </ng-template>    \r\n        </p-table>\r\n        \r\n        <p-dialog header=\"Diagnosis\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"  [style]=\"{width: '540px'}\">\r\n            <div class=\"ui-g ui-fluid\" *ngIf=\"car\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label style=\"font-weight: bold;\">Diagnosis Type &nbsp;</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <input style=\"height: 35px; width: 100%\" pInputText id=\"vin\" name=\"diagnosisType\" [(ngModel)]=\"diagnosisObj.diagnosisType\"  />\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label style=\"font-weight: bold;\">Diagnosis Description &nbsp;</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <input  style=\"height: 35px;width: 100%\" pInputText id=\"year\" name=\"diagnosisDescription\" [(ngModel)]=\"diagnosisObj.diagnosisDescription\" />\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <p-footer>\r\n                <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                    <button type=\"button\" pButton  (click)=\"deleteDiagnosis()\" label=\"Delete\"></button>\r\n                    <button type=\"button\" pButton  (click)=\"saveDiagnosis()\" label=\"Save\"></button>\r\n                </div>\r\n            </p-footer>\r\n        </p-dialog>\r\n    \r\n</p-card>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/doctors/doctors.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/doctors/doctors.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-hamberger-menu></app-hamberger-menu>\r\n\r\n<br />\r\n<br />\r\n<br />\r\n<p-toast [showTransitionOptions]=\"'4ms'\"></p-toast>\r\n<p-card\r\n  header=\"\"\r\n  [style]=\"{\r\n    width: '90%',\r\n    'font-size': '20px',\r\n    'text-align': 'center',\r\n    color: 'green',\r\n    'margin-left': '5.5%',\r\n    'margin-right': '5.5%'\r\n  }\"\r\n>\r\n  <div class=\"ui-g\">\r\n    <h2 style=\"font-weight:bold;color: rgb(22, 92, 124);text-align: left \">\r\n      Doctors\r\n    </h2>\r\n    <!-- <hr style=\"background-color:rgb(22, 92, 124); height:3px;\" /> -->\r\n    <!-- </div> -->\r\n  </div>\r\n  <p-table\r\n    #data\r\n    [columns]=\"cols\"\r\n    [value]=\"doctorTableData\"\r\n    selectionMode=\"single\"\r\n    [(selection)]=\"selectedDoctor\"\r\n    (onRowSelect)=\"onRowSelect($event)\"\r\n    [paginator]=\"true\"\r\n    [rows]=\"15\"\r\n  >\r\n    <ng-template pTemplate=\"caption\">\r\n      <div class=\"ui-g-12\">\r\n        <h3 style=\"font-weight:bold;color: rgb(22, 92, 124);\">\r\n          LIST OF DOCTORS\r\n        </h3>\r\n        <hr style=\"background-color:rgb(22, 92, 124);height:3px;\" />\r\n      </div>\r\n      <div style=\"text-align: right\">\r\n        <i style=\"margin:4px 4px 0 0\"></i>\r\n        <input\r\n          type=\"text\"\r\n          pInputText\r\n          size=\"50\"\r\n          placeholder=\"Filter Here\"\r\n          (input)=\"data.filterGlobal($event.target.value, 'contains')\"\r\n          style=\"width:30%;height: 35px;\"\r\n        />\r\n      </div>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"header\" let-columns>\r\n      <tr>\r\n        <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n          {{ col.header }}\r\n          <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n        </th>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n      <tr [pSelectableRow]=\"rowData\">\r\n        <td *ngFor=\"let col of columns\">\r\n          {{ rowData[col.field] }}\r\n        </td>\r\n      </tr>\r\n    </ng-template>\r\n    <ng-template pTemplate=\"summary\" let-rowData>\r\n      <div style=\"text-align:left\">\r\n        <button\r\n          type=\"button\"\r\n          pButton\r\n          (click)=\"showDialogToAdd()\"\r\n          label=\"Add\"\r\n        ></button>\r\n      </div>\r\n    </ng-template>\r\n  </p-table>\r\n\r\n  <p-dialog\r\n    header=\"Doctors\"\r\n    [(visible)]=\"displayDialog\"\r\n    [responsive]=\"true\"\r\n    showEffect=\"fade\"\r\n    [modal]=\"true\"\r\n    [style]=\"{ width: '540px' }\"\r\n  >\r\n    <div class=\"ui-g ui-fluid\" *ngIf=\"car\">\r\n      <div class=\"ui-g-12\">\r\n        <div class=\"ui-g-4\">\r\n          <label style=\"font-weight: bold;\">Doctors Description &nbsp;</label>\r\n        </div>\r\n        <div class=\"ui-g-8\">\r\n          <input\r\n            style=\"height: 35px;width: 100%\"\r\n            pInputText\r\n            id=\"vin\"\r\n            name=\"doctorDescription\"\r\n            [(ngModel)]=\"doctorObj.doctorDescription\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"ui-g-12\">\r\n            <div class=\"ui-g-4\">\r\n              <label style=\"font-weight: bold;\">Specialist Obj&nbsp;</label>\r\n            </div>\r\n            <div class=\"ui-g-8\">\r\n              <p-dropdown\r\n                [style]=\"{'height': '35px'}\"\r\n                [options]=\"specialistDropdownData\"\r\n                id=\"year\"\r\n                name=\"speacialist\"\r\n                placeholder=\"Select speciality\"\r\n                pInputText\r\n                [(ngModel)]=\"doctorObj.specialist\"\r\n                style=\"width: 100%\"\r\n                [filter]=\"true\"\r\n              ></p-dropdown>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui-g-12\">\r\n                <div class=\"ui-g-4\">\r\n                  <label style=\"font-weight: bold;\">Personal Details Obj &nbsp;</label>\r\n                </div>\r\n                <div class=\"ui-g-8\">\r\n                        <p-dropdown\r\n                        [style]=\"{'height': '35px'}\"\r\n                        [options]=\"personalDetailsDropdownData\"\r\n                        id=\"year\"\r\n                        name=\"PersonalDetails\"\r\n                        placeholder=\"Select Name\"\r\n                        pInputText\r\n                        [(ngModel)]=\"doctorObj.personalDetails\"\r\n                        style=\"width: 100%\"\r\n                        [filter]=\"true\"\r\n                      ></p-dropdown>\r\n                </div>\r\n              </div>\r\n    </div>\r\n    <p-footer>\r\n      <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n        <button\r\n          type=\"button\"\r\n          pButton\r\n          (click)=\"deleteDoctors()\"\r\n          label=\"Delete\"\r\n        ></button>\r\n        <button\r\n          type=\"button\"\r\n          pButton\r\n          (click)=\"saveDoctors()\"\r\n          label=\"Save\"\r\n        ></button>\r\n      </div>\r\n    </p-footer>\r\n  </p-dialog>\r\n</p-card>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/hamberger-menu/hamberger-menu.component.html": 
        /*!****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hamberger-menu/hamberger-menu.component.html ***!
          \****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navbar\">\r\n    <div style=\" margin-left:2%;margin-top: 0.5%\">\r\n      <span\r\n        style=\"font-size:20px;cursor:pointer;color:white ; font-family: Arial, Helvetica, sans-serif\"\r\n        (click)=\"openNavBar()\"\r\n        >&#9776; &nbsp; HOSPITAL MANAGEMENT SYSTEM\r\n      </span>\r\n    </div>\r\n  </div>\r\n  \r\n  <div id=\"mySidenav\" [style.width]=\"sideBarWidth\" class=\"sidenav\">\r\n    <div [style.width]=\"sideBarWidth\" class=\"hambergerNav\">\r\n    </div>\r\n    <a class=\"closebtn\" style=\"cursor: pointer;\" (click)=\"closeNavBar()\">\r\n      &times;\r\n    </a>\r\n    <div class=\"divHover\" style=\"width: 100%; height: 50px;\" (click)=\"gotodoctors()\">\r\n      <li style=\" margin-left: 5%; cursor: pointer; padding: 10px 0 10px 10px \">\r\n        <a>\r\n          <div style=\"width: 30px\">\r\n            <img src=\"assets/icons8-medical-doctor-24.png\" class=\"imgClass\" />\r\n          </div>\r\n          <span\r\n            class=\"nav-text\"\r\n            style=\"font-family: Arial, Helvetica, sans-serif; font-size: 18px\"\r\n          >\r\n            Doctors\r\n          </span>\r\n        </a>\r\n      </li>\r\n    </div>\r\n  \r\n    <div class=\"divHover\" style=\"width: 100%; height: 50px; \" (click)=\"gotopatients()\">\r\n      <li style=\" margin-left: 5%; cursor: pointer; padding: 10px 0 10px 10px \">\r\n        <a>\r\n          <div style=\"width: 30px\">\r\n            <img src=\"assets/icons8-out-patient-department-24.png\" class=\"imgClass\" />\r\n          </div>\r\n          <span\r\n            class=\"nav-text\"\r\n            style=\"font-family: Arial, Helvetica, sans-serif; font-size: 18px\"\r\n          >\r\n            Patients\r\n          </span>\r\n        </a>\r\n      </li>\r\n    </div>\r\n  \r\n    <div class=\"divHover\" style=\"width: 100%; height: 50px;\" (click)=\"gotoappointments()\">\r\n      <li style=\" margin-left: 5%; cursor: pointer; padding: 10px 0 10px 10px \">\r\n        <a>\r\n          <div style=\"width: 30px\">\r\n            <img src=\"assets/icons8-appointment-scheduling-24.png\" class=\"imgClass\" />\r\n          </div>\r\n          <span\r\n            class=\"nav-text\"\r\n            style=\"font-family: Arial, Helvetica, sans-serif; font-size: 18px\"\r\n          >\r\n            Appointments\r\n          </span>\r\n        </a>\r\n      </li>\r\n    </div>\r\n  \r\n    <div class=\"divHover\" style=\"width: 100%; height: 50px;\" (click)=\"goToDiagnosis();\">\r\n      <li style=\" margin-left: 5%; cursor: pointer; padding: 10px 0 10px 10px \">\r\n        <a>\r\n          <div style=\"width: 30px\">\r\n            <img src=\"assets/icons8-x-ray-24.png\" class=\"imgClass\" />\r\n          </div>\r\n          <span\r\n            class=\"nav-text\"\r\n            style=\"font-family: Arial, Helvetica, sans-serif; font-size: 18px\"\r\n          >\r\n            Diagnosis\r\n          </span>\r\n        </a>\r\n      </li>\r\n    </div>\r\n  \r\n    <div class=\"divHover\" style=\"width: 100%; height: 50px;\" (click)=\"routeToTreatment()\">\r\n      <li style=\" margin-left: 5%; cursor: pointer; padding: 10px 0 10px 10px \">\r\n        <a>\r\n          <div style=\"width: 30px\">\r\n            <img src=\"assets/icons8-treatment-24.png\" class=\"imgClass\" />\r\n          </div>\r\n          <span\r\n            class=\"nav-text\"\r\n            style=\"font-family: Arial, Helvetica, sans-serif; font-size: 18px\"\r\n          >\r\n            Treatment\r\n          </span>\r\n        </a>\r\n      </li>\r\n    </div>\r\n  </div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patients.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patients.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-hamberger-menu></app-hamberger-menu>\r\n\r\n<br>\r\n<br>\r\n<br>\r\n<p-toast [showTransitionOptions]=\"'4ms'\"></p-toast>\r\n<p-card header=\"\" [style]=\"{  width: '90%',\r\n'font-size': '20px',\r\n'text-align': 'center',\r\ncolor: 'green',\r\n'margin-left':'5.5%',\r\n'margin-right':'5.5%'\r\n}\">\r\n\r\n<div class=\"ui-g\">\r\n    <div class=\"ui-g-12\">\r\n    <h2 style=\"font-weight:bold;color: rgb(22, 92, 124); text-align:left\"> Patients </h2> \r\n     \r\n    </div>\r\n    </div>\r\n    <p-table #dt [columns]=\"cols\" [value]=\"patientdata\" selectionMode=\"single\" [(selection)]=\"selectedpatient\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" [rows]=\"15\">\r\n            <ng-template pTemplate=\"caption\">\r\n                \r\n             <h2>List of Patients </h2>\r\n             <hr style=\"backdrop-filter: rgb(22, 92, 124);height:3px;background-color: rgb(22, 92, 124)  \">\r\n            \r\n             <div style=\"text-align: right\">\r\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\r\n                        (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:30%\" />\r\n                </div>\r\n             \r\n            </ng-template>\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n                        {{col.header}}\r\n                        <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                    </th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                <tr [pSelectableRow]=\"rowData\">\r\n                    <td *ngFor=\"let col of columns\">\r\n                        {{rowData[col.field]}}\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"summary\" let-rowData>\r\n                <div style=\"text-align:left\">\r\n                    <button type=\"button\" pButton (click)=\"addtodisplayform()\" label=\"Add\"></button>\r\n                </div>\r\n            </ng-template>    \r\n        </p-table>\r\n\r\n\r\n        <p-dialog header=\"Appointment\" [(visible)]=\"displayform\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"  [style]=\"{width: '700px', height: '70%'}\">\r\n            <div class=\"ui-g ui-fluid\" *ngIf=\"car\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label style=\"font-weight: bold;\">Medications &nbsp;</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                            <p-dropdown\r\n                            [options]=\"medication\"\r\n                            name=\"medications\"\r\n                            placeholder=\"Select medications\"\r\n                            [(ngModel)]=\"patientObj.medications\"\r\n                            [filter]=\"true\"\r\n                            [style]=\"{\r\n                              width: '100%',\r\n                              height: '100%',\r\n                              'font-size': '20px'\r\n                            }\"\r\n                            [ngStyle]=\"{ width: '100%', 'font-size': '20px' }\"\r\n                            required\r\n                          ></p-dropdown>\r\n                        \r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label style=\"font-weight: bold;\">Operation &nbsp;</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                            <p-dropdown\r\n                            [options]=\"operation\"\r\n                            name=\"operation\"\r\n                            placeholder=\"Select operation\"\r\n                            [(ngModel)]=\"patientObj.operation\"\r\n                            [filter]=\"true\"\r\n                            [style]=\"{\r\n                              width: '100%',\r\n                              height: '100%',\r\n                              'font-size': '20px'\r\n                            }\"\r\n                            [ngStyle]=\"{ width: '100%', 'font-size': '20px' }\"\r\n                            required\r\n                          ></p-dropdown>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label style=\"font-weight: bold;\">Patient Progress &nbsp;</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                            <p-dropdown\r\n                            [options]=\"patientprogress\"\r\n                            name=\"patientProgress\"\r\n                            placeholder=\"Select patientProgress\"\r\n                            [(ngModel)]=\"patientObj.patientProgress\"\r\n                            [filter]=\"true\"\r\n                            [style]=\"{\r\n                              width: '100%',\r\n                              height: '100%',\r\n                              'font-size': '20px'\r\n                            }\"\r\n                            [ngStyle]=\"{ width: '100%', 'font-size': '20px' }\"\r\n                            required\r\n                          ></p-dropdown>\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                        <div class=\"ui-g-4\">\r\n                            <label style=\"font-weight: bold;\">Personel Details &nbsp;</label>\r\n                        </div>\r\n                        <div class=\"ui-g-8\">\r\n                                <p-dropdown\r\n                                [options]=\"personeldetails\"\r\n                                name=\"personalDetails\"\r\n                                placeholder=\"Select personalDetails\"\r\n                                [(ngModel)]=\"patientObj.personalDetails\"\r\n                                [filter]=\"true\"\r\n                                [style]=\"{\r\n                                  width: '100%',\r\n                                  height: '100%',\r\n                                  'font-size': '20px'\r\n                                }\"\r\n                                [ngStyle]=\"{ width: '100%', 'font-size': '20px' }\"\r\n                                required\r\n                              ></p-dropdown>   \r\n                        </div>\r\n                    </div>\r\n                    <div class=\"ui-g-12\">\r\n                            <div class=\"ui-g-4\">\r\n                                <label style=\"font-weight: bold;\"> Diagnosis &nbsp;</label>\r\n                            </div>\r\n                            <div class=\"ui-g-8\">\r\n                                    <p-dropdown\r\n                                    [options]=\"diagnosis\"\r\n                                    name=\"diagnosis\"\r\n                                    placeholder=\"Select diagnosis\"\r\n                                    [(ngModel)]=\"patientObj.diagnosis\"\r\n                                    [filter]=\"true\"\r\n                                    [style]=\"{\r\n                                      width: '100%',\r\n                                      height: '100%',\r\n                                      'font-size': '20px'\r\n                                    }\"\r\n                                    [ngStyle]=\"{ width: '100%', 'font-size': '20px' }\"\r\n                                    required\r\n                                  ></p-dropdown>   \r\n                            </div>\r\n                        </div>\r\n              \r\n            </div>\r\n            <p-footer>\r\n                <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                    <button type=\"button\" pButton  (click)=\"deletepatient()\" label=\"Delete\"></button>\r\n                    <button type=\"button\" pButton  (click)=\"savepatients()\" label=\"Save\"></button>\r\n                </div>\r\n            </p-footer>\r\n        </p-dialog>\r\n    \r\n           \r\n</p-card>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/treatment/treatment.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/treatment/treatment.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-hamberger-menu></app-hamberger-menu>\r\n\r\n<br>\r\n<br>\r\n<br>\r\n<p-toast [showTransitionOptions]=\"'4ms'\"></p-toast>\r\n<p-card header=\"\" [style]=\"{  width: '90%',\r\n'font-size': '20px',\r\n'text-align': 'center',\r\ncolor: 'green',\r\n'margin-left':'5.5%',\r\n'margin-right':'5.5%'\r\n}\">\r\n\r\n<div class=\"ui-g\">\r\n    \r\n    <h2 style=\"font-weight:bold;color: rgb(22, 92, 124);text-align: left \"> Treatments </h2>  \r\n      <!-- <hr style=\"background-color:rgb(22, 92, 124); height:3px;\" /> -->\r\n    <!-- </div> -->\r\n    </div>\r\n    <p-table #data [columns]=\"cols\" [value]=\"treatmentTableData\" selectionMode=\"single\" [(selection)]=\"selectedTreatment\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" [rows]=\"15\">\r\n           \r\n            <ng-template pTemplate=\"caption\">\r\n                \r\n                    <div class=\"ui-g-12\">\r\n                            <h3 style=\"font-weight:bold;color: rgb(22, 92, 124);\"> LIST OF TREATMENTS</h3>\r\n                            <hr style=\"background-color:rgb(22, 92, 124);height:3px;\" />\r\n                        </div>\r\n                <div style=\"text-align: right\">\r\n                        <i  style=\"margin:4px 4px 0 0\"></i>\r\n                        <input type=\"text\" pInputText size=\"50\"  placeholder=\"Filter Here\"\r\n                            (input)=\"data.filterGlobal($event.target.value, 'contains')\" style=\"width:30%;height: 35px;\" />\r\n                    </div>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n                        {{col.header}}\r\n                        <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n                    </th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                <tr [pSelectableRow]=\"rowData\">\r\n                    <td *ngFor=\"let col of columns\">\r\n                        {{rowData[col.field]}}\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"summary\" let-rowData>\r\n                <div style=\"text-align:left\">\r\n                    <button type=\"button\" pButton (click)=\"showDialogToAdd()\" label=\"Add\"></button>\r\n                </div>\r\n            </ng-template>    \r\n        </p-table>\r\n        \r\n        <p-dialog header=\"Treatment\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\"  [style]=\"{width: '540px'}\">\r\n            <div class=\"ui-g ui-fluid\" *ngIf=\"car\">\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label style=\"font-weight: bold;\">Treatment Type &nbsp;</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <input style=\"height: 35px;width: 100%\" pInputText id=\"vin\" name=\"treatmentType\" [(ngModel)]=\"treatmentObj.treatmentType\"  />\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label style=\"font-weight: bold;\">Treatment Description &nbsp;</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <input  style=\"height: 35px;width: 100%\" pInputText id=\"year\" name=\"treatmentDescription\" [(ngModel)]=\"treatmentObj.treatmentDescription\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\">\r\n                        <label style=\"font-weight: bold;\">Treatment Period &nbsp;</label>\r\n                    </div>\r\n                    <div class=\"ui-g-8\">\r\n                        <input  style=\"height: 35px;width: 100%\" pInputText id=\"brand\" name=\"treatmentPeriod\" [(ngModel)]=\"treatmentObj.treatmentPeriod\" />\r\n                    </div>\r\n                </div>\r\n                <div class=\"ui-g-12\">\r\n                    <div class=\"ui-g-4\" >\r\n                        <label style=\"font-weight: bold;\">Prescription </label>\r\n                    </div>\r\n                    \r\n                    <div class=\"ui-g-8\" >\r\n                        <input  style=\"height: 35px;width: 100%\" pInputText id=\"color\"  name=\"prescription\" [(ngModel)]=\"treatmentObj.prescription\"/>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <p-footer>\r\n                <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n                    <button type=\"button\" pButton  (click)=\"deleteTreatment()\" label=\"Delete\"></button>\r\n                    <button type=\"button\" pButton  (click)=\"saveTreatments()\" label=\"Save\"></button>\r\n                </div>\r\n            </p-footer>\r\n        </p-dialog>\r\n    \r\n</p-card>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./doctors/doctors.component */ "./src/app/doctors/doctors.component.ts");
            /* harmony import */ var _patients_patients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patients/patients.component */ "./src/app/patients/patients.component.ts");
            /* harmony import */ var _treatment_treatment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./treatment/treatment.component */ "./src/app/treatment/treatment.component.ts");
            /* harmony import */ var _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appointments/appointments.component */ "./src/app/appointments/appointments.component.ts");
            /* harmony import */ var _diagnosis_diagnosis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./diagnosis/diagnosis.component */ "./src/app/diagnosis/diagnosis.component.ts");
            var routes = [
                { path: "doctors", component: _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_3__["DoctorsComponent"] },
                { path: "patients", component: _patients_patients_component__WEBPACK_IMPORTED_MODULE_4__["PatientsComponent"] },
                { path: 'appointments', component: _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_6__["AppointmentsComponent"] },
                { path: "diagnosis", component: _diagnosis_diagnosis_component__WEBPACK_IMPORTED_MODULE_7__["DiagnosisComponent"] },
                { path: '', component: _treatment_treatment_component__WEBPACK_IMPORTED_MODULE_5__["TreatmentComponent"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'hms-ui-project';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
            /* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
            /* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _hamberger_menu_hamberger_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hamberger-menu/hamberger-menu.component */ "./src/app/hamberger-menu/hamberger-menu.component.ts");
            /* harmony import */ var _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./doctors/doctors.component */ "./src/app/doctors/doctors.component.ts");
            /* harmony import */ var _patients_patients_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./patients/patients.component */ "./src/app/patients/patients.component.ts");
            /* harmony import */ var _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appointments/appointments.component */ "./src/app/appointments/appointments.component.ts");
            /* harmony import */ var _diagnosis_diagnosis_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./diagnosis/diagnosis.component */ "./src/app/diagnosis/diagnosis.component.ts");
            /* harmony import */ var _treatment_treatment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./treatment/treatment.component */ "./src/app/treatment/treatment.component.ts");
            /* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/card */ "./node_modules/primeng/card.js");
            /* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/ __webpack_require__.n(primeng_card__WEBPACK_IMPORTED_MODULE_13__);
            /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
            /* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/progressspinner */ "./node_modules/primeng/progressspinner.js");
            /* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/multiselect.js");
            /* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(primeng_multiselect__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/radiobutton */ "./node_modules/primeng/radiobutton.js");
            /* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/ __webpack_require__.n(primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__);
            /* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/toast.js");
            /* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/ __webpack_require__.n(primeng_toast__WEBPACK_IMPORTED_MODULE_19__);
            /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
            /* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/ __webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__);
            /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/dialog.js");
            /* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/ __webpack_require__.n(primeng_dialog__WEBPACK_IMPORTED_MODULE_21__);
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/ __webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_24__);
            /* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
            /* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/ __webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_25__);
            //accordion and accordion tab
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _hamberger_menu_hamberger_menu_component__WEBPACK_IMPORTED_MODULE_7__["HambergerMenuComponent"],
                        _doctors_doctors_component__WEBPACK_IMPORTED_MODULE_8__["DoctorsComponent"],
                        _patients_patients_component__WEBPACK_IMPORTED_MODULE_9__["PatientsComponent"],
                        _appointments_appointments_component__WEBPACK_IMPORTED_MODULE_10__["AppointmentsComponent"],
                        _diagnosis_diagnosis_component__WEBPACK_IMPORTED_MODULE_11__["DiagnosisComponent"],
                        _treatment_treatment_component__WEBPACK_IMPORTED_MODULE_12__["TreatmentComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        primeng_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionModule"],
                        primeng_button__WEBPACK_IMPORTED_MODULE_4__["ButtonModule"],
                        primeng_card__WEBPACK_IMPORTED_MODULE_13__["CardModule"],
                        primeng_calendar__WEBPACK_IMPORTED_MODULE_25__["CalendarModule"],
                        primeng_table__WEBPACK_IMPORTED_MODULE_14__["TableModule"],
                        primeng_progressspinner__WEBPACK_IMPORTED_MODULE_15__["ProgressSpinnerModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                        primeng_toast__WEBPACK_IMPORTED_MODULE_19__["ToastModule"],
                        primeng_dropdown__WEBPACK_IMPORTED_MODULE_20__["DropdownModule"],
                        primeng_radiobutton__WEBPACK_IMPORTED_MODULE_18__["RadioButtonModule"],
                        primeng_multiselect__WEBPACK_IMPORTED_MODULE_17__["MultiSelectModule"],
                        primeng_dialog__WEBPACK_IMPORTED_MODULE_21__["DialogModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
                    ],
                    providers: [primeng_api__WEBPACK_IMPORTED_MODULE_24__["MessageService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/appointments/appointments.component.css": 
        /*!*********************************************************!*\
          !*** ./src/app/appointments/appointments.component.css ***!
          \*********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcG9pbnRtZW50cy9hcHBvaW50bWVudHMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/appointments/appointments.component.ts": 
        /*!********************************************************!*\
          !*** ./src/app/appointments/appointments.component.ts ***!
          \********************************************************/
        /*! exports provided: AppointmentsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsComponent", function () { return AppointmentsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _appointments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appointments */ "./src/app/appointments/appointments.ts");
            /* harmony import */ var _appointmentservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appointmentservice.service */ "./src/app/appointments/appointmentservice.service.ts");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
            var AppointmentsComponent = /** @class */ (function () {
                function AppointmentsComponent(appointmentservice, messageservice) {
                    this.appointmentservice = appointmentservice;
                    this.messageservice = messageservice;
                    this.appointmentsObj = new _appointments__WEBPACK_IMPORTED_MODULE_2__["Appointments"]();
                    this.displayform = false;
                    this.car = true;
                }
                AppointmentsComponent.prototype.ngOnInit = function () {
                    this.getallappointments();
                };
                AppointmentsComponent.prototype.addtodisplayform = function () {
                    this.NewAppointmentStatus = true;
                    this.displayform = true;
                    this.appointmentsObj.appointmentTime = null;
                    this.appointmentsObj.appointmentDate = null;
                    this.appointmentsObj.appointmentDescription = null;
                };
                AppointmentsComponent.prototype.getallappointments = function () {
                    var _this = this;
                    this.cols = [
                        { field: "appointmentId", header: "Id" },
                        { field: "appointmentDate", header: "Appointment Date" },
                        { field: "appointmentTime", header: "Appointment Time" },
                        { field: "appointmentDescription", header: "Appointment Description " }
                    ];
                    this.appointmentData = [];
                    var obj = {};
                    this.appointmentservice.getappointments().subscribe(function (response) {
                        console.log(response);
                        obj = response;
                        Object.values(obj['response']).map(function (d) {
                            _this.appointmentData.push({
                                appointmentId: d['appointmentId'],
                                appointmentDescription: d['appointmentDescription'],
                                appointmentDate: new Date(d['appointmentDate']).toString().substr(0, 9),
                                appointmentTime: new Date(d['appointmentTime']).toString().substr(15, 10)
                            });
                        });
                    });
                };
                AppointmentsComponent.prototype.onRowSelect = function (event) {
                    this.NewAppointmentStatus = false;
                    this.appointmentsObj.appointmentDescription = event.data['appointmentDescription'];
                    this.appointmentsObj.appointmentTime = event.data['appointmentTime'];
                    this.appointmentsObj.appointmentDate = event.data['appointmentDate'];
                    this.displayform = true;
                    console.log(this.appointmentsObj, "====================");
                    console.log(this.selectedAppointment);
                };
                AppointmentsComponent.prototype.saveappointment = function () {
                    var _this = this;
                    if (this.NewAppointmentStatus == true) {
                        this.appointmentservice.postappointments(this.appointmentsObj).subscribe(function (d) {
                            _this.getallappointments();
                            _this.displayform = false;
                            _this.messageservice.add({
                                severity: "success",
                                summary: "Successfull",
                                detail: "Appointment Saved successfully"
                            });
                        }, function (error) {
                            _this.messageservice.add({
                                severity: "error",
                                summary: "Error",
                                detail: "Error Saving appointment"
                            });
                        });
                    }
                    else {
                        var id = this.appointmentData[this.appointmentData.indexOf(this.selectedAppointment)]['appointmentId'];
                        this.appointmentservice.updateappointmentsById(id, this.appointmentsObj).subscribe(function (d) {
                            _this.getallappointments();
                            _this.displayform = false;
                            _this.messageservice.add({
                                severity: "success",
                                summary: "Successfull",
                                detail: "Appointment  Updated successfully"
                            });
                        }, function (error) {
                            _this.messageservice.add({
                                severity: "error",
                                summary: "Error",
                                detail: "Appointment updating Treatment"
                            });
                        });
                    }
                };
                AppointmentsComponent.prototype.deleteappointment = function () {
                    var _this = this;
                    var id = this.appointmentData[this.appointmentData.indexOf(this.selectedAppointment)]['appointmentId'];
                    this.appointmentservice.deleteappointments(id).subscribe(function (d) {
                        _this.getallappointments();
                        _this.displayform = false;
                        _this.messageservice.add({
                            severity: "success",
                            summary: "Successfull",
                            detail: "Appointment  Deleted successfully"
                        });
                    }, function (error) {
                        _this.messageservice.add({
                            severity: "error",
                            summary: "Error",
                            detail: "Appiintment Deleting Treatment"
                        });
                    });
                };
                return AppointmentsComponent;
            }());
            AppointmentsComponent.ctorParameters = function () { return [
                { type: _appointmentservice_service__WEBPACK_IMPORTED_MODULE_3__["AppointmentserviceService"] },
                { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
            ]; };
            AppointmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-appointments',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/appointments/appointments.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointments.component.css */ "./src/app/appointments/appointments.component.css")).default]
                })
            ], AppointmentsComponent);
            /***/ 
        }),
        /***/ "./src/app/appointments/appointments.ts": 
        /*!**********************************************!*\
          !*** ./src/app/appointments/appointments.ts ***!
          \**********************************************/
        /*! exports provided: Appointments */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Appointments", function () { return Appointments; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Appointments = /** @class */ (function () {
                function Appointments() {
                }
                return Appointments;
            }());
            /***/ 
        }),
        /***/ "./src/app/appointments/appointmentservice.service.ts": 
        /*!************************************************************!*\
          !*** ./src/app/appointments/appointmentservice.service.ts ***!
          \************************************************************/
        /*! exports provided: AppointmentserviceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentserviceService", function () { return AppointmentserviceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AppointmentserviceService = /** @class */ (function () {
                function AppointmentserviceService(http) {
                    this.http = http;
                }
                AppointmentserviceService.prototype.getappointments = function () {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/appointment/getall');
                };
                AppointmentserviceService.prototype.postappointments = function (appointmentObj) {
                    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/appointment/create', appointmentObj);
                };
                AppointmentserviceService.prototype.getappointmentsById = function (id) {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/appointment/read/' + id);
                };
                AppointmentserviceService.prototype.updateappointmentsById = function (id, appointmentObj) {
                    return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/appointment/update/' + id, appointmentObj);
                };
                AppointmentserviceService.prototype.deleteappointments = function (id) {
                    return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/appointment/delete/' + id);
                };
                return AppointmentserviceService;
            }());
            AppointmentserviceService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            AppointmentserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AppointmentserviceService);
            /***/ 
        }),
        /***/ "./src/app/diagnosis/diagnosis.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/diagnosis/diagnosis.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWdub3Npcy9kaWFnbm9zaXMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/diagnosis/diagnosis.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/diagnosis/diagnosis.component.ts ***!
          \**************************************************/
        /*! exports provided: DiagnosisComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosisComponent", function () { return DiagnosisComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _diagnosis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diagnosis */ "./src/app/diagnosis/diagnosis.ts");
            /* harmony import */ var _diagnosis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diagnosis.service */ "./src/app/diagnosis/diagnosis.service.ts");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
            var DiagnosisComponent = /** @class */ (function () {
                function DiagnosisComponent(diagnosisService, mesgService) {
                    this.diagnosisService = diagnosisService;
                    this.mesgService = mesgService;
                    this.car = true;
                    this.diagnosisTableData = [];
                    this.diagnosisObj = new _diagnosis__WEBPACK_IMPORTED_MODULE_2__["Diagnosis"]();
                }
                DiagnosisComponent.prototype.ngOnInit = function () {
                    this.populateCols();
                    this.getDataInDiagnosisTable();
                };
                DiagnosisComponent.prototype.populateCols = function () {
                    this.cols = [
                        { field: "diagnosisId", header: "Id" },
                        { field: "diagnosisType", header: "Treatment Type" },
                        { field: "diagnosisDescription", header: "Treatment Description" },
                    ];
                };
                DiagnosisComponent.prototype.getDataInDiagnosisTable = function () {
                    var _this = this;
                    var obj = {};
                    this.diagnosisTableData = [];
                    this.diagnosisService.getDiagnosis().subscribe(function (response) {
                        console.log(response);
                        obj = response;
                        Object.values(obj['response']).map(function (d) {
                            _this.diagnosisTableData.push({
                                diagnosisId: d['diagnosisId'],
                                diagnosisType: d['diagnosisType'],
                                diagnosisDescription: d['diagnosisDescription']
                            });
                        });
                        console.log(_this.diagnosisTableData);
                    });
                };
                DiagnosisComponent.prototype.saveDiagnosis = function () {
                    var _this = this;
                    if (this.newDiagnosis) {
                        this.diagnosisService.postDiagnosis(this.diagnosisObj).subscribe(function (d) {
                            _this.getDataInDiagnosisTable();
                            _this.displayDialog = false;
                            _this.mesgService.add({
                                severity: "success",
                                summary: "Successfull",
                                detail: "Diagnosis Saved successfully"
                            });
                        }, function (error) {
                            _this.mesgService.add({
                                severity: "error",
                                summary: "Error",
                                detail: "Error Saving Diagnosis"
                            });
                        });
                    }
                    else {
                        var id = this.diagnosisTableData[this.diagnosisTableData.indexOf(this.selectedDiagnosis)]['diagnosisId'];
                        this.diagnosisService.updateDiagnosisById(id, this.diagnosisObj).subscribe(function (d) {
                            _this.getDataInDiagnosisTable();
                            _this.displayDialog = false;
                            _this.mesgService.add({
                                severity: "success",
                                summary: "Successfull",
                                detail: "Diagnosis Updated successfully"
                            });
                        }, function (error) {
                            _this.mesgService.add({
                                severity: "error",
                                summary: "Error",
                                detail: "Error updating Diagnosis"
                            });
                        });
                    }
                };
                DiagnosisComponent.prototype.deleteDiagnosis = function () {
                    var _this = this;
                    var id = this.diagnosisTableData[this.diagnosisTableData.indexOf(this.selectedDiagnosis)]['diagnosisId'];
                    this.diagnosisService.deleteDiagnosis(id).subscribe(function (d) {
                        _this.getDataInDiagnosisTable();
                        _this.displayDialog = false;
                        _this.mesgService.add({
                            severity: "success",
                            summary: "Successfull",
                            detail: "Diagnosis Deleted successfully"
                        });
                    }, function (error) {
                        _this.mesgService.add({
                            severity: "error",
                            summary: "Error",
                            detail: "Error Deleting Diagnosis"
                        });
                    });
                };
                DiagnosisComponent.prototype.onRowSelect = function (event) {
                    this.newDiagnosis = false;
                    this.diagnosisObj = event.data;
                    this.displayDialog = true;
                    //taking id of selected row
                    console.log(this.diagnosisTableData[this.diagnosisTableData.indexOf(this.selectedDiagnosis)]['diagnosisId']);
                };
                DiagnosisComponent.prototype.showDialogToAdd = function () {
                    this.newDiagnosis = true;
                    this.displayDialog = true;
                    this.diagnosisObj.diagnosisType = null;
                    this.diagnosisObj.diagnosisDescription = null;
                };
                return DiagnosisComponent;
            }());
            DiagnosisComponent.ctorParameters = function () { return [
                { type: _diagnosis_service__WEBPACK_IMPORTED_MODULE_3__["DiagnosisService"] },
                { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
            ]; };
            DiagnosisComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-diagnosis',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./diagnosis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/diagnosis/diagnosis.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./diagnosis.component.css */ "./src/app/diagnosis/diagnosis.component.css")).default]
                })
            ], DiagnosisComponent);
            /***/ 
        }),
        /***/ "./src/app/diagnosis/diagnosis.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/diagnosis/diagnosis.service.ts ***!
          \************************************************/
        /*! exports provided: DiagnosisService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosisService", function () { return DiagnosisService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var DiagnosisService = /** @class */ (function () {
                function DiagnosisService(http) {
                    this.http = http;
                }
                DiagnosisService.prototype.getDiagnosis = function () {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/diagnosis/getall');
                };
                DiagnosisService.prototype.postDiagnosis = function (Obj) {
                    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/diagnosis/create', Obj);
                };
                DiagnosisService.prototype.updateDiagnosisById = function (id, Obj) {
                    return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/diagnosis/update/' + id, Obj);
                };
                DiagnosisService.prototype.deleteDiagnosis = function (id) {
                    return this.http.delete(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/diagnosis/delete/' + id);
                };
                return DiagnosisService;
            }());
            DiagnosisService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DiagnosisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DiagnosisService);
            /***/ 
        }),
        /***/ "./src/app/diagnosis/diagnosis.ts": 
        /*!****************************************!*\
          !*** ./src/app/diagnosis/diagnosis.ts ***!
          \****************************************/
        /*! exports provided: Diagnosis */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diagnosis", function () { return Diagnosis; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Diagnosis = /** @class */ (function () {
                function Diagnosis() {
                }
                return Diagnosis;
            }());
            /***/ 
        }),
        /***/ "./src/app/doctors/doctors.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/doctors/doctors.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3RvcnMvZG9jdG9ycy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/doctors/doctors.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/doctors/doctors.component.ts ***!
          \**********************************************/
        /*! exports provided: DoctorsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsComponent", function () { return DoctorsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _doctors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doctors.service */ "./src/app/doctors/doctors.service.ts");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _doctors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./doctors */ "./src/app/doctors/doctors.ts");
            var DoctorsComponent = /** @class */ (function () {
                function DoctorsComponent(doctorsService, mesgService) {
                    this.doctorsService = doctorsService;
                    this.mesgService = mesgService;
                    this.car = true;
                    this.doctorTableData = [];
                    this.doctorObj = new _doctors__WEBPACK_IMPORTED_MODULE_4__["Doctors"]();
                    this.personalDetailsDropdownData = [];
                    this.specialistDropdownData = [];
                }
                DoctorsComponent.prototype.ngOnInit = function () {
                    this.populateCols();
                    this.getDataInDiagnosisTable();
                    this.getSpecialistDropdown();
                    this.getPersonalDetailsDropdown();
                };
                DoctorsComponent.prototype.populateCols = function () {
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
                };
                DoctorsComponent.prototype.getDataInDiagnosisTable = function () {
                    var _this = this;
                    this.doctorTableData = [];
                    this.doctorsService.getDoctors().subscribe(function (response) {
                        console.log(response);
                        response.map(function (d) {
                            _this.doctorTableData.push({
                                doctorId: d.doctorId,
                                doctorDescription: d.doctorDescription,
                                specialistType: d.specialist.specialistType,
                                specialistDescription: d.specialist.specialistDescription,
                                name: d.personalDetails.name,
                                surname: d.personalDetails.surname,
                                cellPhoneNumber: d.personalDetails.cellPhoneNumber,
                                telephoneNumber: d.personalDetails.telephoneNumber,
                                emailAddress: d.personalDetails.emailAddress
                            });
                        });
                        console.log(_this.doctorTableData);
                    });
                };
                DoctorsComponent.prototype.getSpecialistDropdown = function () {
                    var _this = this;
                    this.obj = [];
                    this.doctorsService.getSpecialists().subscribe(function (data) {
                        data.map(function (d) {
                            _this.specialistDropdownData.push({
                                label: d.specialistType,
                                value: { specialistType: d['specialistType'], specialistDescription: d['specialistDescription'] }
                            });
                            _this.obj.push(d);
                        });
                        console.table("yohho", _this.specialistDropdownData);
                    });
                };
                DoctorsComponent.prototype.getPersonalDetailsDropdown = function () {
                    var _this = this;
                    this.obj2 = [];
                    this.doctorsService.getPersonalDetails().subscribe(function (data) {
                        var d = data;
                        console.log(data);
                        Object.values(d['response']).map(function (d) {
                            _this.personalDetailsDropdownData.push({
                                label: d['name'],
                                value: { name: d['name'], surname: d['surname'], cellPhoneNumber: d['cellPhoneNumber'], telephoneNumber: d['telephoneNumber'], emailAddress: d['emailAddress'] }
                            });
                            _this.obj2.push(d);
                            console.table(_this.obj2);
                        });
                    });
                };
                DoctorsComponent.prototype.saveDoctors = function () {
                    var _this = this;
                    if (this.newDoctor) {
                        console.log(this.doctorObj);
                        this.doctorsService.postDoctors(this.doctorObj).subscribe(function (d) {
                            _this.getDataInDiagnosisTable();
                            _this.displayDialog = false;
                            _this.mesgService.add({
                                severity: "success",
                                summary: "Successfull",
                                detail: "Doctors Saved successfully"
                            });
                        }, function (error) {
                            _this.mesgService.add({
                                severity: "error",
                                summary: "Error",
                                detail: "Error Saving Doctors"
                            });
                        });
                    }
                    else {
                        var id = this.doctorTableData[this.doctorTableData.indexOf(this.selectedDoctor)]['doctorId'];
                        this.doctorsService.updateDoctorsById(id, this.doctorObj).subscribe(function (d) {
                            _this.getDataInDiagnosisTable();
                            _this.displayDialog = false;
                            _this.mesgService.add({
                                severity: "success",
                                summary: "Successfull",
                                detail: "Doctor Updated successfully"
                            });
                        }, function (error) {
                            _this.mesgService.add({
                                severity: "error",
                                summary: "Error",
                                detail: "Error updating Doctor"
                            });
                        });
                    }
                };
                DoctorsComponent.prototype.deleteDoctors = function () {
                    var _this = this;
                    var id = this.doctorTableData[this.doctorTableData.indexOf(this.selectedDoctor)]['doctorId'];
                    this.doctorsService.deleteDoctors(id).subscribe(function (d) {
                        _this.getDataInDiagnosisTable();
                        _this.displayDialog = false;
                        _this.mesgService.add({
                            severity: "success",
                            summary: "Successfull",
                            detail: "Doctors Deleted successfully"
                        });
                    }, function (error) {
                        _this.mesgService.add({
                            severity: "error",
                            summary: "Error",
                            detail: "Error Deleting Doctors"
                        });
                    });
                };
                DoctorsComponent.prototype.onRowSelect = function (event) {
                    this.newDoctor = false;
                    this.doctorObj = event.data;
                    this.displayDialog = true;
                    //taking id of selected row
                    // console.log(this.doctorTableData[this.doctorTableData.indexOfdoctorthis.selectedDoctor)]['doctorId'])
                };
                DoctorsComponent.prototype.showDialogToAdd = function () {
                    this.newDoctor = true;
                    this.displayDialog = true;
                    this.doctorObj.doctorDescription = null;
                    this.doctorObj.specialist = {};
                    this.doctorObj.personalDetails = {};
                };
                return DoctorsComponent;
            }());
            DoctorsComponent.ctorParameters = function () { return [
                { type: _doctors_service__WEBPACK_IMPORTED_MODULE_2__["DoctorsService"] },
                { type: primeng_api__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
            ]; };
            DoctorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-doctors',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./doctors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/doctors/doctors.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./doctors.component.css */ "./src/app/doctors/doctors.component.css")).default]
                })
            ], DoctorsComponent);
            /***/ 
        }),
        /***/ "./src/app/doctors/doctors.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/doctors/doctors.service.ts ***!
          \********************************************/
        /*! exports provided: DoctorsService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsService", function () { return DoctorsService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var DoctorsService = /** @class */ (function () {
                function DoctorsService(http) {
                    this.http = http;
                }
                DoctorsService.prototype.getDoctors = function () {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/doctor/read/all');
                };
                DoctorsService.prototype.postDoctors = function (Obj) {
                    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/doctor/create', Obj);
                };
                DoctorsService.prototype.updateDoctorsById = function (id, Obj) {
                    return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/doctor/update/' + id, Obj);
                };
                DoctorsService.prototype.deleteDoctors = function (id) {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/doctor/delete/' + id);
                };
                DoctorsService.prototype.getSpecialists = function () {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/specialist/read/all');
                };
                DoctorsService.prototype.getPersonalDetails = function () {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/personalDetails/getall');
                };
                return DoctorsService;
            }());
            DoctorsService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            DoctorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DoctorsService);
            /***/ 
        }),
        /***/ "./src/app/doctors/doctors.ts": 
        /*!************************************!*\
          !*** ./src/app/doctors/doctors.ts ***!
          \************************************/
        /*! exports provided: Doctors */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Doctors", function () { return Doctors; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Doctors = /** @class */ (function () {
                function Doctors() {
                }
                return Doctors;
            }());
            /***/ 
        }),
        /***/ "./src/app/hamberger-menu/hamberger-menu.component.css": 
        /*!*************************************************************!*\
          !*** ./src/app/hamberger-menu/hamberger-menu.component.css ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".sidenav {\r\n    height: 100%;\r\n    width: 0;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgb(46, 45, 45);\r\n    overflow-x: hidden;\r\n    transition: 0.5s;\r\n    padding-top: 60px;\r\n  }\r\n  \r\n  .divHover:hover{\r\n      transition: 0.5s;\r\n      background-color: rgb(68, 67, 67)\r\n  }\r\n  \r\n  .nav-text {\r\n      position:relative;\r\n      display:table-cell;\r\n      vertical-align:middle;\r\n      width:190px;\r\n        font-family: 'Titillium Web', sans-serif;\r\n      \r\n      }\r\n  \r\n  ul {\r\n      margin:7px 0;\r\n  }\r\n  \r\n  li {\r\n      position:relative;\r\n      display:block;\r\n      width:250px;\r\n  }\r\n  \r\n  li>a {\r\n      position:relative;\r\n      display:table;\r\n      border-collapse:collapse;\r\n      border-spacing:0;\r\n      color:#B0B0B0;\r\n       font-family: arial;\r\n      font-size: 14px;\r\n      text-decoration:none;\r\n      /* -webkit-transform:translateZ(0) scale(1,1); */\r\n      /* -webkit-transition:all .1s linear; */\r\n      transition:all .3s linear;\r\n        \r\n   }\r\n  \r\n  nav ul,nav li {\r\n      outline:0;\r\n      margin:0;\r\n      padding:0;\r\n  }\r\n  \r\n  .sidenav .closebtn {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 25px;\r\n    color: #B0B0B0;\r\n    font-size: 36px;\r\n    margin-left: 50px;\r\n  }\r\n  \r\n  @media screen and (max-height: 450px) {\r\n    .sidenav {\r\n      padding-top: 15px;\r\n    }\r\n    .sidenav a {\r\n      font-size: 18px;\r\n    }\r\n  }\r\n  \r\n  /* navbar css */\r\n  \r\n  .navbar {\r\n    overflow: hidden;\r\n    background-color: rgb(28, 127, 173);\r\n    position: fixed;\r\n    top: 0;\r\n    width: 100%;\r\n    margin-left: -0.7%;\r\n    height: 50px;\r\n  }\r\n  \r\n  .hambergerNav {\r\n    background-color: rgb(22, 92, 124);\r\n    height: 50px;\r\n    top: 0;\r\n    position: fixed;\r\n    width: 0%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFtYmVyZ2VyLW1lbnUvaGFtYmVyZ2VyLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IsZUFBZTtJQUNmLFVBQVU7SUFDVixNQUFNO0lBQ04sT0FBTztJQUNQLGlDQUFpQztJQUNqQyxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtNQUNJLGdCQUFnQjtNQUNoQjtFQUNKOztFQUNBO01BQ0ksaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixxQkFBcUI7TUFDckIsV0FBVztRQUNULHdDQUF3Qzs7TUFFMUM7O0VBR0o7TUFDSSxZQUFZO0VBQ2hCOztFQUNBO01BQ0ksaUJBQWlCO01BQ2pCLGFBQWE7TUFDYixXQUFXO0VBQ2Y7O0VBQ0E7TUFDSSxpQkFBaUI7TUFDakIsYUFBYTtNQUNiLHdCQUF3QjtNQUN4QixnQkFBZ0I7TUFDaEIsYUFBYTtPQUNaLGtCQUFrQjtNQUNuQixlQUFlO01BQ2Ysb0JBQW9CO01BQ3BCLGdEQUFnRDtNQUNoRCx1Q0FBdUM7TUFDdkMseUJBQXlCOztHQUU1Qjs7RUFDQTtNQUNHLFNBQVM7TUFDVCxRQUFRO01BQ1IsU0FBUztFQUNiOztFQUtBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRTtNQUNFLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBLGVBQWU7O0VBRWY7SUFDRSxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLE1BQU07SUFDTixlQUFlO0lBQ2YsU0FBUztFQUNYIiwiZmlsZSI6InNyYy9hcHAvaGFtYmVyZ2VyLW1lbnUvaGFtYmVyZ2VyLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDQ1LCA0NSk7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgcGFkZGluZy10b3A6IDYwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kaXZIb3Zlcjpob3ZlcntcclxuICAgICAgdHJhbnNpdGlvbjogMC41cztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY4LCA2NywgNjcpXHJcbiAgfVxyXG4gIC5uYXYtdGV4dCB7XHJcbiAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgICAgd2lkdGg6MTkwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcclxuICAgICAgXHJcbiAgICAgIH1cclxuICBcclxuICBcclxuICB1bCB7XHJcbiAgICAgIG1hcmdpbjo3cHggMDtcclxuICB9XHJcbiAgbGkge1xyXG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgd2lkdGg6MjUwcHg7XHJcbiAgfVxyXG4gIGxpPmEge1xyXG4gICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTp0YWJsZTtcclxuICAgICAgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO1xyXG4gICAgICBib3JkZXItc3BhY2luZzowO1xyXG4gICAgICBjb2xvcjojQjBCMEIwO1xyXG4gICAgICAgZm9udC1mYW1pbHk6IGFyaWFsO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAvKiAtd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApIHNjYWxlKDEsMSk7ICovXHJcbiAgICAgIC8qIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjFzIGxpbmVhcjsgKi9cclxuICAgICAgdHJhbnNpdGlvbjphbGwgLjNzIGxpbmVhcjtcclxuICAgICAgICBcclxuICAgfVxyXG4gICBuYXYgdWwsbmF2IGxpIHtcclxuICAgICAgb3V0bGluZTowO1xyXG4gICAgICBtYXJnaW46MDtcclxuICAgICAgcGFkZGluZzowO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICAuc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICBjb2xvcjogI0IwQjBCMDtcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAgIC5zaWRlbmF2IHtcclxuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc2lkZW5hdiBhIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBuYXZiYXIgY3NzICovXHJcbiAgXHJcbiAgLm5hdmJhciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI4LCAxMjcsIDE3Myk7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMC43JTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmhhbWJlcmdlck5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIsIDkyLCAxMjQpO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/hamberger-menu/hamberger-menu.component.ts": 
        /*!************************************************************!*\
          !*** ./src/app/hamberger-menu/hamberger-menu.component.ts ***!
          \************************************************************/
        /*! exports provided: HambergerMenuComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HambergerMenuComponent", function () { return HambergerMenuComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var HambergerMenuComponent = /** @class */ (function () {
                function HambergerMenuComponent(router) {
                    this.router = router;
                }
                HambergerMenuComponent.prototype.ngOnInit = function () {
                };
                HambergerMenuComponent.prototype.gotoappointments = function () {
                    this.router.navigate(['appointments']);
                };
                HambergerMenuComponent.prototype.gotodoctors = function () {
                    this.router.navigate(['doctors']);
                };
                HambergerMenuComponent.prototype.gotopatients = function () {
                    this.router.navigate(['patients']);
                };
                HambergerMenuComponent.prototype.goToDiagnosis = function () {
                    this.router.navigate(['diagnosis']);
                };
                HambergerMenuComponent.prototype.routeToTreatment = function () {
                    this.router.navigate(['']);
                };
                HambergerMenuComponent.prototype.openNavBar = function () {
                    this.sideBarWidth = "250px";
                };
                HambergerMenuComponent.prototype.closeNavBar = function () {
                    this.sideBarWidth = "0px";
                };
                return HambergerMenuComponent;
            }());
            HambergerMenuComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            HambergerMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-hamberger-menu',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hamberger-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/hamberger-menu/hamberger-menu.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hamberger-menu.component.css */ "./src/app/hamberger-menu/hamberger-menu.component.css")).default]
                })
            ], HambergerMenuComponent);
            /***/ 
        }),
        /***/ "./src/app/patients/patients.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/patients/patients.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnRzL3BhdGllbnRzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/patients/patients.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/patients/patients.component.ts ***!
          \************************************************/
        /*! exports provided: PatientsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientsComponent", function () { return PatientsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _patients__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patients */ "./src/app/patients/patients.ts");
            /* harmony import */ var _patientservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patientservice.service */ "./src/app/patients/patientservice.service.ts");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
            var PatientsComponent = /** @class */ (function () {
                function PatientsComponent(patientservice, messageservice) {
                    this.patientservice = patientservice;
                    this.messageservice = messageservice;
                    this.patientObj = new _patients__WEBPACK_IMPORTED_MODULE_2__["Patients"]();
                    this.car = true;
                }
                PatientsComponent.prototype.ngOnInit = function () {
                    this.getallpatients();
                    this.getallmedications();
                    this.getalloperation();
                    this.getallpatientprogress();
                    this.getalldiagnosis();
                    this.getallpersoneldetails();
                };
                PatientsComponent.prototype.addtodisplayform = function () {
                    this.newpatientstatus = true;
                    this.displayform = true;
                    this.patientObj.diagnosis = null;
                    this.patientObj.medications = null;
                    this.patientObj.patientProgress = null;
                    this.patientObj.personalDetails = null;
                    this.patientObj.operation = null;
                };
                PatientsComponent.prototype.getallmedications = function () {
                    var _this = this;
                    this.medication = [];
                    this.patientservice.getmedications().subscribe(function (data) {
                        console.log("medications", data);
                        if (data) {
                            data.response.forEach(function (e) {
                                _this.medication.push({
                                    label: e.medicationType,
                                    value: {
                                        medicationType: e.medicationType,
                                        medicationQuantity: e.medicationQuantity,
                                        medicationDescription: e.medicationDescription
                                    }
                                });
                            });
                        }
                    });
                };
                PatientsComponent.prototype.getalloperation = function () {
                    var _this = this;
                    this.operation = [];
                    this.patientservice.getoperation().subscribe(function (data) {
                        console.log("operation", data);
                        if (data) {
                            data.response.forEach(function (e) {
                                _this.operation.push({
                                    label: e.operationType,
                                    value: {
                                        operationType: e.operationType,
                                        operationDate: e.operationDate,
                                        operationDescription: e.operationDescription
                                    }
                                });
                            });
                        }
                    });
                };
                PatientsComponent.prototype.getallpatientprogress = function () {
                    var _this = this;
                    this.patientprogress = [];
                    this.patientservice.getpatientProgress().subscribe(function (data) {
                        console.log("patientprogress", data);
                        if (data) {
                            data.forEach(function (e) {
                                _this.patientprogress.push({
                                    label: e.patientDescription,
                                    value: {
                                        patientDescription: e.patientDescription,
                                        diagnosis: {
                                            diagnosisType: e.diagnosis.diagnosisType,
                                            diagnosisDescription: e.diagnosis.diagnosisDescription
                                        }
                                    }
                                });
                            });
                        }
                    });
                };
                PatientsComponent.prototype.getallpersoneldetails = function () {
                    var _this = this;
                    this.personeldetails = [];
                    this.patientservice.getpersonalDetails().subscribe(function (data) {
                        console.log("personeldetails", data);
                        if (data) {
                            data.response.forEach(function (e) {
                                _this.personeldetails.push({
                                    label: e.name,
                                    value: {
                                        name: e.name,
                                        surname: e.surname,
                                        cellPhoneNumber: e.cellPhoneNumber,
                                        telephoneNumber: e.telephoneNumber,
                                        emailAddress: e.emailAddress
                                    }
                                });
                            });
                        }
                    });
                };
                PatientsComponent.prototype.getalldiagnosis = function () {
                    var _this = this;
                    this.diagnosis = [];
                    this.patientservice.getdiagnosis().subscribe(function (data) {
                        console.log("diagnosis", data);
                        if (data) {
                            data.response.forEach(function (e) {
                                _this.diagnosis.push({
                                    label: e.diagnosisType,
                                    value: {
                                        diagnosisType: e.diagnosisType,
                                        diagnosisDescription: e.diagnosisDescription,
                                    }
                                });
                            });
                        }
                    });
                };
                PatientsComponent.prototype.getallpatients = function () {
                    var _this = this;
                    this.cols = [
                        { field: "patientId", header: "Id" },
                        { field: "medications", header: "Medication Type" },
                        { field: "operation", header: " Operation Type" },
                        { field: "patientProgress", header: " Patient Description " },
                        { field: "personalDetails", header: "Diagnosis Type" }
                    ];
                    this.patientdata = [];
                    this.patientservice.getpatients().subscribe(function (response) {
                        console.log(response);
                        response.map(function (d) {
                            _this.patientdata.push({
                                patientId: d.patientId,
                                medications: d.medications.medicationType,
                                operation: d.operation.operationType,
                                patientProgress: d.patientProgress.patientDescription,
                                personalDetails: d.personalDetails.name
                            });
                        });
                    });
                };
                PatientsComponent.prototype.onRowSelect = function (event) {
                    this.newpatientstatus = false;
                    this.displayform = true;
                };
                PatientsComponent.prototype.savepatients = function () {
                    var _this = this;
                    if (this.newpatientstatus == true) {
                        this.patientservice.postpatients(this.patientObj).subscribe(function (d) {
                            _this.getallpatients();
                            _this.displayform = false;
                            _this.messageservice.add({
                                severity: "success",
                                summary: "Successfull",
                                detail: "Patient Saved successfully"
                            });
                        }, function (error) {
                            _this.messageservice.add({
                                severity: "error",
                                summary: "Error",
                                detail: "Error Saving Patient"
                            });
                        });
                    }
                    else {
                        var id = this.patientdata[this.patientdata.indexOf(this.selectedpatient)]['patientId'];
                        this.patientservice.updatepatientsById(id, this.patientObj).subscribe(function (d) {
                            _this.getallpatients();
                            _this.displayform = false;
                            _this.messageservice.add({
                                severity: "success",
                                summary: "Successfull",
                                detail: "patient  Updated successfully"
                            });
                        }, function (error) {
                            _this.messageservice.add({
                                severity: "error",
                                summary: "Error",
                                detail: "Patient updating Treatment"
                            });
                        });
                    }
                };
                PatientsComponent.prototype.deletepatient = function () {
                    var _this = this;
                    var id = this.patientdata[this.patientdata.indexOf(this.selectedpatient)]['patientId'];
                    this.patientservice.deletepatients(id).subscribe(function (d) {
                        _this.getallpatients();
                        _this.displayform = false;
                        _this.messageservice.add({
                            severity: "success",
                            summary: "Successfull",
                            detail: "Appointment  Deleted successfully"
                        });
                    }, function (error) {
                        _this.messageservice.add({
                            severity: "error",
                            summary: "Error",
                            detail: "Appiintment Deleting Treatment"
                        });
                    });
                };
                return PatientsComponent;
            }());
            PatientsComponent.ctorParameters = function () { return [
                { type: _patientservice_service__WEBPACK_IMPORTED_MODULE_3__["PatientserviceService"] },
                { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
            ]; };
            PatientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-patients',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patients.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/patients/patients.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patients.component.css */ "./src/app/patients/patients.component.css")).default]
                })
            ], PatientsComponent);
            /***/ 
        }),
        /***/ "./src/app/patients/patients.ts": 
        /*!**************************************!*\
          !*** ./src/app/patients/patients.ts ***!
          \**************************************/
        /*! exports provided: Patients */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Patients", function () { return Patients; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Patients = /** @class */ (function () {
                function Patients() {
                }
                return Patients;
            }());
            /***/ 
        }),
        /***/ "./src/app/patients/patientservice.service.ts": 
        /*!****************************************************!*\
          !*** ./src/app/patients/patientservice.service.ts ***!
          \****************************************************/
        /*! exports provided: PatientserviceService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientserviceService", function () { return PatientserviceService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var PatientserviceService = /** @class */ (function () {
                function PatientserviceService(http) {
                    this.http = http;
                }
                PatientserviceService.prototype.getpatients = function () {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/patient/read/all');
                };
                PatientserviceService.prototype.postpatients = function (patientObj) {
                    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/patient/create', patientObj);
                };
                PatientserviceService.prototype.getpatientsById = function (id) {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/patient/read/' + id);
                };
                PatientserviceService.prototype.updatepatientsById = function (id, patientObj) {
                    return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/patient/update/' + id, patientObj);
                };
                PatientserviceService.prototype.deletepatients = function (id) {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/patient/delete/' + id);
                };
                PatientserviceService.prototype.getmedications = function () {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/medication/getall');
                };
                PatientserviceService.prototype.getoperation = function () {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/operation/getall');
                };
                PatientserviceService.prototype.getpatientProgress = function () {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/patientProgress/read/all');
                };
                PatientserviceService.prototype.getpersonalDetails = function () {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/personalDetails/getall');
                };
                PatientserviceService.prototype.getdiagnosis = function () {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + 'hms/diagnosis/getall');
                };
                return PatientserviceService;
            }());
            PatientserviceService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            PatientserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], PatientserviceService);
            /***/ 
        }),
        /***/ "./src/app/treatment/treatment.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/treatment/treatment.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyZWF0bWVudC90cmVhdG1lbnQuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/treatment/treatment.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/treatment/treatment.component.ts ***!
          \**************************************************/
        /*! exports provided: TreatmentComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentComponent", function () { return TreatmentComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _treatment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./treatment.service */ "./src/app/treatment/treatment.service.ts");
            /* harmony import */ var _treatment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./treatment */ "./src/app/treatment/treatment.ts");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/api.js");
            /* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(primeng_api__WEBPACK_IMPORTED_MODULE_4__);
            var TreatmentComponent = /** @class */ (function () {
                function TreatmentComponent(treatmentService, mesgService) {
                    this.treatmentService = treatmentService;
                    this.mesgService = mesgService;
                    this.car = true;
                    this.treatmentTableData = [];
                    this.treatmentObj = new _treatment__WEBPACK_IMPORTED_MODULE_3__["Treatment"]();
                }
                TreatmentComponent.prototype.ngOnInit = function () {
                    this.populateCols();
                    this.getDataInTreatmentTable();
                };
                TreatmentComponent.prototype.populateCols = function () {
                    this.cols = [
                        { field: "treatmentId", header: "Id" },
                        { field: "treatmentType", header: "Treatment Type" },
                        { field: "treatmentDescription", header: "Treatment Description" },
                        { field: "treatmentPeriod", header: "Treatment Period" },
                        { field: "prescription", header: "Prescription" }
                    ];
                };
                TreatmentComponent.prototype.getDataInTreatmentTable = function () {
                    var _this = this;
                    this.treatmentTableData = [];
                    this.treatmentService.getTreatments().subscribe(function (response) {
                        console.log(response);
                        response.map(function (d) {
                            _this.treatmentTableData.push({
                                treatmentId: d.treatmentId,
                                treatmentType: d.treatmentType,
                                treatmentDescription: d.treatmentDescription,
                                treatmentPeriod: d.treatmentPeriod,
                                prescription: d.prescription
                            });
                        });
                        console.log(_this.treatmentTableData);
                    });
                };
                TreatmentComponent.prototype.saveTreatments = function () {
                    var _this = this;
                    console.log("in save treatments");
                    if (this.newTreatment) {
                        this.treatmentService.postTreatments(this.treatmentObj).subscribe(function (d) {
                            _this.getDataInTreatmentTable();
                            _this.displayDialog = false;
                            _this.mesgService.add({
                                severity: "success",
                                summary: "Successfull",
                                detail: "Treatment Saved successfully"
                            });
                        }, function (error) {
                            _this.mesgService.add({
                                severity: "error",
                                summary: "Error",
                                detail: "Error Saving Treatment"
                            });
                        });
                    }
                    else {
                        var id = this.treatmentTableData[this.treatmentTableData.indexOf(this.selectedTreatment)]['treatmentId'];
                        this.treatmentService.updateTreatmentById(id, this.treatmentObj).subscribe(function (d) {
                            _this.getDataInTreatmentTable();
                            _this.displayDialog = false;
                            _this.mesgService.add({
                                severity: "success",
                                summary: "Successfull",
                                detail: "Treatment Updated successfully"
                            });
                        }, function (error) {
                            _this.mesgService.add({
                                severity: "error",
                                summary: "Error",
                                detail: "Error updating Treatment"
                            });
                        });
                    }
                };
                TreatmentComponent.prototype.deleteTreatment = function () {
                    var _this = this;
                    var id = this.treatmentTableData[this.treatmentTableData.indexOf(this.selectedTreatment)]['treatmentId'];
                    this.treatmentService.deleteTreatment(id).subscribe(function (d) {
                        _this.getDataInTreatmentTable();
                        _this.displayDialog = false;
                        _this.mesgService.add({
                            severity: "success",
                            summary: "Successfull",
                            detail: "Treatment Deleted successfully"
                        });
                    }, function (error) {
                        _this.mesgService.add({
                            severity: "error",
                            summary: "Error",
                            detail: "Error Deleting Treatment"
                        });
                    });
                };
                TreatmentComponent.prototype.onRowSelect = function (event) {
                    this.newTreatment = false;
                    this.treatmentObj = event.data;
                    this.displayDialog = true;
                    //taking id of selected row
                    console.log(this.treatmentTableData[this.treatmentTableData.indexOf(this.selectedTreatment)]['treatmentId']);
                };
                TreatmentComponent.prototype.showDialogToAdd = function () {
                    this.newTreatment = true;
                    this.displayDialog = true;
                    this.treatmentObj.prescription = null;
                    this.treatmentObj.treatmentDescription = null;
                    this.treatmentObj.treatmentPeriod = null;
                    this.treatmentObj.treatmentType = null;
                };
                return TreatmentComponent;
            }());
            TreatmentComponent.ctorParameters = function () { return [
                { type: _treatment_service__WEBPACK_IMPORTED_MODULE_2__["TreatmentService"] },
                { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
            ]; };
            TreatmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-treatment",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./treatment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/treatment/treatment.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./treatment.component.css */ "./src/app/treatment/treatment.component.css")).default]
                })
            ], TreatmentComponent);
            /***/ 
        }),
        /***/ "./src/app/treatment/treatment.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/treatment/treatment.service.ts ***!
          \************************************************/
        /*! exports provided: TreatmentService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentService", function () { return TreatmentService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            var TreatmentService = /** @class */ (function () {
                function TreatmentService(http) {
                    this.http = http;
                }
                TreatmentService.prototype.getTreatments = function () {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/treatment/read/all');
                };
                TreatmentService.prototype.postTreatments = function (treatmentObj) {
                    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/treatment/create', treatmentObj);
                };
                TreatmentService.prototype.getTreatmentsById = function (id) {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/treatment/read/' + id);
                };
                TreatmentService.prototype.updateTreatmentById = function (id, Obj) {
                    return this.http.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/treatment/update/' + id, Obj);
                };
                TreatmentService.prototype.deleteTreatment = function (id) {
                    return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl + 'hms/treatment/delete/' + id);
                };
                return TreatmentService;
            }());
            TreatmentService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TreatmentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TreatmentService);
            /***/ 
        }),
        /***/ "./src/app/treatment/treatment.ts": 
        /*!****************************************!*\
          !*** ./src/app/treatment/treatment.ts ***!
          \****************************************/
        /*! exports provided: Treatment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Treatment", function () { return Treatment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Treatment = /** @class */ (function () {
                function Treatment() {
                }
                return Treatment;
            }());
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                baseUrl: 'http://localhost:8081/'
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/ChadMarthinussen2/Documents/IDE Code/Visual Studio/HMSFrontEnd/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map