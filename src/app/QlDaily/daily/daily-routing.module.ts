import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DailyComponent } from "./daily.component";
import { DailyDatashowingComponent } from "./daily-datashowing/daily-datashowing.component";

const routes: Routes = [
    {
        path: 'daily',
        component: DailyComponent,
        children:[
            {
                path:'',
                component:DailyDatashowingComponent,
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

export class DailyBillRoutingModule { }