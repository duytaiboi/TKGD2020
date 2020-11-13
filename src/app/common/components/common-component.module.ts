import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PipeModule } from '../pipes/pipe.module';
import { PaginationComponent } from './pagination/pagination.component';
@NgModule({
    declarations: [
        PaginationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PipeModule
    ],
    exports: [
        PaginationComponent
    ]
})
export class CommonComponentModule { }
