import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name :string = 'William';
  job :string = 'Programmer';
  age :number = 18;
  hobbies:Array<string>  = ['Correr', 'Jogar', 'Estudar'];
car =  {
  name:'Tesla',
  year:'2020'
};

  constructor () {}




}
