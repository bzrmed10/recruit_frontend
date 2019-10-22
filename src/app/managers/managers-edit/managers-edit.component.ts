import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/components/shared/shared.service';
import { DepartementService } from '../../departement/departement.service';
import { Departement } from 'src/app/departement/departement.model';
import { ManagerService } from '../manager.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-managers-edit',
  templateUrl: './managers-edit.component.html',
  styleUrls: ['./managers-edit.component.css']
})
export class ManagersEditComponent implements OnInit {
  id : number ;
  editMode = false;
  managerForm : FormGroup;
  departements : Departement[];
  constructor(  private sharedService : SharedService,
                private departementService : DepartementService,
                private managerService : ManagerService,
                private route : ActivatedRoute,
                private router :Router) { }

  ngOnInit() {
     
      this.departements = this.departementService.getDepartement();
     
      this.route.params.subscribe(
        (params :Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          
          this.initForm();
          
        }
      );
  }

  onSubmit(){
    if(this.editMode){
      this.managerService.editManager(this.id,this.managerForm.value);
      this.router.navigate(['managers']);
      this.sharedService.successToast('Successful Insertion');
    }else{
      console.log(this.managerForm.value);
      this.managerService.addManager(this.managerForm.value);
      this.router.navigate(['managers']);
      this.sharedService.successToast('Successful Update');
    }
  }
 
  private initForm(){ 
    let firstName ='';
    let lastName ='';
    let email ='';
    let phone = '';
    let status = '';
    let departement = 100 ;

    if(this.editMode){
       const manager = this.managerService.getManagerById(this.id);
       firstName =manager.firstName;
       lastName =manager.lastName;
       email =manager.email;
       phone = manager.phone;
       status = manager.status;
       departement = 1;
       
    }

    
    this.managerForm = new FormGroup ({
      'firstName' : new FormControl(firstName , Validators.required),
      'lastName' : new FormControl(lastName, Validators.required),
      'email' : new FormControl(email,[ Validators.required,Validators.email]),
      'phone' : new FormControl(phone , [ Validators.required ,Validators.minLength(10)]),
      'status' : new FormControl(status, Validators.required),
      'departement' : new FormControl(departement, Validators.required)
    
    });
  }
}
