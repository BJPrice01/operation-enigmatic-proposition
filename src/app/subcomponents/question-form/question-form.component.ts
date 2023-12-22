import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.css'
})
export class QuestionFormComponent {
  @Input() questionNum: number = 0
  allCorrectAnswers: Array<Array<string>> = 
  [
    ['Meg','Toni'],
    ['Dunkin'],
    ['Nails'],
    ['Maurices'],
    ['Culvers'],
    ['Ulta'],
    ['Home'],
    ['Manteno'],
    ['Brickstone']
  ]
  correctAnswers: Array<string> = []
  isCorrect: Array<boolean> = []
  fakeAnswers: Array<string> = []
  hasSubmitted: boolean = false
  answersForm: FormGroup = new FormGroup({})
  @Output() fullyAnswered: EventEmitter<any> = new EventEmitter

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.correctAnswers = this.allCorrectAnswers[this.questionNum - 1]
    let formAnswers: any = {}
    for(let i = 0; i < this.correctAnswers.length; i++) {
      this.fakeAnswers.push(this.correctAnswers[i])
      this.isCorrect.push(false)
      let key: string = 'answer' + i.toString()
      formAnswers[key] = ""
    }
    for(let i = 0; i < this.fakeAnswers.length; i++) {
      this.fakeAnswers[i] = this.fakeAnswers[i].replace(/./g, "*")
    }
    this.answersForm = this.fb.group(formAnswers)
  }

  onSubmit() {
    console.log("Submitting...")
    this.hasSubmitted = true
    for(let i = 0; i < this.correctAnswers.length; i++) {
      let key: string = 'answer' + i.toString()
      let userAnswer: string = this.answersForm.controls[key].value
      if(userAnswer.trim().toLowerCase() === this.correctAnswers[i].trim().toLowerCase()) {
        this.isCorrect[i] = true
      }
    }
    let allCorrect = true
    for(let i = 0; i < this.isCorrect.length; i++) {
      if(!this.isCorrect[i]){
        allCorrect = false
      }
    }
    console.log(this.isCorrect)
    this.fullyAnswered.emit(allCorrect);
  }


}
