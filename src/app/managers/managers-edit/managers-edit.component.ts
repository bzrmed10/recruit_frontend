import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/components/shared/shared.service';
import { DepartementService } from '../../departement/departement.service';
import { Departement } from 'src/app/departement/departement.model';
import { ManagerService } from '../manager.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Manager } from '../manager.model';

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
     
    this.departementService.getDepartementApi().subscribe((data: Departement[])=>{
      this.departements = data['data'];
      return this.departements;
  
      }) ;
     
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
     

      this.managerService.editManager(this.id,this.managerForm.value).subscribe(
        (data: Manager)=>{
          this.router.navigate(['managers']);
          this.sharedService.successToast('Successful Update');
         },
         error => {
          
           this.sharedService.errorToast('Error! :'+ error.error['error'] );
         });
    }else{
      this.managerService.addManager(this.managerForm.value).subscribe(
        (data: Manager)=>{
          this.router.navigate(['managers']);
          this.sharedService.successToast('Successful Insert');
         },
         error => {
          
           this.sharedService.errorToast('Error! :'+ error.error['error'] );
         });
    }
  }
 
   private initForm(){ 
    let firstName ='';
    let lastName ='';
    let email ='';
    let phone = '';
    let status = '';
    let departement_id = null ;

    if(this.editMode){
       this.managerService.getManagerById(this.id).subscribe(
         data => {
           const manager = data['data'];
           firstName =manager.firstName;
           lastName =manager.lastName;
           email =manager.email;
           phone = manager.phone;
           status = manager.status;
           departement_id = manager.departement_id;
           console.log(firstName);
           this.managerForm = new FormGroup ({
            'firstName' : new FormControl(firstName , Validators.required),
            'lastName' : new FormControl(lastName, Validators.required),
            'email' : new FormControl(email,[ Validators.required,Validators.email]),
            'phone' : new FormControl(phone , [ Validators.required ,Validators.minLength(10)]),
            'status' : new FormControl(status, Validators.required),
            'departement_id' : new FormControl(departement_id, Validators.required)
          
          });
         }
       );
      
       
    }

    
    this.managerForm = new FormGroup ({
      'firstName' : new FormControl(firstName , Validators.required),
      'lastName' : new FormControl(lastName, Validators.required),
      'email' : new FormControl(email,[ Validators.required,Validators.email]),
      'phone' : new FormControl(phone , [ Validators.required ,Validators.minLength(10)]),
      'status' : new FormControl(status, Validators.required),
      'departement_id' : new FormControl(departement_id, Validators.required)
    
    });
   }
}
