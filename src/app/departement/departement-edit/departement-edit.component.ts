import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Departement } from '../departement.model';
import { DepartementService } from '../departement.service';

@Component({
  selector: 'app-departement-edit',
  templateUrl: './departement-edit.component.html',
  styleUrls: ['./departement-edit.component.css']
})
export class DepartementEditComponent implements OnInit {
  id: number;
  editMode=false
  constructor(private route : ActivatedRoute,
    private departementService : DepartementService,
    private router : Router) { }

  ngOnInit() {

    
    this.route.params.subscribe(
      (params :Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
         
       // console.log(this.edidMode);
        
      }
    );
  }

  onSubmit(form : NgForm){
      
       
      if(!this.editMode){
        console.log(form.value);
         this.departementService.addDepartement(form.value);
        this.router.navigate(['departement']);
          
      }
  }
}

