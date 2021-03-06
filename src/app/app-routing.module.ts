import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { MainComponent } from '../components/main/main.component';
import { ExpansionOverviewExample } from '../components/menu/menu.component';
import { PageNotFoundComponent } from 'src/components/page-not-found/page-not-found.component';
import { AuthGuard } from 'src/guard/auth-guard';
import { RegisterComponent } from 'src/components/register/register.component';
import { MonitoringComponent } from 'src/components/monitoring/monitoring.component';
import { FormComponent } from 'src/components/form/form.component';

const routes: Routes = [
  { path: 'home',  component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'form', component: FormComponent },
  { path: 'reactive-forms', component: FormComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: 'grid', component: PageNotFoundComponent },

  // { path: 'menu', component: ExpansionOverviewExample},
  // { path: 'monitoring', component: MonitoringComponent},
  // { path: 'menu3', component: ExpansionOverviewExample,canActivate:[AuthGuard] },
  // { path: 'menu4', component: ExpansionOverviewExample,canActivate:[AuthGuard] },
  // { path: 'menu5', component: ExpansionOverviewExample,canActivate:[AuthGuard] },
  // { path: 'register', component: RegisterComponent},
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
