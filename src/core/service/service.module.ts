import { NgModule } from "@angular/core";
import { AgencyService } from "./agency.service";
import { AlertMessageService } from "./alert-message.service";
import { BillService } from "./bill.service";
import { RegulationService } from "./regulation.service";
import { SharedService } from "./shared.service";


@NgModule({
    declarations: [
    ],
    providers: [
        BillService,
        RegulationService,
        AgencyService,
        AlertMessageService,
        SharedService,
    ]
})
export class ServiceModule { }