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
  // collectionSize : number;
  constructor(private departementService : DepartementService,
    private sharedSercice : SharedService) { }

  ngOnInit() {
    // this.departements = this.departementService.getDepartement();
    this.departementService.getDepartementApi().subscribe((data: Departement[])=>{
    this.departements = data['data'];
    // this.collectionSize = this.departements.length;
    // console.log(this.departements.length);
    return this.departements;

    })  ;
    
  }

  onDeleteDepartement(id : number){
    
    this.departementService.deleteDepartementApi(id).subscribe(
      result => {
        this.sharedSercice.successToast('successful deletion');
        this.ngOnInit();
      },
      error => {
        this.sharedSercice.errorToast(error.error['error']);
        console.log(error.error['error']);

      }
      
      )  ;

    
  }
}
