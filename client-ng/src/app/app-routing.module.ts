import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPage } from './dashboard/pages/404/notFound.page';
import { DashboardPage } from './../app/dashboard/pages/dashboard/dashboard.page';


const routes: Routes = [
  { path: 'dashboard', component: DashboardPage, pathMatch: 'full' },
  { path: '**', component: NotFoundPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
