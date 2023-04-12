import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './home/login-component/login-component.component'
import { StatisticsComponent } from './content/statistics/statistics.component';

const routes: Routes = [
  { path: '', component: LoginComponentComponent},
  { path: 'statistics', component: StatisticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
