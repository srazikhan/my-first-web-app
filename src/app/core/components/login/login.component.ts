import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFrom:FormGroup;
  submitted:boolean = false;
  constructor(private router:Router) {
     this.loginFrom = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    })
  }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginFrom.controls;
  }
  
  submitForm() {
    console.log("Form Submitted");
    this.submitted = true;
    if (this.loginFrom.invalid) return
    let formData = this.loginFrom.value;
    let users = JSON.parse(localStorage.getItem('usersList') || '{}');
    const checkDuplicate = users.some((element:any)=>{
      if(element.email == formData.email && element.password == formData.password){
        return true
      }else{
        return false
      }
    })
    console.log(checkDuplicate);
    if(checkDuplicate){
      alert('Login Successfull')
    }else{
      alert('Enter valid username and password')
    }
  }
}
