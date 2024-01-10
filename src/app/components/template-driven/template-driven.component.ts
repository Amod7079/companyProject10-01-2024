import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

cname: string ='';
  formSubmitted(userForm:NgForm)
  {
    alert("Form Submitted")
    console.log(userForm.controls['Email'].value)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
