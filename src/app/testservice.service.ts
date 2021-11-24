import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Registration} from '../app/registration';

@Injectable({

  providedIn: 'root'
})
export class TestserviceService {

  constructor(private httpClient : HttpClient) { }
  
  addUser(registration:Registration){
    return this.httpClient.post<Registration>('http://localhost:9095/registers/register',registration);
  }

  getAllUsers(userid:number, password:string)
  {
    return this.httpClient.get<Array<Registration>>("http://localhost:9095/registers/getDetails/"+userid+"/"+password);
  }
}

  







