import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private REST_API_SERVER = "http://127.0.0.1:8000";

  constructor(private http : HttpClient) { }

  login(data){
    return this.http.post(this.REST_API_SERVER+'/login',data);
  }
}
