import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  constructor(private http:HttpClient) { }

  public getDiagnosis():Observable<any>{
    return this.http.get(environment.baseUrl + 'hms/diagnosis/getall');
  }

  public postDiagnosis(Obj: any):Observable<any>{
    return this.http.post(environment.baseUrl+ 'hms/diagnosis/create',Obj);
  }


  public updateDiagnosisById(id,Obj):Observable<any>{
    return this.http.put(environment.baseUrl+'hms/diagnosis/update/'+id,Obj)
  }

  public deleteDiagnosis(id):Observable<any>{
    return this.http.delete(environment.baseUrl+'hms/diagnosis/delete/'+id);
  }


}
