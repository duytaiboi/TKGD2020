import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HoaDonDatashowingComponent } from "./hoadon-datashowing/hoadon-datashowing.component";
import { HoaDonComponent } from "./hoadon.component";


const routes: Routes = [
    {
        path: 'hoadon',
        component: HoaDonComponent,
        children:[
            {
                path:'',
                component:HoaDonDatashowingComponent,
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    entryComponents: [
        HoaDonComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})

export class ShipperManagementRoutingModule { }