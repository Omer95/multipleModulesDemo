import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from '../dashboard/user-form/user-form.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    DashboardModule,
    InfiniteScrollModule
  ],
  exports: [
    RouterModule,
    NgbModule
  ],
  declarations: [
    CoreComponent,
    FormComponent,
    ModalBasicComponent
  ],
  entryComponents: [UserFormComponent]
})
export class CoreModule { }
