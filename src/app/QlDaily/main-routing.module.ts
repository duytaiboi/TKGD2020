import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainComponent } from "./main.component";
import { HoaDonComponent } from "./hoadon/hoadon.component";
import { DailyComponent } from "./daily/daily.component";
const routes: Routes = [
    {
        path: 'home',
        component: MainComponent,
        children:[
            {
                path:'daily/:id',
                component:DailyComponent,
            },
            {
                path:'hoadon',
                component:HoaDonComponent,
            },
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    entryComponents: [
        DailyComponent,
    ],
    exports: [
        RouterModule
    ],
    providers: [
    ]
})

export class DailyRoutingModule { }