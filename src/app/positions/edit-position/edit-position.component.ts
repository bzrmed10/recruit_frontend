import { Component, OnInit, OnDestroy } from '@angular/core';
import { DepartementService } from 'src/app/departement/departement.service';
import { Departement } from 'src/app/departement/departement.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PositionService } from '../position.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { JobPosition } from '../position.model';
import { SharedService } from 'src/app/components/shared/shared.service';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.css']
})
export class EditPositionComponent implements OnInit,OnDestroy {
  subscription: Subscription;
  departements : Departement[];
  editMode=false;
  id: number;
  jobPositionForm : FormGroup;
  constructor(private route : ActivatedRoute,
     private departementService : DepartementService,
     private jobPositionService : PositionService,
     private router :Router,
     private sharedService : SharedService) { }

  ngOnInit() {

    this.departementService.getDepartementApi().subscribe((data: Departement[])=>{
      this.departements = data['data'];
      return this.departements;
  
      }) ;
    this.initForm();
    this.subscription = this.jobPositionService.startedEditing.
    subscribe(
      (index : number) =>{
          this.id = index;
          this.editMode = true;   
         
          this.initForm();   
      }
    )
    
  }

  onSubmit(){
     if(this.jobPositionForm.valid){
       if(this.editMode){

    this.jobPositionService.editJobPosition(this.id,this.jobPositionForm.value).subscribe(
      (data: JobPosition)=>{
        this.jobPositionService.addOrEdit.next("edit");
        this.sharedService.successToast('Successful Update');
       },
       error => {
        
         this.sharedService.errorToast('Error! :'+ error.error['error'] );
       });
       }else{
        this.jobPositionService.addJobPosition(this.jobPositionForm.value).subscribe(
          (data: JobPosition)=>{
            this.jobPositionService.addOrEdit.next("add");
            this.sharedService.successToast('Successful Update');
            this.resetJobPositionForm();
           },
           error => {
            
             this.sharedService.errorToast('Error! :'+ error.error['error'] );
           });
       }
   }else{
    this.sharedService.errorToast('Error! : Form Invalid');
   }
    
  }

   private initForm(){ 
    
    let dep ='';
    let title ='';
    let jobDescription ='';
    let salary = '';
    let officeLocation = '';
    

    if(this.editMode){

       

       this.jobPositionService.getJobPositionById(this.id).subscribe(
        data => {
          const jobPosition = data['data'];
          dep = jobPosition.departement_id;
          title = jobPosition.title;
          jobDescription = jobPosition.description;
          salary = jobPosition.salary;
          officeLocation = jobPosition.location;
          this.jobPositionForm = new FormGroup ({
                'departement_id' : new FormControl(dep , Validators.required),
                'title' : new FormControl(title, Validators.required),
                'description' : new FormControl(jobDescription, Validators.required),
                'salary' : new FormControl(salary , Validators.required ),
                'location' : new FormControl(officeLocation, Validators.required)
              
              });
        }
      );


    }
    else{
      this.jobPositionForm = new FormGroup ({
        'departement_id' : new FormControl(dep , Validators.required),
        'title' : new FormControl(title, Validators.required),
        'description' : new FormControl(jobDescription, Validators.required),
        'salary' : new FormControl(salary , Validators.required ),
        'location' : new FormControl(officeLocation, Validators.required)
      
      });
    }
    
    
    }
  resetJobPositionForm(){
    this.jobPositionForm.reset();
    this.editMode= false;
   }
  ngOnDestroy(){
     this.subscription.unsubscribe();
  }
}
