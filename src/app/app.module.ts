import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { UserFormComponent } from './dashboard/user-form/user-form.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    NgbModule.forRoot(),
    InfiniteScrollModule,
    
  ],
  exports: [NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UserFormComponent]
})
export class AppModule { }
