import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//New modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import * as  fromComponents from './components';
import { CardUserComponent } from './components/card/card-user/card-user.component';


@NgModule({
  declarations: [...fromComponents.components, CardUserComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
