import { Component } from '@angular/core';

@Component({
  selector: 'app-xmas',
  templateUrl: './xmas.component.html',
  styleUrl: './xmas.component.css'
})
export class XmasComponent {
  passed: boolean = false  
  constructor() {}

  handleAnswersGiven(passed: boolean) {
    if(passed) {
      this.passed = true
    }
  }
}