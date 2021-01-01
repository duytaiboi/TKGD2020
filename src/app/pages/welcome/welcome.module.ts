import { NgModule } from "@angular/core";

import { WelcomeRoutingModule } from "./welcome-routing.module";

import { WelcomeComponent } from "./welcome.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CommonModule } from "@angular/common";
import { SignupComponent } from './signup/signup.component';
import { BrowserModule } from "@angular/platform-browser";
@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    CommonModule,
  ],
  declarations: [WelcomeComponent, SignupComponent],
  exports: [WelcomeComponent, SignupComponent],
})
export class WelcomeModule {}
