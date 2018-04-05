import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeperoniComponent } from './app.component';
import { OtherComponent, NestedPastaComponent, NestedCalzoneComponent } from './other.component';

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
    path: 'other',
    component: OtherComponent,
    children: [
      {
        path: '',
        redirectTo: 'pasta',
        pathMatch: 'full'
      },
      {
        path: 'pasta',
        component: NestedPastaComponent
      },
      {
        path: 'calzone',
        component: NestedCalzoneComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
