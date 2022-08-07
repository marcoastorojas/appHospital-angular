import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraficaComponent } from './pages/grafica/grafica.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';
const routes: Routes = [
  {
    path: "app",
    pathMatch:"full",
    component: PagesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "grafica", component: GraficaComponent },
      { path: "progress", component: ProgressComponent },
      // { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: "**", component: NopagefoundComponent },
    ]
  },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "error", component: NopagefoundComponent, pathMatch: "full" },

  { path: "**", redirectTo: "error", pathMatch: "full" },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
