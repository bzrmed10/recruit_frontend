import { PositionService } from '../position.service';
import { Component, OnInit } from '@angular/core';
import { JobPosition } from '../position.model';

@Component({
  selector: 'app-list-position',
  templateUrl: './list-position.component.html',
  styleUrls: ['./list-position.component.css']
})
export class ListPositionComponent implements OnInit {

  jobPositions:JobPosition[];
  page = 1;
  pageSize = 6;
  searchText;
  constructor( private jobPositionService : PositionService) { }

  ngOnInit() {
      this.jobPositions = this.jobPositionService.getJobPosition();
  }
  onEdit(i : number){
     this.jobPositionService.startedEditing.next(i);
  }
}
