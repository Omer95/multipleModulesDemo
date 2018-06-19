import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
//import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule
    //CoreModule
  ],
  exports:[
    RouterModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
