import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TicketsComponent } from "./tickets.component";
import { TimVeComponent } from "./tim-ve/tim-ve.component";
import { VeDaDatComponent } from "./ve-da-dat/ve-da-dat.component";

const routes: Routes = [
  { path: "", component: TicketsComponent },
  { path: "ve-da-dat", component: VeDaDatComponent },
  { path: "tim-ve", component: TimVeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsRoutingModule {}
