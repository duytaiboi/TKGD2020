import { NgModule, forwardRef } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import {
  FormsModule,
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
} from "@angular/forms";
import { CommonModule } from "@angular/common";

import { ModalsModule } from "./modals/modals.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { ServiceModule } from "../core/service/service.module";
import { BrowserModule } from "@angular/platform-browser";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";

import { AlertModule } from "ngx-alerts";
import { NgZorroAntdModule, NZ_I18N, en_US } from "ng-zorro-antd";
import { NzFormModule } from "ng-zorro-antd/form";
export const environment = {
  production: false,
  appName: "nmcnpm",
};

@NgModule({
  declarations: [AppComponent, NavMenuComponent],
  imports: [
    ModalsModule,
    HttpClientModule,
    NgZorroAntdModule,
    ServiceModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    NzFormModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 5000, positionX: "right" }),
  ],
  entryComponents: [
    AppComponent,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],

  bootstrap: [AppComponent],
})
export class AppModule {}
