import { Injectable } from '@angular/core';
import { JobPosition } from './position.model';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private jobPositions : JobPosition[] = [
    new JobPosition(
      "Développeur Angular ",
      "Pour les passionnés du domaine bancaire, nous recrutons notre amazing Développeur Angular (H/F)"+

      "Vous êtes un(e) développeur expérimenté et vous avez une réelle appétence pour les technologies web. Evidemment, mordu de technos, vous êtes en veille constante des nouveautés."+
      
      "Votre rôle est de mettre en place l'architecture applicative orientée client Direct avec un aspect sécurité. Qualité, robustesse et performance du code sont des qualités attendues pour le poste."+
      "A ce titre, vos missions principales seront :"+
      
      "Analyser les besoins"+
      "Développement d'applications HTML5/CSS3 avec les Framework ANGULAR et les librairies Material Design.",
      "CDI: 37-45K€","Paris (75)","It"),
      new JobPosition(
        "Développeur Angular ",
        "Pour les passionnés du domaine bancaire, nous recrutons notre amazing Développeur Angular (H/F)"+
  
        "Vous êtes un(e) développeur expérimenté et vous avez une réelle appétence pour les technologies web. Evidemment, mordu de technos, vous êtes en veille constante des nouveautés."+
        
        "Votre rôle est de mettre en place l'architecture applicative orientée client Direct avec un aspect sécurité. Qualité, robustesse et performance du code sont des qualités attendues pour le poste."+
        "A ce titre, vos missions principales seront :"+
        
        "Analyser les besoins"+
        "Développement d'applications HTML5/CSS3 avec les Framework ANGULAR et les librairies Material Design.",
        "CDI: 37-45K€","Paris (75)","It")
  ]

  constructor() { }

  getJobPosition(){
    return this.jobPositions;
  }

  addJobPosition(jobPosition : JobPosition){
    console.log(jobPosition);
    this.jobPositions.push(jobPosition);
  }
  editJobPosition(id : number,newJobPosition : JobPosition){
    this.jobPositions[id] = newJobPosition;
  
  }
  
  deleteJobPosition(id : number){
    this.jobPositions.splice(id,1);
  }
  getJobPositionById(index : number){
    return this.jobPositions[index];
  }

}
