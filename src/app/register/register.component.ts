import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from './register.service';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   error = [];
  constructor(private registerService :RegisterService ,
    private token :TokenService ,
    private router:Router,
    private auth : AuthService) { }

  ngOnInit() {
  }

  onSubmit(form : NgForm){

    if(form.valid){
      
      this.registerService.register(form.value).subscribe(
        data => {
          this.hundleResponse(data)
        },
        error => {
          this.error = error.error["error"];
         
          
  
        }
        
        )  ;

    }
    else{
      
      //this.error = "Invalid form";

    }
  }

  hundleResponse(data){
    this.token.hundle(data.access_token);
    this.auth.changeAuthStatus(true);
    this.router.navigateByUrl('/dashboard');
  }
}
