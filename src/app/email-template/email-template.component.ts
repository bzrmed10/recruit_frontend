import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.css']
})
export class EmailTemplateComponent implements OnInit {

  title = 'Email Template';
  public Editor = ClassicEditor;
  public data2 ="";
  @ViewChild('emailtype', {static: false}) emailtype: ElementRef;
  @ViewChild('subject', {static: false}) subject: ElementRef;
 
  constructor() { }

  ngOnInit() {

    
  }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();
    this.data2 = data; 
    
}
  onSave(){
console.log("type "+this.emailtype.nativeElement.value);
console.log("subject "+this.subject.nativeElement.value);
 console.log(this.data2);
  }

}
