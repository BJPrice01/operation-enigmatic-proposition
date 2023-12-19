import { Component } from '@angular/core';

@Component({
  selector: 'app-clue7',
  templateUrl: './clue7.component.html',
  styleUrl: './clue7.component.css'
})
export class Clue7Component {
  passed: boolean = false  
  constructor() {}

  handleAnswersGiven(passed: boolean) {
    if(passed) {
      this.passed = true
    }
  }
}
