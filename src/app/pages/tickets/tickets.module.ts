import { NgModule } from "@angular/core";

import { TicketsRoutingModule } from "./tickets-routing.module";

import { TicketsComponent } from "./tickets.component";
import { ChooseCoachComponent } from "./choose-coach/choose-coach.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CommonModule } from "@angular/common";
import { PaymentComponent } from "./payment/payment.component";
import { BrowserModule } from "@angular/platform-browser";
import { VeDaDatComponent } from "./ve-da-dat/ve-da-dat.component";
@NgModule({
  imports: [
    TicketsRoutingModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    CommonModule,
  ],
  declarations: [
    TicketsComponent,
    ChooseCoachComponent,
    PaymentComponent,
    VeDaDatComponent,
  ],
  // exports: [
  //   TicketsComponent,
  //   ChooseCoachComponent,
  //   PaymentComponent,
  //   VeDaDatComponent,
  // ],
})
export class TicketsModule {}