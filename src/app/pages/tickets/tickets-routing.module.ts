import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TicketsComponent } from "./tickets.component";
import { ChooseCoachComponent } from "./choose-coach/choose-coach.component";
import { PaymentComponent } from "./payment/payment.component";
import { VeDaDatComponent } from "./ve-da-dat/ve-da-dat.component";

const routes: Routes = [
  { path: "", component: TicketsComponent },
  { path: "choose-coach", component: ChooseCoachComponent },
  { path: "payment", component: PaymentComponent },
  { path: "ve-da-dat", component: VeDaDatComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsRoutingModule {}
