import { NgModule } from '@angular/core';
import { CoreComponent } from './core.component';
import { RouterModule, Routes, Router } from '@angular/router';

const routes=[
  {path:'', component: CoreComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class CoreRoutingModule { }
