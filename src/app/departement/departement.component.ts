import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DepartementService } from './departement.service';


@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
 title ="Departements";
 showList = true;
 showNew = false;


  constructor(private depService : DepartementService) { }

  ngOnInit() {
     
  }
  getBgColor(){
    if(this.showList){
      return 'transparent';
    }
  }


  onList(){
    this.showList = true;
    this.showNew = false;
  }
  onNew(){
    this.showNew =true;
    this.showList = false;
  }
  
  
}
