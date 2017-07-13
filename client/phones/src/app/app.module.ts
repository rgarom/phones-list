import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { PhoneListContainerComponent } from './home/phone-list-container/phone-list-container.component';
import { PhoneDetailComponent } from './home/phone-detail/phone-detail.component';
import { phonesReducer } from './reducers/phones.reducer';
import { PhoneService } from './services/phone.service';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneListContainerComponent,
    PhoneDetailComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.provideStore({ phones: phonesReducer })
  ],
  providers: [PhoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
