import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientserviceService {

  constructor(private http:HttpClient) { }
  public getpatients():Observable<any>{
    return this.http.get(environment.baseUrl +'hms/patient/read/all');
  }

  public postpatients(patientObj: any):Observable<any>{
    return this.http.post(environment.baseUrl+'hms/patient/create',patientObj);
  }

  public getpatientsById(id):Observable<any>{
    return this.http.get(environment.baseUrl+'hms/patient/read/'+id);
  }

  public updatepatientsById(id,patientObj):Observable<any>{
    return this.http.put(environment.baseUrl+'hms/patient/update/'+id,patientObj)
  }

  public deletepatients(id):Observable<any>{
    return this.http.get(environment.baseUrl+'hms/patient/delete/'+id);
  }

  public getmedications():Observable<any>{
    return this.http.get(environment.baseUrl +'hms/medication/getall');
  }
  public getoperation():Observable<any>{
    return this.http.get(environment.baseUrl +'hms/operation/getall');
  }
  public getpatientProgress():Observable<any>{
    return this.http.get(environment.baseUrl +'hms/patientProgress/read/all');
  }
  public getpersonalDetails():Observable<any>{
    return this.http.get(environment.baseUrl +'hms/personalDetails/getall');
  }
  public getdiagnosis():Observable<any>{
    return this.http.get(environment.baseUrl + 'hms/diagnosis/getall');
  }

  
}
