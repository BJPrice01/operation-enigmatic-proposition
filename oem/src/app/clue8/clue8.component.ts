import { Component } from '@angular/core';

@Component({
  selector: 'app-clue8',
  templateUrl: './clue8.component.html',
  styleUrl: './clue8.component.css'
})
export class Clue8Component {
  passed: boolean = false  
  constructor() {}

  handleAnswersGiven(passed: boolean) {
    if(passed) {
      this.passed = true
    }
  }
}
