import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Departement } from '../departement.model';
import { DepartementService } from '../departement.service';
import { ViewChild } from '@angular/core';
import { SharedService } from 'src/app/components/shared/shared.service';


@Component({
  selector: 'app-departement-edit',
  templateUrl: './departement-edit.component.html',
  styleUrls: ['./departement-edit.component.css']
})
export class DepartementEditComponent implements OnInit {

   @ViewChild('f' , {static : true}) depForm : NgForm;
  
  id: number;
  editMode=false
  departement : Departement;
  constructor(private route : ActivatedRoute,
    private departementService : DepartementService,
    private router : Router,
    private sharedService : SharedService) { }

   ngOnInit() {

    
    this.route.params.subscribe(
      (params :Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null; 
        
        this.initForm();        
      }
    );


   }

  onSubmit(form : NgForm){
      
       
      if(!this.editMode){
        this.departementService.addDepartement(form.value).subscribe(
          (data: Departement)=>{
            this.router.navigate(['departement']);
            this.sharedService.successToast('Successful Insert');
           },
           error => {
            
             this.sharedService.errorToast('Error! :'+ error.error['error'] );
           })
      }else{
        
        this.departementService.editDepartement(this.id,form.value).subscribe(
          (data: Departement)=>{
            this.router.navigate(['departement']);
            this.sharedService.successToast('Successful Update');
           },
           error => {
            
             this.sharedService.errorToast('Error! :'+ error.error['error'] );
           })
      }
      
  }

  private initForm(){ 
    let nameDep ='';
    let nbEmploye : number;
   

    if(this.editMode){
       this.departementService.getDepartementByIdApi(this.id).subscribe((data: Departement)=>{
        this.departement = data['data'];
        
        nameDep = this.departement.name;

       nbEmploye = this.departement.nbEmployee;
       setTimeout(() => {
        this.depForm.setValue({
          name : nameDep,
          nbEmployee : nbEmploye
     })
    
      });
    
        })  ;
 
  }
}

}
