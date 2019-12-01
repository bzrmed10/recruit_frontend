import { PositionService } from '../position.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { JobPosition } from '../position.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-position',
  templateUrl: './list-position.component.html',
  styleUrls: ['./list-position.component.css']
})
export class ListPositionComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  jobPositions:JobPosition[];
  page = 1;
  pageSize =6;
  searchText;
  constructor( private jobPositionService : PositionService) { }

  ngOnInit() {
      

      this.jobPositionService.getJobPosition().subscribe((data: JobPosition[])=>{
        this.jobPositions = data['data'];
        return this.jobPositions;
    
        })  ;

        this.subscription = this.jobPositionService.addOrEdit.
        subscribe(
          (val : string) =>{
            if(val==='add' || val==='edit'){
              this.ngOnInit();
            }
              
                
          }
        )
  }
  onEdit(i : number){
     this.jobPositionService.startedEditing.next(i);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
 }
}
