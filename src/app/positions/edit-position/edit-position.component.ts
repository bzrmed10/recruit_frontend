import { Component, OnInit, OnDestroy } from '@angular/core';
import { DepartementService } from 'src/app/departement/departement.service';
import { Departement } from 'src/app/departement/departement.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PositionService } from '../position.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

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
     private router :Router) { }

  ngOnInit() {
    // this.departements = this.departementService.getDepartement();
    // this.initForm();
    // this.subscription = this.jobPositionService.startedEditing.
    // subscribe(
    //   (index : number) =>{
    //       this.id = index;
    //       this.editMode = true;   
    //       console.log(this.editMode);
    //       this.initForm();   
    //   }
    // )
    
  }

  onSubmit(){
    // if(this.jobPositionForm.valid){
    //   if(this.editMode){
    //     this.jobPositionService.editJobPosition(this.id,this.jobPositionForm.value);
       
    //     //this.sharedService.successToast('Successful Insertion');
    //   }else{
    //     this.jobPositionService.addJobPosition(this.jobPositionForm.value);
    //     this.jobPositionForm.reset();
    //     // this.jobPositionService.successToast('Successful Update');
    //   }
    // }
    
  }

  // private initForm(){ 
    
  //   let dep ='';
  //   let title ='';
  //   let jobDescription ='';
  //   let salary = '';
  //   let officeLocation = '';
    

  //   if(this.editMode){
  //      const jobPosition = this.jobPositionService.getJobPositionById(this.id);
  //      dep = jobPosition.departement;
  //      title = jobPosition.title;
  //      jobDescription = jobPosition.description;
  //      salary = jobPosition.salary;
  //      officeLocation = jobPosition.location;
       
  //   }

    
  //   this.jobPositionForm = new FormGroup ({
  //     'departement' : new FormControl(dep , Validators.required),
  //     'title' : new FormControl(title, Validators.required),
  //     'description' : new FormControl(jobDescription, Validators.required),
  //     'salary' : new FormControl(salary , Validators.required ),
  //     'location' : new FormControl(officeLocation, Validators.required)
    
  //   });
  // }
  // resetJobPositionForm(){
  //   this.jobPositionForm.reset();
  //   this.editMode= false;
  // }
  ngOnDestroy(){
    // this.subscription.unsubscribe();
  }
}
