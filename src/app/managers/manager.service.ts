import { Injectable } from '@angular/core';
import { Manager } from './manager.model';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private managers : Manager[] = [

    new Manager("Mehdi" ,"Bouazar" ,"bouazar.mehdi@gmail.com","Active","+21264987452" ),
    new Manager("manager firstName" ,"manager lastname" ,"manager@gmail.com" ,"Active","+21278956234"),
    new Manager("manager2 firstName" ,"manager2 lastname" ,"manager2@gmail.com","Disabled" ,"+21245957832"),
    new Manager("manager3 firstName" ,"manager3 lastname" ,"manager@gmail.com","Active" ,"+21278963245"),
  ];
  constructor() { }

  getManagers(){
    return this.managers;
  }

  addManager(manager : Manager){
    console.log(manager);
    this.managers.push(manager);
  }
  editManager(id : number,newManager : Manager){
    this.managers[id] = newManager;
  
  }
  
  deleteManager(id : number){
    this.managers.splice(id,1);
  }
  getManagerById(index : number){
    return this.managers[index];
  }

}
