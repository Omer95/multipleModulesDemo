import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ScrollComponent } from './scroll/scroll.component';
import { DashComponent } from './dash/dash.component';
import { DndComponent } from './dnd/dnd.component';
//import { CoreComponent } from '../core/core.component';

const routes=[
  {
    path: '', component: DashboardComponent,
    children: [{path: '', redirectTo: 'dash', pathMatch: 'full'},
              {path: 'dash', component: DashComponent},
              {path: 'scroll', component: ScrollComponent},
              {path: 'dnd', component: DndComponent}]
  }

 
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
