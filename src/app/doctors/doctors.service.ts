import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private http:HttpClient) { }

  public getDoctors():Observable<any>{
    return this.http.get(environment.baseUrl + 'hms/doctor/read/all');
  }

  public postDoctors(Obj: any):Observable<any>{
    return this.http.post(environment.baseUrl+ 'hms/doctor/create',Obj);
  }


  public updateDoctorsById(id,Obj):Observable<any>{
    return this.http.put(environment.baseUrl+'hms/doctor/update/'+id,Obj)
  }

  public deleteDoctors(id):Observable<any>{
    return this.http.get(environment.baseUrl+'hms/doctor/delete/'+id);
  }

  public getSpecialists():Observable<any>{
    return this.http.get(environment.baseUrl+'hms/specialist/read/all')
  }

  public getPersonalDetails():Observable<any>{
    return this.http.get(environment.baseUrl+'hms/personalDetails/getall')
  }




}
