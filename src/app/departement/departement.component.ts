import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
 title ="Departements";
 showList = true;
 showNew = false;
 showEdit = false;

  constructor() { }

  ngOnInit() {

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
