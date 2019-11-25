import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { SharedService } from 'src/app/components/shared/shared.service';
import { Manager } from '../manager.model';
import { DepartementService } from '../../departement/departement.service';
import { Departement } from 'src/app/departement/departement.model';


@Component({
  selector: 'app-managers-list',
  templateUrl: './managers-list.component.html',
  styleUrls: ['./managers-list.component.css']
})
export class ManagersListComponent implements OnInit {

  // managers : Manager[];
  // departement : Departement[];
  // page = 1;
  // pageSize = 10;
  // searchText;

  
  constructor( private managerService : ManagerService, private sharedSercice : SharedService, private departementService : DepartementService) { }

  ngOnInit() {
      // this.managers = this.managerService.getManagers();
      // this.departement = this.departementService.getDepartement();
  }

  onDeleteManager(id : number){
    
    // this.managerService.deleteManager(id);
    // this.sharedSercice.successToast('successful deletion');
  }
}
