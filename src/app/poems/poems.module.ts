import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { PoemsRoutingModule } from './poems-routing.module';
import { PoemsComponent } from './poems/poems.component';

@NgModule({
  declarations: [
    PoemsComponent
  ],
  imports: [
    CommonModule,
    PoemsRoutingModule,
    AppMaterialModule
  ]
})
export class PoemsModule { }
