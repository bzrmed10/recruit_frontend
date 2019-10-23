import { Injectable } from '@angular/core';
import { JobPosition } from './position.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  startedEditing = new Subject<number>();
  dateoftoday : Date  = new Date();

  private jobPositions : JobPosition[] = [
    new JobPosition(
      "Développeur Angular ",
      "Pour les passionnés du domaine bancaire, nous recrutons notre amazing Développeur Angular (H/F)"+

      "Vous êtes un(e) développeur expérimenté et vous avez une réelle appétence pour les technologies web. Evidemment, mordu de technos, vous êtes en veille constante des nouveautés."+
      
      "Votre rôle est de mettre en place l'architecture applicative orientée client Direct avec un aspect sécurité. Qualité, robustesse et performance du code sont des qualités attendues pour le poste."+
      "A ce titre, vos missions principales seront :"+
      
      "Analyser les besoins"+
      "Développement d'applications HTML5/CSS3 avec les Framework ANGULAR et les librairies Material Design.",
      "CDI: 37-45K€","Paris (75)","It",this.dateoftoday),
      new JobPosition(
        "Développeur Angular ",
        "Pour les passionnés du domaine bancaire, nous recrutons notre amazing Développeur Angular (H/F)"+
  
        "Vous êtes un(e) développeur expérimenté et vous avez une réelle appétence pour les technologies web. Evidemment, mordu de technos, vous êtes en veille constante des nouveautés."+
        
        "Votre rôle est de mettre en place l'architecture applicative orientée client Direct avec un aspect sécurité. Qualité, robustesse et performance du code sont des qualités attendues pour le poste."+
        "A ce titre, vos missions principales seront :"+
        
        "Analyser les besoins"+
        "Développement d'applications HTML5/CSS3 avec les Framework ANGULAR et les librairies Material Design.",
        "CDI: 37-45K€","Paris (75)","It",this.dateoftoday)
  ]

  constructor() { }

  getJobPosition(){
    return this.jobPositions;
  }

  addJobPosition(jobPosition : JobPosition){
    const creatDate : Date  = new Date();
    jobPosition.updateDate = creatDate;
    this.jobPositions.push(jobPosition);
  }
  editJobPosition(id : number,newJobPosition : JobPosition){
    const updateDate : Date  = new Date();
    newJobPosition.updateDate = updateDate;
    this.jobPositions[id] = newJobPosition;
  
  }
  
  deleteJobPosition(id : number){
    this.jobPositions.splice(id,1);
  }
  getJobPositionById(index : number){
    return this.jobPositions[index];
  }

}
