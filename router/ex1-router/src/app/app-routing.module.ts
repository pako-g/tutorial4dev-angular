import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeperoniComponent, EverythingComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'peperoni',
    pathMatch: 'full'
  },
  {
    path: 'peperoni',
    component: PeperoniComponent
  },
  {
    path: 'everything/:size',
    component: EverythingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
