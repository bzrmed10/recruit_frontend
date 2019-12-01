import { Injectable } from '@angular/core';
import { JobPosition } from './position.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  startedEditing = new Subject<number>();
  addOrEdit = new Subject<string>();
  private jobPositions : JobPosition[];
  private REST_API_SERVER = "http://127.0.0.1:8000";

  // private jobPositions : JobPosition[] = [
  //   new JobPosition(
  //     "Développeur Angular ",
  //     "Pour les passionnés du domaine bancaire, nous recrutons notre amazing Développeur Angular (H/F)"+

  //     "Vous êtes un(e) développeur expérimenté et vous avez une réelle appétence pour les technologies web. Evidemment, mordu de technos, vous êtes en veille constante des nouveautés."+
      
  //     "Votre rôle est de mettre en place l'architecture applicative orientée client Direct avec un aspect sécurité. Qualité, robustesse et performance du code sont des qualités attendues pour le poste."+
  //     "A ce titre, vos missions principales seront :"+
      
  //     "Analyser les besoins"+
  //     "Développement d'applications HTML5/CSS3 avec les Framework ANGULAR et les librairies Material Design.",
  //     "CDI: 37-45K€","Paris (75)","It",this.dateoftoday),
  //     new JobPosition(
  //       "Développeur Angular ",
  //       "Pour les passionnés du domaine bancaire, nous recrutons notre amazing Développeur Angular (H/F)"+
  
  //       "Vous êtes un(e) développeur expérimenté et vous avez une réelle appétence pour les technologies web. Evidemment, mordu de technos, vous êtes en veille constante des nouveautés."+
        
  //       "Votre rôle est de mettre en place l'architecture applicative orientée client Direct avec un aspect sécurité. Qualité, robustesse et performance du code sont des qualités attendues pour le poste."+
  //       "A ce titre, vos missions principales seront :"+
        
  //       "Analyser les besoins"+
  //       "Développement d'applications HTML5/CSS3 avec les Framework ANGULAR et les librairies Material Design.",
  //       "CDI: 37-45K€","Paris (75)","It",this.dateoftoday)
  // ]

  constructor(private http : HttpClient) { }

  // getJobPosition(){
  //   return this.jobPositions;
  // }
  getJobPosition(){
    return this.http.get(this.REST_API_SERVER+'/jobpositions');
  }

  // addJobPosition(jobPosition : JobPosition){
  //   const creatDate : Date  = new Date();
  //    jobPosition.updateDate = creatDate;
  //   this.jobPositions.push(jobPosition);
  // }

  addJobPosition(jobPosition : JobPosition){
    return this.http.post(this.REST_API_SERVER+'/jobpositions',jobPosition);
  }

  // editJobPosition(id : number,newJobPosition : JobPosition){
  //   const updateDate : Date  = new Date();
  //   newJobPosition.updateDate = updateDate;
  //   this.jobPositions[id] = newJobPosition;
  
  // }
  editJobPosition(id : number,newJobPosition : JobPosition){
    return this.http.put(this.REST_API_SERVER+'/jobpositions/'+id,newJobPosition);
  
  }
  // deleteJobPosition(id : number){
  //   this.jobPositions.splice(id,1);
  // }
  // getJobPositionById(index : number){
  //   return this.jobPositions[index];
  // }
  getJobPositionById(id : number){
    return this.http.get(this.REST_API_SERVER+'/jobpositions/'+id);
  }
}
