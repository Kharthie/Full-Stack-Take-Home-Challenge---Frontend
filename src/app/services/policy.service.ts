import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private apiUrl = 'http://localhost:3000/api/policies';

  constructor(
    private http: HttpClient
  ) { }

  getPolicies(filters : any){
    let params = new HttpParams();
    for(const key in filters){
       if(filters[key]){
         params = params.set(key, filters[key]);
       }
    }

    return this.http.get(this.apiUrl, {params})
  }


}
