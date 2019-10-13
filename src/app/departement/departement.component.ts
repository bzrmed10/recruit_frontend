import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
 title ="Departements";
 showList = true;

  constructor() { }

  ngOnInit() {

  }
  
  onList(){
    this.showList = true;
  }
  onNew(){
    this.showList =false;
  }
}
