import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from '../welcome/welcome.component';
import { MonitorComponent } from '../monitor/monitor.component';
import { AuthGuard } from '../../auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    data: {
      breadcrumb: 'Home',
    },
    children: [
      {
        path: '',
        // component: WelcomeComponent,
        redirectTo: '/home/welcome',
        pathMatch: 'full',
      },
      {
        path: 'welcome',
        component: WelcomeComponent,
        data: {
          breadcrumb: 'Welcome',
        },
      },
      {
        path: 'monitor',
        component: MonitorComponent,
        data: {
          breadcrumb: 'Monitor',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
