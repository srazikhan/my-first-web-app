import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpFrom:FormGroup;
  submitted:boolean = false;
  constructor() {
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
      console.log(users);
      users.some((element:any)=>{
        console.log(element)
        if(element.email == formData.email){
          console.log(true);
          alert('this email already exist');
          return
        }else{
          localStorage.setItem('usersList',JSON.stringify(users));
          return
         // users.push(formData);
        }
      })
    
    }
    
  }
}
