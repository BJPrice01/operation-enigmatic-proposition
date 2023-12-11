import { Component } from '@angular/core';

@Component({
  selector: 'app-clue2',
  templateUrl: './clue2.component.html',
  styleUrl: './clue2.component.css'
})
export class Clue2Component {
  passed: boolean = false  
  constructor() {}

  handleAnswersGiven(passed: boolean) {
    if(passed) {
      this.passed = true
    }
  }
}
