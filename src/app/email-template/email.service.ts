import { Injectable } from '@angular/core';
import { Email } from './email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private emailTemplates : Email[] = [
    new Email(0,"subject 1","body template for manager"),
    new Email(1,"subject 2 ","body template for candidate")
  ]

  constructor() { }

  getEmailTemplateById(id : number){
    return this.emailTemplates[id];
   }

  editTemplate(id : number,emailTemplate : Email){
    this.emailTemplates[id] = emailTemplate;
  
  }
}
