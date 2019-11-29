import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginServiceService } from './login-service.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public testerror = null;
  constructor(private loginService :LoginServiceService ,
                private token :TokenService ,
                private router:Router,
                private auth:AuthService) { }

  ngOnInit() {

  }
  onSubmit(form : NgForm){

    if(form.valid){
      
      this.loginService.login(form.value).subscribe(
        data => {
          this.hundleResponse(data);
          // console.log(data);
        },
        error => {
          this.testerror = error.error["error"];

        }
        
        )  ;

    }
    else{
      
      this.testerror = "Invalid form";

    }
  }

  hundleResponse(data){
    this.token.hundle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }

 
}
