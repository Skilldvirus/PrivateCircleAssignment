import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table'
import { CustomerService } from './customer.service';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      TableModule,
      HttpClientModule,
      CalendarModule,
		DropdownModule,
		ButtonModule,
    InputTextModule,
    ],
    bootstrap:  [ AppComponent ],
    providers: [CustomerService]
})
export class AppModule { }
