import { Injectable } from '@angular/core';
import { Departement } from './departement.model';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private departements : Departement[] = [
    new Departement(1,"Marketing",23),
    new Departement(2,"It",12),
    new Departement(3,"Finance",5),
    new Departement(4,"Manegement",9)
  ]

  constructor() { }

  getDepartement(){
    return this.departements;
  }

  addDepartement(departement : Departement){
    departement["id"] = 6;
    this.departements.push(departement);
  } 
}
