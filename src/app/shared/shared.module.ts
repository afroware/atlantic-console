import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { DatePipe } from '../date.pipe';
import { DateDirective } from './date.directive';



@NgModule({
  declarations: [
    DatePipe,
    DateDirective
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DatePipe,
    DateDirective
  ]
})
export class SharedModule { }
