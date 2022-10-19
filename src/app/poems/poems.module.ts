import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { PoemsRoutingModule } from './poems-routing.module';
import { PoemsComponent } from './poems/poems.component';



@NgModule({
  declarations: [
    PoemsComponent
  ],
  imports: [
    CommonModule,
    PoemsRoutingModule,
    MatTableModule
  ]
})
export class PoemsModule { }
