import { NgModule } from "@angular/core";

import { TicketsRoutingModule } from "./tickets-routing.module";
import { NgbModalModule, NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TicketsComponent } from "./tickets.component";
import { NzFormModule } from "ng-zorro-antd/form";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { VeDaDatComponent } from "./ve-da-dat/ve-da-dat.component";
import { TimVeComponent } from './tim-ve/tim-ve.component';
import { RatingModalComponent } from "src/app/modals/rating-modal/rating-modal.component";
@NgModule({
  imports: [
    TicketsRoutingModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbModule,
    NgZorroAntdModule,
    CommonModule,
  ],
  declarations: [
    RatingModalComponent,
    TicketsComponent,
    VeDaDatComponent,
    TimVeComponent,
  ],
  providers:[
    NgbActiveModal,
  ],
  entryComponents:[
    RatingModalComponent,
  ]
  // exports: [
  //   TicketsComponent,
  //   ChooseCoachComponent,
  //   PaymentComponent,
  //   VeDaDatComponent,
  // ],
})
export class TicketsModule {}
