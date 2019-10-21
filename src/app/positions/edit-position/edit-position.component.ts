import { Component, OnInit } from '@angular/core';
import { DepartementService } from 'src/app/departement/departement.service';
import { Departement } from 'src/app/departement/departement.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.css']
})
export class EditPositionComponent implements OnInit {
  departements : Departement[];
  editMode=false;
  id: number;

  constructor(private route : ActivatedRoute, private departementService : DepartementService) { }

  ngOnInit() {
    this.departements = this.departementService.getDepartement();

    this.route.params.subscribe(
      (params :Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null; 
        
        // this.initForm();        
      }
    );
  }

}
