import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InitPageComponent, AboutPageComponent, ContactPageComponent } from '../pages';

const routes: Routes = [
  {
    path: 'init',
    component: InitPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: '',
    redirectTo: 'init',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'init',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UpFiveRoutingModule { }
