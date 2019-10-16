import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TreatmentService {

  constructor(private http:HttpClient) { }

  public getTreatments():Observable<any>{
    return this.http.get(environment.baseUrl + 'hms/treatment/read/all');
  }

  public postTreatments(treatmentObj: any):Observable<any>{
    return this.http.post(environment.baseUrl+ 'hms/treatment/create',treatmentObj);
  }

  public getTreatmentsById(id):Observable<any>{
    return this.http.get(environment.baseUrl+'hms/treatment/read/'+id);
  }

  public updateTreatmentById(id,Obj):Observable<any>{
    return this.http.put(environment.baseUrl+'hms/treatment/update/'+id,Obj)
  }

  public deleteTreatment(id):Observable<any>{
    return this.http.get(environment.baseUrl+'hms/treatment/delete/'+id);
  }
}
