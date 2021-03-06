import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  constructor(private loginservice:LoginService, private http: HttpClient) { }

  username = "";
  passwordAngular = "";

  ngOnInit() {
  }
login(): void {
    this.http.get('http://localhost:9095/getDetails/'+this.username+'/'+this.passwordAngular, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    }).toPromise().then(response => console.log(response)).catch(err => console.log(err));
  }

}