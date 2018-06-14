import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    CoreComponent
  ]
})
export class CoreModule { }
