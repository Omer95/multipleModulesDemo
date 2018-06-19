import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
//import { CoreComponent } from '../core/core.component';

const routes=[
  {path: '', component: DashboardComponent}
 
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class DashboardRoutingModule { }
