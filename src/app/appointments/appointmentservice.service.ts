import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentserviceService {
  

  constructor(private http:HttpClient) { }

  public getappointments():Observable<any>{
    return this.http.get(environment.baseUrl + 'hms/appointment/getall');
  }

  public postappointments(appointmentObj: any):Observable<any>{
    return this.http.post(environment.baseUrl+ 'hms/appointment/create',appointmentObj);
  }

  public getappointmentsById(id):Observable<any>{
    return this.http.get(environment.baseUrl+'hms/appointment/read/'+id);
  }

  public updateappointmentsById(id,appointmentObj):Observable<any>{
    return this.http.put(environment.baseUrl+'hms/appointment/update/'+id,appointmentObj)
  }

  public deleteappointments(id):Observable<any>{
    return this.http.delete(environment.baseUrl+'hms/appointment/delete/'+id);
  }

}
