import { Component, OnInit, ɵConsole } from '@angular/core';
import { DepartementService } from '../departement.service';
import { Departement } from '../departement.model';
import { SharedService } from 'src/app/components/shared/shared.service';

@Component({
  selector: 'app-departement-list',
  templateUrl: './departement-list.component.html',
  styleUrls: ['./departement-list.component.css']
})
export class DepartementListComponent implements OnInit {

  departements : Departement[];
   
  editMode : boolean;
  constructor(private departementServive : DepartementService,
    private sharedSercice : SharedService) { }

  ngOnInit() {
    this.departements = this.departementServive.getDepartement();
    
  }

  onDeleteDepartement(id : number){
    console.log(id);
    this.departementServive.deleteDepartement(id);
    this.sharedSercice.successToast('successful deletion');
  }
}
