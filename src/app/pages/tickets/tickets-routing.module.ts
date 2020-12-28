import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent} from './tickets.component';
import { ChooseCoachComponent} from './choose-coach/choose-coach.component';
import { PaymentComponent} from './payment/payment.component';

const routes: Routes = [
  { path: '', component: TicketsComponent },
  { path: 'choose-coach', component: ChooseCoachComponent },
  { path: 'payment', component: PaymentComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
