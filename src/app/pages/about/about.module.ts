import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatVeXeComponent } from '../dat-ve-xe/dat-ve-xe.component';

import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './about.component';


@NgModule({
  imports: [AboutRoutingModule,CommonModule ],
  declarations: [AboutComponent, DatVeXeComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
