import { Injectable } from '@angular/core';
import { Departement } from './departement.model';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  private departements : Departement[] = [
    new Departement("Marketing",23),
    new Departement("It",12),
    new Departement("Finance",5),
    new Departement("Manegement",9)
  ]

  constructor() { }

  getDepartement(){
    return this.departements;
  }

  addDepartement(departement : Departement){
    this.departements.push(departement);
  }
  editDepartement(id : number,newDepartement : Departement){
    this.departements[id] = newDepartement;
  
  }
  
  deleteDepartement(id : number){
    this.departements.splice(id,1);
  }
  getDepartementById(index : number){
    return this.departements[index];
  }

}
