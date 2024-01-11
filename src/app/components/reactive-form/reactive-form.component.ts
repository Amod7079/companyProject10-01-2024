import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl(''),//yaha se Defalut value do
    email: new FormControl(''),
    gender: new FormControl(''),
    city: new FormControl(''),
    about: new FormControl('')
  })
  formSubmitted()
  {
   console.log(this.userForm.value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
