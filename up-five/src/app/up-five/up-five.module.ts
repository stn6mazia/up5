import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpFiveComponent } from './up-five.component';
import { InitPageComponent, AboutPageComponent, ContactPageComponent } from './pages';
import { HeaderComponent } from './components/header/header.component';
import { UpFiveRoutingModule } from './up-five-routing/up-five-routing.module';

@NgModule({
  declarations: [
    UpFiveComponent,
    InitPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    UpFiveRoutingModule
  ],
  exports: [
    UpFiveComponent
  ]
})
export class UpFiveModule { }
