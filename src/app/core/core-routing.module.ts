import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginGuard } from './services/login.guard';
import { DashGuard } from './services/dash.guard';

const routes=[
  {path:'', redirectTo:'core', pathMatch: 'full'},
  {path:'core', canActivate: [DashGuard], component: CoreComponent},
  {path: 'dashboard', canActivate: [LoginGuard], loadChildren: '../dashboard/dashboard.module#DashboardModule'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CoreRoutingModule { }
