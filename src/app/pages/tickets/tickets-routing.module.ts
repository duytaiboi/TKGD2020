import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent} from './tickets.component';
import { ChooseCoachComponent} from './choose-coach/choose-coach.component';

const routes: Routes = [
  { path: '', component: TicketsComponent },
  { path: 'choose-coach', component: ChooseCoachComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsRoutingModule { }
