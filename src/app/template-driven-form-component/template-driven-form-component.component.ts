import { Component, OnInit } from '@angular/core';
import { user } from '../user';

@Component({
  selector: 'app-template-driven-form-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent implements OnInit {
  public userModel = new user ("Marwa","marwahr@gmail","visa",565489,"12/05/2027",12354)
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.userModel);
  }
}
