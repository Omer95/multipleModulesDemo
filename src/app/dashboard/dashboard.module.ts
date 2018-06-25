import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component'
import { ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form/user-form.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
//import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    NgbModule
    //CoreModule
  ],
  exports:[
    RouterModule
  ],
  entryComponents: [UserFormComponent],
  declarations: [DashboardComponent, DetailsComponent, UserFormComponent],
  providers: [NgbActiveModal]
})
export class DashboardModule { }
