import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';
import { Clue1Component } from './clue1/clue1.component';
import { Clue2Component } from './clue2/clue2.component';
import { Clue3Component } from './clue3/clue3.component';
import { Clue4Component } from './clue4/clue4.component';
import { Clue5Component } from './clue5/clue5.component';
import { Clue6Component } from './clue6/clue6.component';
import { Clue7Component } from './clue7/clue7.component';
import { Clue8Component } from './clue8/clue8.component';
import { Clue9Component } from './clue9/clue9.component';
import { EndComponent } from './end/end.component';
import { XmasComponent } from './xmas/xmas2024.component';

const routes: Routes = [
  {path: '', component:  HomeComponent},
  {path: 'intro', component:  IntroComponent},
  {path: 'qXsLp', component:  Clue1Component},
  {path: 'mNvRw', component:  Clue2Component},
  {path: 'hGtKu', component:  Clue3Component},
  {path: 'dFjHq', component:  Clue4Component},
  {path: 'rBzYx', component:  Clue5Component},
  {path: 'uPwQv', component:  Clue6Component},
  {path: 'aZcXb', component:  Clue7Component},
  {path: 'kLmNo', component:  Clue8Component},
  {path: 'eRtYi', component:  Clue9Component},
  {path: 'index', component:  EndComponent},
  {path: 'xmas2024', component:  XmasComponent},
  {path: '**', component:  HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
