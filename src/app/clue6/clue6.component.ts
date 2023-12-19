import { Component } from '@angular/core';

@Component({
  selector: 'app-clue6',
  templateUrl: './clue6.component.html',
  styleUrl: './clue6.component.css'
})
export class Clue6Component {
  passed: boolean = false  
  constructor() {}

  handleAnswersGiven(passed: boolean) {
    if(passed) {
      this.passed = true
    }
  }
}
