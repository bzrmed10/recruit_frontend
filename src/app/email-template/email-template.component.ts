import { Component, OnInit } from '@angular/core';
import { EmailService } from './email.service';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';
import { Email } from './email.model';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.css']
})
export class EmailTemplateComponent implements OnInit {

  title = 'Email Template';
  public Editor = ClassicEditor;
  public editorData = "";

  @ViewChild('emailtype', {static: false}) emailtype: ElementRef;
  @ViewChild('subject', {static: false}) subject: ElementRef; 
  email : Email;

  constructor(private emailService: EmailService) { }
  
  ngOnInit() {

  }
  onChangeTemplate(id : number){
    this.email = this.emailService.getEmailTemplateById(id);
    this.subject.nativeElement.value = this.email.subject;
    this.editorData = this.email.emailBody;
    console.log(this.editorData);
  }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
    this.editorData = data; 
    
}
  onSave(){
 console.log("type "+this.emailtype.nativeElement.value);
 console.log("subject "+this.subject.nativeElement.value);
 console.log(this.editorData);
  }

 
}
