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
import { ScrollComponent } from './scroll/scroll.component';
import { DashComponent } from './dash/dash.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
//import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    NgbModule,
    InfiniteScrollModule
    //CoreModule
  ],
  exports:[
    RouterModule
  ],
  declarations: [DashboardComponent, DetailsComponent, UserFormComponent, ScrollComponent, DashComponent],
  providers: [NgbActiveModal]
})
export class DashboardModule { }
