import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departement } from './departement.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  // private departements : Departement[] = [
  //   new Departement("Marketing",23),
  //   new Departement("It",12),
  //   new Departement("Finance",5),
  //   new Departement("Manegement",9)
  // ]
  private REST_API_SERVER = "http://127.0.0.1:8000";

  constructor(private http : HttpClient) { }

  // getDepartement(){
  //   return this.departements;
  // }
  getDepartementApi(){

    return this.http.get(this.REST_API_SERVER+'/departements');
   }
  // addDepartement(departement : Departement){
  //   this.departements.push(departement);
  // }
  // editDepartement(id : number,newDepartement : Departement){
  //   this.departements[id] = newDepartement;
  
  // }
  
  // deleteDepartement(id : number){
  //   this.departements.splice(id,1);
  // }
   deleteDepartementApi(id : number){
    return this.http.delete(this.REST_API_SERVER+'/departements/'+id);
  }
  // getDepartementById(index : number){
  //   return this.departements[index];
  // }

}
