import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ObservablesComponent} from './observables/observables.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

const routes: Routes = [
  { path: 'observables', component: ObservablesComponent},
  { path: 'dialog', component: MyDialogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
