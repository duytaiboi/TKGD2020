import { NgModule, forwardRef } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ModalsModule } from './modals/modals.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from "@angular/common/http";

import { ServiceModule } from '../core/service/service.module';
import { BrowserModule } from '@angular/platform-browser';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AlertModule } from 'ngx-alerts';
import { CreateAgencyModalComponent } from './QlDaily/daily/create-agency-modal/create-agency-modal.component';
import { DailyModule } from './QlDaily/daily/daily.module';
import { QuydinhComponent } from './QlDaily/quydinh/quydinh.component';
import { CreateInvoiceModalComponent } from './QlDaily/hoadon/create-invoice-modal/create-invoice-modal.component';
import { MainModule } from './QlDaily/main.module';


export const environment = {
  production: false,
  appName: 'nmcnpm'
};

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
  ],
  imports: [
    ModalsModule,
    HttpClientModule,

    ServiceModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MainModule,

    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000, position: 'right' }),
  ],
  entryComponents: [
    AppComponent, CreateAgencyModalComponent,CreateInvoiceModalComponent
  ],
  providers: [
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
