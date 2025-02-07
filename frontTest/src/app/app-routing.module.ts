import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParserPasswordPalindoneComponent } from './parser-password-palindone/parser-password-palindone.component';
import { ShowFluxComponent } from './show-flux/show-flux.component'

const routes: Routes = [
  {path: '',pathMatch:'full' ,redirectTo: 'start'},
  { path: 'start/:password', component : ParserPasswordPalindoneComponent},
  { path: 'flux', component : ShowFluxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
