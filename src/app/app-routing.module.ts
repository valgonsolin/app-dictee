import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DicteeComponent } from './dictee/dictee.component';

const routes: Routes = [
  { path: 'dictee', component: DicteeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
