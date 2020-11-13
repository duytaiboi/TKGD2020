import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyRoutingModule } from './main-routing.module';
import { DailyModule } from './daily/daily.module';
import { ServiceModule } from 'src/core/service/service.module';
import { MainComponent } from './main.component';
import { HoaDonModule } from './hoadon/hoadon.module';
import { QuydinhComponent } from './quydinh/quydinh.component';

@NgModule({
  declarations: [
    MainComponent,
    QuydinhComponent,
  ],
  imports: [
    CommonModule,
    ServiceModule,
    HoaDonModule,
    DailyModule,
    DailyRoutingModule,
  ],
  exports: [
    MainComponent,
  ]
})
export class MainModule { }