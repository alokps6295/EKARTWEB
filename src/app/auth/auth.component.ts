import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {ApiService} from '../services/apiService';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  authForm;
  title: String = '';
  authType: String = '';
  userData;
  buttonDisabled:boolean=false;


  constructor(private route: ActivatedRoute,private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.authForm=new FormGroup({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      });

    this.route.url.subscribe( data => {
      this.authType=data[data.length-1].path;
    });

    this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
  
    //add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl('',Validators.required));
    }
  }

  submitForm=function(){
     this.buttonDisabled=true;
     if(this.authType=="register"){
      this.userData={
       username:this.authForm.value.username,
       email:this.authForm.value.email,
       password:this.authForm.value.password
     }
     console.log(this.userData);
      this.apiService.createUser(this.userData).subscribe((res)=>{
        console.log(res);

      })
     }
  }

}
