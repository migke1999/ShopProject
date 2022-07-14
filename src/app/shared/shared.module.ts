import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//New modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import * as  fromComponents from './components';
import { CardUserComponent } from './components/card/card-user/card-user.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [...fromComponents.components, CardUserComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    RouterModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
