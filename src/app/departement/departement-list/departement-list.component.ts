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
  page = 1;
  pageSize = 10;
  searchText;
  editMode : boolean;
  constructor(private departementService : DepartementService,
    private sharedSercice : SharedService) { }

  ngOnInit() {
    this.departements = this.departementService.getDepartement();
    
  }

  onDeleteDepartement(id : number){
    
    this.departementService.deleteDepartement(id);
    this.sharedSercice.successToast('successful deletion');
  }
}
