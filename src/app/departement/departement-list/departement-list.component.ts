import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../departement.service';
import { Departement } from '../departement.model';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {

  departements : Departement[];
   
  editMode : boolean;
  constructor(private departementServive : DepartementService) { }

  ngOnInit() {
    this.departements = this.departementServive.getDepartement();
    
  }

}
