import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'reporting', loadChildren: () => import('reporting/ReportingModule').then(m => m.ReportingModule) },
  { path: 'ordering', loadChildren: () => import('ordering/OrderingModule').then(m => m.OrderingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
