import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyComponent } from './daily.component';
import { DailyBillRoutingModule } from './daily-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateAgencyModalComponent } from './create-agency-modal/create-agency-modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-alerts';
import { DailyDatashowingComponent } from './daily-datashowing/daily-datashowing.component';

@NgModule({
  declarations: [
    DailyComponent,
    DailyDatashowingComponent,
    CreateAgencyModalComponent,
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    FormsModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 2000, position: 'right' }),
    DailyBillRoutingModule,
  ],
  exports: [
    DailyComponent,
    CreateAgencyModalComponent,
  ]
})
export class DailyModule { }