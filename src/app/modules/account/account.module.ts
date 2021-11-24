import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AccountDetailComponent } from './account-detail/account-detail.component';


@NgModule({
  declarations: [
    AccountComponent,
    AccountDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    AccountComponent,
    AccountRoutingModule,
    AccountDetailComponent,
  ]
})
export class AccountModule { }
