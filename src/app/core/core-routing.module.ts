import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes=[
  {path:'', redirectTo:'core', pathMatch: 'full'},
  {path:'core', component: CoreComponent}
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
