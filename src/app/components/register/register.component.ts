import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TestserviceService } from 'src/app/testservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  successMessage:string ="";
  regForm!:FormGroup
  constructor(private fb: FormBuilder, private testc:TestserviceService) { }
  ngOnInit(): void {
    this.regForm = this.fb.group({
      name: ['',[Validators.required]],
      mobileNumber: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
      email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9]*@gmail.com")]],
      userName:['',[Validators.required]],
      password: ['',[Validators.required,Validators.pattern("[a-zA-z@_]{6,}")]],
      address: ['',[Validators.required]],
      accountNo: ['',[Validators.required, Validators.min(1000000000),Validators.max(9999999999)]],
      bankName:['',[Validators.required]]
    })
  }

register()
  {
    console.log(this.regForm.get("password")?.value);
    this.testc.addUser(this.regForm.value).subscribe(
      data=>{
        console.log("add");
        console.log(data);
        alert("Registration successful,please login to continue")
        this.regForm.reset();
      },error=>{
        console.error();
  }
    );
  }
}





