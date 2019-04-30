import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

import { AppComponent } from './app.component';
import { OneModalComponent } from './one-modal/one-modal.component';
import { TwoModalComponent } from './two-modal/two-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [ NgxSmartModalService ],
  declarations: [ AppComponent, OneModalComponent, TwoModalComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
