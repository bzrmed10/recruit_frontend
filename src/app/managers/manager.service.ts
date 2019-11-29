import { Injectable } from '@angular/core';
import { Manager } from './manager.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  // private managers : Manager[] = [

  //   new Manager("Mehdi" ,"Bouazar" ,"bouazar.mehdi@gmail.com","Active","+21264987452" ),
  //   new Manager("manager" ,"manager" ,"manager@gmail.com" ,"Active","+21278956234"),
  //   new Manager("manager2" ,"manager2" ,"manager2@gmail.com","Disabled" ,"+21245957832"),
  //   new Manager("manager3" ,"manager3" ,"manager@gmail.com","Active" ,"+21278963245"),
  // ];
  private REST_API_SERVER = "http://127.0.0.1:8000";

  constructor(private http : HttpClient) { }

  // getManagers(){
  //   return this.managers;
  // }
   getManagers(){
    return this.http.get(this.REST_API_SERVER+'/managers');
  }
  
  // addManager(manager : Manager){
  //   console.log(manager);
  //   this.managers.push(manager);
  // }
  addManager(manager : Manager){
    return this.http.post(this.REST_API_SERVER+'/managers',manager);
  }
  // editManager(id : number,newManager : Manager){
  //   this.managers[id] = newManager;
  
  // }
  editManager(id : number,newManager : Manager){
    return this.http.put(this.REST_API_SERVER+'/managers/'+id,newManager);
    }
  // deleteManager(id : number){
  //   this.managers.splice(id,1);
  // }

  deleteManager(id : number){
    return this.http.delete(this.REST_API_SERVER+'/managers/'+id);
  }
  
  // getManagerById(index : number){
  //   return this.managers[index];
  // }
    getManagerById(id : number){
      return this.http.get(this.REST_API_SERVER+'/managers/'+id);
  }

}
