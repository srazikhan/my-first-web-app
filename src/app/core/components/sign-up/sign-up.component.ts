import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpFrom:FormGroup;
  submitted:boolean = false;
  constructor(private router:Router) {
     this.signUpFrom = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.maxLength(20)]),
    })
  }

  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.signUpFrom.controls;
  }
  submitForm() {
    console.log("Form Submitted");
    this.submitted = true;
    if (this.signUpFrom.invalid) return
    let formData = this.signUpFrom.value;
    if(localStorage.getItem('usersList') == null){
      localStorage.setItem('usersList',JSON.stringify([formData]));
    }else{
      let users = JSON.parse(localStorage.getItem('usersList') || '{}');
      const checkDuplicate = users.some((element:any)=>{
        if(element.email == formData.email){
          return true
        }else{
          return false
        }
      })
      console.log(checkDuplicate);
      if(checkDuplicate){
        //this.toastr.error('This email already exist', '');
        alert('This email already exist')
      }else{
        users.push(formData);
        localStorage.setItem('usersList',JSON.stringify(users));
        alert('Account has been created successfully');
        this.router.navigate(['login']);
        //this.toastr.success('Account has been created successfully', '');
      }
    }
  }
}
