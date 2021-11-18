import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="http://localhost:9595"

  constructor(private http:HttpClient) { }

  //calling the server to generate token

  generateToken(credentials:any){
    return this.http.post(`${this.url}/token`,credentials)
  }
  
  



}