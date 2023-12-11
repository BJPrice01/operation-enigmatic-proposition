import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { EndComponent } from './end/end.component';
import { Clue1Component } from './clue1/clue1.component';
import { Clue2Component } from './clue2/clue2.component';
import { Clue3Component } from './clue3/clue3.component';
import { Clue4Component } from './clue4/clue4.component';
import { Clue5Component } from './clue5/clue5.component';
import { Clue6Component } from './clue6/clue6.component';
import { Clue7Component } from './clue7/clue7.component';
import { Clue8Component } from './clue8/clue8.component';
import { Clue9Component } from './clue9/clue9.component';
import { QuestionFormComponent } from './subcomponents/question-form/question-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroComponent,
    EndComponent,
    Clue1Component,
    Clue2Component,
    Clue3Component,
    Clue4Component,
    Clue5Component,
    Clue6Component,
    Clue7Component,
    Clue8Component,
    Clue9Component,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
