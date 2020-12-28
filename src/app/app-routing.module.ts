import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/welcome" },
  {
    path: "welcome",
    loadChildren: () =>
      import("./pages/welcome/welcome.module").then((m) => m.WelcomeModule),
  },
  {
    path: "about",
    loadChildren: () =>
      import("./pages/about/about.module").then((m) => m.AboutModule),
  },
  {
    path: "tickets",
    loadChildren: () =>
      import("./pages/tickets/tickets.module").then((m) => m.TicketsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
