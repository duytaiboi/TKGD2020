import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipperManagementRoutingModule } from './hoadon-routing.module';
import { HoaDonComponent } from './hoadon.component';
import { DailyDatashowingComponent } from '../daily/daily-datashowing/daily-datashowing.component';
import { HoaDonDatashowingComponent } from './hoadon-datashowing/hoadon-datashowing.component';
import { CreateInvoiceModalComponent } from './create-invoice-modal/create-invoice-modal.component';
import { CreateBillModalComponent } from './create-bill-modal/create-bill-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-alerts';

@NgModule({
  declarations: [
    HoaDonDatashowingComponent,
    HoaDonComponent,
    CreateInvoiceModalComponent,
    CreateBillModalComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule ,
    ShipperManagementRoutingModule,
    AlertModule.forRoot({ maxMessages: 5, timeout: 2000, position: 'right' }),
  ],
  exports: [
    HoaDonComponent,
    CreateInvoiceModalComponent
  ]
})
export class HoaDonModule { }